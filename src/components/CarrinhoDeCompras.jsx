import './css/CarrinhoDeCompras.css';
import { MdClose } from 'react-icons/md';
import { BiTrash } from 'react-icons/bi';

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
              <div key={item.id} className="productInCart">
                <div className="imgAndTitle">
                  <img src={item.poster_path} alt="" />
                  <h3>{item.title}</h3>
                  <BiTrash onClick={() => handleRemoveItem(item.id)} />
                </div>
                <p>Preço: R$ {item.size.price}</p>
              </div>
            ))}
            <div className="finishCart">
              <p>
                <div className="containerP">
                  <div className="Ptotal">Total</div>
                  <div className="pricePTotal">R$ {calcularTotal().toFixed(2)}</div>
                </div>
              </p>
              <button>Finalizar Compra</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CarrinhoDeCompras;













