import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./css/CSSreset.css"
import "./css/style.css"

import MainScreen from "./pages/MainScreen";
import FilmScreen from "./pages/FilmScreen";
import SectionScreen from "./pages/SectionScreen";
import SuccessScreen from "./pages/SuccessScreen";
import { useState } from "react";



export default function App(){
    const [order, setOrder] = useState("");
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainScreen/>}></Route>
                <Route path="/section/:idMovie" element={<FilmScreen/>}></Route>
                <Route path="/seats/:idSection" element={<SectionScreen setOrder={setOrder}/>}></Route>
                <Route path="/success" element={<SuccessScreen order={order} setOrder={setOrder}/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}