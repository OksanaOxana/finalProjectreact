function Jewelry({jewelryPhoto}) {
  
    return(
        
        <div className="jewelryCont">
            {jewelryPhoto.map(item => {
                const {id, image, description, price} = item;

                return( 
                    <div>
                        <img className="photoFrame" key={id} src={image} alt="pic" width="360px" height="360px"/>
                        <p>{description}</p>
                        <p>${price}</p>
                        <button className="iconBtn">ADD</button>
                     </div>
                )
               
 })}
        </div>
    )
}
export default Jewelry;