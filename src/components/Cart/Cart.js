import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom";
import { useEffect , useState } from "react";
import "./cart.css"

const Cart = () => {
    const {cart, clearCart,totalQuantity,totalPrice}= useContext(CartContext)
    const [total,setTotal] = useState(0)

    useEffect(()=> {
        setTotal(totalPrice())
    },[totalPrice()]);




    if(totalQuantity === 0){
        return (
        <div >
            <h1 className="productcarrito">No hay items en el carrito , 
                Aprete en productos para volver al inicio</h1>
            
            <Link to = '/' className="Option">Productos</Link>
        </div>
        )
    }


    return (
        <div className="carritoybotones">
            <div className="estilobotones">
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={()=> clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className="Button" >Checkout</Link>
            </div>
        </div>
    )
}

export default Cart;