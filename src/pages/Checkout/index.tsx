import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import useOrder from "@/contexts/order";
import { RoutesPaths } from "@/routes/paths";

import CompleteOrder from "./components/CompleteOrder";
import SelectedCoffees from "./components/SelectedCoffees";
import { DeliveryFormDataSchema } from "./schema";
import { DeliveryFormData } from "./types";

import { Container } from "./styles";

function Checkout() {
  const { setOrder } = useOrder();
  const navigate = useNavigate();
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
    const object = {
      address: data.address,
      city: data.city,
      state: data.state,
      paymentMethod: data.paymentMethod,
    };
    setOrder(object);
    navigate(RoutesPaths.SUCCESS);
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
