export default function SuccessScreen(){
    return(
        <main>
            <div class="title">
                <p class="success">Pedido feito <br/>com suscesso!</p>
            </div>

            <div class="container">
                <div class="infoTicket">
                    <div class="section">
                        <span>Filme e sessão</span>
                        <div>
                            <p>Nome do filme</p>
                            <p>Data e hora</p>
                        </div>
                    </div>
                    <div class="section">
                        <span>Ingressos</span>
                        <div>
                            <p>Assento 01</p>
                            <p>Assento 02</p>
                        </div>
                    </div>
                    <div class="section">
                        <span>Comprador</span>
                        <div>
                            <p>Nome:</p>
                            <p>CPF:</p>
                        </div>
                    </div>

                    <button>Voltar para Home</button>
                </div>
            </div>
      </main>
    );
}