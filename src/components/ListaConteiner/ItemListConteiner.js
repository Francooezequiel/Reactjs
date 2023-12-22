import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import {useParams } from 'react-router-dom'
import {collection,doc,getDocs,query,where } from 'firebase/firestore'
import {db} from '../../services/firebaseConfig'





const ItemListConteiner  = ({ greeting}) =>{
    const [products , setProducts] = useState([])
    const {loading, setLoading} =useState(true)
    const {categoryId} = useParams()
    
    useEffect( () => {
        const collectionRef = collection(db , 'products');

        const q = categoryId ? query (collectionRef, where("category", "==" ,categoryId)) : collectionRef;

        getDocs(q)
        .then((response)=>{
            setProducts(
                response.docs.map((doc) =>{
                    return {...doc.data(), id: doc.id}
                })
            )
        })

    }, [categoryId])
    return (
    <div className='divlistaconteiner'>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
    </div>
    )
    } 

    export default ItemListConteiner;