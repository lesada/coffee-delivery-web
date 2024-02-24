import { useState } from "react";

import { Minus, Plus } from "phosphor-react";

import colors from "@/theme/colors";

import { Container, Input } from "./styles";

function QuantityInput() {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <button onClick={() => setValue((prev) => Math.max(prev - 1, 1))}>
        <Minus size={14} color={colors.primary[100]} />
      </button>
      <Input
        type="number"
        value={value}
        onChange={(e) =>
          setValue(
            Math.round(
              Number(e.target.value) > 99 ? 99 : Number(e.target.value)
            )
          )
        }
        max={99}
      />
      <button onClick={() => setValue((prev) => prev + 1)}>
        <Plus size={14} color={colors.primary[100]} />
      </button>
    </Container>
  );
}

export default QuantityInput;
