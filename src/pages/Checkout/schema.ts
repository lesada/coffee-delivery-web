import * as Zod from "zod";

export const DeliveryFormDataSchema = Zod.object({
  postalCode: Zod.string()
    .min(5, "Postal code must have 5 characters")
    .max(11, "Postal code must have 11 characters"),
  address: Zod.string().min(1, "Address is required"),
  apartment: Zod.string().optional(),
  district: Zod.string().min(1, "District is required"),
  city: Zod.string().min(1, "City is required"),
  state: Zod.string().min(1, "State is required"),

  paymentMethod: Zod.string().min(1, "Payment method is required"),
});
