import { TestBed } from '@angular/core/testing';

import { PaymentlistService } from './paymentlist.service';

describe('PaymentlistService', () => {
  let service: PaymentlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
