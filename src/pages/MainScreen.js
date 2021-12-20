import Header from "../components/Header"
import Movie from "../components/Movie";
import Loading from "../components/Loading"

import axios from "axios";
import { useState, useEffect } from "react";

export default function MainScreen(){
    const [listMovie, setListMovie] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");

        promise.then((answer)=>{
            
            setListMovie(answer.data.map((movies)=> 
                <Movie key={movies.id}> 
                    {movies.id}
                    {movies.title}
                    {movies.posterURL}
                </Movie>)
            );
            
            setTimeout(()=>{setLoading(false)}, 2000);
            
        });

    }, []);

    if(loading){
        return(
            <Loading/>
        );
    } else{
        return(
            <main>
                <Header/>
                <div className="title">
                    <p>Selecione o filme</p>
                </div>
                <div className="container">
                    {listMovie}
                </div>
            </main>
        );
    }
}