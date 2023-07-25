import React, { useState } from 'react';
import './Login.css';
import { MdClose } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import Sign from './Sign';

const Login = ({ onClose }) => {
  const [showModal, setShowModal] = useState(true);
  const [showLogin, setShowLogin] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
    onClose();
  };

  const handleShowSignUp = () => {
    setShowLogin(false);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  return (
    <div className="containerLogin">
      {showModal && (
        <div className="LoginForm">
          <div className="form-container">
            {showLogin ? (
              <div>
                <div className="close-button">
                  <MdClose onClick={handleCloseModal} />
                </div>
                <div className="logo-container">
                  <img src="../public/imgs/Logo/logo_jorri.png" alt="Logo" />
                </div>
                <div>
                  <div className="social-buttons">
                    <button className="social-button facebook">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
                      </svg>
                      <span>Log in com Facebook</span>
                    </button>
                    <button className="social-button apple">
                      <FcGoogle />
                      <span>Log in com o Google</span>
                    </button>
                  </div>
                  <div className="line"></div>
                  <form className="form">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input required="" placeholder="Email" name="email" id="email" type="text" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Senha</label>
                      <input required="" name="password" placeholder="Senha" id="password" type="password" />
                    </div>
                    <button type="submit" className="form-submit-btn">Log In</button>
                  </form>
                  <a className="forgot-password-link link" href="#">Esqueceu a senha?</a>
                  <p className="signup-link">
                    Não tem conta ainda?     <button onClick={handleShowSignUp}>Se cadastre agora</button>
                  </p>
                </div>
              </div>
            ) : (
              <Sign onClose={handleCloseModal} onGoBack={handleShowLogin} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
