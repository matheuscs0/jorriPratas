import React from 'react';
import './css/Resume.css';
import {Link} from 'react-router-dom'

const Resume = ({ cartItems }) => {
  const calcularTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseFloat(item.size.price);
    });
    return total.toFixed(2);
  };

  return (
    <div className="resumeContainer">
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
            <td><p>Subtotal</p> <p className='pResume'>R$ {calcularTotal()}</p></td>
          </tr>
          <tr>
            <td><p>Entrega</p> <p className='pResume'>R$ 00,00</p></td>
            <td><h3>Total</h3> <p className='totalResume'>R$ {calcularTotal()}</p></td>
          </tr>
        </tbody>
      </table>
      <div className="linksResume">
        <Link className='finishButton'>Finalizar Compra</Link>
        <Link to="/" className='continueButton'> Continuar Comprando</Link>
      </div>
    </div>
  );
};

export default Resume;
