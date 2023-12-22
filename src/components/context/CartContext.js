import { createContext , useState } from "react"

export const CartContext = createContext ({
    cart: [],
})

export const CartProvider = ({children}) => {
    const [cart , setCart] = useState([])

    const addItem = (item , quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item,quantity}])                              
        } else {
            console.error('el producto ya fue agregado')
        }
    }
    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }
    const clearCart = () =>{
        setCart([])
    }
    const isInCart = (itemId) => {
        return cart.some (prod => prod.id === itemId)
    }

    const totalPrice =()=>{
        return cart.reduce((prev,act)=> prev + act.quantity * act.price , 0)
    }
    
    const totalQuantity = cart.reduce((acumulador, itemsActual) => acumulador + itemsActual.quantity, 0);

    return (
        <CartContext.Provider value={{cart ,addItem,removeItem,clearCart,totalQuantity,totalPrice, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;