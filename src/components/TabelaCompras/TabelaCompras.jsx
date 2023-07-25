import React, { useState } from 'react';
import './TabelaCompra.css';
import { BiTrash } from 'react-icons/bi';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';

const TabelaCompras = ({ item, handleRemoveItem }) => {
  const handleRemoveItemClick = () => {
    handleRemoveItem(item.id);
  };

  const [value, setValue] = useState(parseFloat(item.size.price));
  const [quant, setQuant] = useState(1);

  const handleAddItemClick = () => {
    setQuant(prevQuant => prevQuant + 1);
    setValue(prevValue => prevValue + parseFloat(item.size.price));
  };

  const handleRemoveItemCLick = () => {
    if (quant > 1) {
      setQuant(prevQuant => prevQuant - 1);
      setValue(prevValue => prevValue - parseFloat(item.size.price));
    }
  };

  return (
    <div className="tableCompras">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Produtos</th>
            <th>Entrega</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="productsTag">
            <td>
              <img src={item.poster_path} alt="" />
            </td>
            <td className="productName">{item.title} <br/>
            Tamanho: {item.size.size}
            </td>
            <td className="prazoTag">Em até 7 dias úteis</td>
            <td className="priceTag">R$ {value}</td>
            <td className="qntdTag">
              <IoIosRemove onClick={handleRemoveItemCLick} />
              <p className='quantify'>{quant}</p>
              <IoIosAdd onClick={handleAddItemClick} />
            </td>
            <td>
              <BiTrash onClick={handleRemoveItemClick}>Remover</BiTrash>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabelaCompras;







