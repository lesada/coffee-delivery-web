import { PropsWithChildren } from "react";

import { Container } from "./styles";

type CircleIconProps = {
  color: string;
} & PropsWithChildren;

function CircleIcon({ color, children }: CircleIconProps) {
  return <Container $color={color}>{children}</Container>;
}

export default CircleIcon;
