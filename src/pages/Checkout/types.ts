export type AddressFormData = {
  postalCode: string;
  address: string;
  apartment: string;
  district: string;
  city: string;
  state: string;
};

export type FieldProps = {
  name: string;
  placeholder: string;
  spanColumns: number;
};
