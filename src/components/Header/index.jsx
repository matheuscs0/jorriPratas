import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {useState, useEffect} from 'react'
import SideBar from '../SideBar/index';
import './styles.css'

const Header = () => {
  const [sideBarMobile, setSideBarMobile] = useState(false)

  const showSiderBarMobile = () => setSideBarMobile(!sideBarMobile)

  return (
    <div className='Header'>
      <AiOutlineMenu onClick={showSiderBarMobile}/>
      {sideBarMobile && <SideBar active={setSideBarMobile}/>}
    </div>
  );
}

export default Header;
