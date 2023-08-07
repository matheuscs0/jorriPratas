import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RoutesConfig from './routes/routes';
import './index.css';
import AuthContextProvider from './components/Context/AuthContext';
import { PaymentProvider } from './components/Context/PaymentContext';


import { register } from 'swiper/element/bundle';
register();


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <PaymentProvider>
    <BrowserRouter>
      <RoutesConfig />
    </BrowserRouter>
    </PaymentProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

