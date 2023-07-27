import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';

const ImgHover = () => {
  return (
    <div className='containerImg'>
      <div className="imgHover">
        <Link to='/products/colares'>
          <img src="../public/imgs/Coração/colar_coracao40cm.jpeg" alt="" />
        </Link>
      </div>
      <div className="pImage">
        <h2>Compre Colares a partir de <span>R$ 59,99</span></h2> 
        <p>Incremente seu visual com colares deslumbrantes a partir de R$ 59,99!</p>
        <Link to='/products/colares'>
          Compre agora
        </Link>
      </div>
    </div>
  );
}

export default ImgHover;


