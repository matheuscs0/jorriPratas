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
    foto_about1: "../public/imgs/Singapura/colar_singapura.jpg",
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
    foto_about1: "../public/imgs/Bolinha/colar_bolinha2.jpg",
    foto_about2: "../public/imgs/Bolinha/colar_bolinha.jpg",
    foto_about3: "../public/imgs/Bolinha/colar_bolinha3.jpg",
    foto_about4: "../public/imgs/Bolinha/colar_bolinha4.jpg",
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
    id: "5034",
    poster_path: "../public/imgs/Bolinha/pulseira_BolinhaCoracao.jpeg",
    title: "PULSEIRA DE PRATA BOLINHA CORAÇÃO",
    disponivel: "sim",
    price: "R$54,90",
    sizes: [
      { size: "Padrão", price: "R$ 54,90" },
    ],
  },
  {
    id: "6146",
    poster_path: "../public/imgs/PontoDeLuz/poster_pontoLuz.jpg",
    foto_about1: "../public/imgs/PontoDeLuz/colar_pontoLuz.jpg",
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
    foto_about1: "../public/imgs/ColeçãoPraia/colar_concha.jpg",
    title: "COLAR DE PRATA CONCHA",
    disponivel: "sim",
    price: "R$ 77,00",
    sizes: [
      { size: "Padrão", price: "R$ 77,00" },
    ],
  },
  {
    id: "2292",
    poster_path: "../public/imgs/ColeçãoPraia/poster_golfinho.jpg",
    foto_about1: "../public/imgs/ColeçãoPraia/colar_golfinho.jpg",
    title: "COLAR DE PRATA GOLFINHO",
    disponivel: "sim",
    price: "R$ 59,00",
    sizes: [
      { size: "Padrão", price: "R$ 59,00" },
    ],
  },
  {
    id: "5810",
    poster_path: "../public/imgs/ColeçãoPraia/poster_ondas.jpg",
    foto_about1: "../public/imgs/ColeçãoPraia/colar_ondas.jpg",
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
    foto_about1: "../public/imgs/ColeçãoPraia/colar_conchaAberto.jpg",
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
    foto_about1: "../public/imgs/ColeçãoPraia/colar_estrelaCravejada.jpg",
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
    foto_about1: "../public/imgs/Veneziana/colar_veneziana2",
    foto_about2: "../public/imgs/Veneziana/colar_veneziana3",
    foto_about3: "../public/imgs/Veneziana/colar_veneziana4",
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
    foto_about1: "../public/imgs/Zirconia/colar_pedraZirconia.jpg",
    title: "COLAR DE PRATA PEDRAS ZIRCÔNIA",
    disponivel: "sim",
    price: "R$ 89,80",
    sizes: [
      { size: "Padrão", price: "R$ 89,90" },
    ],
  },
  {
    id: "5889",
    poster_path: "../public/imgs/PerolaBarroca/poster_perolaBarroca.jpeg",
    foto_about1: "../public/imgs/PerolaBarroca/colar_perolaBarroca.jpeg",
    title: "COLAR DE PÉROLA BARROCA",
    disponivel: "sim",
    price: "R$ 119,00",
    sizes: [
      { size: "40cm", price: "R$ 119,00" },
      { size: "45cm", price: "R$ 124,00" },
    ],
  },
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
  {
    id: "7311",
    poster_path: "../public/imgs/Tiempo/pulseiraQuadradaTiempo.jpeg",
    title: "PULSEIRA DE PRATA TIEMPO FIO QUADRADO",
    disponivel: "sim",
    price: "R$99,00",
    sizes: [
      { size: "Padrão", price: "R$ 99,00" },
    ],
  },
  {
    id: "7312",
    poster_path: "../public/imgs/Tiempo/pulseiraRedondaTiempo.jpeg",
    title: "PULSEIRA DE PRATA TIEMPO FIO REDONDO",
    disponivel: "sim",
    price: "R$99,00",
    sizes: [
      { size: "Padrão", price: "R$ 99,00" },
    ],
  },
  {
    id: "7879",
    poster_path: "../public/imgs/Zirconia/pulseira_BrancoZirconia.jpeg",
    title: "PULSEIRA DE PRATA CORAÇÃO BRANCO ZIRCÔNIA",
    disponivel: "sim",
    price: "R$99,00",
    sizes: [
      { size: "Padrão", price: "R$ 99,00" },
    ],
  },
  {
    id: "7802",
    poster_path: "../public/imgs/Zirconia/pulseira_CoracaoZirconia.jpeg",
    title: "PULSEIRA DE PRATA CORAÇÃO ZIRCÔNIA",
    disponivel: "sim",
    price: "119,00",
    sizes: [
      { size: "Padrão", price: "R$ 119,00" },
    ],
  },
  {
    id: "7033",
    poster_path: "../public/imgs/Zirconia/pulseira_CristalZirconia.jpeg",
    title: "PULSEIRA DE PRATA CRISTAL ZIRCÔNIA",
    disponivel: "sim",
    price: "64,00",
    sizes: [
      { size: "Padrão", price: "R$ 64,00" },
    ],
  },
  {
    id: "7224",
    poster_path: "../public/imgs/Riviera/pulsiera_GotasRiviera.jpeg",
    title: "PULSEIRA DE PRATA GOTAS DE CRISTAL RIVIERA",
    disponivel: "sim",
    price: "R$199,00",
    sizes: [
      { size: "Padrão", price: "R$ 199,00" },
    ],
  },
  {
    id: "7223",
    poster_path: "../public/imgs/Riviera/pulseira_CristalRiviera.jpeg",
    title: "PULSEIRA DE PRATA CORAÇÃO CRISTAL RIVIERA",
    disponivel: "sim",
    price: "R$199,00",
    sizes: [
      { size: "Padrão", price: "R$ 199,00" },
    ],
  },
  {
    id: "5033",
    poster_path: "../public/imgs/Star/pulseira_Star.jpeg",
    title: "PULSEIRA DE PRATA STAR",
    disponivel: "sim",
    price: "R$129,00",
    sizes: [
      { size: "Padrão", price: "R$ 129,00" },
    ],
  },
  {
    id: "7334",
    poster_path: "../public/imgs/Cruz/pulseira_Cruz.jpeg",
    title: "PULSEIRA DE PRATA CRUZ",
    disponivel: "sim",
    price: "R$149,00",
    sizes: [
      { size: "Padrão", price: "R$ 149,00" },
    ],
  },
  {
    id: "7312",
    poster_path: "../public/imgs/Tiempo/pulseira_TiempoTorcido.jpeg",
    title: "BRACELETE DE PRATA TIEMPO FIO TORCIDO",
    disponivel: "sim",
    price: "R$99,00",
    sizes: [
      { size: "Padrão", price: "R$ 99,00" },
    ],
  },
  {
    id: "T300440",
    poster_path: "../public/imgs/Coração/poster_pulseiraCoracao.jpg",
    foto_about1: "../public/imgs/Coração/tornozeleira_coracao.jpg",
    title: "TORNOZELEIRA DE PRATA ELO CORAÇÃO",
    disponivel: "sim",
    price: "R$77,90",
    sizes: [
      { size: "Padrão", price: "R$ 77,90" },
    ],
  },
  {
    id: "T30031",
    poster_path: "../public/imgs/Singapura/poster_singapura.jpg",
    foto_about1: "../public/imgs/Singapura/tornozeleira_singapura.png",
    foto_about2: "./public/imgs/",
    foto_about3: "./public/imgs/",
    title: "TORNOZELEIRA DE PRATA SINGAPURA",
    disponivel: "sim",
    price: "R$77,90",
    sizes: [
      { size: "Padrão", price: "R$ 77,90" },
    ],
  },
  {
    id: "T30023",
    poster_path: "../public/imgs/Bolinha/poster_bolinha.jpg",
    foto_about1: "../public/imgs/Bolinha/tornozeleira_bolinha.jpg",
    foto_about2: "./public/imgs/Bolinha/",
    foto_about3: "./public/imgs/Bolinha/",
    title: "TORNOZELEIRA DE PRATA BOLINHA",
    disponivel: "sim",
    price: "R$77,90",
    sizes: [
      { size: "Padrão", price: "R$ 77,90" },
    ],
  },
]

export default products