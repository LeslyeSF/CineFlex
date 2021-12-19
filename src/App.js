import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./css/CSSreset.css"
import "./css/style.css"

import MainScreen from "./pages/MainScreen";
import FilmScreen from "./pages/FilmScreen";
import SectionScreen from "./pages/SectionScreen";
import SuccessScreen from "./pages/SuccessScreen";


export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainScreen/>}></Route>
                <Route path="/section" element={<SectionScreen/>}></Route>
                <Route path="/seats" element={<FilmScreen/>}></Route>
                <Route path="/success" element={<SuccessScreen/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}