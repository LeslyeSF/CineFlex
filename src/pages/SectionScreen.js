export default function SectionScreen(){
    return(
        <main>
            <div className="title">
                <p>Selecione o(s) assento(s)</p>
            </div>
            <div className="container">
                <div className="seatSection">
                    <div className="seats">
                        <div className="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                        <div class="ball available">01</div>
                    </div>
                    <div className="legend">
                        <div>
                            <div class="ball selected"></div>
                            <p>Selecionado</p>
                        </div>
                        <div>
                            <div className="ball available"></div>
                            <p>Disponível</p>
                        </div>
                        <div>
                            <div className="ball unavailable"></div>
                            <p>Indisponível</p>
                        </div>
                    </div>
                </div>

                <div className="infoSection">
                    <p>Nome do comprador:</p>
                    <input type="text" placeholder="Digite seu nome..."/>
                    <p>CPF do comprador:</p>
                    <input type="text" placeholder="Digite seu CPF..."/>

                    <button>Reservar assento(s)</button>
                </div>
          
            </div>
        </main>
    );
}