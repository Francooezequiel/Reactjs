import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import gamerr from "../itemRetailContainer/img/gamerr.jpg"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div><Link  to="/"  className="logo-gamerr"><img src={gamerr} alt="logo-gamerr"/></Link> </div>
            <div className="navbar-conteiner">
                <NavLink to={`/category/Procesadores`}>Procesadores</NavLink>
                <NavLink to={`/category/mother`}>MotherBoard</NavLink>
                <NavLink to={`/category/Fuentes de almecanamiento`}>Fuentes del almacenamiento</NavLink>
                <CartWidget/>
            </div>
        </nav>
    ) 
}

export default NavBar