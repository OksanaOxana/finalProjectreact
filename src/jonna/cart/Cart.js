import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";


const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice)
    return(
        <div>
            <h3>TOTAL: ${totalPrice}</h3>
            <div className="imgCart">
            <img className="icon"  alt='cart'/>
            </div>
        
            {cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem = {cartItem}/>)}
        
        </div>
    )
}
export default Cart;