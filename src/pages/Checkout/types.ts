export type DeliveryFormData = {
  postalCode: string;
  address: string;
  apartment: string;
  district: string;
  city: string;
  state: string;
  paymentMethod?: string;
};

export type FieldProps = {
  name: keyof DeliveryFormData;
  placeholder: string;
  spanColumns: number;
};
