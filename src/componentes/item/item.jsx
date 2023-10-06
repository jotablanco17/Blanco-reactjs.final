import { Link } from "react-router-dom"
import './item.css'

const Item = ({ producto }) => {
    return (
        <div key={producto.id} className="card  cardEach">
            <div className="card-body">
                <img className="w-100 card-img-top" src={producto.imageUrl} alt="imagen prenda" />
                <h2>{producto.name}</h2>
                <h3 className="price">precio : ${producto.price}</h3>

            </div>
            <div className="card-footer">
                <Link to={`/detalle/${producto.id}`}>
                    <button className="btn btn-outline-primary">Detalle</button>
                </Link>
            </div>
        </div>
    )
}

export default Item