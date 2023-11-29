import gamer from './img/gamer.jpg'



const ItemRetailConteiner = ({greetings}) => {
    return (
        <div className="item-conteiner">
        <h3>{greetings}</h3>
        <img src={gamer} alt="gamer-logo" className="gamer-logo"/>
        </div>
    ) 
}

export default ItemRetailConteiner;