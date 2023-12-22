import { Link } from 'react-router-dom';
import getProductsByCategory from '../../asyncMock'
import item from "./Item.css"

const Item = ({id,title,image,price,category,stock}) => {
    return (
        <div className='articulo'>
            <div className='divArticulo'>
                <h2 className='informacion'>{title}</h2>
                <img className='card' src={image} alt={title} />
                <p className='precio'>Precio: {price}</p>
                <p className='stock'>Stock Disponible{stock} </p>
                <p className='category'>category{category} </p>
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </div>
        </div>
    )
}

export default Item;