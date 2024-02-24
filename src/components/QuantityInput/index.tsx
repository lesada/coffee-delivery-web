import { useState } from "react";

import { Minus, Plus } from "phosphor-react";

import useCart from "@/contexts/cart";
import colors from "@/theme/colors";
import { TCoffee } from "@/types/coffee";

import { Container, Input } from "./styles";

type QuantityInputProps = {
  item: TCoffee;
};

function QuantityInput({ item }: QuantityInputProps) {
  const { getCurrentItemQuantity, updateCartItemQuantity } = useCart();

  const [itemQuantity, setItemQuantity] = useState(
    getCurrentItemQuantity(item)
  );

  const onPlusClick = () => {
    setItemQuantity(itemQuantity + 1);
    updateCartItemQuantity(item, itemQuantity + 1);
  };

  const onMinusClick = () => {
    if (itemQuantity === 0) return;
    setItemQuantity(itemQuantity - 1);
    updateCartItemQuantity(item, itemQuantity - 1);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setItemQuantity(0);
      updateCartItemQuantity(item, 0);
      return;
    }

    if (Number(e.target.value) > 99) return 99;

    const value = Number(e.target.value) || 0;
    setItemQuantity(value);
    updateCartItemQuantity(item, value);
  };

  return (
    <Container>
      <button onClick={onMinusClick} disabled={itemQuantity === 0}>
        <Minus size={14} color={colors.primary[100]} />
      </button>
      <Input type="number" value={itemQuantity} onChange={onChange} max={99} />
      <button onClick={onPlusClick} disabled={itemQuantity === 99}>
        <Plus size={14} color={colors.primary[100]} />
      </button>
    </Container>
  );
}

export default QuantityInput;
