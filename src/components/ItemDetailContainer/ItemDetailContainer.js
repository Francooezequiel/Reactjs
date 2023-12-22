import {useState , useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'


const ItemDetailContainer = () => {
const [product , setProduct] = useState(null)
const [loading , setLoading] = useState(true)
    const {ItemId} = useParams()

    useEffect(() => {
        setLoading(true);
        const docRef = doc(db, "products", ItemId);
        getDoc(docRef)
          .then((response) => {
            const data = response.data();
            const productAdapted = { id: response.id, ...data };
            setProduct(productAdapted);
          })
          .catch((error) => {
            console.error(error);
          })
        .finally(() => {
            setLoading(false);
        });
      }, [ItemId]);
    
    
    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )

}
export default ItemDetailContainer;