import { dataCarousel} from "../../dataCarousel";
import Good from "./Good";


const Goods = () => {
const jewelries = dataCarousel['jonna']

    return(<div className="products">
        {jewelries.map((jewelry) =><Good key={jewelry.id}  jewelry = {jewelry} />)}

        </div>
    
    )
}
export default Goods;