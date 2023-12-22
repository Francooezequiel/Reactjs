import { useContext } from 'react';
import logo from './assets/logoenblanco.svg'
import logoenblanco from "./assets/logo.svg"
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import "./cartwidget.css"

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)
    return (
    <Link to='/cart' className='card-conteiner' style={{display: totalQuantity > 0 }}>
        <img src={logo} alt="cart-widget"  className="cardicon" />
        {totalQuantity}
    </Link>
    )
    
}


export default CartWidget;


