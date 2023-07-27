import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';
import { HiShoppingBag } from 'react-icons/hi';
import './NavBar.css'
import SearchInput from '../SearchInput/SearchInput';
import CarrinhoDeCompras from '../CarrinhoDeCompras/CarrinhoDeCompras';
import '../CarrinhoDeCompras/CarrinhoDeCompras.css'
import { useEffect } from 'react';
import Header from '../Header/index';


const NavBar = ({ onLoginClick, onOpenSidebar }) => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleSearch = (searchTerm) => {
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  const handleClick = () => {
    setShowSidebar(true);
    onOpenSidebar(); 
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <nav className="navBar">
      <div className='Header1'>
       <Header/>
      </div>
      <Link to="/">
        <div className="logo">
          <img src="../public/imgs/Logo/logo_jorri.png" alt="" />
        </div>
      </Link>
      <div className="inputSearch">
        <SearchInput onSearch={handleSearch} />
      </div>
      <div className="svgs">
        <div className="LoginSvg">
          <VscAccount onClick={onLoginClick}  />
        </div>  
        <HiShoppingBag onClick={handleClick} alt="Carrinho"/> 
      </div>
      {showSidebar && (
        <div className="sidebar">
          <CarrinhoDeCompras cartItems={cartItems} setCartItems={setCartItems} onClose={handleCloseSidebar}/>
        </div>
      )}
    </nav>
  );
};

export default NavBar;







