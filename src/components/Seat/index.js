import BoxSeat from "./style";

export default function Seat(props){
    const [id,name, isAvailable, listSelected, setListSelected] = props.children;

    let selected = false;

    for(let i = 0; i<listSelected.length; i++){
        if(listSelected[i] === id){
            selected = true;
        }
        
    }

    function selectedSeat(){
        if(selected){
            let index = listSelected.indexOf(id);
            listSelected.splice(index,1);
            setListSelected([...listSelected]);
            
        } else{
            if(isAvailable){
                setListSelected([...listSelected, id]);
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
