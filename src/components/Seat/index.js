import BoxSeat from "./style";

export default function Seat(props){
    const [id,name, isAvailable, listSelected, setListSelected, Name, setName, CPF, setCPF] = props.children;

    let selected = false;

    for(let i = 0; i<listSelected.length; i++){
        if(listSelected[i] === id){
            selected = true;
        }
        
    }

    function selectedSeat(){
        if(selected){
            let index = listSelected.indexOf(id);
            if(Name[index] !== ""){
                let answer = prompt("Deseja excluir este assento?(Y/N)");
                if(answer =="y"){
                    
                    listSelected.splice(index,1);
                    Name.splice(index,1);
                    CPF.splice(index,1);
                    setListSelected([...listSelected]);
                    setName([...Name]);
                    setCPF([...CPF]);
                }
            } else{
                    listSelected.splice(index,1);
                    Name.splice(index,1);
                    CPF.splice(index,1);
                    setListSelected([...listSelected]);
                    setName([...Name]);
                    setCPF([...CPF]);
            }
            
        } else{
            if(isAvailable){
                setListSelected([...listSelected, id]);
                setName([...Name,""]);
                setCPF([...CPF,""]);
            } else{
                alert("Esse assento não está disponível!");
            }
            
        }
    }

    return(
        <BoxSeat available={isAvailable} selected={selected} onClick={selectedSeat}>
            {name}
        </BoxSeat>
    );

}
