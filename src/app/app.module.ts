import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodesrootsPaymentsModule } from 'codesroots-payments';
import { DropdownModule } from 'primeng/dropdown'; // Import DropdownModule
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { PaymentListComponent } from './payment-list/payment-list.component'; 

@NgModule({
  declarations: [
    AppComponent,
  //  PaymentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CodesrootsPaymentsModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule, // or NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
