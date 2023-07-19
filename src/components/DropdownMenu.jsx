import { Link } from "react-router-dom"
import './css/DropdownMenu.css'


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
       <Link to='/products/aneis'>
        <li>Anéis</li>
       </Link>
       <Link to='/products/brincos'>
       <li>Brincos</li>
       </Link>
      </div>
    </nav>
  )
}

export default DropdownMenu