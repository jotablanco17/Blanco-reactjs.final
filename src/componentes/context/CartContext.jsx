import { createContext, useContext, useState } from "react";
export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const addProduct = (newProduct) => {
        setCartList([
            ...cartList,
            newProduct
        ])
    }
const cantidadTotal = () => cartList.reduce((count, objProducto)=> count +=objProducto.quantity, 0)
const precioTotal = () => cartList.reduce((count, objProducto)=> count +=(objProducto.quantity * objProducto.price), 0)
const eliminarProducto = id => setCartList(cartList.filter(prod => prod.id !== id))

    const deleteCart = () => {
        setCartList([])
    }
    return (
        <CartContext.Provider value={{
            cartList,
            addProduct,
            deleteCart,
            cantidadTotal,
            precioTotal,
            eliminarProducto
        }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider