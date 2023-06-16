import React from 'react';
import { useLocation } from 'react-router-dom';
import products from '../components/data/products';
import ProductCard from '../components/ProductCard';
import NavFreteGratis from '../components/navFreteGratis';
import NavBar from '../components/NavBar';
import './ProductPage.css'

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='gridProduct'>
      <NavFreteGratis/>
      <NavBar/>
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














