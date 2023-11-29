import { Link } from 'react-router-dom';
import getProductsByCategory from '../../asyncMock'

const Item = ({id,title,image,price,category,stock}) => {
    return (
        <article className='Articulo'>
            <header>
                <h2>{title}</h2>
            </header>
            <picture>
                <img src={image} alt={title} />
            </picture>
            <section>
                <p>Precio: {price}</p>
                <p>Stock Disponible{stock} </p>
                <p>category{category} </p>
            </section>
            <footer>
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item;