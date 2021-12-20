import { Link } from "react-router-dom";
import BoxMovie from "./style.";

export default function Movie(props){
    const [id, title, src] = props.children;
    return(
       <Link to={"/section/"+id}>
        <BoxMovie>
            <img src={src} alt={title}/>
        </BoxMovie>
        </Link> 
    );
}