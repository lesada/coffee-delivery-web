import { PropsWithChildren } from "react";

import { ToggleGroupSingleProps } from "@radix-ui/react-toggle-group";

import { Group, Item } from "./styles";

type ToggleGroupItemProps = {
  value: string;
} & PropsWithChildren;

function ToggleGroupItem({ value, children }: ToggleGroupItemProps) {
  return <Item value={value}>{children}</Item>;
}

function ToggleGroupRoot({ children, ...rest }: ToggleGroupSingleProps) {
  return (
    <Group aria-label="Choose one of the following options" {...rest}>
      {children}
    </Group>
  );
}

const ToggleGroup = {
  Root: ToggleGroupRoot,
  Item: ToggleGroupItem,
};

export default ToggleGroup;
