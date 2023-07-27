import React, { useState, useEffect } from 'react';
import ColarSwiper from '../components/Swiper/ColarSwiper';
import DropdownMenu from '../components/DropdownMenu/DropdownMenu';
import NavBar from '../components/NavBar/NavBar';
import FooterDetails from '../components/footerDetails/footerDetails';
import NavFreteGratis from '../components/navFreteGratis/navFreteGratis';
import LoginModal from '../components/Login/LoginModal';
import Cookies from 'js-cookie';
import CarrinhoDeCompras from '../components/CarrinhoDeCompras/CarrinhoDeCompras';
import './css/home.css'
import SearchInput from '../components/SearchInput/SearchInput';
import ImgHover from '../components/ImgHover';
import FooterPayment from '../components/FooterPaymentMethods';
import GridImagens from '../components/GridImagens';

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
  

  return (
    <div className="container">
      <div className='navContainer'>
      <NavFreteGratis />
      <NavBar 
        onLoginClick={handleClick}
        onOpenSidebar={handleOpenSidebar}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      </div>
      <div className="searchInput">
        <SearchInput />
      </div>
      {showLoginModal && <LoginModal onClose={handleCloseModal} />}
      <div className='dropdownMenu'>
        <DropdownMenu />
      </div>
      <ImgHover/>
      <ColarSwiper />
      <FooterDetails />
      <GridImagens/>
      {showSidebar && cartItems.length > 0 && (
        <div className="sidebar">
          <CarrinhoDeCompras
            cartItems={cartItems}
            onRemove={handleRemoveFromCart}
            onClose={handleCloseSidebar}
          />
        </div>
      )}
      <FooterPayment/>
    </div>
  );
};

export default Home;






