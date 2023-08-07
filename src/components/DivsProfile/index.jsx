import {Link} from 'react-router-dom'
import './styles.css'

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
          <Link to="">Alterar dados pessoais</Link>
          <Link to="">Alterar meu e-mail</Link>
          <Link to="">Alterar minha senha</Link>
        </div>
      </div>
    </div>
   );
}
 
export default DivProfile;