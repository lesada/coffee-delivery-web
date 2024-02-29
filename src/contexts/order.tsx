import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type TOrder = {
  address: string;
  city: string;
  state: string;
  paymentMethod: string;
};

type OrderContextData = {
  order: TOrder | null;
  setOrder: Dispatch<SetStateAction<TOrder | null>>;
};

export const OrderContext = createContext({} as OrderContextData);

export function OrderProvider({ children }: PropsWithChildren) {
  const [order, setOrder] = useState<TOrder | null>(null);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
const useOrder = () => useContext(OrderContext);
export default useOrder;
