import { useParams } from "react-router-dom";
import './css/ProductPage.css'
import Colar from "../components/Catalogos/Colar";
import Pulseiras from "../components/Catalogos/Pulseiras";
import Tornozeleira from '../components/Catalogos/Tornozeleira' 
import DropdownMenu from "../components/DropdownMenu";
import NavFreteGratis from "../components/navFreteGratis";
import NavBar from "../components/NavBar";
import { useState } from 'react'
import LoginModal from '../components/LoginModal'

const ProductPage = () => {
  const { type } = useParams();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };
  // Renderiza os produtos com base no tipo selecionado
  const renderProducts = () => {
    switch (type) {
      case "colares":
        return <Colar/>
      case "pulseiras":
        return <Pulseiras/>;
      case "tornozeleiras":
        return <Tornozeleira/>;
      default:
        return null;
    }
  };

  return (
<div className="gridProduct">
  <NavFreteGratis/>
  <NavBar onLoginClick={handleClick} />
      {showLoginModal && <LoginModal onClose={handleCloseModal} />}
  <DropdownMenu/>
  {renderProducts()}</div>
  ) 
  
};

export default ProductPage;
