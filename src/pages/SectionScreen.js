import Header from "../components/Header";
import Seat from "../components/Seat";
import Back from "../components/Back";

import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 

export default function SectionScreen({setOrder}){
    const navigate = useNavigate();
    const { idSection } = useParams();
    const [movie, setMovie] = useState([]);
    const [dataSeats, setDataSeats] = useState("");
    const [listSelected, setListSelected] = useState([]);
    const [name, setName] = useState("");
    const [CPF, setCPF] = useState("");

    let listSeats;
    if(dataSeats!==""){
        listSeats = dataSeats.seats.map((data)=> 
        <Seat key={data.id}>
            {data.id}
            {data.name}
            {data.isAvailable}
            {listSelected}
            {setListSelected}
        </Seat>
        );
    }
    
    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSection}/seats`);
        promise.then((answer)=>{

            setMovie([
                answer.data.movie.title, 
                answer.data.movie.posterURL, 
                `${answer.data.day.weekday} - ${answer.data.name}`
            ]);
            setDataSeats(answer.data);
                
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
            setOrder({
                title: dataSeats.movie.title, 
                day:`${dataSeats.day.date} ${dataSeats.name}`,
                seats: ids,
                name: name,
                cpf: CPF });
        });
    }

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
                    <p>Nome do comprador:</p>
                    <input type="text" placeholder="Digite seu nome..." value={name} onChange={(event)=> setName(event.target.value)}/>
                    <p>CPF do comprador:</p>
                    <input type="text" placeholder="Digite seu CPF..." value={CPF} onChange={(event)=> setCPF(event.target.value)}/>
                    <Link to="/success" onClick={sendOrder} >
                        <button>Reservar assento(s)</button>
                    </Link>
                    
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
