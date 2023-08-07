import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {useState, useEffect} from 'react'
import LoginModal from '../Login/LoginModal';
import SideBar from '../SideBar/index';
import './styles.css'

const Header = () => {
  const [sideBarMobile, setSideBarMobile] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false);

  const showSiderBarMobile = () => setSideBarMobile(!sideBarMobile)

  const handleClick = () => {
    setShowLoginModal(true);
  };
  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  return (
    <div className='Header'>
      <AiOutlineMenu onClick={showSiderBarMobile}/>
      {sideBarMobile && <SideBar active={setSideBarMobile} onLoginClick={handleClick}/>}
      {showLoginModal && <LoginModal onClose={handleCloseModal} />}
    </div>
  );
}

export default Header;
