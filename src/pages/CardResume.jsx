import React from 'react';
import TabelaCompras from '../components/TabelaCompras/TabelaCompras';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Nav from '../components/Nav/Nav';
import NavFreteGratis from '../components/navFreteGratis/navFreteGratis';
import './css/resumeCompra.css';
import Resume from '../components/Resume/Resume';
import useAuth from '../components/Hooks/useAuth';

const CardResume = () => {
  const { user, setUser } = useAuth();
  console.log(user)

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

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div className='FinishContainer'>
      <NavFreteGratis/>
      <Nav/>
      <div className='CardFinish'>
        <div className="titleFinish"><h2>Minhas Compras</h2></div>
        <div className="finishDown">
         <div className="tableContainer">
          {cartItems.map((item) => (
            <TabelaCompras key={item.id} item={item} handleRemoveItem={handleRemoveItem}/>
          ))}
         </div>
          <div className='resume'>
              <Resume cartItems={cartItems}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardResume;




