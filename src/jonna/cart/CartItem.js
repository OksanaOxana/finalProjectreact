import { useDispatch } from "react-redux";
import { dataCarousel } from "../../dataCarousel";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch()
    const {id, description, price, img} = dataCarousel['jonna']
    dataCarousel['jonna'].find((item) => item.id === id)
    return(
        <div className="total">
            <p key={id}>{description} - {cartItem.quantity} : ${price*cartItem.quantity}</p>
            <span onClick={() =>dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
               <img src={img} alt="pic"/>
            </span>
        </div>
        
    )
}
export default CartItem;