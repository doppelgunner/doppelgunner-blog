import { TestBed, inject } from '@angular/core/testing';

import { CheckerService } from './checker.service';

describe('CheckerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckerService]
    });
  });

  it('should be created', inject([CheckerService], (service: CheckerService) => {
    expect(service).toBeTruthy();
  }));
});
