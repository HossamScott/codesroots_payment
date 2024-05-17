import { TestBed } from '@angular/core/testing';

import { CodesrootsPaymentsService } from './codesroots-payments.service';

describe('CodesrootsPaymentsService', () => {
  let service: CodesrootsPaymentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodesrootsPaymentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
