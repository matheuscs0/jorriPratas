import { Link } from "react-router-dom";
import {GiPadlock} from 'react-icons/gi'
import './Nav.css'

const Nav = () => {
  return (
       <nav className="navBar">
          <Link to="/">
            <div className="logo">
              <img src="../public/imgs/Logo/logo_jorri.png" alt="" />
            </div>
           </Link>
           <div className="security">
            <GiPadlock/> <p>Ambiente 100% Seguro</p>
           </div>
      </nav>
  );
}

export default Nav;
