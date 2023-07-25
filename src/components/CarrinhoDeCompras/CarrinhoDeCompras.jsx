import './CarrinhoDeCompras.css';
import { MdClose } from 'react-icons/md';
import CardCart from '../CardCart/CardCart';
import { Link } from 'react-router-dom';

const CarrinhoDeCompras = ({ cartItems, onClose, onRemove }) => {
  const calcularTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseFloat(item.size.price);
    });
    return total;
  };

  const handleRemoveItem = (itemId) => {
    onRemove(itemId);
  };

  return (
    <div className="carrinho-de-compras">
      <div className="closeButton">
        <MdClose onClick={onClose} />
      </div>
      <div className="CardCart">
        <h2>Carrinho de Compras</h2>
        {cartItems.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CardCart key={item.id} item={item} onRemove={handleRemoveItem} />
            ))}
            <div className="finishCart">
              <p>
                <div className="containerP">
                  <div className="Ptotal">Total</div>
                  <div className="pricePTotal">R$ {calcularTotal().toFixed(2)}</div>
                </div>
              </p>
             <Link to="/resume-compra">Finalizar Compra</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CarrinhoDeCompras;













