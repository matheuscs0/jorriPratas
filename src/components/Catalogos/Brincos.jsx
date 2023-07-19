import ProductCard from "../ProductCard";

const Brincos = () => {
  const products =[
    {
      id: "5659",
      poster_path: "../public/imgs/Brincos/brincoCoracao.jpeg",
      foto_about1: "../public/imgs/",
      foto_about2: "./public/imgs/",
      foto_about3: "./public/imgs/",
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
      foto_about1: "../public/imgs/",
      foto_about2: "./public/imgs/",
      foto_about3: "./public/imgs/",
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
      foto_about1: "../public/imgs/",
      foto_about2: "./public/imgs/",
      foto_about3: "./public/imgs/",
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
      foto_about1: "../public/imgs/",
      foto_about2: "./public/imgs/",
      foto_about3: "./public/imgs/",
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
      foto_about1: "../public/imgs/",
      foto_about2: "./public/imgs/",
      foto_about3: "./public/imgs/",
      title: "BRINCO PRATA CONCHA",
      disponivel: "sim",
      price: "39.99",
      sizes: [
        { size: "Unico", price: "39.99" },
      ],
    },
    {
      id: "4069",
      poster_path: "../public/imgs/Brincos/brincoMeiaLua.jpeg",
      foto_about1: "../public/imgs/",
      foto_about2: "./public/imgs/",
      foto_about3: "./public/imgs/",
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
      foto_about1: "../public/imgs/",
      foto_about2: "./public/imgs/",
      foto_about3: "./public/imgs/",
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
      foto_about1: "../public/imgs/",
      foto_about2: "./public/imgs/",
      foto_about3: "./public/imgs/",
      title: "BRINCO PRATA PONTO DE LUZ",
      disponivel: "sim",
      price: "49.99",
      sizes: [
        { size: "Unico", price: "49.99" },
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

export default Brincos