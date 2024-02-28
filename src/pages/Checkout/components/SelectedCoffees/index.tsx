import { Fragment } from "react";

import { Trash } from "phosphor-react";

import QuantityInput from "@/components/QuantityInput";
import useCart from "@/contexts/cart";
import colors from "@/theme/colors";
import { formatToCurrency } from "@/utils/formatToCurrency";
import getCoffeeImage from "@/utils/getCoffeeImage";

import { Section, SectionTitle } from "../../styles";
import {
  CartItem,
  CartItemImage,
  CartItemName,
  CartItemPrice,
  CartItems,
  Column,
  ConfirmButton,
  Container,
  Line,
  RemoveButton,
  Row,
} from "./styles";

function SelectedCoffees() {
  const { cartItems, removeItem } = useCart();
  return (
    <Section>
      <Container>
        <SectionTitle>
          <h2>Selected items</h2>
        </SectionTitle>
        <CartItems>
          {cartItems.map((item) => (
            <Fragment key={item.name}>
              <CartItem>
                <CartItemImage>{getCoffeeImage(item.imageAlias)}</CartItemImage>
                <Column>
                  <CartItemName>{item.name}</CartItemName>
                  <Row>
                    <QuantityInput item={item} />
                    <RemoveButton
                      type="button"
                      onClick={() => removeItem(item)}
                    >
                      <Trash size={16} color={colors.primary[100]} />
                      Remove
                    </RemoveButton>
                  </Row>
                </Column>
                <CartItemPrice>$ {formatToCurrency(item.price)}</CartItemPrice>
              </CartItem>
              <Line />
            </Fragment>
          ))}
          <ConfirmButton type="submit">Confirm order</ConfirmButton>
        </CartItems>
      </Container>
    </Section>
  );
}

export default SelectedCoffees;
