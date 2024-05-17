import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentlistService {
  constructor(private http: HttpClient) {}

  getPayments(): Observable<any> {
    const url = 'https://imake-app.com:5111/graphql';
    const query = `
      {
        vendorgatewaysmodels {
          id
          name:name_ar
          Vendor_Code
          Vendor_Id
          PaymentTypes {
            id
            name:name_ar
            end_point
            webhook_callback
          }
        }
      }
    `;

    return this.http.post<any>(url, { query });
  }

  getPaymentTypes(): Observable<any> {
    const url = 'https://imake-app.com:5111/graphql';
    const query = `
      {
        paymenttypes {
          id
          name:name_ar
        }
      }
    `;

    return this.http.post<any>(url, { query });
  }
}
