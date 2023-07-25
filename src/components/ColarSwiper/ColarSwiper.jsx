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
          setSlidePerView(3); 
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
      id: "300170",
      poster_path: "../public/imgs/Coração/poster_pulseiraCoracao.jpg",
      foto_about1: "../public/imgs/Coração/colar_coracao40cm.jpeg",
      foto_about2: "../public/imgs/Coração/colar_coracao.jpeg",
      title: "COLAR DE PRATA ELO CORAÇÃO",
      disponivel: "sim",
      price: "94.99",
      sizes: [
        { size: "40cm", price: "94.99" },
        { size: "45cm", price: "99.99" },
      ],
    },
    {
      id: "30031",
      poster_path: "../public/imgs/Singapura/poster_singapura.jpg",
      foto_about1: "../public/imgs/Singapura/colar_singapura.jpg",
      title: "COLAR DE PRATA SINGAPURA",
      disponivel: "sim",
      price: "84.90",
      sizes: [
        { size: "40cm", price: "84.99" },
        { size: "45cm", price: "88.99" },
        { size: "50cm", price: "99.99" },
      ],
    },
    {
      id: "30023",
      poster_path: "../public/imgs/Bolinha/poster_bolinha.jpg",
      foto_about1: "../public/imgs/Bolinha/colar_bolinha2.jpg",
      foto_about2: "../public/imgs/Bolinha/colar_bolinha.jpg",
      foto_about3: "../public/imgs/Bolinha/colar_bolinha3.jpg",
      title: "COLAR DE PRATA BOLINHA",
      disponivel: "sim",
      price: "89.99" ,
      sizes: [
        { size: "40cm", price: "89.99" },
        { size: "45cm", price: "99.99" },
      ],
    },
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
      id: "5807",
      poster_path: "../public/imgs/ColeçãoPraia/poster_concha.jpg",
      foto_about1: "../public/imgs/ColeçãoPraia/colar_concha.jpg",
      title: "COLAR DE PRATA CONCHA",
      disponivel: "sim",
      price: "99.99",
      sizes: [
        { size: "Padrão", price: "99.99" },
      ],
    },
    {
      id: "2292",
      poster_path: "../public/imgs/ColeçãoPraia/poster_golfinho.jpg",
      foto_about1: "../public/imgs/ColeçãoPraia/colar_golfinho.jpg",
      title: "COLAR DE PRATA GOLFINHO",
      disponivel: "sim",
      price: "59.99",
      sizes: [
        { size: "Padrão", price: "59.99" },
      ],
    },
    {
      id: "5810",
      poster_path: "../public/imgs/ColeçãoPraia/poster_ondas.jpg",
      foto_about1: "../public/imgs/ColeçãoPraia/colar_ondas.jpg",
      title: "COLAR DE PRATA ONDA",
      disponivel: "sim",
      price: "79.99",
      sizes: [
        { size: "Padrão", price: "79.99" },
      ],
    },
    {
      id: "2425",
      poster_path: "../public/imgs/ColeçãoPraia/poster_conchaAberto.jpg",
      foto_about1: "../public/imgs/ColeçãoPraia/colar_conchaAberto.jpg",
      title: "COLAR DE PRATA CONCHA ABERTO",
      disponivel: "sim",
      price: "79.99",
      sizes: [
        { size: "Padrão", price: "79.99" },
      ],
    },
    {
      id: "4970",
      poster_path: "../public/imgs/ColeçãoPraia/poster_estrelaCravejada.jpg",
      foto_about1: "../public/imgs/ColeçãoPraia/colar_estrelaCravejada.jpg",
      title: "COLAR DE PRATA ESTRELA CRAVEJADA ZIRCÔNIA",
      disponivel: "sim",
      price: "139.99",
      sizes: [
        { size: "40cm", price: "139.99" },
        { size: "45cm", price: "149.99" },
      ],
    },
    {
      id: "30002",
      poster_path: "../public/imgs/Veneziana/poster_veneziana.jpeg",
      foto_about1: "../public/imgs/Veneziana/colar_veneziana2.jpg",
      foto_about2: "../public/imgs/Veneziana/colar_veneziana3.jpg",
      foto_about3: "../public/imgs/Veneziana/colar_veneziana4.jpg",
      title: "COLAR DE PRATA VENEZIANA",
      disponivel: "sim",
      price: "79.99",
      sizes: [
        { size: "40cm", price: "79.99" },
        { size: "45cm", price: "84.99" },
      ],
    },
    {
      id: "5889",
      poster_path: "../public/imgs/PerolaBarroca/poster_perolaBarroca.jpeg",
      foto_about1: "../public/imgs/PerolaBarroca/colar_perolaBarroca.jpeg",
      title: "COLAR DE PÉROLA BARROCA",
      disponivel: "sim",
      price: "94.99",
      sizes: [
        { size: "40cm", price: "94.99" },
        { size: "45cm", price: "99.99" },
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