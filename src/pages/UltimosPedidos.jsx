import React from 'react';
import NavFreteGratis from '../components/navFreteGratis/navFreteGratis';
import NavBar from '../components/NavBar/NavBar';
import useAuth from '../components/Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import DivOrders from '../components/DivOrders';


const Orders = () => {

  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  console.log(user);

  if (!user) {
    return navigate('/'); // Redireciona para a página de login caso o usuário não esteja autenticado
  }

  return (
    <div>
      <NavFreteGratis />
      <NavBar />
     <DivOrders/>
    </div>
  );
};

export default Orders;
