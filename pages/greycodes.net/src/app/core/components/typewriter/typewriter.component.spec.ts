import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypewriterComponent } from './typewriter.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('TypewriterComponent', () => {
  let component: TypewriterComponent;
  let fixture: ComponentFixture<TypewriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypewriterComponent],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(TypewriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
