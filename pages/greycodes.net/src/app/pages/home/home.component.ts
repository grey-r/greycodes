import { Component, ElementRef } from '@angular/core';
import { TypewriterComponent } from '../../core/components/typewriter/typewriter.component';
import { interval, map, Observable, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FooterComponent } from '../../core/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TypewriterComponent, AsyncPipe, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public readonly whatIDo = [
    'codes .NET',
    'designs systems',
    'sets standards',
    'defines infrastructure',
    'builds pipelines',
    'automates deployments',
    'containerizes apps',
    'orchestrates eventing',
    'creates microservices',
    'monitors production',
    'manages releases',
    'mentors others',
  ];

  public readonly codingYears$ = this.getYearsSince(new Date(2008, 5, 23));
  public readonly photographyYears$ = this.getYearsSince(
    new Date(2016, 12, 25)
  );

  public scrollTo(element: HTMLElement) {
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }

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
