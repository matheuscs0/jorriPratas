import React from 'react';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';
import products from '../components/data/products';
import ProductCard from '../components/ProductCard';
import NavFreteGratis from '../components/navFreteGratis';
import NavBar from '../components/NavBar';
import './css/ProductPage.css'
import LoginModal from '../components/LoginModal'
import { useState } from 'react'
import CarrinhoDeCompras from '../components/CarrinhoDeCompras';

const Search = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query');

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

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  const handleOpenSidebar = () => {
    if (cartItems.length > 0) {
      setShowSidebar(true);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const handleRemoveFromCart = (itemId) => {
    const newItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newItems);
    Cookies.set('cartItems', JSON.stringify(newItems), { expires: 7 });
  }
  return (
    <div className='gridProduct'>
      <NavFreteGratis/>
      <NavBar onLoginClick={handleClick}
        onOpenSidebar={handleOpenSidebar}
        cartItems={cartItems}
        setCartItems={setCartItems}
         />
      {showLoginModal && <LoginModal onClose={handleCloseModal} />}
      {showSidebar && cartItems.length > 0 && (
        <div className="sidebar">
          <CarrinhoDeCompras
            cartItems={cartItems}
            onRemove={handleRemoveFromCart}
            onClose={handleCloseSidebar}
          />
        </div>
      )}
      <div className='productContainer'>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
      </div>
    </div>
  );
};

export default Search;














