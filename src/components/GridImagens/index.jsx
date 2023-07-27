import React from 'react';
import './styles.css'

const images = [
  {id: "1",
  image: '../public/imgs/Singapura/colar_singapura.jpg'
  },
  {id: "2",
  image: '../public/imgs/Coração/pulseira_coracao.jpeg'
  },
  {id: "3",
  image: '../public/imgs/ColeçãoPraia/colar_concha.jpg'
  },
  {id: "4",
  image: '../public/imgs/Bolinha/colar_bolinha2.jpg'
  },
]

const GridImagens = () => {
  return (
    <div className='ContainerGridImagens'>
      <div className="GridImage">
        {images.map((item) => (
          <img src={item.image} alt="" />
        ))}
      </div>
    </div>
  );
}

export default GridImagens;
