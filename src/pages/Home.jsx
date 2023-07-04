import React, { useState, useEffect } from 'react';
import ColarSwiper from '../components/ColarSwiper';
import DropdownMenu from '../components/DropdownMenu';
import NavBar from '../components/NavBar';
import FooterDetails from '../components/footerDetails';
import NavFreteGratis from '../components/navFreteGratis';
import LoginModal from '../components/LoginModal';
import Cookies from 'js-cookie';
import CarrinhoDeCompras from '../components/CarrinhoDeCompras';

const Home = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

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

  const handleClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const handleOpenSidebar = () => {
    if (cartItems.length > 0) {
      setShowSidebar(true);
    }
  };
  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };
  const handleRemoveFromCart = (itemId) => {
    const newItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newItems);
    Cookies.set('cartItems', JSON.stringify(newItems), { expires: 7 });
  }
  console.log(cartItems)

  return (
    <div className="container">
      <NavFreteGratis />
      <NavBar 
        onLoginClick={handleClick}
        onOpenSidebar={handleOpenSidebar}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      {showLoginModal && <LoginModal onClose={handleCloseModal} />}
      <DropdownMenu />
      <ColarSwiper />
      <FooterDetails />
      {showSidebar && cartItems.length > 0 && (
        <div className="sidebar">
          <CarrinhoDeCompras
            cartItems={cartItems}
            onRemove={handleRemoveFromCart}
            onClose={handleCloseSidebar}
          />
        </div>
      )}
    </div>
  );
};

export default Home;






