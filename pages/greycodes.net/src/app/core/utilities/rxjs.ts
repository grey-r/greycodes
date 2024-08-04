import {
  Observable,
  interval,
  of,
  take,
  map,
  isObservable,
  defer,
  switchMap,
} from 'rxjs';
import { randomFloat } from './utilities';

export function at<T>(item: T, time: number): Observable<T>;
export function at<T>(item: T, date: Date): Observable<T>;
export function at<T>(item: T, time: number | Date): Observable<T> {
  const currentMs = new Date().getTime();
  const timeMs = typeof time === 'number' ? time : time.getTime();
  const intervalTime = timeMs - currentMs;
  const emit$ = intervalTime > 0 ? interval(intervalTime) : of(0);
  return emit$.pipe(
    take(1),
    map(() => item)
  );
}

export type Delay = number | [number, number];
export function atInterval<T>(
  item: T,
  delayValues$: Observable<Delay>
): Observable<T>;
export function atInterval<T>(item: T, delay: Delay): Observable<T>;
export function atInterval<T>(item: T, delay: Delay | Observable<Delay>) {
  const delayValues$: Observable<Delay> = isObservable(delay)
    ? delay
    : of(delay);

  return defer(() => {
    const subscriptionTime = new Date().getTime();
    return delayValues$.pipe(
      switchMap((delayValue) =>
        at(item, subscriptionTime + renderDelay(delayValue))
      ),
      take(1)
    );
  });
}

function renderDelay(delay: Delay) {
  if (typeof delay === 'number') {
    return delay;
  }
  return randomFloat(delay[0], delay[1]);
}
