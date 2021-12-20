import BoxMovie from "./style.";

import { Link } from "react-router-dom";

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