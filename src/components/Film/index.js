import { Link } from "react-router-dom";
import BoxFilm from "./style.";

export default function Film(props){
    return(
       <Link to="/section">
        <BoxFilm>
            <img src={props.src} alt={props.title}/>
        </BoxFilm>
        </Link> 
    );
}