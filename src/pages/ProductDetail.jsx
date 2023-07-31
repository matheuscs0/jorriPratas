import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../components/data/products';
import DetailsCard from '../components/DetailsCard/DetailsCard';
import DropdownMenu from '../components/DropdownMenu/DropdownMenu';
import NavFreteGratis from '../components/navFreteGratis/navFreteGratis';
import NavBar from '../components/NavBar/NavBar';
import LoginModal from '../components/Login/LoginModal';
import CarrinhoDeCompras from '../components/CarrinhoDeCompras/CarrinhoDeCompras';
import Cookies from 'js-cookie';
import FooterPayment from '../components/FooterPaymentMethods';
import Footer from '../components/Footer';
import GridImagens from '../components/GridImagens';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
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

  const addToCart = (item) => {
    const newItems = [...cartItems, item];
    setCartItems(newItems);
    Cookies.set('cartItems', JSON.stringify(newItems), { expires: 7 });
  };

  const handleRemoveFromCart = (itemId) => {
    const newItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newItems);
    Cookies.set('cartItems', JSON.stringify(newItems), { expires: 7 });
  };

  const handleClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  const handleOpenSidebar = () => {
    if (cartItems.length > 0) {
      setShowSidebar(true);
    }
  };

  return (
    <div className="DetailContainer">
      <NavFreteGratis />
      <NavBar
        onLoginClick={handleClick}
        onOpenSidebar={handleOpenSidebar}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      {showLoginModal && <LoginModal onClose={handleCloseModal} />}
      <div>
       <GridImagens/>
      </div>
     
      <DetailsCard product={product} onAddToCart={addToCart} />
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
      <Footer/>
    </div>
  );
};

export default ProductDetail;




















