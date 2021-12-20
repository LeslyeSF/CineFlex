import { Link } from "react-router-dom";
import Reserve from "./style"
export default function ButtonReserve({sendOrder, listlength}){
    if(listlength === 0){
        return(
            <Reserve>
                    <button>Selecione um assento</button>
            </Reserve>
        );
    }else{
        return(
            <Reserve>
                <Link to="/success" onClick={sendOrder}>
                    <button>Reservar assento(s)</button>
                </Link>
            </Reserve>
        );
    }
}
