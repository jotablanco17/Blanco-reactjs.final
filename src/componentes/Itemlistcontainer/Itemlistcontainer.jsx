import { useEffect, useState } from "react"
import Itemlist from "../itemlist/Itemlist"
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom"
import './itemlistcontainer.css'


const Itemlistcontainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { cid } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'products')
        const queryFilter = cid ? query(queryCollection, where('category', '==', cid)) : queryCollection
        getDocs(queryFilter)
            .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [cid])
    return (
        <center>
            <div className="row itemlistcontainer">
                {loading ? <h2>loading...</h2> : <Itemlist products={products} />}
            </div>
        </center>

    )
}

export default Itemlistcontainer