import { VscAccount } from 'react-icons/vsc';
import { HiShoppingBag } from 'react-icons/hi';
import './NavBar.css';
import { Link, useNavigate } from 'react-router-dom';
import SearchInput from './SearchInput';

const NavBar = () => {
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <nav className="navBar">
      <Link to="/">
        <div className="logo">
          <img src="../public/imgs/Logo/logo_jorri.png" alt="" />
        </div>
      </Link>
      <SearchInput onSearch={handleSearch} />
      <div className="svgs">
        <VscAccount />
        <HiShoppingBag />
      </div>
    </nav>
  );
};

export default NavBar;
