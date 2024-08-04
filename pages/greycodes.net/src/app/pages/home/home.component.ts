import { Component } from '@angular/core';
import { TypewriterComponent } from '../../core/components/typewriter/typewriter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TypewriterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public readonly whatIDo = [
    'codes .NET',
    'designs architectures',
    'creates microservices',
    'builds pipelines',
    'sets technical standards',
    'mentors fellow developers',
    'leads code reviews',
    'implements security protocols',
    'optimizes performance',
    'collaborates with stakeholders',
    'writes technical documentation',
    'integrates third-party services',
  ];
}
