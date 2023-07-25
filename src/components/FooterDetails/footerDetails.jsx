import { BsCreditCardFill } from 'react-icons/bs' 
import { GiReturnArrow } from 'react-icons/gi'
import {ImTruck} from 'react-icons/im'
import './footerDetails.css'

const FooterDetails = () => {
  return (
    <div className="containerFooterDetails">
      <div className="footerDetails">
       <div className="footerCard">
        <div><BsCreditCardFill/></div>
        <div>
          <h3>PARCELAMENTO</h3>
          <p>Parcele suas compras em 2X sem juros no cartão.</p>
        </div>
       </div>
       <div className="footerCard">
        <div><GiReturnArrow/></div>
        <div>
          <h3>TROCA</h3>
          <p>Aceitaremos a troca dentro do prazo de 7 dias corridos, desde que o mesmo não viole a embalagem.</p>
        </div>
       </div>
       <div className="footerCard">
        <div><ImTruck/></div>
        <div>
          <h3>ENTREGA</h3>
          <p>Frete grátis para todo pais em compras acima de R$350</p>
        </div>
       </div>
      </div>
    </div>
  );
}

export default FooterDetails;
