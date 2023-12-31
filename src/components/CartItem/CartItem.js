import { useContext } from "react"
import {CartContext} from "../context/CartContext"


const CartItem = ({ title, price, id, quantity}) => {
  const { removeItem } = useContext(CartContext)


  return (
    <div className="Cartitem">

      <h2 >{title}</h2>
      <p>Cantidad:{quantity}</p>
      <p>Subtotal:{price * quantity}</p>


      
      <button className="Button" onClick={() => removeItem(id)}>Eliminar</button>

    </div>
  )
}

export default CartItem;