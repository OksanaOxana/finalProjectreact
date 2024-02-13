function PhotoJonna({anyPhotosjonna, anyButtons}) {

    return(
        <div>
        <div className="main-item">
            {anyPhotosjonna.map(item => {
                const {id, imageJonna, description } = item;
                return(
        <div className="main">
   
        <div className="parSmall" key={id}>
            <p className="par">{description}</p>
        </div>
    
        <div className="item-card" key={id}>
            <img className="photoFrame photoJonna" src={imageJonna} alt="pic" width="400px"  height="250px"/>
        </div>
        </div>
            )})}
            </div>
            <div className="smallHeader">
            <button className="btn" onClick={() => anyButtons([])}>
                Don't show again</button>
        </div>
        </div>
    )}
    export default PhotoJonna;

