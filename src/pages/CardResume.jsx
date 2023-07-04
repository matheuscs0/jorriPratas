import React from 'react';
import TabelaCompras from '../components/TabelaCompras';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import NavBar from '../components/NavBar'
import NavFreteGratis from '../components/navFreteGratis'
import './css/FinalizarCompra.css'
import Resume from '../components/Resume';

const CardResume = () => {
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
    <div className='FinishContainer'>
      <NavFreteGratis/>
      <NavBar/>
      <div className='CardFinish'>
        <div className="titleFinish"><h2>Minhas Compras</h2></div>
        <div className="finishDown">
         <div className="tableContainer">
          {cartItems.map((item) => (
            <TabelaCompras key={item} item={item}/>
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


