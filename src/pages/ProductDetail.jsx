import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../components/data/products';
import DetailsCard from '../components/DetailsCard';
import DropdownMenu from '../components/DropdownMenu';
import NavFreteGratis from '../components/navFreteGratis';
import NavBar from '../components/NavBar';
import LoginModal from '../components/LoginModal';
import CarrinhoDeCompras from '../components/CarrinhoDeCompras.jsx';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);


  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    handleOpenSidebar(); 
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
      <NavBar onLoginClick={handleClick} onOpenSidebar={handleOpenSidebar} />
      {showLoginModal && <LoginModal onClose={handleCloseModal} />}
      <DropdownMenu />
      <DetailsCard product={product} onAddToCart={addToCart} />
      {showSidebar && cartItems.length > 0 && (
        <div className="sidebar">
          <CarrinhoDeCompras cartItems={cartItems} setCartItems={setCartItems} onClose={handleCloseSidebar}/>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;









