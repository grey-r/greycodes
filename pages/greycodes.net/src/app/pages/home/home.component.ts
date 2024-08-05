import { Component, ComponentRef, ElementRef } from '@angular/core';
import { TypewriterComponent } from '../../core/components/typewriter/typewriter.component';
import { interval, map, Observable, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FooterComponent } from '../../core/components/footer/footer.component';
import { SkillsGridComponent } from './skills-grid/skills-grid.component';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TypewriterComponent,
    AsyncPipe,
    FooterComponent,
    SkillsGridComponent,
    AboutMeComponent,
  ],
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
    'mentors others',
  ];

  public scrollTo(element: HTMLElement) {
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }
}
