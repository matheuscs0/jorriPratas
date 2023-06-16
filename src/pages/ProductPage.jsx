import { useParams } from "react-router-dom";
import './ProductPage.css'
import Colar from '../components/Colar'
import Pulseiras from '../components/Pulseiras'
import Tornozeleiras from '../components/Tornozeleira'
import DropdownMenu from "../components/DropdownMenu";
import NavFreteGratis from "../components/navFreteGratis";
import NavBar from "../components/NavBar";

const ProductPage = () => {
  const { type } = useParams();

  // Renderiza os produtos com base no tipo selecionado
  const renderProducts = () => {
    switch (type) {
      case "colares":
        return <Colar/>;
      case "pulseiras":
        return <Pulseiras/>;
      case "tornozeleiras":
        return <Tornozeleiras/>;
      default:
        return null;
    }
  };

  return (
<div className="gridProduct">
  <NavFreteGratis/>
  <NavBar/>
  <DropdownMenu/>
  {renderProducts()}</div>
  ) 
  
};

export default ProductPage;
