import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionDayHour from "../components/SectionDayHour";
import Loading from "../components/Loading";
import Back from "../components/Back";

import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";

export default function FilmScreen(){
    const navigate = useNavigate();

    const { idMovie } = useParams();
    const [listDay, setListDay] = useState("");
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{

        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idMovie}/showtimes`);
        
        promise.then((answer)=>{
           
            setListDay(answer.data.days.map((info)=> 
                <SectionDayHour key={info.id}>
                    {info.weekday}
                    {info.date}
                    {info.showtimes}
                </SectionDayHour>
            ));

            setMovie([answer.data.title, answer.data.posterURL]);

            setTimeout(()=>{setLoading(false)}, 2000);

        });

    },[]);

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
                    <p>Selecione o horário</p>
                </div>
                <div className="container">
                    {listDay}
                
                </div>
                <Footer>
                    {movie[0]}
                    {movie[1]}
                </Footer>
            </main>
          );

    }
}