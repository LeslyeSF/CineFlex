import ButtonBack from "./style";

export default function Back({navigate}){
    return(
        <ButtonBack onClick={()=> navigate(-1)}>
            <ion-icon name="arrow-back-outline"></ion-icon>
        </ButtonBack>
        
    );
}
