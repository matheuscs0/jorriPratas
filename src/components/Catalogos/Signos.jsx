import ProductCard from "../ProductCart/ProductCard";

const Signos = () => {
  const products =[
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
  ]
  return (
    <div className='productContainer'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Signos