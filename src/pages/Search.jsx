import React from 'react';
import { useLocation } from 'react-router-dom';
import products from '../components/data/products';
import ProductCard from '../components/ProductCard';
import NavFreteGratis from '../components/navFreteGratis';
import NavBar from '../components/NavBar';
import './css/ProductPage.css'
import LoginModal from '../components/LoginModal'
import { useState } from 'react'

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query');

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
  return (
    <div className='gridProduct'>
      <NavFreteGratis/>
      <NavBar onLoginClick={handleClick} />
      {showLoginModal && <LoginModal onClose={handleCloseModal} />}
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














