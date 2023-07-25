import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import axios from 'axios';
import './consultaCep.css'

export default function ConsultaCep({ onSubmit, onNextStep }) {
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

      setAddress(data.logradouro);
      setCity(data.localidade);
      setState(data.uf);
      const cepWithoutSpecialChars = cep.replace(/[-/]/g, '');

      onSubmit({
        cep: cepWithoutSpecialChars,
        address: data.logradouro,
        city: data.localidade,
        state: data.uf,
        number: number,
        complemento: complemento,
      });
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  };

  const handleNext = () => {
    if (
      cep === '' ||
      address === '' ||
      state === '' ||
      city === '' ||
      number === '' ||
      complemento === '' 
    ) {
      alert('Preencha todos os campos');
      return;
    }
    searchCep(); // Chama a função de busca do CEP
    onNextStep();
  };

  return (
    <React.Fragment>
      <Grid className='containerForm'>
        <Typography variant="h6" gutterBottom>
          Entrega
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={0} sm={3}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Nome Completo"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid className='flex'>
            <TextField
              required
              label="CEP"
              fullWidth
              variant="standard"
              value={cep}
              onChange={handleCepChange}
              item xs={0} sm={3}
            />
            <button type="button" onClick={searchCep}><SearchOutlinedIcon /></button>
          </Grid>
          <Grid item xs={0} sm={3}>
            <TextField
              value={address}
              name="address"
              label="Address"
              fullWidth
              variant="standard"
              disabled
            />
          </Grid>
          <Grid item xs={0} sm={4}>
            <TextField
              value={city}
              label="Cidade"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
              disabled
            />
          </Grid>
          <Grid item xs={0} sm={4}>
            <TextField
              label="Estado"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              value={state}
              disabled
            />
          </Grid>
          <Grid item xs={0} sm={2}>
            <TextField
              required
              value={number}
              onChange={handleNumberChange}
              autoComplete="number"
              label="Número"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={0} sm={3}>
            <TextField
              required
              value={complemento}
              onChange={handleComplementoChange}
              label="Complemento"
              autoComplete="complement"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Button variant="contained" onClick={handleNext} size="small" endIcon={<SendIcon />}>
            Próximo
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}


















