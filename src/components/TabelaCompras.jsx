import React from 'react';
import './css/TabelaCompra.css'

const TabelaCompras = ({ item }) => {
  return (
    <div className='tableCompras'>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Produtos</th>
          <th>Entrega</th>
          <th>Preço</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
          <tr key={item.id} className='productsTag'>
            <td><img src={item.poster_path} alt="" /></td>
            <td className='productName'>{item.title}</td>
            <td className='prazoTag'>Em até 4 dias úteis</td>
            <td className='priceTag'>R$ {item.size.price}</td>
            <td className='qntdTag'>1</td>
          </tr>
      </tbody>
    </table>
   </div>
  );
};

export default TabelaCompras;
