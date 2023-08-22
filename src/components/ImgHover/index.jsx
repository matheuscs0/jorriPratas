import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';

const ImgHover = () => {
  return (
    <div className='containerImg'>
      <div className="imgHover">
        <Link to='/products/colares'>
          <img src="../public/imgs/Signos/colar_escorpiaoVerso.jpeg" alt="" />
        </Link>
      </div>
      <div className="pImage">
        <h2>Coleção signos chegou, apartir de <span>R$ 99,99</span></h2> 
        <p>Incremente seu visual com colares deslumbrantes a partir de R$ 99,99!</p>
        <Link to='/products/signos'>
          Compre agora
        </Link>
      </div>
    </div>
  );
}

export default ImgHover;


