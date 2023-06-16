import { Link } from "react-router-dom"
import './DropdownMenu.css'


const DropdownMenu = () => {
  return (
    <nav className="DropdownContainer">
      <div className="DropdownLi"> 
        <Link to="/products/colares">
          <li>Colares</li>
        </Link>
       <Link to="/products/pulseiras">
        <li>Pulseiras</li>
       </Link>
       <Link to="/products/tornozeleiras">
        <li>Tornozeleiras</li>
       </Link>
      </div>
    </nav>
  )
}

export default DropdownMenu