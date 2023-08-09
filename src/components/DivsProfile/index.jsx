import {Link} from 'react-router-dom'
import './styles.css'
import Cadastro from '../Cadastro';

const DivProfile = () => {
  return ( 
    <div className="containerDivProfile">
      <div className="divProfile">
        <div className="titleDiv"><h3>Meus Pedidos</h3></div>
        <div className="div">
          <Link to="/last-orders">Últimos pedidos</Link>
        </div>
      </div>

      <div className="divProfile">
        <div className="titleDiv"><h3>Meu cadastro</h3></div>
        <div className="div">
          <Cadastro/>
        </div>
      </div>
    </div>
   );
}
 
export default DivProfile;