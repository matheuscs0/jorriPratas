import React from 'react';
import { BiTrash } from 'react-icons/bi';

const CardCart = ({ item, onRemove }) => {
  const handleRemoveItem = () => {
    onRemove(item.id);
  };

  return (
    <div className="productInCart">
      <div className="imgAndTitle">
        <img src={item.poster_path} alt="" />
        <div className="priceTitle">
        <h3>{item.title}</h3>
        <p>Tamanho: {item.size.size}</p>
        <p>Preço: R$ {item.size.price}</p>
        </div>
        <BiTrash onClick={handleRemoveItem} />
      </div>
    </div>
  );
};

export default CardCart;
