import { zodResolver } from "@hookform/resolvers/zod";
import { Bank, CreditCard, CurrencyDollar, MapPinLine } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";

import ToggleGroup from "@/components/ToggleGroup";
import colors from "@/theme/colors";

import { fields } from "./constants";
import { DeliveryFormDataSchema } from "./schema";
import { DeliveryFormData, FieldProps } from "./types";

import {
  Box,
  Card,
  CardTitle,
  Column,
  Container,
  Error,
  Grid,
  Input,
  Section,
  SectionTitle,
  Wrapper,
} from "./styles";

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

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const createInputs = (fields: FieldProps[]) => {
    return fields.map((field) => (
      <Box $spanColumns={field.spanColumns} key={field.name}>
        <Input
          type="text"
          placeholder={field.placeholder}
          {...register(field.name)}
        />
        {errors[field.name] && <Error>{errors[field.name]?.message}</Error>}
      </Box>
    ));
  };

  const onSubmit = (data: DeliveryFormData) => {
    console.log(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          <Section>
            <SectionTitle>
              <h1>Complete your order</h1>
            </SectionTitle>
            <Card>
              <CardTitle>
                <MapPinLine size={22} color={colors.secondary[200]} />
                <Column>
                  <h3>Address details</h3>
                  <h4>Please, confirm the delivery address</h4>
                </Column>
              </CardTitle>
              <Grid>{createInputs(fields)}</Grid>
            </Card>
          </Section>
          <Section>
            <Card>
              <CardTitle>
                <CurrencyDollar size={22} color={colors.primary[100]} />
                <Column>
                  <h3>Address details</h3>
                  <h4>Please, confirm the delivery address</h4>
                </Column>
              </CardTitle>
              <Controller
                name="paymentMethod"
                control={methods.control}
                render={({ field }) => (
                  <ToggleGroup.Root
                    {...field}
                    onValueChange={field.onChange}
                    type="single"
                  >
                    <ToggleGroup.Item value="credit">
                      <CreditCard size={16} color={colors.primary[100]} />
                      Credit Card
                    </ToggleGroup.Item>
                    <ToggleGroup.Item value="debit">
                      <Bank size={16} color={colors.primary[100]} />
                      Debit Card
                    </ToggleGroup.Item>
                    <ToggleGroup.Item value="cash">
                      <CurrencyDollar size={16} color={colors.primary[100]} />
                      Cash
                    </ToggleGroup.Item>
                  </ToggleGroup.Root>
                )}
              />
            </Card>
          </Section>
        </Wrapper>
        <Section>
          <SectionTitle>
            <h2>Selected items</h2>
            <Card></Card>
            <button type="submit">Confirm order</button>
          </SectionTitle>
        </Section>
      </form>
    </Container>
  );
}

export default Checkout;
