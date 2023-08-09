import React, { useState, useEffect } from 'react';
import { firestore, firebase } from '../services/firebase'; 
import useAuth from '../Hooks/useAuth';
import './styles.css'

const Cadastro = () => {

  const { user } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = user?.id;
    if (userId) {
      const userRef = firestore.collection('users').doc(userId);
      const unsubscribe = userRef.onSnapshot((doc) => {
        if (doc.exists) {
          setUserData(doc.data());
        }
      });
  
      return () => unsubscribe();
    } else {
      setUserData(null);
    }
  }, [user]);
  const recoverPassword = () => {
    firebase.auth().sendPasswordResetEmail(userData.email).then(()=> {
      alert('Email enviado com sucesso')
    }).catch(error => {
      alert("Não foi possivel recuperar a senha" + error.message)
    })
  }
  if (!userData) {
    return <div>Carregando...</div>;
  }

  return ( 
    <div className='form'>
        <div className="form-cadastro">
          <label>Nome</label>
          <input placeholder={userData.name} disabled/>
        </div>
        <div className="form-cadastro">
          <label>Email</label>
          <input placeholder={userData.email} disabled/>
        </div>
        <div className="form-cadastro">
          <label>Data de nascimento</label>
          <input placeholder={userData.dataNasc} disabled/>
        </div>
        <button onClick={()=>{recoverPassword()}} >Recuperar Senha</button>
    </div>
   );
}
 
export default Cadastro;