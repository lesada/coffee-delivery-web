import { PropsWithChildren, createContext, useContext, useState } from "react";

import { TCoffee } from "@/types/coffee";

type CartContextData = {
  items: TCoffee[] | [];
  cartQuantity: number;
};

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<TCoffee[]>([]);

  const cartQuantity = items.length;

  return (
    <CartContext.Provider value={{ items, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => useContext(CartContext);

export default useCart;
