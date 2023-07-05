import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail';
import Search from '../pages/Search';
import ProductPage from '../pages/ProductPage';
import App from '../App.jsx'

import CardResume from '../pages/CardResume';

const RoutesConfig = ({cartItems}) => {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="/search-results" element={<Search />} />
        <Route path="/products/:type" element={<ProductPage />} />
        <Route path="/resume-compra" element={<CardResume cartItems={cartItems}/>}></Route>
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
