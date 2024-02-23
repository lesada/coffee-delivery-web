import { ShoppingCartSimple } from "phosphor-react";

import coffeeList from "@/constants/coffeeList";
import colors from "@/theme/colors";
import { formatToCurrency } from "@/utils/formatToCurrency";
import getCoffeeImage from "@/utils/getCoffeeImage";

import {
  CartIcon,
  Container,
  ImageContainer,
  Item,
  ItemDescription,
  ItemFooter,
  ItemTags,
  ItemTitle,
  List,
  Price,
  Tag,
  Title,
} from "./styles";

function Menu() {
  return (
    <Container>
      <Title>Our Coffee Menu</Title>
      <List>
        {coffeeList.map((item) => (
          <Item key={item.name}>
            <ImageContainer>{getCoffeeImage(item)}</ImageContainer>
            <ItemTags>
              {item.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </ItemTags>
            <ItemTitle>{item.name}</ItemTitle>
            <ItemDescription>{item.description}</ItemDescription>
            <ItemFooter>
              <Price>
                <span>$</span> {formatToCurrency(item.price)}
              </Price>
              <CartIcon>
                <ShoppingCartSimple
                  size={24}
                  weight="fill"
                  color={colors.neutral[0]}
                />
              </CartIcon>
            </ItemFooter>
          </Item>
        ))}
      </List>
    </Container>
  );
}

export default Menu;
