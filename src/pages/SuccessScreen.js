import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function SuccessScreen({order, setOrder}){    
    
    return(
        <main>
            <Header/>
            <div class="title">
                <p class="success">Pedido feito <br/>com suscesso!</p>
            </div>

            <div class="container">
                <div class="infoTicket">
                    <div class="section">
                        <span>Filme e sessão</span>
                        <div>
                            <p>{order.title}</p>
                            <p>{order.day}</p>
                        </div>
                    </div>
                    <div class="section">
                        <span>Ingressos</span>
                        <div>
                            {order.seats}
                        </div>
                    </div>
                    <div class="section">
                        <span>Comprador</span>
                        <div>
                            <p>Nome: {order.name}</p>
                            <p>CPF: {order.cpf}</p>
                        </div>
                    </div>
                    <Link to="/" onClick={()=> setOrder("")}>
                        <button>Voltar para Home</button>
                    </Link>
                    
                </div>
            </div>
      </main>
    );
}