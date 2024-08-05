import { Component } from '@angular/core';
import { FooterComponent } from '../../core/components/footer/footer.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
})
export class PrivacyComponent {}
