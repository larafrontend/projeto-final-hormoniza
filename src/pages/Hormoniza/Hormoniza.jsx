import Header from "../../components/Header/Header"
import hormologo from "../../assets/Hormoniza-Logo.png"
import './hormoniza.css'
import { Link } from "react-router-dom"

function Hormoniza() {
    return (
        <>
            <Header
                image={hormologo}
                description='logo hormoniza'
            >
                Hormoniza
            </Header>
            <div className="infos">
                <section className="info-container">
                    <p>
                        Seja bem vinde! Aqui você consegue obter informações se em seu Estado ou cidade há
                        um local voltado para o atendimento em saúde para pessoas transexuais/travestis.
                    </p>
                </section>
                <section className="second-section">
                    <h2>Níveis de Atendimento</h2>
                    <p>
                        É sabido que nem todas as pessoas trans/travestis estão em busca de tratamento 
                        hormonal ou cirurgias, mas é importante também ter onde encontrar ajuda psicológica 
                        e psiquiátrica, até mesmo uma rede de apoio.
                    </p>
                    <p>
                        Assim sendo, é possível buscar aqui por atendimentos:
                        <ul>
                            <li>Hospitalar - Atendimento ambulatorial e cirurgias</li>
                            <li>Ambulatórios a nível SUS - Consultas</li>
                            <li>Ambulatórios a nível do Estado - Consultas</li>
                        </ul>
                    </p>
                </section>
                <section className="second-section">
                    <h2>Como funciona?</h2>
                    <p>
                        Acesse a página Mapa, digite a sigla do Estado onde mora. Após digitar 
                        deve aparecer uma lista das cidades que atualmente possuem um ambulatório 
                        ou hospital que forneça o serviço em saúde. 
                    </p>
                    <p>
                        Para acessar o mapa é só clicar no botão abaixo.
                    </p>
                    <div className="mapa-btn">
                        <Link to="/mapa">
                            <button>Mapa</button>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Hormoniza