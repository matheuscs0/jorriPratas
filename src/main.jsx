import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Search from './pages/Search.jsx'
import ProductPage from './pages/ProductPage.jsx'

import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='product/:id' element={<ProductDetail/>}/>
        <Route path='/search-results' element={<Search/>}></Route>
        <Route path='/products/:type' element={<ProductPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
