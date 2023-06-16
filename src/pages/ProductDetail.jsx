import { useParams } from 'react-router-dom';
import products from '../components/data/products.jsx'; // Importe o array de produtos
import DetailsCard from '../components/DetailsCard.jsx'
import DropdownMenu from '../components/DropdownMenu.jsx'
import NavFreteGratis from '../components/navFreteGratis.jsx';
import NavBar from '../components/NavBar.jsx';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id); // Encontre o objeto de produto correto pelo id

  return (
    <div className='DetailContainer'>
      <NavFreteGratis/>
      <NavBar/>
      <DropdownMenu/>
      <DetailsCard product={product} /> 
    </div>
  );
};

export default ProductDetail;






