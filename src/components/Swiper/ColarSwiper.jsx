import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import './Swiper.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ColarSwiper = () => {
  const [slidesPerView, setSlidePerView] = useState(3)

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      console.log('Window Width:', windowWidth);
  
      switch (true) {
        case windowWidth < 500:
          setSlidePerView(1);
          break;
       
        default:
          setSlidePerView(4); 
        break;
      }
    }
  
    handleResize(); // Chamada inicial para definir o número de slides de acordo com a largura atual da janela
  
    window.addEventListener("resize", handleResize); // Adiciona um ouvinte de redimensionamento para atualizar o número de slides quando a janela for redimensionada
  
    return () => {
      window.removeEventListener("resize", handleResize); // Remove o ouvinte de redimensionamento ao desmontar o componente
    };
  }, []);
  
  const products = [
    {
      id: "7397",
      poster_path: "../public/imgs/PontoDeLuz/poster_pontoLuz.jpg",
      foto_about1: "../public/imgs/PontoDeLuz/colar_pontoLuz.jpg",
      title: "COLAR DE PRATA PONTO DE LUZ",
      disponivel: "sim",
      price: "59.99",
      sizes: [
        { size: "Padrão", price: "59.99" },
      ],
    },
    {
      "id": "P300440",
      "poster_path": "../public/imgs/Coração/poster_pulseiraCoracao.jpg",
      "foto_about1": "../public/imgs/Coração/pulseira_coracao.jpeg",
      "title": "PULSEIRA DE PRATA ELO CORAÇÃO",
      "disponivel": "sim",
      "price": "54.90",
      "sizes": [
        { "size": "Padrão", "price": "54.90" }
      ]
    },
    {
      id: "T30031",
      poster_path: "../public/imgs/Singapura/poster_singapura.jpg",
      foto_about1: "../public/imgs/Singapura/tornozeleira_singapura.png",
      title: "TORNOZELEIRA DE PRATA SINGAPURA",
      disponivel: "sim",
      price: "77.90",
      sizes: [
        { size: "Padrão", price: " 77.90" },
      ],
    },
    {
      "id": "4906",
      "poster_path": "../public/imgs/Aneis/anel7.jpeg",
      "title": "ANEL PRATA SOLITÁRIO",
      "disponivel": "sim",
      "price": "119.99",
      "sizes": [
        { "size": "12", "price": " 119.99" },
        { "size": "15", "price": " 119.99" }
      ]
    },
    {
      id: "4086",
      poster_path: "../public/imgs/Brincos/brincoPontoLuz.jpeg", 
      title: "BRINCO PRATA PONTO DE LUZ",
      disponivel: "sim",
      price: "49.99",
      sizes: [
        { size: "Unico", price: "49.99" },
      ],
    },
  ];
  return (
    <div className='rowContainer'>
      
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={0}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='swiper'
        >
        {products.map((product) => (
          <SwiperSlide key={product.id} className='swiperSlide'
          width={290}
          >
            <div className='cardProduct'>
            <Link to={`/product/${product.id}`}>
              <img src={product.poster_path} alt={product.title} />
              <h2>{product.title}</h2>
              <p>R$ {product.price}</p>
              <button>VER DETALHES</button>
            </Link>
            </div>
          </SwiperSlide>
         ))}
      </Swiper>
    </div>
  );
};

export default ColarSwiper