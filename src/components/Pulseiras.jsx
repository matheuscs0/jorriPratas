import ProductCard from "./ProductCard";

const Pulseiras = () => {
  const products = [
    {
      id: "P300440",
      poster_path: "../public/imgs/Coração/poster_pulseiraCoracao.jpg",
      foto_about1: "../public/imgs/Coração/pulseira_coracao.jpeg",
      foto_about2: "../public/imgs/",
      foto_about3: "../public/imgs/",
      title: "PULSEIRA DE PRATA ELO CORAÇÃO",
      disponivel: "sim",
      price: "R$ 54,90",
      sizes: [
        { size: "Padrão", price: "R$ 54,90" },
      ],
    },
    {
      id: "P30031",
      poster_path: "../public/imgs/Singapura/poster_singapura.jpg",
      foto_about1: "../public/imgs/Singapura/pulseira_singapura.png",
      foto_about2: "../public/imgs/",
      foto_about3: "../public/imgs/",
      title: "PULSEIRA DE PRATA SINGAPURA",
      disponivel: "sim",
      price: "R$54,90",
      sizes: [
        { size: "Padrão", price: "R$ 54,90" },
      ],
    },
    {
      id: "P30023",
      poster_path: "../public/imgs/Bolinha/poster_bolinha.jpg",
      foto_about1: "../public/imgs/Bolinha/pulseira_bolinha.jpeg",
      foto_about2: "../public/imgs/Bolinha/",
      foto_about3: "../public/imgs/Bolinha/",
      title: "PULSEIRA DE PRATA BOLINHA",
      disponivel: "sim",
      price: "R$54,90",
      sizes: [
        { size: "Padrão", price: "R$ 54,90" },
      ],
    },
  ]

  return (
    <div className='productContainer'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Pulseiras