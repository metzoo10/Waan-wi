import { TestBed } from '@angular/core/testing';

import { ThieboudienneService } from './thieboudienne.service';

describe('ThieboudienneService', () => {
  let service: ThieboudienneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThieboudienneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
