import { useState } from "react";
import ChangeQuantity from "../cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";


const Good = ({jewelry, idx}) => {
    const [quantity,setQuantity] = useState(1);
    const dispatch = useDispatch()

    return (
        <div className="products">
            <div className="product">
                <div key={idx} className="text">
                    <img className="allGoods" src={jewelry.image} alt='pic'/>
                    <h2>{jewelry.description}</h2>
                    <p className="priceContainer">$ {jewelry.price}</p>

                    <ChangeQuantity quantity = {quantity} setQuantity = {setQuantity}/>
                    <button onClick={() => {dispatch(addItemToCart({jewelry, quantity}))}} className="quantityBtn">ADD</button>

                </div>
            </div>
        </div>
    )
}
export default Good;