import ProductCard from "../ProductCart/ProductCard";

const Tornozeleira = () => {
  const products =[
    {
      id: "T300440",
      poster_path: "../public/imgs/Coração/poster_pulseiraCoracao.jpg",
      foto_about1: "../public/imgs/Coração/tornozeleira_coracao.jpeg",
      title: "TORNOZELEIRA DE PRATA ELO CORAÇÃO",
      disponivel: "sim",
      price: "77.90",
      sizes: [
        { size: "Padrão", price: " 77.90" },
      ],
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
      id: "T30023",
      poster_path: "../public/imgs/Bolinha/poster_bolinha.jpg",
      foto_about1: "../public/imgs/Bolinha/tornozeleira_bolinha.jpg",
      title: "TORNOZELEIRA DE PRATA BOLINHA",
      disponivel: "sim",
      price: "77.90",
      sizes: [
        { size: "Padrão", price: " 77.90" },
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

export default Tornozeleira