import { memo } from "react"
import Item from "../item/item"


const Itemlist = memo(( {  products }) => {
    return (
        <>
            {products.map(producto=> <Item  key={producto.id} producto={producto}/>)} 
        </>
        
    )
}
)
export default Itemlist