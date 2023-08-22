import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Payment.css";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { firebase, auth, firestore } from "../services/firebase";
import Pix from "../Pix/index";
import Boleto from "../Boleto";
import { usePaymentContext } from '../Context/PaymentContext';
import PixIcon from '@mui/icons-material/Pix';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export default function Payment({
  cep,
  address,
  city,
  state,
  number,
  complemento,
  onPreviousStep,
  cartItems,
  total,
}) {
  const { user, setUser } = useAuth();
  console.log(user);
  const userId = user?.id;

  const [nomeCartao, setNomeCartao] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [exp_month, setExp_month] = useState("");
  const [exp_year, setExp_year] = useState("");
  const [cvv, setCvv] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const { setPaymentInfo } = usePaymentContext();
  const { paymentInfo } = usePaymentContext();
  const [idCompra, setIdCompra] = useState('')

  const handleSubmit = async (event) => {
    if (
      nomeCartao === "" ||
      cpf === "" ||
      email === "" ||
      numeroCartao === "" ||
      exp_month === "" ||
      exp_year === "" ||
      cvv === ""
    ) {
      alert("Preencha todos os campos");
      return;
    }

    sendEmail();
    event.preventDefault();

    const itemTitle = cartItems.map((item) => item.title);
    const itemPrice = cartItems.map((item) => item.price);
    const totalWithoutSymbols = total.replace(/[.,]/g, "");
    const itemSize = cartItems.map((item) => item.size.size);
    const itemId = cartItems.map((item) => item.id);
    const poster_path = cartItems.map((item) => item.poster_path);
    console.log(itemId);
    console.log(itemSize);
    console.log(itemPrice);
    console.log(totalWithoutSymbols);

    try {
      const response = await axios.post(
        "http://localhost:3000/PaymentCreditCard",
        {
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
          itemId,
        }
      );

      console.log(response);
      if (response.status === 200) {
        const purchaseData = {
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
          itemId,
          poster_path,
        };

        const userRef = firestore.collection("users").doc(userId);
        const purchasesCollection = userRef.collection("purchases"); // Referência à subcoleção "purchases"
        await purchasesCollection.add(purchaseData); // Adiciona um novo documento à subcoleção

        localStorage.setItem("paymentId", JSON.stringify({ id: response.id }));
        setPaymentSuccess(true);
        setPaymentInfo({
          nomeCartao,
          cpf,
          email,
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
          itemId,
          poster_path,
        });
      }
      console.log('Id da compra', response.data.id);
      setIdCompra(response.data.id)
    } catch (error) {
      alert("Pagamento recusado");
    }
    function sendEmail() {
      const itemTitle = cartItems.map((item) => item.title);
      const itemSize = cartItems.map((item) => item.size.size);
      const itemPrice = cartItems.map((item) => item.price);
      const totalWithoutSymbols = total.replace(/[.,]/g, "");
      const itemId = cartItems.map((item) => item.id);

      const message = `
       Id: ${itemId}.
       Produtos: ${itemTitle}. 
       Sizes: ${itemSize}. 
       Preço: ${itemPrice}.
       Total: ${totalWithoutSymbols}, dois ultimos número sendo os centávos.
       Endereço: ${address}, ${city}, ${state}, Número: ${number}, Complemento: ${complemento}, ${cep}.
       `;
      const templateParams = {
        from_name: nomeCartao,
        message: message,
        email: email,
      };
      emailjs
        .send(
          "service_5gqygbm",
          "template_o4xviem",
          templateParams,
          "whjzz6VfAbbzUVi53"
        )
        .then(
          (response) => {
            console.log("email enviado", response.status, response.text);
            setNomeCartao("");
            setCpf("");
            setCvv("");
            setEmail("");
            setExp_month("");
            setExp_year("");
            setNumeroCartao("");
          },
          (erro) => {
            console.log("ERRO: ", erro);
          }
        );
    }
  };
  const handleBack = () => {
    onPreviousStep();
  };

  return (
    <React.Fragment>
      <div className="containerPay">
      {paymentSuccess ? (
        <div className="paymentConfirmed">
          <CheckCircleRoundedIcon size="large" className="svg-Icon" />
          <h2>Pagamento realizado com sucesso!</h2>
          <p>
            Olá, seu pagamento foi realizado com sucesso e logo sera entregue!
          </p>
          <p>ID da compra: {idCompra}</p>
          <p>
            {" "}
            Valor: R${" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(total)}
          </p>
          <Link to="/">Voltar</Link>
        </div>
      ) : (
        <div className="containerPayment">
          <div className="back">
            <button onClick={handleBack}><ArrowBackIosIcon/></button>
          </div>
            <div className="methodsPayment">
            <div className="method">
                <button
                  onClick={() => setPaymentMethod("credit_card")}
                ><h4>Cartão de crédito</h4> <CreditCardIcon/></button>
              </div>
              <div className="method">
                <button
                  onClick={() => setPaymentMethod("pix")}
                ><h3>Pix</h3> <PixIcon/></button>
              </div>
              <div className="method">
                <button
                  onClick={() => setPaymentMethod("boleto")}
                ><h3>Boleto</h3> <svg fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 297 297"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <rect width="33" y="49.5" height="198"></rect> <rect width="33" x="83" y="49.5" height="198"></rect> <rect width="33" x="133" y="49.5" height="198"></rect> <rect width="49" x="248" y="49.5" height="198"></rect> <rect width="16" x="50" y="49.5" height="198"></rect> <rect width="16" x="182" y="49.5" height="198"></rect> <rect width="16" x="215" y="49.5" height="198"></rect> </g> </g></svg></button>
              </div>
            </div>
            <div className="separation">
              <hr /> <p>Ou pague usando cartão de credito</p> <hr />
            </div>
          {paymentMethod === "credit_card" && (
              <div className="creditCardContainer"> 
                <form className="creditForm">
                  <div class="input_container">
                  <label class="input_label">Nome no cartão</label>
                    <input type="text" value={nomeCartao} onChange={(event) => setNomeCartao(event.target.value)} name="input-name" placeholder="Nome no cartão" autoComplete="name"/>
                  </div>
                  <div class="input_container">
                  <label class="input_label">Número do cartão</label>
                  <input type="text" name="input-number" value={numeroCartao} onChange={(event) => setNumeroCartao(event.target.value)} placeholder="Número do cartão"/>
                  </div>
                  <div class="input_container">
                  <label class="input_label">CPF</label>
                  <input type="text" name="input-number" value={cpf} onChange={(event) => setCpf(event.target.value)} placeholder="CPF" autoComplete="cpf"/>
                  </div>
                  <div class="input_container">
                  <label class="input_label">Email</label>
                  <input type="text" name="input-number" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email"/>
                  </div>
                  <div className="flexContainner">
                  <div class="input_container">
                  <label class="input_label">Mês de validade</label>
                  <input type="text" name="input-name" value={exp_month} onChange={(event) => setExp_month(event.target.value)} placeholder="MM"/>
                  </div>
                  <div class="input_container">
                  <label class="input_label">Ano de validade</label>
                  <input type="text" name="input-name" value={exp_year} onChange={(event) => setExp_year(event.target.value)} placeholder="AAAA"/>
                  </div>
                  <div class="input_container">
                  <label class="input_label">CVV</label>
                  <input type="text" name="input-name" value={cvv} onChange={(event) => setCvv(event.target.value)} placeholder="CVV"/>
                  </div>
                  </div>
                  <div className="buttonPay">
                    <button onClick={handleSubmit}>Pagar</button>
                  </div>
                </form>
              </div>
          )}
          {paymentMethod === "pix" && (
            <div container spacing={3}>
              <Pix 
                cep={cep}
                address={address}
                number={number}
                complemento={complemento}
                city={city}
                state={state}
                cartItems={cartItems}
                total={total}
              />
            </div>
          )}
          {paymentMethod === "boleto" && (
            <div>
              <Boleto 
                cep={cep}
                address={address}
                number={number}
                complemento={complemento}
                city={city}
                state={state}
                cartItems={cartItems}
                total={total}
              />
            </div>
          )}
          </div>
      )}
      </div>
    </React.Fragment>
  );
}
