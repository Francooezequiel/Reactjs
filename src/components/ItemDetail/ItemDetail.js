import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../context/CartContext'
import "./ItemDetail.css"
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({id ,title, image , description , category , price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext) 

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id,title,price
        }

        addItem(item,quantity)
    }

    

    return (
        <div className='itemdetail'>
            <div className='itemcontador'>
                <h2>{title}</h2>
                <img className='imgcontador' src={image} alt={title} />

                <p><strong>Categoria:</strong>{category}</p>
                <p><strong> Descripcion :</strong>{description}</p>
                <p><strong>Precio : $</strong>{price}</p>
    
                {
            quantityAdded > 0 ? (
                <Link to='/cart' className='Option'>Terminar de Comprar</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
                }
            </div>
        </div>
        
    )
}

export default ItemDetail;