import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import './Payment.css';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import emailjs from '@emailjs/browser'
import {Link} from 'react-router-dom'


export default function Payment({cep, address, city, state, number, complemento, onPreviousStep, cartItems, total}) {
  const [nomeCartao, setNomeCartao] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [exp_month, setExp_month] = useState('');
  const [exp_year, setExp_year] = useState('');
  const [cvv, setCvv] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    if (
      nomeCartao === '' ||
      cpf === '' ||
      email === '' ||
      numeroCartao === '' ||
      exp_month === '' ||
      exp_year === '' ||
      cvv === ''
    ) {
      alert('Preencha todos os campos');
      return;
    }

    sendEmail();
    event.preventDefault();

    const itemTitle = cartItems.map((item) => item.title);
    const itemPrice = cartItems.map((item) => item.price)
    const totalWithoutSymbols = total.replace(/[.,]/g, '');
    const itemSize = cartItems.map((item) => item.size.size)
    const itemId = cartItems.map((item) => item.id)
    console.log(itemId)
    console.log(itemSize)
    console.log(itemPrice)
    console.log(totalWithoutSymbols)

    try {
      const response = await axios.post('http://localhost:3000/PaymentController', {
        nomeCartao,
        cpf,
        email,
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
        itemPrice,
        totalWithoutSymbols, 
        itemSize, 
        itemId
      });

      console.log(response);
      console.log(response.id);
      if(response.status === 200){
        localStorage.setItem("paymentId", JSON.stringify({ id : response.id }));
        setPaymentSuccess(true)
      }
    } catch (error) {
    }
    function sendEmail(){
      const itemTitle = cartItems.map((item) => item.title);
      const itemSize = cartItems.map((item) => item.size.size);
      const itemPrice = cartItems.map((item) => item.price);
      const totalWithoutSymbols = total.replace(/[.,]/g, '');
      const itemId = cartItems.map((item) => item.id)

      const message = `
       Id: ${itemId}.
       Produtos: ${itemTitle}. 
       Sizes: ${itemSize}. 
       Preço: ${itemPrice}.
       Total: ${totalWithoutSymbols}, dois ultimos número sendo os centávos.
       Endereço: ${address}, ${city}, ${state}, Número: ${number}, Complemento: ${complemento}, ${cep}.
       `
      const templateParams = {
        from_name: nomeCartao,
        message: message ,
        email: email,
      }
      emailjs.send("service_5gqygbm", "template_o4xviem", templateParams, "whjzz6VfAbbzUVi53" )
      .then((response) => {
        console.log('email enviado', response.status, response.text)
        setNomeCartao('')
        setCpf('')
        setCvv('')
        setEmail('')
        setExp_month('')
        setExp_year('')
        setNumeroCartao('')
      }, (erro) =>{
        console.log("ERRO: ", erro)
      })
    }

  };
  const handleBack = () => {
    onPreviousStep(); 
  };

  return (
    <React.Fragment>
      {paymentSuccess ? (
      <div className='paymentConfirmed'>
        <CheckCircleRoundedIcon size="large" className='svg-Icon'/>
        <h2>Pagamento realizado com sucesso!</h2>
        <p>Olá, seu pagamento foi realizado com sucesso e logo sera entregue!</p>
        <p> Valor: R$ {total}</p>
        <Link to='/'>Voltar</Link>
      </div>
    ) : (
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
            autoComplete="Name"
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
            autoComplete="Cpf"
            variant="standard"
          />
        </Grid> 
        <Grid item xs={12} md={6}>
          <TextField
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            label="Email"
            fullWidth
            autoComplete="Email"
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
       )}
    </React.Fragment>
  );
}









