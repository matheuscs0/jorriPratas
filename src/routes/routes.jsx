import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail';
import Search from '../pages/Search';
import ProductPage from '../pages/ProductPage';
import App from '../App.jsx'
import CardResume from '../pages/CardResume';
import FinalizarCompra from '../pages/FinalizarCompra';
import Profile from '../pages/Profile';
import useAuth from '../components/Hooks/useAuth';
import Orders from '../pages/UltimosPedidos';

const RoutesConfig = ({cartItems}) => {
  const { user } = useAuth();
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="/search-results" element={<Search />} />
        <Route path="/products/:type" element={<ProductPage />} />
        <Route path="/resume-compra" element={<CardResume cartItems={cartItems}/>}></Route>
        <Route path='/finalizar-compra' element={<FinalizarCompra/>}></Route>
        <Route
          path="/profile"
          element={
            <Profile />
          } // Use "element" para renderizar o componente protegido
          authenticated={user !== null}
        />
      </Route>
      <Route path='last-orders' element={<Orders/>}/>
    </Routes>
  );
};

export default RoutesConfig;




