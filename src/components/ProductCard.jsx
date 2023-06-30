import { Link } from 'react-router-dom';
import './css/ProductCard.css'

const ProductCard = ({ product }) => {
  return (
    <div className="cardProduct" key={product.id}>
      <Link to={`/product/${product.id}`}>
        <img src={product.poster_path} alt={product.title} />
        <h2>{product.title}</h2>
        <p>R$ {product.price}</p>
        <button>VER DETALHES</button>
      </Link>
    </div>
  );
};

export default ProductCard;
