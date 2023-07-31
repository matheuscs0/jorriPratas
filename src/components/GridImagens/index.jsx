import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


const images = [
  {id: "1",
  image: '../public/imgs/Singapura/colar_singapura.jpg',
  title: "Colares",
  link: "colares"
  },
  {id: "2",
  image: '../public/imgs/Coração/pulseira_coracao.jpeg',
  title: "Pulseiras",
  link: "pulseiras"
  },
  {id: "3",
  image: '../public/imgs/ColeçãoPraia/colar_concha.jpg',
  title: "Tornozeleiras",
  link: "tornozeleiras"
  },
  {id: "4",
  image: '../public/imgs/Bolinha/colar_bolinha2.jpg',
  title: "Anéis",
  link: "aneis"
  },
  {id: "4",
  image: '../public/imgs/Bolinha/colar_bolinha2.jpg',
  title: "Brincos",
  link: "brincos"
  },
];

const GridImagens = () => {
  return (
    <div className='ContainerGridImagens'>
      <div className="GridImage">
        {images.map((item) => (
          <Link to={`/products/${item.link}`}> 
            <div key={item.id} className='Image'>
              <img src={item.image} alt=""/>
              <p>{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GridImagens;
