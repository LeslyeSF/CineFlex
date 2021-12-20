import Load from "./style";
import infinity from "../../assets/load.gif"
export default function Loading(){
    return(
        <Load>
            <img src={infinity} alt="infinity"/>
            <p>Carregando...</p>
        </Load>
    );
}
