import React from 'react';
import './css/Profile.css'
import useAuth from '../components/Hooks/useAuth';
import NavFreteGratis from '../components/navFreteGratis/navFreteGratis';
import NavBar from '../components/NavBar/NavBar';
import GridImagens from '../components/GridImagens';
import { useNavigate } from 'react-router-dom';
import FooterPayment from '../components/FooterPaymentMethods';
import Footer from '../components/Footer';
import DivProfile from '../components/DivsProfile';

const Profile = ({}) => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate()
  console.log(user)

  if (!user) {
  return navigate("/"); // Redireciona para a página de login caso o usuário não esteja autenticado
  }

  return (
    <div className='containerProfile'>
      <NavFreteGratis/>
      <NavBar/>
      <GridImagens/>
      <div className="profileContainer">
          <div className="profiletitle">
            <h1>Minha conta</h1>
            <p>Veja as opções da sua conta</p>
          </div>
          <div className="divsProfile">
            <div className="titleProfile">
              <h1>Olá, {user.name}</h1> <img src={user.photo} alt="" />
            </div>
              <DivProfile/>
          </div>
      </div>
      <FooterPayment/>
      <Footer/>
    </div>
  );
};

export default Profile;

