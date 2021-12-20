import Header from "../components/Header"
import Movie from "../components/Movie";
import axios from "axios";
import { useState, useEffect } from "react";

export default function MainScreen(){
    const [listMovie, setListMovie] = useState("");

    useEffect(()=>{
        const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");
        promise.then((answer)=>{
            
            setListMovie(answer.data.map(
                (movies)=> 
                <Movie key={movies.id}> 
                    {movies.id}
                    {movies.title}
                    {movies.posterURL}
                </Movie>)
            );

        });

    }, []);

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