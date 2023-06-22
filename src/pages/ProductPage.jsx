import { useParams } from "react-router-dom";
import './ProductPage.css'
import Colar from "../components/Catalogos/Colar";
import Pulseiras from "../components/Catalogos/Pulseiras";
import Tornozeleira from '../components/Catalogos/Tornozeleira' 
import DropdownMenu from "../components/DropdownMenu";
import NavFreteGratis from "../components/navFreteGratis";
import NavBar from "../components/NavBar";

const ProductPage = () => {
  const { type } = useParams();

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
  <NavBar/>
  <DropdownMenu/>
  {renderProducts()}</div>
  ) 
  
};

export default ProductPage;
