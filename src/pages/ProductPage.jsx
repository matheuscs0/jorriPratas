import { useParams } from "react-router-dom";
import "./css/ProductPage.css";
import Colar from "../components/Catalogos/Colar";
import Pulseiras from "../components/Catalogos/Pulseiras";
import Tornozeleira from "../components/Catalogos/Tornozeleira";
import GridImagens from "../components/GridImagens";
import NavFreteGratis from "../components/navFreteGratis/navFreteGratis";
import NavBar from "../components/NavBar/NavBar";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import LoginModal from "../components/Login/LoginModal";
import Aneis from "../components/Catalogos/Aneis";
import Brincos from "../components/Catalogos/Brincos";
import CarrinhoDeCompras from "../components/CarrinhoDeCompras/CarrinhoDeCompras";
import FooterPayment from "../components/FooterPaymentMethods";
import Footer from "../components/Footer";
import useAuth from "../components/Hooks/useAuth";
import Signos from "../components/Catalogos/Signos";

const ProductPage = () => {
  const { user, setUser } = useAuth();
  console.log(user);

  const { type } = useParams();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const storedCartItems = Cookies.get("cartItems");
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      if (parsedCartItems.length > 0) {
        setCartItems(parsedCartItems);
      }
    }
  }, []);

  useEffect(() => {
    Cookies.set("cartItems", JSON.stringify(cartItems), { expires: 7 });
  }, [cartItems]);

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
  const handleRemoveFromCart = (itemId) => {
    const newItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newItems);
    Cookies.set("cartItems", JSON.stringify(newItems), { expires: 7 });
  };
  // Renderiza os produtos com base no tipo selecionado
  const renderProducts = () => {
    switch (type) {
      case "colares":
        return <Colar />;
      case "pulseiras":
        return <Pulseiras />;
      case "tornozeleiras":
        return <Tornozeleira />;
      case "aneis":
        return <Aneis />;
      case "brincos":
        return <Brincos />;
        case "signos":
        return <Signos />;
      default:
        return null;
    }
  };

  return (
    <div className="gridProduct">
      <NavFreteGratis />
      <NavBar
        onLoginClick={handleClick}
        onOpenSidebar={handleOpenSidebar}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      {showLoginModal && <LoginModal onClose={handleCloseModal} />}
      <div className="dropdownMenu">
        <GridImagens />
      </div>
      {showSidebar && cartItems.length > 0 && (
        <div className="sidebar">
          <CarrinhoDeCompras
            cartItems={cartItems}
            onRemove={handleRemoveFromCart}
            onClose={handleCloseSidebar}
          />
        </div>
      )}
      {renderProducts()}
      <FooterPayment />
      <Footer />
    </div>
  );
};

export default ProductPage;
