import ProductCard from "../ProductCard";

const Pulseiras = () => {
  
  const products = [
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
      "id": "P30031",
      "poster_path": "../public/imgs/Singapura/poster_singapura.jpg",
      "foto_about1": "../public/imgs/Singapura/pulseira_singapura.png",
      "title": "PULSEIRA DE PRATA SINGAPURA",
      "disponivel": "sim",
      "price": "54.90",
      "sizes": [
        { "size": "Padrão", "price": "54.90" }
      ]
    },
    {
      "id": "P30023",
      "poster_path": "../public/imgs/Bolinha/poster_bolinha.jpg",
      "foto_about1": "../public/imgs/Bolinha/pulseira_bolinha.jpeg",
      "title": "PULSEIRA DE PRATA BOLINHA",
      "disponivel": "sim",
      "price": "54.90",
      "sizes": [
        { "size": "Padrão", "price": "54.90" }
      ]
    },
    {
      "id": "7879",
      "poster_path": "../public/imgs/Zirconia/pulseira_BrancoZirconia.jpeg",
      "title": "PULSEIRA DE PRATA CORAÇÃO BRANCO ZIRCÔNIA",
      "disponivel": "sim",
      "price": "99.00",
      "sizes": [
        { "size": "Padrão", "price": "99.00" }
      ]
    },
    {
      "id": "7802",
      "poster_path": "../public/imgs/Zirconia/pulseira_CoracaoZirconia.jpeg",
      "title": "PULSEIRA DE PRATA CORAÇÃO ZIRCÔNIA",
      "disponivel": "sim",
      "price": "119.00",
      "sizes": [
        { "size": "Padrão", "price": "119.00" }
      ]
    },
    {
      "id": "7033",
      "poster_path": "../public/imgs/Zirconia/pulseira_CristalZirconia.jpeg",
      "title": "PULSEIRA DE PRATA CRISTAL ZIRCÔNIA",
      "disponivel": "sim",
      "price": "64.00",
      "sizes": [
        { "size": "Padrão", "price": "64.00" }
      ]
    },
    {
      "id": "7224",
      "poster_path": "../public/imgs/Riviera/pulsiera_GotasRiviera.jpeg",
      "title": "PULSEIRA DE PRATA GOTAS DE CRISTAL RIVIERA",
      "disponivel": "sim",
      "price": "199.00",
      "sizes": [
        { "size": "Padrão", "price": "199.00" }
      ]
    },
    {
      "id": "7223",
      "poster_path": "../public/imgs/Riviera/pulseira_CristalRiviera.jpeg",
      "title": "PULSEIRA DE PRATA CORAÇÃO CRISTAL RIVIERA",
      "disponivel": "sim",
      "price": "199.00",
      "sizes": [
        { "size": "Padrão", "price": "199.00" }
      ]
    },
    {
      "id": "5033",
      "poster_path": "../public/imgs/Star/pulseira_Star.jpeg",
      "title": "PULSEIRA DE PRATA STAR",
      "disponivel": "sim",
      "price": "129.00",
      "sizes": [
        { "size": "Padrão", "price": "129.00" }
      ]
    },
    {
      "id": "7334",
      "poster_path": "../public/imgs/Cruz/pulseira_Cruz.jpeg",
      "title": "PULSEIRA DE PRATA CRUZ",
      "disponivel": "sim",
      "price": "149.00",
      "sizes": [
        { "size": "Padrão", "price": "149.00" }
      ]
    },
    {
      "id": "7311",
      "poster_path": "../public/imgs/Tiempo/pulseiraQuadradaTiempo.jpeg",
      "title": "PULSEIRA DE PRATA TIEMPO FIO QUADRADO",
      "disponivel": "sim",
      "price": "99.00",
      "sizes": [
        { "size": "Padrão", "price": "99.00" }
      ]
    },
    {
      "id": "7312",
      "poster_path": "../public/imgs/Tiempo/pulseiraRedondaTiempo.jpeg",
      "title": "BRACELETE DE PRATA TIEMPO FIO REDONDO",
      "disponivel": "sim",
      "price": "99.00",
      "sizes": [
        { "size": "Padrão", "price": "99.00" }
      ]
    },
    {
      "id": "7312",
      "poster_path": "../public/imgs/Tiempo/pulseira_TiempoTorcido.jpeg",
      "title": "BRACELETE DE PRATA TIEMPO FIO TORCIDO",
      "disponivel": "sim",
      "price": "99.00",
      "sizes": [
        { "size": "Padrão", "price": "99.00" }
      ]
    }
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