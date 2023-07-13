import React, { useState } from 'react';
import axios from 'axios';

const Payment = ({ cep, address, city, state, number, complemento, addressInfo}) => {
  const [nomeCartao, setNomeCartao] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [exp_month, setExp_month] = useState('');
  const [exp_year, setExp_year] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/PaymentController', {
        nomeCartao,
        numeroCartao,
        exp_month,
        exp_year,
        cep,
        address,
        city,
        state,
        number, 
        complemento
      });

      console.log(response);
      console.log(response.id);
    } catch (error) {
      console.error('Erro ao enviar pagamento:', error);
    }
  };

  return (
    <div className='containerFormPayment'>
      <form className='paymentForm' onSubmit={handleSubmit}>
        <form className="formInputsPayment">
          <input type="text" value={nomeCartao} onChange={(event) => setNomeCartao(event.target.value)} placeholder="Nome no cartão" />
          <br/>
          <input type="text" value={numeroCartao} onChange={(event) => setNumeroCartao(event.target.value)} placeholder="Número do cartão" />
          <br/>
          <input type="text" value={exp_month} onChange={(event) => setExp_month(event.target.value)} placeholder="Mês de validade"/>
          <input type="text" value={exp_year} onChange={(event) => setExp_year(event.target.value)} placeholder="Ano de validade"/>
          <input type="text" value={cvv} onChange={(event) => setCvv(event.target.value)} placeholder="CVV" />
        </form>
        <button type="submit">Enviar pagamento</button>
      </form>
    </div>
  );
};

export default Payment;









