function PhotoKatarinaPage({anyPhotosKatarinaPage, anyButtonClickImageSicily}) {
    return(
      <div> 
{anyPhotosKatarinaPage.map((item) => {
    const {id, imageKatarinaPage, description} = item;
    
    return( 
    <div>
        <div className="smallHeader" key={id}>
            <img className="photoFrame  photoAdaptedKatarina" src={imageKatarinaPage} alt="pic" width="500px" height="480px"/>     
        </div>
        <div className="smallHeader">
            <p className="par spaceCont ">{description}</p>
        </div>    
    </div>
    )})}
        <div className="smallHeader">
                <button className="btn" onClick={() => anyButtonClickImageSicily([])}>
                    Don't show again</button>
        </div>
    </div>
    )}
export default PhotoKatarinaPage;


