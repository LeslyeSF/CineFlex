import Header from "../components/Header";
import Seat from "../components/Seat";
import Back from "../components/Back";
import Loading from "../components/Loading";

import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom"; 
import ButtonReserve from "../components/ButtonReserve";
import Forms from "../components/Forms";

export default function SectionScreen({setOrder}){
    const navigate = useNavigate();
    const { idSection } = useParams();
    const [movie, setMovie] = useState([]);
    const [dataSeats, setDataSeats] = useState("");
    const [listSelected, setListSelected] = useState([]);
    const [name, setName] = useState("");
    const [CPF, setCPF] = useState("");
    const [loading, setLoading] = useState(true);

    let listSeats;
    if(dataSeats!==""){
        listSeats = dataSeats.seats.map((data)=> 
        <Seat key={data.id}>
            {data.id}
            {data.name}
            {data.isAvailable}
            {listSelected}
            {setListSelected}
            {name}
            {setName}
        </Seat>
        );
    }
    
    let listForms = listSelected.map((data, index)=>{
        let seatname="";
            for(let i =0; i<dataSeats.seats.length; i++){
                if(dataSeats.seats[i].id === data){
                    seatname = dataSeats.seats[i].name;
                }
            }

        return(
            <Forms key={index}>
                {name}
                {CPF}
                {setName}
                {setCPF}
                {seatname}
            </Forms>
        );

    });

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSection}/seats`);
        promise.then((answer)=>{

            setMovie([
                answer.data.movie.title, 
                answer.data.movie.posterURL, 
                `${answer.data.day.weekday} - ${answer.data.name}`
            ]);
            setDataSeats(answer.data);
            setTimeout(()=>{setLoading(false)}, 2000);
                
        });

    },[]);
    
    function sendOrder(){
        
        const promise = axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many",{ids:listSelected, name: name, cpf: CPF});
        promise.then(()=> {
            let ids=[];
            for(let i =0; i<dataSeats.seats.length; i++){
                for(let j=0; j<listSelected.length;j++){
                    if(dataSeats.seats[i].id === listSelected[j]){
                        ids.push(<p>Assento {dataSeats.seats[i].name}</p>);
                    }
                }
            }
            let cpfmask = CPF;
            if(cpfmask.length<11){
                let i = 11-cpfmask.length;
                while(i>0){
                    cpfmask +=0;
                    i--;
                }
               
            }

            setOrder({
                title: dataSeats.movie.title, 
                day:`${dataSeats.day.date} ${dataSeats.name}`,
                seats: ids,
                name: name,
                cpf: `${cpfmask[0]+""+cpfmask[1]+""+cpfmask[2]}.${cpfmask[3]+""+cpfmask[4]+""+cpfmask[5]}.${cpfmask[6]+""+cpfmask[7]+""+cpfmask[8]}-${cpfmask[9]+""+cpfmask[10]}` });
        });
    }
    if(loading){
        return(
            <Loading/>
        );
    } else{
        return(
            <main>
                <Back navigate={navigate}/>
                <Header/>
                <div className="title"> 
                    <p>Selecione o(s) assento(s)</p>
                </div>
                <div className="container">
                    <div className="seatSection">
                        <div className="seats">
                            {listSeats}
                        </div>
                        <div className="legend">
                            <div>
                                <div className="selected"></div>
                                <p>Selecionado</p>
                            </div>
                            <div>
                                <div className="available"></div>
                                <p>Disponível</p>
                            </div>
                            <div>
                                <div className="unavailable"></div>
                                <p>Indisponível</p>
                            </div>
                    </div>
                    </div>                        
                    <div className="infoSection">
                        {listForms}
                        <ButtonReserve sendOrder={sendOrder} listlength={listForms.length}/>
                    </div>
            
                </div>
                <Footer>
                    {movie[0]}
                    {movie[1]}
                    {movie[2]}
                </Footer>
                
            </main>
        );
    }
}
