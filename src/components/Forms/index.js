import BoxForm from "./style";

export default function Forms(props){
    const [name, CPF, setName, setCPF, seatname, index]= props.children;
    return(
        <BoxForm>
            <span>Assento {seatname}</span>
            <p>Nome do comprador:</p>
            <input type="text" placeholder="Digite seu nome..." value={name} onChange={(event)=> setName(event.target.value)}/>
            <p>CPF do comprador:</p>
            <input type="text" placeholder="Digite seu CPF(NNNNNNNNNNN)..." maxLength="11" value={CPF} onChange={(event)=> setCPF(event.target.value)}/>
        </BoxForm>
    );
}
