// payment.model.ts

export interface Payment {
  id: string;
  name: string;
  Vendor_Code: string;
  Vendor_Id: string;
  PaymentTypes: PaymentType;
}

export interface PaymentType {
  id: string;
  name: string;
  end_point: string;
  webhook_callback: string;
}
