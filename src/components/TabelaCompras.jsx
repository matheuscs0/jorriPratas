import React from 'react';
import './css/TabelaCompra.css';
import { BiTrash } from 'react-icons/bi';

const TabelaCompras = ({ item, handleRemoveItem}) => {
  const handleRemoveItemClick = () => {
    handleRemoveItem(item.id);
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
              <td className="productName">{item.title}</td>
              <td className="prazoTag">Em até</td>
              <td className="priceTag">R$ {item.size.price}</td>
              <td className="qntdTag">1</td>
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






