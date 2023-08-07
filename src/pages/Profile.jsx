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
import {useState, useEffect} from 'react'
import { firestore } from '../components/services/firebase';

const Profile = ({}) => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = user?.id;
    
    if (userId) {
      const userRef = firestore.collection('users').doc(userId);
      const unsubscribe = userRef.onSnapshot((doc) => {
        if (doc.exists) {
          setUserData(doc.data());
        } else {
          setUserData(null);
        }
      });
      return () => unsubscribe();
    } else {
      setUserData(null);
    }
  }, [user]);
  console.log(userData)
  if (!userData) {
    return <div>Carregando...</div>
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
              <h1>Olá, {userData.name}</h1> <img src={userData.photo} alt="" />
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

