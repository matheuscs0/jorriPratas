import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../components/data/products';
import DetailsCard from '../components/DetailsCard';
import DropdownMenu from '../components/DropdownMenu';
import NavFreteGratis from '../components/navFreteGratis';
import NavBar from '../components/NavBar';
import LoginModal from '../components/LoginModal';
import CarrinhoDeCompras from '../components/CarrinhoDeCompras.jsx';
import Cookies from 'js-cookie';

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
      <DropdownMenu />
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
    </div>
  );
};

export default ProductDetail;




















