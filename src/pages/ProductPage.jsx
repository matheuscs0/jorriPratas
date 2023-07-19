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
import Aneis from "../components/Catalogos/Aneis";
import Brincos from "../components/Catalogos/Brincos";

const ProductPage = () => {
  const { type } = useParams();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  
  const handleClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  const handleOpenSidebar = () => {
    if (cartItems.length > 0) {
      setShowSidebar(true);
    }
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
        case "aneis":
          return <Aneis/>
          case "brincos":
            return <Brincos/>
      default:
        return null;
    }
  };

  return (
<div className="gridProduct">
  <NavFreteGratis/>
  <NavBar
        onLoginClick={handleClick}
        onOpenSidebar={handleOpenSidebar}
        cartItems={cartItems}
        setCartItems={setCartItems}
    />
      {showLoginModal && <LoginModal onClose={handleCloseModal} />}
  <DropdownMenu />
  {renderProducts()}</div>
  ) 
  
};

export default ProductPage;
