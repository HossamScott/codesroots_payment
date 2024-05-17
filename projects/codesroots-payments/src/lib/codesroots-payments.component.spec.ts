import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesrootsPaymentsComponent } from './codesroots-payments.component';

describe('CodesrootsPaymentsComponent', () => {
  let component: CodesrootsPaymentsComponent;
  let fixture: ComponentFixture<CodesrootsPaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodesrootsPaymentsComponent]
    });
    fixture = TestBed.createComponent(CodesrootsPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
