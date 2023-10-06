
import Counter from "../../Counter/Itemcount";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './itemDetail.css'

const ItemDetail = ({ product }) => {
    const [isCounter, setIsCounter] = useState(true)
    const { addProduct } = useCartContext()
    const onAdd = (count) => {
        addProduct({ ...product, quantity: count })
        setIsCounter(false)

        toast.success(`se agrego ${product.name} al carrito correctamente`, {
            position: "bottom-right",
            autoClose: 5000,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: 0,
            theme: "dark",
            });
    }
    return (<div className="cardDetail">
        <Card className="card cardProd" style={{ width: '35rem' }}>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
                <Card.Title className="tittleDetail">{product.name}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item> Stock :{product.stock}</ListGroup.Item>
                <ListGroup.Item> Precio :${product.price}</ListGroup.Item>
                <ListGroup.Item><div>
                    {
                        isCounter ?
                            <Counter inital={1} stock={product.stock} onAdd={onAdd} />
                            :
                            <>
                                <Link to={"/cart"}>
                                    <button className="btn btn-outline-dark">ir a card</button>
                                </Link>
                                <Link to={"/"}>
                                    <button className="btn btn-outline-dark">ir a inicio</button>
                                </Link>
                            </>
                    }
                </div></ListGroup.Item>
            </ListGroup>
            <Card.Body>
            </Card.Body>
        </Card>
        <ToastContainer />
    </div>




    );
}

export default ItemDetail