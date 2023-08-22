import { useState, useEffect } from "react";
import * as React from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import useAuth from "../Hooks/useAuth";
import { firebase, auth, firestore } from "../services/firebase";
import { Link } from "react-router-dom";
import { usePaymentContext } from "../Context/PaymentContext";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import "./styles.css";

const Pix = ({
  cep,
  address,
  city,
  state,
  number,
  complemento,
  cartItems,
  total,
}) => {
  const { user, setUser } = useAuth();
  console.log(user);
  const userId = user?.id;

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { setPaymentInfo } = usePaymentContext();
  const [qrCodeText, setQrCodeText] = useState("");
  const [linkCodeText, setLinkCodeText] = useState("");
  const [idCompra, setIdCompra] = useState("");

  const handleSubmit = async (event) => {
    if (nome === "" || cpf === "" || email === "") {
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
      const response = await axios.post("http://localhost:3000/PaymentPix", {
        nome,
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
      });

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
        await purchasesCollection.add(purchaseData);
        localStorage.setItem("paymentId", JSON.stringify({ id: response.id }));
        setPaymentSuccess(true);
        setPaymentInfo({
          nome,
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
        console.log(response.data.qrCodeLinks);
        console.log(response.data.qrCodeText);
        setQrCodeText(response.data.qrCodeLinks[0].href);
        setLinkCodeText(response.data.qrCodeText);
        setIdCompra(response.data.id);
      }
    } catch (error) {
      alert("Erro ao realizar a compra" + error.message);
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
        from_name: nome,
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
            setNome("");
            setCpf("");
            setEmail("");
          },
          (erro) => {
            console.log("ERRO: ", erro);
          }
        );
    }
  };

  return (
    <React.Fragment>
      {paymentSuccess ? (
        <div className="paymentConfirmed">
          <CheckCircleRoundedIcon size="large" className="svg-Icon" />
          <h2>Pedido realizado com sucesso!</h2>
          <p>Olá, seu pedido foi realizado com sucesso e logo sera entregue!</p>
          <p>
            {" "}
            Valor: R${" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(total)}
          </p>
          <p>ID da compra: {idCompra}</p>
          <img src={qrCodeText} alt="QR Code" />
          <p className="copiaEcola">{linkCodeText}</p>
          <Link to="/">Voltar</Link>
        </div>
      ) : (
        <div className="creditCardContainer">
          <form className="creditForm">
            <div class="input_container">
              <label class="input_label">Nome</label>
              <input
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                name="input-name"
                placeholder="Nome completo"
                autoComplete="name"
              />
            </div>
            <div class="input_container">
              <label class="input_label">CPF</label>
              <input
                type="text"
                name="input-cpf"
                value={cpf}
                onChange={(event) => setCpf(event.target.value)}
                placeholder="CPF"
                autoComplete="cpf"
              />
            </div>
            <div class="input_container">
              <label class="input_label">Email</label>
              <input
                type="text"
                name="input-email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Seu email"
                autoComplete="email"
              />
            </div>
            <div className="buttonPay">
              <button onClick={handleSubmit}>Pagar</button>
            </div>
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default Pix;
