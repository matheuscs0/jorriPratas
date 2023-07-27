import React from 'react';
import './styles.css'

const images = [
  {id: "1",
  image: '../public/imgs/Svgs/visa.svg'
  },
  {id: "2",
  image: '../public/imgs/Svgs/mastercard.svg'
  },
  {id: "3",
  image: '../public/imgs/Svgs/elo.svg'
  },
  {id: "4",
  image: '../public/imgs/Svgs/pix.svg'
  }
]

const security =[
  {id:'1', image:'../public/imgs/Svgs/google.png'}
]

const FooterPayment = () => {
  return (
    <div className='ContainerFooterPayment'>
      <div className='PaymentContainer'>
        <div className='methodsTitle'>
          <h5>FORMAS DE PAGAMENTO</h5>
        </div>
        <div className='PaymentMethods'>
          {images.map((item) =>(
           <img src={item.image} alt="" />
          ))}
        </div>
      </div>

      <div className="ContainerSelos">
        <div className="selosTitle">
          <h5>SELOS DE SEGURANÇA</h5>
        </div>
          <div className="selosSecurity">
            {security.map((sec) => (
              <img src={sec.image}/>
            ))}
          </div>
      </div>
    </div>
  );
}

export default FooterPayment;
