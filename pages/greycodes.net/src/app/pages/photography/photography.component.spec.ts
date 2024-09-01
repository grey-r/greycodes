import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyComponent } from './photography.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('PhotographyComponent', () => {
  let component: PhotographyComponent;
  let fixture: ComponentFixture<PhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotographyComponent],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
