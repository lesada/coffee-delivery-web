import { Clock, Coffee, Package, ShoppingCart } from "phosphor-react";

import Assets from "@/assets";
import CircleIcon from "@/components/CircleIcon";
import colors from "@/theme/colors";

import {
  Background,
  Container,
  Image,
  Information,
  List,
  ListItem,
  Subtitle,
  Title,
} from "./styles";

function Banner() {
  return (
    <Container>
      <Information>
        <Title>Find the perfect coffee for anytime.</Title>
        <Subtitle>
          With Coffee Delivery you can find the best coffee shops in your area,
          receive your order in minutes and enjoy your day.
        </Subtitle>
        <List>
          <ListItem>
            <CircleIcon color={colors.secondary[200]}>
              <ShoppingCart weight="fill" color={colors.neutral[0]} />
            </CircleIcon>
            Simple and easy to order
          </ListItem>
          <ListItem>
            <CircleIcon color={colors.neutral[700]}>
              <Package weight="fill" color={colors.neutral[0]} />
            </CircleIcon>
            Package tracking
          </ListItem>
          <ListItem>
            <CircleIcon color={colors.secondary[100]}>
              <Clock weight="fill" color={colors.neutral[0]} />
            </CircleIcon>
            Fast and reliable delivery
          </ListItem>
          <ListItem>
            <CircleIcon color={colors.primary[100]}>
              <Coffee weight="fill" color={colors.neutral[0]} />
            </CircleIcon>
            Great variety of coffee
          </ListItem>
        </List>
      </Information>
      <Image>
        <img src={Assets.Banner} alt="" />
      </Image>
      <Background>
        <Assets.BannerBackground />
      </Background>
    </Container>
  );
}

export default Banner;
