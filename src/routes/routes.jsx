import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail';
import Search from '../pages/Search';
import ProductPage from '../pages/ProductPage';
import App from '../App.jsx'
<<<<<<< HEAD
import CardResume from '../pages/CardResume';

const RoutesConfig = (cartItems) => {
=======

const RoutesConfig = () => {
>>>>>>> 2bdeccafeb30dbe987a99b8fd65ad41445db20af
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="/search-results" element={<Search />} />
        <Route path="/products/:type" element={<ProductPage />} />
<<<<<<< HEAD
        <Route path="/finalizar-compra" element={<CardResume cartItems={cartItems}/>}></Route>
=======
>>>>>>> 2bdeccafeb30dbe987a99b8fd65ad41445db20af
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
