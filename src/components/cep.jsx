import {useState, useEffect} from 'react'
import axios from 'axios';
import './css/cep.css'

const Cep = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');

  const handleCepChange = (event) => {
    const newCep = event.target.value;
    setCep(newCep);

    if (newCep === '') {
      setAddress('');
    }
  };

  const searchCep = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { data } = response;
      setAddress(data.logradouro);
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchCep();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className='formCep'>
        <p>CEP</p>
        <input type="text" value={cep} onChange={handleCepChange} placeholder="Digite o CEP" />
          <p><a href="https://buscacepinter.correios.com.br/app/endereco/index.php?t" target="_blank">Não sei meu cep</a></p>
      </form>
      <form className='formInputs'>
      <p>ENDEREÇO</p>
        <input type="text" value={address} placeholder="Endereço" disabled />
        <br />
      </form>
    </div>
  );
}

export default Cep;

