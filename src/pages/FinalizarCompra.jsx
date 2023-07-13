import React, { useState, useEffect } from 'react';
import Nav from "../components/Nav";
import NavFreteGratis from "../components/navFreteGratis";
import Cookies from "js-cookie";
import ResumeFinish from "../components/ResumeFinish";
import CepSearch from '../components/consultaCep';
import Payment from "../components/Payment";
import './css/FinalizarCompra.css';

const FinalizarCompra = ({onSubmit, number, complemento}) => {
  const [cartItems, setCartItems] = useState([]);
  const [addressInfo, setAddressInfo] = useState()

  const handleAddressChange = (data) => {
    setAddressInfo((prevState) => ({
      ...prevState,
      cep: data.cep,
      address: data.address,
      city: data.city,
      state: data.state,
      number: data.number,
      complemento: data.complemento,
    }));
  };
  

  useEffect(() => {
    const storedCartItems = Cookies.get('cartItems');
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      if (parsedCartItems.length > 0) {
        setCartItems(parsedCartItems);
      }
    }
  }, []);

  useEffect(() => {
    Cookies.set('cartItems', JSON.stringify(cartItems), { expires: 7 });
  }, [cartItems]);

  return (
    <div>
      <NavFreteGratis />
      <Nav />
      <div className="containerFinish">
        <CepSearch onSubmit={handleAddressChange} onSearch={handleAddressChange} />
        <Payment
  cep={addressInfo && addressInfo.cep}
  address={addressInfo && addressInfo.address}
  city={addressInfo && addressInfo.city}
  state={addressInfo && addressInfo.state}
  number={addressInfo && addressInfo.number} 
  complemento={addressInfo && addressInfo.complemento}
  onSubmit={onSubmit}
/>
        <ResumeFinish cartItems={cartItems} />
      </div>
    </div>
  );
};

export default FinalizarCompra;




