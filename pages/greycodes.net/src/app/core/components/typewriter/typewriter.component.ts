import { AsyncPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import {
  concat,
  concatAll,
  concatMap,
  defer,
  delay,
  distinctUntilChanged,
  from,
  interval,
  map,
  mergeWith,
  of,
  repeat,
  shareReplay,
  switchMap,
  take,
} from 'rxjs';
import { shuffle } from '../../utilities/utilities';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './typewriter.component.html',
  styleUrl: './typewriter.component.scss',
})
export class TypewriterComponent {
  public readonly items = input.required<string[]>();
  public readonly shuffle = input<boolean>(true);
  public readonly pauseDelay = input<number | [number, number]>(250);
  public readonly showDelay = input<number | [number, number]>(5000);
  public readonly typeDelay = input<number | [number, number]>([60, 90]);
  public readonly backDelay = input<number | [number, number]>([35, 10]);

  private readonly pausedDelay = 100;

  public readonly text$ = toObservable(this.items).pipe(
    switchMap((items) =>
      defer(() => from(this.shuffle() ? shuffle(items) : items)).pipe(
        concatMap((text) => this.getTypedStream(text)),
        repeat()
      )
    ),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  public readonly paused$ = this.text$.pipe(
    switchMap(() =>
      of(false).pipe(mergeWith(of(true).pipe(delay(this.pausedDelay))))
    ),
    distinctUntilChanged(),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  private getTypedStream(text: string) {
    const steps = this.getTypedSteps(text);
    const reverseSteps = [...steps].reverse();
    reverseSteps.shift(); // skip the first step (which we've already typed)

    const stepStreams = steps.map((innerText) =>
      this.getDelayedStream(innerText, this.typeDelay())
    );
    const show$ = this.getDelayedStream(
      steps[steps.length - 1],
      this.showDelay()
    );
    const reverseStepStreams = reverseSteps.map((innerText) =>
      this.getDelayedStream(innerText, this.backDelay())
    );
    const pause$ = this.getDelayedStream('', this.pauseDelay());

    const allStreams = [...stepStreams, show$, ...reverseStepStreams, pause$];
    return from(allStreams).pipe(concatAll());
  }

  private getDelayedStream<T>(
    item: T,
    ...delay: Parameters<TypewriterComponent['getDelay']>
  ) {
    return interval(this.getDelay(...delay)).pipe(
      take(1),
      map(() => item)
    );
  }

  private getTypedSteps(text: string) {
    return [...text].reduce(
      (prev, cur) => [...prev, prev[prev.length - 1] + cur],
      ['']
    );
  }

  private getDelay(delay: number | [number, number]) {
    if (typeof delay === 'number') {
      return delay;
    }
    return delay[0] + Math.random() * (delay[1] - delay[0]);
  }
}
