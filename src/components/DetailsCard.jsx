import { useState } from 'react';
import './DetailsCard.css';

const DetailsCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);    
  };
  const [selectedImage, setSelectedImage] = useState(product.poster_path);
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  

  return (
    <div className="product-card">
      <div className="about-images">
    {product.foto_about1 && (
      <img
        src={product.foto_about1}
        alt={product.title}
        onClick={() => handleImageClick(product.foto_about1)}
        className="about-image"
      />
    )}
    {product.foto_about2 && (
      <img
        src={product.foto_about2}
        alt={product.title}
        onClick={() => handleImageClick(product.foto_about2)}
        className="about-image"
      />
    )}
    {product.foto_about3 && (
      <img
        src={product.foto_about3}
        alt={product.title}
        onClick={() => handleImageClick(product.foto_about3)}
        className="about-image"
      />
    )}
    {product.foto_about4 && (
      <img
        src={product.foto_about4}
        alt={product.title}
        onClick={() => handleImageClick(product.foto_about4)}
        className="about-image"
      />
    )}
  </div>
  <img
      src={selectedImage}
      alt={product.title}
      className="poster"
      onClick={() => handleImageClick(product.poster_path)}
    />
      <div className="details-content">
        <div className="titles">
          <h4>Jorri Pratas</h4>
          <h2 className="title">{product.title}</h2>
          <p className='id'>ID: {product.id}</p>
        </div>
        <div className="sizesProduct">
          <h3>Tamanhos:</h3>
          <div className="sizes"><ul>
            {product.sizes.map((size) => (
           <li key={size.size} className={size === selectedSize ? 'selected' : ''} onClick={() => handleSizeChange(size)} id='size' >
                <span>{size.size}</span>
              </li>
            ))}
          </ul></div>
        </div>
        <div className="pricesProduct">
          {selectedSize && <p className='priceP'>Preço: {selectedSize.price}</p>}
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;





