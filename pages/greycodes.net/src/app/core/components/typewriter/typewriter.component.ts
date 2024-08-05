import { AsyncPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import {
  combineLatest,
  concatAll,
  concatMap,
  defer,
  distinctUntilChanged,
  from,
  mergeWith,
  of,
  repeat,
  shareReplay,
  switchMap,
} from 'rxjs';
import { shuffle } from '../../utilities/utilities';
import { atInterval, Delay } from '../../utilities/rxjs';

type ShuffleMethod = 'all' | 'keep-first' | 'none';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './typewriter.component.html',
  styleUrl: './typewriter.component.scss',
})
export class TypewriterComponent {
  // Inputs
  public readonly items = input.required<string[]>();
  public readonly shuffle = input<ShuffleMethod>('all');
  public readonly pauseDelay = input<Delay>(250);
  public readonly showDelay = input<Delay>(5000);
  public readonly typeDelay = input<Delay>([60, 90]);
  public readonly backDelay = input<Delay>([35, 10]);
  public readonly blinkDelay = input<Delay>(100);

  // Template variables
  public readonly text$ = combineLatest([
    toObservable(this.items),
    toObservable(this.shuffle),
  ]).pipe(
    switchMap(([rawItems, shuffleMethod]) =>
      defer(() => {
        const items = this.shufflePredicate[shuffleMethod](rawItems);
        return from(items);
      }).pipe(
        concatMap((text) => this.getTypedStream(text, this.delays)),
        repeat()
      )
    ),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  public readonly paused$ = this.text$.pipe(
    switchMap(() =>
      of(false).pipe(mergeWith(atInterval(true, this.delays.blink$)))
    ),
    distinctUntilChanged(),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  // Private functions
  private readonly shufflePredicate: Record<
    ShuffleMethod,
    <T>(items: T[]) => T[]
  > = {
    all: shuffle,
    'keep-first': (arr) => {
      if (arr.length <= 1) {
        return arr;
      }

      const shuffledItems = [...arr];
      shuffledItems.splice(0, 1);
      return [arr[0], ...shuffle(shuffledItems)];
    },
    none: (arr) => arr,
  };

  private readonly delays = {
    pause$: toObservable(this.pauseDelay),
    show$: toObservable(this.showDelay),
    type$: toObservable(this.typeDelay),
    back$: toObservable(this.backDelay),
    blink$: toObservable(this.blinkDelay),
  };

  private getTypedStream(text: string, delays: TypewriterComponent['delays']) {
    const steps = this.getPrefixProgression(text);
    const reverseSteps = [...steps].reverse();
    reverseSteps.shift(); // skip the first step (which we've already typed)

    const stepStreams = steps.map((innerText) =>
      atInterval(innerText, delays.type$)
    );
    const show$ = atInterval(steps[steps.length - 1], delays.show$);
    const reverseStepStreams = reverseSteps.map((innerText) =>
      atInterval(innerText, delays.back$)
    );
    const pause$ = atInterval('', delays.pause$);

    const allStreams = [...stepStreams, show$, ...reverseStepStreams, pause$];
    return from(allStreams).pipe(concatAll());
  }

  private getPrefixProgression(text: string) {
    return [...text].reduce(
      (prev, cur) => [...prev, prev[prev.length - 1] + cur],
      ['']
    );
  }
}
