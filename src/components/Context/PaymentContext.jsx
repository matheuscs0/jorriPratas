import { createContext, useContext, useState } from 'react';

const PaymentContext = createContext();

export const usePaymentContext = () => useContext(PaymentContext);

export const PaymentProvider = ({ children }) => {
  const [paymentInfo, setPaymentInfo] = useState(null);

  return (
    <PaymentContext.Provider value={{ paymentInfo, setPaymentInfo }}>
      {children}
    </PaymentContext.Provider>
  );
};

