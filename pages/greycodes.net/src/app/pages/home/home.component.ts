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
    'builds pipelines',
    'designs systems',
    'defines infrastructure',
    'creates microservices',
    'sets standards',
    'practices SOLID',
    'observes event streams',
    'containerizes apps',
    'automates deployments',
  ];
}
