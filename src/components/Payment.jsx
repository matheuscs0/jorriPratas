import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import './css/Payment.css'


export default function Payment({cep, address, city, state, number, complemento, onPreviousStep, cartItems, total}) {
  const [nomeCartao, setNomeCartao] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [exp_month, setExp_month] = useState('');
  const [exp_year, setExp_year] = useState('');
  const [cvv, setCvv] = useState('');
  const [cpf, setCpf] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const itemTitle = cartItems.map((item) => item.title);
    const totalWithoutSymbols = total.replace(/[.,]/g, '');
    console.log(totalWithoutSymbols)

    try {
      const response = await axios.post('http://localhost:3000/PaymentController', {
        nomeCartao,
        cpf,
        numeroCartao,
        exp_month,
        exp_year,
        cep,
        address,
        city,
        state,
        number, 
        complemento,
        itemTitle, 
        totalWithoutSymbols
      });

      console.log(response);
      console.log(response.data.id);
    } catch (error) {
      console.error('Erro ao enviar pagamento:', error);
    }
  };
  const handleBack = () => {
    onPreviousStep(); // Chama a função para voltar para a etapa anterior
  };
  
  return (
    <React.Fragment>
      <Grid className='containerPayment'>
      <Typography variant="h6" gutterBottom>
        Pagamento
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            value={nomeCartao}
            onChange={(event) => setNomeCartao(event.target.value)}
            label="Nome no cartão"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
            label="CPF"
            fullWidth
            autoComplete="cpf"
            variant="standard"
          />
        </Grid>        
        <Grid item xs={12} md={6}>
          <TextField
            required
            value={numeroCartao} 
            onChange={(event) => setNumeroCartao(event.target.value)}
            label="Número do cartão"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            value={exp_month} 
            onChange={(event) => setExp_month(event.target.value)}
            label="M"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            value={exp_year} 
            onChange={(event) => setExp_year(event.target.value)}
            label="YYYY"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            value={cvv} onChange={(event) => setCvv(event.target.value)}
            label="CVV"
            helperText="."
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
      </Grid>
      <Button variant="contained" onClick={handleBack} size='small'>
            Voltar
      </Button>
      <Button variant="contained" onClick={handleSubmit} type='submit' size='small'>Enviar pagamento</Button>
      </Grid>
    </React.Fragment>
  );
}









