import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

import Assets from "@/assets";
import useCart from "@/contexts/cart";
import { RoutesPaths } from "@/routes/paths";
import colors from "@/theme/colors";

import { Actions, Cart, Container, Location, QuantityItems } from "./styles";

function Header() {
  const { cartQuantity } = useCart();
  return (
    <Container>
      <Link to={RoutesPaths.HOME}>
        <Assets.Logo aria-label="Coffee Delivery Logo" />
      </Link>

      <Actions>
        <Location>
          <MapPin weight="fill" size={22} color={colors.primary[100]} />
          San Francisco, CA
        </Location>

        <Link to={RoutesPaths.CHECKOUT} aria-label="Go to checkout page">
          <Cart>
            <ShoppingCart
              weight="fill"
              size={22}
              color={colors.secondary[200]}
            />
            <QuantityItems>
              <span>{cartQuantity}</span>
            </QuantityItems>
          </Cart>
        </Link>
      </Actions>
    </Container>
  );
}

export default Header;
