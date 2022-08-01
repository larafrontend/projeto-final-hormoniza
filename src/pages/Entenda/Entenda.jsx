import Header from "../../components/Header/Header"
import entenda from "../../assets/Entenda-Logo.png"
import './entenda.css'

function Entenda() {
    return (
        <>
            <Header
                image={entenda}
                description='cabeça com dois balões de pensamento'
            >
                Entenda
            </Header>
            <div className="infos-entenda">
                <section className="info-cont">
                    <h2>Terapia Hormonal</h2>
                    <p>
                        Tratamento feito por pessoas trans que desejam ter modificações corporais através
                        do uso de hormônios. Para as mulheres trans/travestis é feito o uso de estrogênio e para
                        homens trans o uso de testosterona. É importante lembrar que é fundamental ter o
                        acompanhamento de um profissional de endocrinologia.
                    </p>
                    <div className="info-container">
                        <h3>Alguns Efeitos Esperados</h3>
                        <div className="terapia-container">
                            <ul className="terapia-card"> Estrogênio:
                                <li>Redistribuição de gordura corporal</li>
                                <li>Redução de massa muscular</li>
                                <li>Sensibilidade e aumento de seios</li>
                                <li>Enfraquecimento do crescimento de pêlos</li>
                                <li>Redução ou interrupção de calvíce</li>
                                <li>Diminuição da libido</li>
                            </ul>
                            <ul className="terapia-card"> Testosterona:
                                <li>Crescimento de pêlos</li>
                                <li>Pode haver desenvolvimento de calvíce</li>
                                <li>Aumento da libido</li>
                                <li>Aumento de massa muscular</li>
                                <li>Alteração na voz</li>
                                <li>Interrupção na menstruação</li>
                                <li>Desenvilvomento de acnes</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="info-container">
                    <h2>Cirurgias</h2>
                    <p>
                        Algumas pessoas trans podem ter o desejo em realizar alguns procedimentos
                        cirúrgicos. Cirurgias estas que podem ser de fundamental importância para
                        a saúde mental do indivíduo e sua própria indentificação.
                    </p>
                    <div className="terapia-container">
                        <div className="terapia-card">
                            <h3>Mulheres Trans/Travestis</h3>
                            <h4>Neovaginoplastia</h4>
                            <p>Cirurgia de construção de uma vagina.</p>
                            <h4>Mamoplastia</h4>
                            <p>Cirurgia plástica para colocar silicone.</p>
                            <h4>"Feminização" Facial</h4>
                            <p>Uma série de cirurgias que servem para "suavizar" o rosto.</p>
                        </div>
                        <div className="terapia-card">
                            <h3>Homens trans</h3>
                            <h4>Histerectomia total</h4>
                            <p>Cirurgia para retirada de útero, colo do útero, tubas uterinas e ovários.</p>
                            <h4>Neofaloplastia</h4>
                            <p>Cirurgia para construção de um pênis utiliando pele de partes do corpo.</p>
                            <h4>Metoidioplastia</h4>
                            <p>Cirurgia para a criação de um pênis à partir do clitóris que se desenvolveu com a terapia hormonal.</p>
                            <h4>Mastectomia Masculizadora</h4>
                            <p>Cirurgia para retirada das mamas e reconstrução do peitoral.</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Entenda