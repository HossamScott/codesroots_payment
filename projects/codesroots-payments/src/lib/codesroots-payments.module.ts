import { NgModule } from '@angular/core';
import { CodesrootsPaymentsComponent } from './codesroots-payments.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// import { PaymentlistService } from './payment-list/paymentlist.service';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { DropdownModule } from 'primeng/dropdown'; 
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    CodesrootsPaymentsComponent,
    PaymentListComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    TableModule,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule

  ],
  providers: [
    // PaymentlistService
  ],
  exports: [
    CodesrootsPaymentsComponent
  ]
})
export class CodesrootsPaymentsModule { }
