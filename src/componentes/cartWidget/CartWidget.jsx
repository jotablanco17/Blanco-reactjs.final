import { useCartContext } from "../context/CartContext"


const CartWidget = () => {
    const { cantidadTotal } = useCartContext()
    return (
        <> 
            <div data-aos="zoom-in-up">{cantidadTotal()!== 0 && cantidadTotal()} <i class="fa-sharp fa-solid fa-cart-shopping"> </i></div>
        </>

    )
}

export default CartWidget