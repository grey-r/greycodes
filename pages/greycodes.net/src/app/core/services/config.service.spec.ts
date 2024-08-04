import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideExperimentalZonelessChangeDetection()],
    });
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
