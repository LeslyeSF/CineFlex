import Header from "../components/Header"
import Film from "../components/Film";
import axios from "axios";
import React from "react";

export default function MainScreen(){
    const [listFiilm, setlistFilm] = React.useState("");

    React.useEffect(()=>{
        const promessa = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");
        promessa.then((answer)=>{
            
            setlistFilm(answer.data.map(
                (films)=> <Film src={films.posterURL} title={films.title} id={films.id}></Film>)
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
                {listFiilm}
            </div>
        </main>
    );
}