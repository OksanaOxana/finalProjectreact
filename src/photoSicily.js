function PhotoSicily({photosSicily}) {
    return(
        <div className="main">
            {photosSicily.map((item) => {
                const {id, imageKatarinaPage, description} = item;
                
                return(
                    <div key={id}>
                        <p>{description}</p>
                        <img className="photoFrame " src={imageKatarinaPage} alt="pic" width="300px" height="280px"/>     
                    </div>
                )
            })}
        </div>
    )
}
export default PhotoSicily;
