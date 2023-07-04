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
        <h3>{item.title}</h3>
        <BiTrash onClick={handleRemoveItem} />
      </div>
      <p>Preço: R$ {item.size.price}</p>
    </div>
  );
};

export default CardCart;
