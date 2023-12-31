import './ItemCount.css'
import { useState } from "react"

const ItemCount = ({stock,initial,onAdd}) =>{
    const [quantity ,setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () =>{
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    } 
    
    return (
        <div className='Contenedor'>
            <div className='ControladorBoton'>
                <button className="Boton" onClick={decrement}>-</button>
                <h4 className='contador'>{quantity}</h4>
                <button className="Boton" onClick={increment}>+</button>
                
            </div>
            <div className='BotonCarrito'>
            <button  className='SumayResta' onClick={() => onAdd(quantity)} disabled={(stock === undefined)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;
