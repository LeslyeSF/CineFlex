import BoxForm from "./style";

export default function Forms(props){
    let [name, CPF, setName, setCPF, seatname, index]= props.children;
    
    
    function updateName(event){
        name[index] = event.target.value;
        setName([...name]);
    }
    function updateCPF(event){
        CPF[index] = event.target.value;
        setCPF([...CPF]);
    }

    return(
        <BoxForm>
            <span>Assento {seatname}</span>
            <p>Nome do comprador:</p>
            <input type="text" placeholder="Digite seu nome..." value={name[index]} onChange={(event)=> updateName(event)}/>
            <p>CPF do comprador:</p>
            <input type="text" placeholder="Digite seu CPF(NNNNNNNNNNN)..." maxLength="11" value={CPF[index]} onChange={(event)=> updateCPF(event)}/>
        </BoxForm>
    );
}
