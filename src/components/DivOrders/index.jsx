import React, { useState, useEffect } from 'react';
import { firestore } from '../services/firebase'; 
import useAuth from '../Hooks/useAuth';
import './styles.css'

const UserProfile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [purchasesData, setPurchasesData] = useState([]);

  useEffect(() => {
    const userId = user?.id;
    if (userId) {
      const userRef = firestore.collection('users').doc(userId);
      const unsubscribe = userRef.onSnapshot((doc) => {
        if (doc.exists) {
          setUserData(doc.data());
  
          const purchasesCollection = userRef.collection('purchases');
          purchasesCollection.get().then((querySnapshot) => {
            const purchases = querySnapshot.docs.map((doc) => doc.data());
            setPurchasesData(purchases); // Atualiza o estado com os dados das compras
          });
        } else {
          setUserData(null);
        }
      });
  
      return () => unsubscribe();
    } else {
      setUserData(null);
    }
  }, [user]);
  

  if (!userData) {
    return <div>Carregando...</div>;
  }


  return (
    <div className='ContainerInfoOrder'>
    <h1>Ultimos pedidos</h1>
    <div className='Orders'>
      <div className="infoProfile">
        <h2>Perfil do Usuário</h2>
        <p>Nome: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    {purchasesData.map((purchase, index) => (
      <div key={index} className='Order'>
        <div className="infos">
        <div className='infoImg'>
          <img src={purchase.poster_path} alt="" />
        </div>
        <div className="infoOrder">
          <div className="infoTitle">
            <p>Produto: {purchase.itemTitle}</p>
            <p>Tamanho: {purchase.itemSize}</p>
            <p>ID: {purchase.itemId}</p>
          </div>  
          <div className="infoPrice">
            <p>Valor unitário: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(purchase.itemPrice)}</p>
            <p>Subtotal:{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(purchase.itemPrice)}</p>
          </div>
        </div>
        </div>
        <div className="infoAddress">
          <p>{purchase.address}, {purchase.number}, {purchase.complemento}, {purchase.city}, {purchase.state}, CEP: {purchase.cep}</p>
        </div>
      </div>
    ))}
  </div>
  </div>
  );
};

export default UserProfile;



