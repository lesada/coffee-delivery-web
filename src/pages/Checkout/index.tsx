import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import CompleteOrder from "./components/CompleteOrder";
import { DeliveryFormDataSchema } from "./schema";
import { DeliveryFormData } from "./types";

import { Container, Section, SectionTitle } from "./styles";

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
          <Section>
            <SectionTitle>
              <h2>Selected items</h2>

              <button type="submit">Confirm order</button>
            </SectionTitle>
          </Section>
        </FormProvider>
      </form>
    </Container>
  );
}

export default Checkout;
