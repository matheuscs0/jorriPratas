import { useState } from 'react'
import ColarSwiper from '../components/ColarSwiper'
import DropdownMenu from '../components/DropdownMenu'
import NavBar from '../components/NavBar'
import FooterDetails from '../components/footerDetails'
import NavFreteGratis from '../components/navFreteGratis'
import LoginModal from '../components/LoginModal'

const Home = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };
  return (
    <div className="container">
        <NavFreteGratis/>
        <NavBar onLoginClick={handleClick}/>
      {showLoginModal && <LoginModal onClose={handleCloseModal} />}
        <DropdownMenu/>
        <ColarSwiper/>
        <FooterDetails/>
    </div>
    
    
  )
}

export default Home