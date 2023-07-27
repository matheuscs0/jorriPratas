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
      id: "5659",
      poster_path: "../public/imgs/Brincos/brincoCoracao.jpeg",
      title: "BRINCO PRATA CORAÇÃO",
      disponivel: "sim",
      price: "39.99",
      sizes: [
        { size: "Unico", price: "39.99" },
      ],
    },
    {
      id: "5908",
      poster_path: "../public/imgs/Brincos/brincoFlor.jpeg",
      title: "BRINCO PRATA FLOR",
      disponivel: "sim",
      price: "39.99",
      sizes: [
        { size: "Unico", price: "39.99" },
      ],
    },
    {
      id: "6839",
      poster_path: "../public/imgs/Brincos/brincoCobra.jpeg",
      title: "BRINCO PRATA COBRA",
      disponivel: "sim",
      price: "39.99",
      sizes: [
        { size: "Unico", price: "39.99" },
      ],
    },
    {
      id: "6815",
      poster_path: "../public/imgs/Brincos/brincoTrevo.jpeg",
      title: "BRINCO PRATA TREVO",
      disponivel: "sim",
      price: "39.99",
      sizes: [
        { size: "Unico", price: "39.99" },
      ],
    },
    {
      id: "5656",
      poster_path: "../public/imgs/Brincos/brincoConcha.jpeg",
      title: "BRINCO PRATA CONCHA",
      disponivel: "sim",
      price: "39.99",
      sizes: [
        { size: "Unico", price: "39.99" },
      ],
    },
    {
      id: "4069",
      poster_path: '../public/imgs/Brincos/brincoMeiaLua.jpeg',
      title: "BRINCO PRATA MEIA LUA",
      disponivel: "sim",
      price: "39.99",
      sizes: [
        { size: "Unico", price: "39.99" },
      ],
    },
    {
      id: "2034",
      poster_path: "../public/imgs/Brincos/brincoPage.jpeg",
      title: "BRINCO PRATA TREVO",
      disponivel: "sim",
      price: "39.99",
      sizes: [
        { size: "Unico", price: "29.99" },
      ],
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