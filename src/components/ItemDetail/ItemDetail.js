import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"

const ItemDetail = ({id ,title , image , description , category , price, stock}) => {
    return (
        <article className='articulos'>
            <header>
                <h2>{title}</h2>
            </header>
            <picture>
                <img src={image} alt={title} />
            </picture> 
            <section>
                <p>Categoria:{category}</p>
                <p>Info Descripcion : {description}</p>
                <p>Precio : ${price}</p>
            </section>
            <footer>
            <ItemCount 
    initial={1}
    stock={10}
    onAdd={(quantity) => console.log ("Cantidad agregada", quantity)}/>
            </footer>
        </article>
        
    )
}

export default ItemDetail;