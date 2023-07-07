import React, { useState } from 'react';
import axios from 'axios';
import './css/consultaCep.css'

const CepSearch = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleCepChange = (event) => {
    const newCep = event.target.value;
    setCep(newCep);

    if (newCep === '') {
      setAddress('');
      setCity('');
      setState('');
    }
  };

  const searchCep = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { data } = response;

      setAddress(data.logradouro);
      setCity(data.localidade);
      setState(data.uf);
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchCep();
  };

  return (
    <div className='containerForm'>
      <form onSubmit={handleSubmit} className='formCep'>
        <p>CEP</p>
        <input type="text" value={cep} onChange={handleCepChange} placeholder="Digite o CEP" />
          <p><a href="https://buscacepinter.correios.com.br/app/endereco/index.php?t" target="_blank">Não sei meu cep</a></p>
      </form>
      <br />
      <form className='formInputs'>
      <p>ENDEREÇO</p>
        <input type="text" value={address} placeholder="Endereço" disabled />
        <br />
        <p>CIDADE</p>
        <input type="text" value={city} placeholder="Cidade" disabled />
        <br />
        <p>ESTADO</p>
        <input type="text" value={state} placeholder="Estado" disabled />
        <br />
        <p>COMPLEMENTO</p>
        <input type="text" placeholder="Complemento" />
      </form>
    </div>
  );
};

export default CepSearch;







