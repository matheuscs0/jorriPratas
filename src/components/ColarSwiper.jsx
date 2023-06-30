import { Swiper, SwiperSlide} from 'swiper/react'
import './css/Swiper.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ColarSwiper = () => {
  const [slidesPerView, setSlidePerView] = useState(4)

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
  
      switch (true) {
        case windowWidth < 1300:
          setSlidePerView(3);
          break;

        case windowWidth < 850:
          setSlidePerView(2);
          break;

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
      id: "300440",
      poster_path: "../public/imgs/Coração/poster_pulseiraCoracao.jpg",
      foto_about1: "../public/imgs/Coração/colar_coracao40cm.jpeg",
      foto_about2: "../public/imgs/Coração/colar_coracao.jpeg",
      foto_about3: "../public/imgs/Coração/colar_coracao50cm.jpeg",
      foto_about4: "../public/imgs/Coração/colar_coracao60cm.jpeg",
      title: "COLAR DE PRATA ELO CORAÇÃO",
      disponivel: "sim",
      price: "95.90",
      sizes: [
        { size: "40cm", price: "95.90" },
        { size: "45cm", price: "97.90" },
        { size: "50cm", price: "101.90" },
        { size: "60cm", price: "111.90" },
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
        { size: "40cm", price: "84.90" },
        { size: "45cm", price: "87.90" },
        { size: "50cm", price: "94.90" },
      ],
    },
    {
      id: "30023",
      poster_path: "../public/imgs/Bolinha/poster_bolinha.jpg",
      foto_about1: "../public/imgs/Bolinha/colar_bolinha2.jpg",
      foto_about2: "../public/imgs/Bolinha/colar_bolinha.jpg",
      foto_about3: "../public/imgs/Bolinha/colar_bolinha3.jpg",
      foto_about4: "../public/imgs/Bolinha/colar_bolinha4.jpg",
      title: "COLAR DE PRATA BOLINHA",
      disponivel: "sim",
      price: "79.90" ,
      sizes: [
        { size: "40cm", price: "79.90" },
        { size: "45cm", price: "84.90" },
        { size: "60cm", price: "110.90" },
      ],
    },
    {
      id: "5034",
      poster_path: "../public/imgs/Bolinha/pulseira_BolinhaCoracao.jpeg",
      title: "PULSEIRA DE PRATA BOLINHA CORAÇÃO",
      disponivel: "sim",
      price: "54.90",
      sizes: [
        { size: "Padrão", price: "54.90" },
      ],
    },
    {
      id: "6146",
      poster_path: "../public/imgs/PontoDeLuz/poster_pontoLuz.jpg",
      foto_about1: "../public/imgs/PontoDeLuz/colar_pontoLuz.jpg",
      title: "COLAR DE PRATA PONTO DE LUZ",
      disponivel: "sim",
      price: "44.00",
      sizes: [
        { size: "Padrão", price: "44.00" },
      ],
    },
    {
      id: "5807",
      poster_path: "../public/imgs/ColeçãoPraia/poster_concha.jpg",
      foto_about1: "../public/imgs/ColeçãoPraia/colar_concha.jpg",
      title: "COLAR DE PRATA CONCHA",
      disponivel: "sim",
      price: "77.00",
      sizes: [
        { size: "Padrão", price: "77.00" },
      ],
    },
    {
      id: "2292",
      poster_path: "../public/imgs/ColeçãoPraia/poster_golfinho.jpg",
      foto_about1: "../public/imgs/ColeçãoPraia/colar_golfinho.jpg",
      title: "COLAR DE PRATA GOLFINHO",
      disponivel: "sim",
      price: "59.00",
      sizes: [
        { size: "Padrão", price: "59.00" },
      ],
    },
    {
      id: "5810",
      poster_path: "../public/imgs/ColeçãoPraia/poster_ondas.jpg",
      foto_about1: "../public/imgs/ColeçãoPraia/colar_ondas.jpg",
      title: "COLAR DE PRATA ONDA",
      disponivel: "sim",
      price: "77.00",
      sizes: [
        { size: "Padrão", price: "77.00" },
      ],
    },
    {
      id: "2425",
      poster_path: "../public/imgs/ColeçãoPraia/poster_conchaAberto.jpg",
      foto_about1: "../public/imgs/ColeçãoPraia/colar_conchaAberto.jpg",
      title: "COLAR DE PRATA CONCHA ABERTO",
      disponivel: "sim",
      price: "77.00",
      sizes: [
        { size: "Padrão", price: "77.00" },
      ],
    },
    {
      id: "4970",
      poster_path: "../public/imgs/ColeçãoPraia/poster_estrelaCravejada.jpg",
      foto_about1: "../public/imgs/ColeçãoPraia/colar_estrelaCravejada.jpg",
      title: "COLAR DE PRATA ESTRELA CRAVEJADA ZIRCÔNIA",
      disponivel: "sim",
      price: "147.00",
      sizes: [
        { size: "40cm", price: "147.00" },
        { size: "45cm", price: "149.00" },
      ],
    },
    {
      id: "30002",
      poster_path: "../public/imgs/Veneziana/poster_veneziana.jpeg",
      foto_about1: "../public/imgs/Veneziana/colar_veneziana2",
      foto_about2: "../public/imgs/Veneziana/colar_veneziana3",
      foto_about3: "../public/imgs/Veneziana/colar_veneziana4",
      title: "COLAR DE PRATA VENEZIANA",
      disponivel: "sim",
      price: "77.00",
      sizes: [
        { size: "Padrão", price: "77.00" },
      ],
    },
    {
      id: "6635",
      poster_path: "../public/imgs/Zirconia/poster_pedraZirconia.jpg",
      foto_about1: "../public/imgs/Zirconia/colar_pedraZirconia.jpg",
      title: "COLAR DE PRATA PEDRAS ZIRCÔNIA",
      disponivel: "sim",
      price: "89.80",
      sizes: [
        { size: "Padrão", price: "89.90" },
      ],
    },
    {
      id: "5889",
      poster_path: "../public/imgs/PerolaBarroca/poster_perolaBarroca.jpeg",
      foto_about1: "../public/imgs/PerolaBarroca/colar_perolaBarroca.jpeg",
      title: "COLAR DE PÉROLA BARROCA",
      disponivel: "sim",
      price: "119.00",
      sizes: [
        { size: "40cm", price: "119.00" },
        { size: "45cm", price: "124.00" },
      ],
    },
  ];
  return (
    <div className='rowContainer'>
      <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={50}
      scrollbar={{ draggable: true }}
      navigation
      className='swiper'
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className='swiperSlide'>
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