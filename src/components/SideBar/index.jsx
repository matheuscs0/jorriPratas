import React from 'react';
import {AiOutlineClose} from 'react-icons/ai'
import './styles.css'
import { Link } from 'react-router-dom';
import {VscAccount} from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const SideBar = ({active, onLoginClick}) => {
  const {user, setUser} = useAuth()
  const navigate = useNavigate();
  const CloseSideBar = () => {
    active(false)
  }

  const handleAccountClick = () => {
    if (user) {
      navigate('/profile'); // Redireciona para /profile se o usuário estiver logado
    } else {
      onLoginClick(); // Abre o onLoginClick para o usuário logar ou criar uma conta
    }
  };

  return (
    <div className='ContainerSidebar' sidebar={active}>
      <div className='close'>
        <AiOutlineClose onClick={CloseSideBar}/>
      </div>  
      <div className="DropdownLi2"> 
        <Link to="/products/colares">
          <li>Colares</li>
        </Link>
       <Link to="/products/pulseiras">
        <li>Pulseiras</li>
       </Link>
       <Link to="/products/tornozeleiras">
        <li>Tornozeleiras</li>
       </Link>
       <Link to='/products/aneis'>
        <li>Anéis</li>
       </Link>
       <Link to='/products/brincos'>
       <li>Brincos</li>
       </Link>
       <Link >
       <li onClick={handleAccountClick}><VscAccount onClick={handleAccountClick}/> Minha Conta</li>
       </Link>
      </div>
    </div>
  );
}

export default SideBar;
