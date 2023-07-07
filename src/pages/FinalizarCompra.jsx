import Nav from "../components/Nav";
import NavFreteGratis from "../components/navFreteGratis";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const FinalizarCompra = () => {
  const [cartItems, setCartItems] = useState([]);

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
      <NavFreteGratis/>
      <Nav/>
    </div>
  );
}

export default FinalizarCompra;
