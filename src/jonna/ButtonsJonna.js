import { data } from "../data";
function ButtonsJonna({filteredPhotos, setPhotosJonna}) {
  
    return(
        <div className="smallHeader">
            <button className="mainBtn" onClick={() =>setPhotosJonna(data['jonna'])}>All</button>
            <button className="mainBtn" onClick={() =>filteredPhotos("winter")}>Winter</button>
            <button className="mainBtn" onClick={() =>filteredPhotos("spring")}>Spring</button>
            <button className="mainBtn" onClick={() =>filteredPhotos("summer")}>Summer</button>
            <button className="mainBtn" onClick={() =>filteredPhotos("autumn")}>Autumn</button>
        </div>
    )
}
export default ButtonsJonna;