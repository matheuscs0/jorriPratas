import React from 'react';
import { MdClose } from 'react-icons/md';
import { FcGoogle} from 'react-icons/fc'
import {IoMdArrowBack} from 'react-icons/io'

const Sign = ({ onClose, onGoBack }) => {
  const handleCloseModal = () => {
    onClose();
  };

  const handleGoBack = () => {
    onGoBack();
  };

  return (
    <div className="containerLogin">
      <div className="LoginForm">
        <div className="form-container1">
          <div className="close-button1">
          <IoMdArrowBack onClick={handleGoBack}/>
            <MdClose onClick={handleCloseModal} />
          </div>
          <div className="logo-container">
                  <img src="../public/imgs/Logo/logo_jorri.png" alt="Logo" />
          </div>
          <div className="social-buttons">
            <button className="social-button facebook">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
              </svg>
              <span>Inscreva-se com o Facebook</span>
            </button>
            <button className="social-button apple">
              <FcGoogle/>
              <span>Increva-se com o Google</span>
            </button>
          </div>
          <div className="line"></div>
          <form className="form" id='login'>
            <div className="form-group">
              <label htmlFor="password">Nome</label>
              <input required="" name="nome" placeholder="Seu nome" id="nome" type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input required="" placeholder="Email" name="email" id="email" type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input required="" name="password" placeholder="Senha" id="password" type="password" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Data de nascimento</label>
              <input required="" name="DataNasc" placeholder="Sua data de nascimento" id="DataNasc" type="date" />
            </div>
            <button type="submit" className="form-submit-btn">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sign;

