
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useCartContext } from "../context/CartContext"
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from 'react-bootstrap/Table';

import './cartContainer.css'

const CartContainer = () => {
    const messajeProd = () => {
        toast.success(`Felicidades ! Compra finalizada`, {
            position: "bottom-right",
            autoClose: 5000,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: 0,
            theme: "dark",
        });
    }
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const [id, setId] = useState('')
    const { cartList, deleteCart, eliminarProducto, precioTotal } = useCartContext()
    const handleOnChange = (evt) => {
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })
    }
    const handleAddOrder = async (evt) => {
        evt.preventDefault()
        const order = {}
        order.buyer = dataForm
        order.items = cartList.map(prod => {
            return { id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity }
        })
        order.total = precioTotal()
        const queryDB = getFirestore()
        const ordersCollection = collection(queryDB, 'orders')
        addDoc(ordersCollection, order)
            .then(({ id }) => setId(id))
            .catch(err => console.log(err))
            .finally(() => {
                setDataForm({
                    name: '',
                    phone: '',
                    email: '',
                })
                deleteCart()
            })
    }
    return (
        <>
            {id !== '' && <h3>Se ha generado le orden de compra: {id}</h3>}
            {cartList.length > 0 ?
                <div className='cardContainer'>
                    <div className='cardProd'>
                    <button className="btn btn-danger" onClick={deleteCart}>Vaciar Carrito</button>
                        {cartList.map(prod => <div key={prod.id}>
                            <div className='tableCard'>
                                <img src={prod.imageUrl} className="w-25" />
                                <Table className='taable' striped bordered hover size="md">
                                <tbody>
                                    <tr className='tableTop'>
                                        <td>Nombre</td>
                                        <td>Precio</td>
                                        <td>Cantidad</td>
                                        <td>borrar</td>
                                    </tr>
                                    <tr className='tableDownn'>
                                        <td>{prod.name}</td>
                                        <td>{prod.price}</td>
                                        <td>{prod.quantity}</td>
                                        <td><button className="btn btn-danger" onClick={() => eliminarProducto(prod.id)}> X </button></td>
                                    </tr>
                                </tbody>
                            </Table>

                            </div>
                            
                            
            
                        </div>)}
                    </div>

                    <div>
                        
                        <h3>Precio total: ${precioTotal()}</h3>
                        <form onSubmit={handleAddOrder}>
                            <input
                                type='text'
                                name='name'
                                placeholder='ingresar el nombre'
                                value={dataForm.name}
                                onChange={handleOnChange}
                            />
                            <input
                                type='text'
                                name='phone'
                                placeholder='ingresar el teléfono'
                                value={dataForm.phone}
                                onChange={handleOnChange}
                            />
                            <input
                                type='text'
                                name='email'
                                placeholder='ingresar el email'
                                value={dataForm.email}
                                onChange={handleOnChange}
                            />
                            <button
                                className="btn btn-success"
                                onClick={messajeProd}>
                                Terminar compra
                            </button>
                        </form>
                    </div>
                </div>
                :
                <center>
                    <h2>No hay productos en el carrito</h2>
                </center>}
            <ToastContainer />
        </>
    )
}

export default CartContainer