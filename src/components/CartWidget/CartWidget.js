import logo from './assets/logoenblanco.svg'

const CartWidget = () => {
    return (
        <div className="card-conteiner">
        <img src={logo} alt="cart-widget"  className="card-icon" />
        <p className="carrito">3</p>
        </div>
    )
}

export default CartWidget;