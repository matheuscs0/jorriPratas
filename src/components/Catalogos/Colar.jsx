import ProductCard from "../ProductCart/ProductCard";
import '../ProductCart/ProductCard.css'

const Colar = () => {

  const products = [
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
    {
      id: "5678",
      poster_path: "../public/imgs/Signos/colar_capriFrente.jpeg",
      foto_about1: "../public/imgs/Signos/colar_capriVerso.jpeg",
      title: "COLAR DE SIGNO CAPRICÓRNIOS",
      disponivel: "sim",
      price: "99.99",
      sizes: [
        { size: "Único", price: "99.99" },
      ],
    },
    {
      id: "5674",
      poster_path: "../public/imgs/Signos/colar_virgemFrente.jpeg",
      foto_about1: "../public/imgs/Signos/colar_virgemVerso.jpeg",
      title: "COLAR DE SIGNO VIRGEM",
      disponivel: "sim",
      price: "99.99",
      sizes: [
        { size: "Único", price: "99.99" },
      ],
    },
    {
      id: "5677",
      poster_path: "../public/imgs/Signos/colar_escorpiaoFrente.jpeg",
      foto_about1: "../public/imgs/Signos/colar_escorpiaoVerso.jpeg",
      title: "COLAR DE SIGNO ESCORPIÃO",
      disponivel: "sim",
      price: "99.99",
      sizes: [
        { size: "Único", price: "99.99" },
      ],
    },
    {
      id: "5669",
      poster_path: "../public/imgs/Signos/colar_aquarioFrente.jpeg",
      foto_about1: "../public/imgs/Signos/colar_aquarioVerso.jpeg",
      title: "COLAR DE SIGNO AQUÁRIO",
      disponivel: "sim",
      price: "99.99",
      sizes: [
        { size: "Único", price: "99.99" },
      ],
    },
    {
      id: "5665",
      poster_path: "../public/imgs/Signos/colar_gemeosFrente.jpeg",
      foto_about1: "../public/imgs/Signos/colar_gemeosVerso.jpeg",
      title: "COLAR DE SIGNO GÊMEOS",
      disponivel: "sim",
      price: "99.99",
      sizes: [
        { size: "Único", price: "99.99" },
      ],
    },
    {
      id: "5670",
      poster_path: "../public/imgs/Signos/colar_sagitarioFrente.jpeg",
      foto_about1: "../public/imgs/Signos/colar_sagitarioVerso.jpeg",
      title: "COLAR DE SIGNO SAGITÁRIO",
      disponivel: "sim",
      price: "99.99",
      sizes: [
        { size: "Único", price: "99.99" },
      ],
    },
    {
      id: "5672",
      poster_path: "../public/imgs/Signos/colar_touroFrente.jpeg",
      foto_about1: "../public/imgs/Signos/colar_touroVerso.jpeg",
      title: "COLAR DE SIGNO TOURO",
      disponivel: "sim",
      price: "99.99",
      sizes: [
        { size: "Único", price: "99.99" },
      ],
    },
    {
      id: "5671",
      poster_path: "../public/imgs/Signos/colar_ariesFrente.jpeg",
      foto_about1: "../public/imgs/Signos/colar_ariesVerso.jpeg",
      title: "COLAR DE SIGNO ARIES",
      disponivel: "sim",
      price: "99.99",
      sizes: [
        { size: "Único", price: "99.99" },
      ],
    },
    {
      id: "5676",
      poster_path: "../public/imgs/Signos/colar_libraFrente.jpeg",
      foto_about1: "../public/imgs/Signos/colar_libraVerso.jpeg",
      title: "COLAR DE SIGNO LIBRA",
      disponivel: "sim",
      price: "99.99",
      sizes: [
        { size: "Único", price: "99.99" },
      ],
    },
    {
      id: "5676",
      poster_path: "../public/imgs/Signos/colar_leaoFrente.jpeg",
      foto_about1: "../public/imgs/Signos/colar_leaoVerso.jpeg",
      title: "COLAR DE SIGNO LEÃO",
      disponivel: "sim",
      price: "99.99",
      sizes: [
        { size: "Único", price: "99.99" },
      ],
    },
    {
      id: "5675",
      poster_path: "../public/imgs/Signos/colar_peixeVerso.jpeg",
      foto_about1: "../public/imgs/Signos/colar_peixeFrente.jpeg",
      title: "COLAR DE SIGNO PEIXES",
      disponivel: "sim",
      price: "99.99",
      sizes: [
        { size: "Único", price: "99.99" },
      ],
    },
    {
      id: "5676",
      poster_path: "../public/imgs/Signos/colar_cancerFrente.jpeg",
      foto_about1: "../public/imgs/Signos/colar_cancerVerso.jpeg",
      title: "COLAR DE SIGNO CÂNCER",
      disponivel: "sim",
      price: "99.99",
      sizes: [
        { size: "Único", price: "99.99" },
      ],
    },
  ];
  return (
    <div className='productContainer'>
      {products.map((product) => (
        
            <ProductCard key={product.id} product={product} className="slide-item" />
        
      ))}
  
    </div>
  );
};

export default Colar