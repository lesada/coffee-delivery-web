import { zodResolver } from "@hookform/resolvers/zod";
import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useForm } from "react-hook-form";

import colors from "@/theme/colors";

import { fields } from "./constants";
import { AddressFormDataSchema } from "./schema";
import { AddressFormData, FieldProps } from "./types";

import {
  Box,
  Card,
  CardTitle,
  Column,
  Container,
  Form,
  Input,
  Section,
  SectionTitle,
  Wrapper,
} from "./styles";

function Checkout() {
  const methods = useForm<AddressFormData>({
    defaultValues: {
      postalCode: "",
      address: "",
      apartment: "",
      district: "",
      city: "",
      state: "",
    },
    resolver: zodResolver(AddressFormDataSchema),
    mode: "onTouched",
  });

  const { handleSubmit } = methods;

  const createInputs = (fields: FieldProps[]) => {
    return fields.map((field) => (
      <Box $spanColumns={field.spanColumns} key={field.name}>
        <Input type="text" placeholder={field.placeholder} name={field.name} />
      </Box>
    ));
  };

  return (
    <Container>
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
            <Form onSubmit={handleSubmit(() => {})}>
              {createInputs(fields)}
            </Form>
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
          </Card>
        </Section>
      </Wrapper>
      <Section>
        <SectionTitle>
          <h2>Selected items</h2>
          <Card></Card>
        </SectionTitle>
      </Section>
    </Container>
  );
}

export default Checkout;
