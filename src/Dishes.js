function Dishes({anyDishes}) {
    return(
        <div>
            {anyDishes.map(item => {
                const {id, dishToCook, description} = item;
                return(
                    <div key={id}>
                        <p>{id}-{description}</p>
                        <img  src={dishToCook} alt="pic"/>
                    </div>
                )
            })}
        </div>
    )
}
export default Dishes;