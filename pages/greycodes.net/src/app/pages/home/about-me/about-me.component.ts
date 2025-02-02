import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, interval, startWith, map } from 'rxjs';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  public readonly codingYears$ = this.getYearsSince(new Date(2008, 5, 23));
  public readonly photographyYears$ = this.getYearsSince(
    new Date(2016, 12, 25)
  );

  private getYearsSince(date: Date): Observable<number>;
  private getYearsSince(year: number): Observable<number>;
  private getYearsSince(input: number | Date) {
    const date = typeof input === 'number' ? new Date(input) : input;
    return interval(60000).pipe(
      startWith(0),
      map(() => this.getYearsDiff(date, new Date()))
    );
  }

  private getYearsDiff(from: Date, to: Date): number {
    let yearDiff = to.getFullYear() - from.getFullYear();
    const monthDiff = to.getMonth() - from.getMonth();
    if (monthDiff < 0) {
      yearDiff--;
    } else if (monthDiff === 0 && to.getDay() - from.getDay() < 0) {
      yearDiff--;
    }
    return yearDiff;
  }
}
