import Header from "../components/Header"
import Footer from "../components/Footer";
import Film from "../components/Film";

export default function MainScreen(){
    return(
        <main>
            <Header/>
            <div className="title">
                <p>Selecione o filme</p>
            </div>
            <div className="container">
                <Film />
                <Film />
                <Film />
            </div>
            <Footer/>
        </main>
    );
}