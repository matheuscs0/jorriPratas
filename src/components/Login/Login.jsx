import  { useEffect, useState } from 'react';
import './Login.css';
import { MdClose } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import Sign from './Sign';
import { validarEmail, validarSenha } from '../Utils/validadores';
import {firebase, auth} from '../services/firebase'
import useAuth from '../Hooks/useAuth'
import { useNavigate } from 'react-router-dom';

const Login = ({ onClose}) => {
  const [showModal, setShowModal] = useState(true);
  const [showLogin, setShowLogin] = useState(true);
  const [form, setForm] = useState([])
  
  const {user, setUser} = useAuth()
  const navigate = useNavigate();
  console.log(user)

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

  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      if(user){
        const {uid, displayName, email, photoURL} = user
        setUser({
          id: uid,
          photo: photoURL,
          name:displayName || user.name,
          email: email
        })
      }
      })
  },[])
  console.log(user)
  const handleClickButtonLoginGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider
    const result = await auth.signInWithPopup(provider)
    if(result.user){
      const {uid, displayName, email, photoURL} = result.user
      setUser({
        id: uid,
        photo: photoURL,
        name:displayName,
        email: email
      })
      if (user) {
        navigate('/profile');
        alert('Login realizado com sucesso!');
      } else {
        alert('Erro ao fazer o cadastro: ' + error.message);
      }
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!validadorInput()) {
      alert('Por favor, preencha os campos corretamente.');
      return;
    }
  
    try {
      const result = await auth.signInWithEmailAndPassword(form.email, form.password);
      if (result.user) {
        const { uid, email, photoURL, nameFromForm } = result.user;
        setUser({
          id: uid,
          photo: photoURL,
          name: user.name, // Usar form.nome se estiver disponível, caso contrário, usar displayName do login
          email: email,
        });
        alert('Login realizado com sucesso!');
        navigate('/profile')
      }
    } catch (error) {
      alert('Erro ao fazer login: ' + error.message);
    }
  };
  
  

  const handleChange = (event) => {
    console.log('Digitando', event.target.name, event.target.value)
    setForm({...form, [event.target.name]: event.target.value})
    console.log('Form', form)
  }

  const validadorInput = () => {
    return validarEmail(form.email) && validarSenha(form.password)
  }

  console.log('validador', validadorInput())

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
                    <button className="social-button apple"  onClick={handleClickButtonLoginGoogle}>
                      <FcGoogle/>
                      <span>Log in com o Google</span>
                    </button>
                  </div>
                  <div className="line"></div>
                  <form className="form" id='login'>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input required placeholder="Email" name="email" id="email" type="text" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Senha</label>
                      <input required name="password" placeholder="Senha" id="password" type="password" onChange={handleChange}/>
                    </div>
                    <button type="submit" className="form-submit-btn" onClick={handleSubmit}>Log In</button>
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
