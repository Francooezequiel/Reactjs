import CartWidget from "../CartWidget/CartWidget"
import gamerr from "../NavBar/ListaConteiner/img/gamerr.jpg"

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src={gamerr} alt="logo-gamerr" className="logo-gamerr"/>
            <div className="navbar-conteiner">
                <button className="botones">Procesador</button>
                <button className="botones">MotherBoard</button>
                <button className="botones">Fuente de almacenamiento</button> 
                <CartWidget/>
            </div>
        </nav>
    ) 
}

export default NavBar