import { Link } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { useState} from "react";

export default function SuccessScreen({order, setOrder}){    
    const [loading, setLoading] = useState(true);
    
    setTimeout(()=>{setLoading(false)}, 3000);
    

    if(loading){
        return(
            <Loading/>
        );
    } else{
        return(
            <main>
                <Header/>
                <div className="title">
                    <p className="success">Pedido feito <br/>com suscesso!</p>
                </div>

                <div className="container">
                    <div className="infoTicket">
                        <div className="section">
                            <span>Filme e sessão</span>
                            <div>
                                <p>{order.title}</p>
                                <p>{order.day}</p>
                            </div>
                        </div>
                        <div className="section">
                            <span>Ingressos</span>
                            <div>
                                {order.seats}
                            </div>
                        </div>
                        <div className="section">
                            <span>Comprador(es)</span>
                        
                                {order.name.map((name, index)=>{
                                    return(
                                        <div>
                                            <p>Nome: {name}</p>
                                            <p>CPF: {order.cpf[index]}</p>
                                        </div>
                                        
                                    );
                                })}
                                
                            
                        </div>
                        
                    </div>
                    <Link to="/" onClick={()=> setOrder("")}>
                            <button>Voltar para Home</button>
                    </Link>
                </div>
        </main>
        );
    }
}