import { useDispatch } from "react-redux";
import { dataCarousel } from "../../dataCarousel";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem, id}) => {
    const dispatch = useDispatch()
    const goods = dataCarousel['jonna'].find((item) => item.id === cartItem.goodId)


return(
    <div className="total">
        <p key={id}>{goods.description} - {cartItem.quantity} : ${goods.price*cartItem.quantity}</p>
        <span onClick={() =>dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
            <img className="iconTwo" alt='pic'/>
        </span>
    </div>
    
)
}
export default CartItem;