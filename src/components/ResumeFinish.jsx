import React from 'react';
import './css/ResumeFinish.css';
import CardCart from './CardCart';

const ResumeFinish = ({ cartItems }) => {
  const calcularTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseFloat(item.size.price);
    });
    return total.toFixed(2);
  };

  const handleRemoveItem = (itemId) => {
    onRemove(itemId);
  };

  return (
    <div className="resumeContainer1">
      {cartItems.map((item) => (
        <CardCart key={item.id} item={item} onRemove={handleRemoveItem} />
      ))}
      <table className="resumeTable">
        <thead>
          <tr>
            <th>
              <h4>Resumo</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Subtotal</p>
              <p className='pResume'>R$ {calcularTotal()}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Entrega</p>
              <p className='pResume'>R$ </p>
            </td>
            <td>
              <h3>Total</h3>
              <p className='totalResume'>R$ {calcularTotal()}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResumeFinish;





