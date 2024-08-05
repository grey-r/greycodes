import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsGridComponent } from './skills-grid.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('SkillsGridComponent', () => {
  let component: SkillsGridComponent;
  let fixture: ComponentFixture<SkillsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsGridComponent],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
