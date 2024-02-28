import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import CompleteOrder from "./components/CompleteOrder";
import SelectedCoffees from "./components/SelectedCoffees";
import { DeliveryFormDataSchema } from "./schema";
import { DeliveryFormData } from "./types";

import { Container } from "./styles";

function Checkout() {
  const methods = useForm<DeliveryFormData>({
    defaultValues: {
      postalCode: "",
      address: "",
      apartment: "",
      district: "",
      city: "",
      state: "",
      paymentMethod: "",
    },
    resolver: zodResolver(DeliveryFormDataSchema),
    mode: "onTouched",
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: DeliveryFormData) => {
    console.log(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <CompleteOrder />
          <SelectedCoffees />
        </FormProvider>
      </form>
    </Container>
  );
}

export default Checkout;
