import React, { useState } from 'react';
import axios from 'axios';
import {BiSearchAlt2} from 'react-icons/bi'

const CepSearch = ({ onSubmit }) => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [number, setNumber] = useState('');
  const [complemento, setComplemento] = useState('');

  const handleCepChange = (event) => {
    const newCep = event.target.value;
    setCep(newCep);
  };

  const handleNumberChange = (event) => {
    const newNumber = event.target.value;
    setNumber(newNumber);
  };

  const handleComplementoChange = (event) => {
    const newComplemento = event.target.value;
    setComplemento(newComplemento);
  };

  const searchCep = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { data } = response;
      console.log(data)

      setAddress(data.logradouro);
      setCity(data.localidade);
      setState(data.uf);

      onSubmit({ cep: data.cep, address: data.logradouro, city: data.localidade, state: data.uf, number: number, complemento: complemento });
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ cep: cep,
      address: address,
      city: city,
      state: state,
      number: number,
      complemento: complemento, });
  };

  return (
    <div className='containerForm'>
      <h3>Entrega</h3>
      <form className='formCep' onSubmit={handleSubmit}>
        <p>CEP</p>
        <div className='flex'>
          <input type="text" value={cep} onChange={handleCepChange} placeholder="Digite o CEP" />
          <button type="button" onClick={searchCep}><BiSearchAlt2 /></button>
        </div>
        <p><a href="https://buscacepinter.correios.com.br/app/endereco/index.php?t" target="_blank" rel="noopener noreferrer">Não sei meu cep</a></p>
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
        <p>NÚMERO</p>
        <input type="text" value={number} onChange={handleNumberChange} placeholder="Número" />
        <p>COMPLEMENTO</p>
        <input type="text" value={complemento} onChange={handleComplementoChange} placeholder="Complemento" />
      </form>
    </div>
  );
};

export default CepSearch;
















