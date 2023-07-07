import {useState, useEffect} from 'react'

const Cep = () => {
  const [cep, setCep] = useState('');

  const handleCepChange = (event) => {
    const newCep = event.target.value;
    setCep(newCep);
    if (newCep === '') {
    }
  };

  const searchCep = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
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
    </div>
  );
}

export default Cep;
