import React from 'react';
import {AiOutlineClose} from 'react-icons/ai'
import './styles.css'
import { Link } from 'react-router-dom';
import {VscAccount} from 'react-icons/vsc'

const SideBar = ({active}) => {
  const CloseSideBar = () => {
    active(false)
  }

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
      </div>
      <div className='account'>
        <VscAccount/> 
        <p>Minha Conta</p>
      </div>
    </div>
  );
}

export default SideBar;
