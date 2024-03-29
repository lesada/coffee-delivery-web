import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Assets from "@/assets";
import useCart from "@/contexts/cart";
import { RoutesPaths } from "@/routes/paths";
import colors from "@/theme/colors";

import { Actions, Cart, Container, Location, QuantityItems } from "./styles";

function Header() {
  const { itemsQuantity } = useCart();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (itemsQuantity === 0) {
      e.preventDefault();
      toast.warn("Your cart is empty", {
        autoClose: 2000,
        pauseOnHover: false,
      });
    }
  }

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

        <Link
          to={RoutesPaths.CHECKOUT}
          aria-label="Go to checkout page"
          onClick={(e) => handleClick(e)}
        >
          <Cart>
            <ShoppingCart
              weight="fill"
              size={22}
              color={colors.secondary[200]}
            />
            {itemsQuantity > 0 && (
              <QuantityItems>
                <span>{itemsQuantity}</span>
              </QuantityItems>
            )}
          </Cart>
        </Link>
      </Actions>
    </Container>
  );
}

export default Header;
