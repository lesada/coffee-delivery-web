import { PropsWithChildren, createContext, useContext, useState } from "react";

import { TCoffee } from "@/types/coffee";

export type CartItem = {
  quantity: number;
} & TCoffee;

type CartContextData = {
  cartItems: CartItem[];
  updateCartItemQuantity: (item: TCoffee, quantity: number) => void;
  itemsQuantity: number;
  getCurrentItemQuantity: (item: TCoffee) => number;
};

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getCurrentItemQuantity = (item: TCoffee) => {
    const currentItem = cartItems.find(
      (cartItem) => cartItem.name === item.name
    );
    return currentItem?.quantity || 0;
  };

  const updateCartItemQuantity = (item: TCoffee, quantity: number) => {
    setCartItems((prevCartItems) => {
      const newCartItems = [...prevCartItems];
      const itemIndex = newCartItems.findIndex(
        (cartItem) => cartItem.name === item.name
      );

      if (itemIndex >= 0) newCartItems[itemIndex].quantity = quantity;
      else {
        newCartItems.push({ ...item, quantity });
      }

      return newCartItems.filter((item) => item.quantity > 0);
    });
  };

  const itemsQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        updateCartItemQuantity,
        itemsQuantity,
        getCurrentItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => useContext(CartContext);

export default useCart;
