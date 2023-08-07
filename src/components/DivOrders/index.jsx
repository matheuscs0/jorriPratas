import React, { useState, useEffect } from 'react';
import { firestore } from '../services/firebase'; 
import useAuth from '../Hooks/useAuth';

const UserProfile = () => {
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

  if (!userData) {
    return <div>Carregando...</div>;
  }


  return (
    <div className='DivOrder'>
      <div className='upDiv'>
        <img src={userData.poster_path} alt="" /> 
        <div className="infoOrder">
          <h4>{userData.itemTitle}</h4>
          <p>Tamanho: {userData.itemSize}</p>
          <p>ID: {userData.itemId}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;



