import { useEffect, useState } from "react"
import ItemDetail from "./itemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc,  getFirestore } from 'firebase/firestore'



const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const {pidd} = useParams()

    useEffect(()=>{
                const db = getFirestore()
                const queryDoc = doc(db, 'products', pidd) 
                getDoc(queryDoc)
                .then (resp=>({id : resp.id, ...resp.data() }))
                .then (resp=>setProduct(resp))
            }, [])


    return (
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer