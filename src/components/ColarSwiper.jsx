import { Swiper, SwiperSlide} from 'swiper/react'
import './Swiper.css'
import { useState, useEffect } from 'react'
import 'swiper/css/swiper.css'

const ColarSwiper = () => {
  const [slidesPerView, setSlidePerView] = useState(4.7)
  useEffect(() => {
    function handleResize(){
      if(window.innerWidth < 1440){
        setSlidePerView(2)
      } if(window.innerWidth < 720){
        setSlidePerView(1)
      } else{
        setSlidePerView(4.7)
      }
    }
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  },[])

  const products = [
    {
      id: "300440",
      poster_path: "../public/imgs/Coração/poster_pulseiraCoracao.jpg",
      foto_about1: "./public/imgs/colar_coracao40cm.jpeg",
      foto_about2: "./public/imgs/colar_coracao.jpeg",
      foto_about3: "./public/imgs/colar_coracao50cm.jpeg",
      foto_about4: "./public/imgs/colar_coracao60cm.jpeg",
      title: "COLAR DE PRATA ELO CORAÇÃO",
      disponivel: "sim",
      price: "R$ 95,90",
      sizes: [
        { size: "40cm", price: "R$ 95,90" },
        { size: "45cm", price: "R$ 97,90" },
        { size: "50cm", price: "R$ 101,90" },
        { size: "60cm", price: "R$ 111,90" },
      ],
    },
    {
      id: "30031",
      poster_path: "../public/imgs/Singapura/poster_singapura.jpg",
      foto_about1: "./public/imgs/Singapura/colar_singapura.png",
      title: "COLAR DE PRATA SINGAPURA",
      disponivel: "sim",
      price: "R$ 84,90",
      sizes: [
        { size: "40cm", price: "R$ 84,90" },
        { size: "45cm", price: "R$ 87,90" },
        { size: "50cm", price: "R$ 94,90" },
      ],
    },
    {
      id: "30023",
      poster_path: "../public/imgs/Bolinha/poster_bolinha.jpg",
      foto_about1: "./public/imgs/Bolinha/colar_bolinha2.jpg",
      foto_about2: "./public/imgs/Bolinha/colar_bolinha.jpg",
      foto_about3: "./public/imgs/Bolinha/colar_bolinha3.jpg",
      foto_about4: "./public/imgs/Bolinha/colar_bolinha4.jpg",
      title: "COLAR DE PRATA BOLINHA",
      disponivel: "sim",
      price: "R$ 79,90" ,
      sizes: [
        { size: "40cm", price: "R$ 79,90" },
        { size: "45cm", price: "R$ 84,90" },
        { size: "60cm", price: "R$ 110,90" },
      ],
    },
    {
      id: "6146",
      poster_path: "../public/imgs/PontoDeLuz/poster_pontoLuz.jpg",
      foto_about1: "./public/imgs/PontoDeLuz/colar_pontoLuz.jpg",
      title: "COLAR DE PRATA PONTO DE LUZ",
      disponivel: "sim",
      price: "R$ 44,00",
      sizes: [
        { size: "Padrão", price: "R$ 44,00" },
      ],
    },
    {
      id: "5807",
      poster_path: "../public/imgs/ColeçãoPraia/poster_concha.jpg",
      foto_about1: "./public/imgs/ColeçãoPraia/colar_concha.jpg",
      title: "COLAR DE PRATA CONCHA",
      disponivel: "sim",
      price: "R$ 77,00" ,
      sizes: [
        { size: "Padrão", price: "R$ 77,00" },
      ],
    },
    {
      id: "2292",
      poster_path: "../public/imgs/ColeçãoPraia/poster_golfinho.jpg",
      foto_about1: "./public/imgs/ColeçãoPraia/colar_golfinho.jpg",
      title: "COLAR DE PRATA GOLFINHO",
      disponivel: "sim",
      price: "R$ 59,00" ,
      sizes: [
        { size: "Padrão", price: "R$ 59,00" },
      ],
    },
    {
      id: "5810",
      poster_path: "../public/imgs/ColeçãoPraia/poster_ondas.jpg",
      foto_about1: "./public/imgs/ColeçãoPraia/colar_ondas.jpg",
      title: "COLAR DE PRATA ONDA",
      disponivel: "sim",
      price: "R$ 77,00",
      sizes: [
        { size: "Padrão", price: "R$ 77,00" },
      ],
    },
    {
      id: "2425",
      poster_path: "../public/imgs/ColeçãoPraia/poster_conchaAberto.jpg",
      foto_about1: "./public/imgs/ColeçãoPraia/colar_conchaAberto.jpg",
      title: "COLAR DE PRATA CONCHA ABERTO",
      disponivel: "sim",
      price: "R$ 77,00",
      sizes: [
        { size: "Padrão", price: "R$ 77,00" },
      ],
    },
    {
      id: "4970",
      poster_path: "../public/imgs/ColeçãoPraia/poster_estrelaCravejada.jpg",
      foto_about1: "./public/imgs/ColeçãoPraia/colar_estrelaCravejada.jpg",
      title: "COLAR DE PRATA ESTRELA CRAVEJADA ZIRCÔNIA",
      disponivel: "sim",
      price: "R$ 147,00",
      sizes: [
        { size: "40cm", price: "R$ 147,00" },
        { size: "45cm", price: "R$ 149,00" },
      ],
    },
    {
      id: "30002",
      poster_path: "../public/imgs/Veneziana/poster_veneziana.jpeg",
      foto_about1: "./public/imgs/Veneziana/colar_veneziana2",
      foto_about2: "./public/imgs/Veneziana/colar_veneziana3",
      foto_about3: "./public/imgs/Veneziana/colar_veneziana4",
      title: "COLAR DE PRATA VENEZIANA",
      disponivel: "sim",
      price: "R$ 77,00",
      sizes: [
        { size: "Padrão", price: "R$ 77,00" },
      ],
    },
    {
      id: "6635",
      poster_path: "../public/imgs/Zirconia/poster_pedraZirconia.jpg",
      foto_about1: "./public/imgs/Zirconia/colar_pedraZirconia.jpg",
      title: "COLAR DE PRATA PEDRAS ZIRCÔNIA",
      disponivel: "sim",
      price: "R$ 89,90",
      sizes: [
        { size: "Padrão", price: "R$ 89,90" },
      ],
    },
    {
      id: "5889",
      poster_path: "../public/imgs/PerolaBarroca/poster_perolaBarroca.jpeg",
      foto_about1: "./public/imgs/PerolaBarroca/colar_perolaBarroca.jpeg",
      title: "COLAR DE PÉROLA BARROCA",
      disponivel: "sim",
      price: "R$ 119,00",
      sizes: [
        { size: "40cm", price: "R$ 119,00" },
        { size: "45cm", price: "R$ 124,00" },
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
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className='swiperSlide'>
            <div className='cardProduct'>
              <img src={product.poster_path} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.price}</p>
              <button>VER DETALHES</button>
            </div>
          </SwiperSlide>
         ))}
      </Swiper>
    </div>
  );
};

export default ColarSwiper