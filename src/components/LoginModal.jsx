import Login from "./Login";
import './css/LoginModal.css'

const LoginModal = ({ onClose }) => {
  return (
    <div className="loginModal">
      <div className="modalContent">
        <Login onClose={onClose} />
      </div>
    </div>
  );
};

export default LoginModal;
