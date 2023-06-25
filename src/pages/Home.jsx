
import ColarSwiper from '../components/ColarSwiper'
import DropdownMenu from '../components/DropdownMenu'
import NavBar from '../components/NavBar'
import FooterDetails from '../components/footerDetails'
import NavFreteGratis from '../components/navFreteGratis'

const Home = () => {
  return (
    <div className="container">
        <NavFreteGratis/>
        <NavBar/>
        <DropdownMenu/>
        <ColarSwiper/>
        <FooterDetails/>
    </div>
    
    
  )
}

export default Home