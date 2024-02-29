import { useEffect } from "react";

import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import Assets from "@/assets";
import CircleIcon from "@/components/CircleIcon";
import { PaymentMethods } from "@/constants/paymentMethodsEnum";
import useOrder from "@/contexts/order";
import { RoutesPaths } from "@/routes/paths";
import colors from "@/theme/colors";

import {
  Column,
  Container,
  Info,
  Row,
  Subtitle,
  Title,
  Wrapper,
} from "./styles";

function Success() {
  const { order } = useOrder();

  const navigate = useNavigate();

  useEffect(() => {
    if (!order) return navigate(RoutesPaths.HOME);
  }, [order, navigate]);

  if (!order) return null;

  return (
    <Container>
      <Wrapper>
        <Column>
          <Title>Your order has been placed successfully!</Title>
          <Subtitle>
            Now you can sit back, relax, and wait for your order to arrive.
          </Subtitle>
          <Info>
            <Row>
              <CircleIcon color={colors.primary[100]}>
                <MapPin size={16} color={colors.neutral[0]} weight="fill" />
              </CircleIcon>
              <p>
                Deliver to: <b>{order.address},</b> <br /> {order.city},{" "}
                {order.state}
              </p>
            </Row>
            <Row>
              <CircleIcon color={colors.secondary[100]}>
                <Clock size={16} color={colors.neutral[0]} weight="fill" />
              </CircleIcon>
              <p>
                Estimated delivery time:
                <br />
                <b>30-45 minutes</b>
              </p>
            </Row>
            <Row>
              <CircleIcon color={colors.secondary[200]}>
                <CurrencyDollar
                  size={16}
                  color={colors.neutral[0]}
                  weight="fill"
                />
              </CircleIcon>
              <p>
                Payment method:
                <b>
                  {
                    PaymentMethods[
                      order.paymentMethod as keyof typeof PaymentMethods
                    ]
                  }
                </b>
              </p>
            </Row>
          </Info>
        </Column>
        <Assets.Success />
      </Wrapper>
    </Container>
  );
}

export default Success;
