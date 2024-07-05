// payment-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PaymentlistService } from './paymentlist.service';
import { Payment } from './payment.model';
import { trigger, state, style, animate, transition } from '@angular/animations';
// import { PaymentDetailsDialogComponent } from './payment-details-dialog/payment-details-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  animations: [
    trigger('exampleAnimation', [
      state('start', style({
        opacity: 1
      })),
      transition('* => start', [
        animate('0.5s')
      ])
    ])
  ]
})
export class PaymentListComponent implements OnInit {

  payments: Payment[] = [];

  paymentTypes: any[] = [];
  selectedPaymentType: any;

  visible: boolean = false;
  form!: FormGroup;

  constructor(
    private paymentService: PaymentlistService,
    private fb: FormBuilder
  ) {}

  onSelectPaymentType(paymentType: any): void {
    console.log(paymentType.id);
    this.selectedPaymentType = paymentType;
    this.form.get('PaymentTypes')?.setValue(paymentType.id); // Set the ID of the selected payment type
    this.visible = true; // Open the dialog
  }

  ngOnInit(): void {
    this.paymentService.getPayments().subscribe(response => {
      this.payments = response.data.vendorgatewaysmodels;
    });

    this.paymentService.getPaymentTypes().subscribe(response => {
      this.paymentTypes = response.data.paymenttypes;
    });

    this.form = this.fb.group({
      M_ID: ['', Validators.required],
      API_KEY: ['', Validators.required],
      PaymentTypes: [this.selectedPaymentType ? this.selectedPaymentType.id : '', Validators.required]
    });
    
  }


 
  onSubmit(): void {
    // Handle form submission
    if (this.form.valid) {
      // Perform form submission logic here
      console.log('Form submitted successfully!');
      // Close the dialog
      this.visible = false;
    }
  }


}
