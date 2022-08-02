import Header from "../../components/Header/Header"
import sobre from "../../assets/Sobre-Logo.png"
import autora from "../../assets/autora.jpg"
import './sobre.css'
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import instagram from "../../assets/instagram.png"

function Sobre() {
    return (
        <>
            <Header
                image={sobre}
                description='lupa com letra i no centro'
            >
                Sobre
            </Header>
            <div className="infos-autora">
                <h2>O lugar da pessoa trans/travesti é onde ela quiser!</h2>
                <div className="autora-container">
                    <div className="autora">
                        <img src={autora} alt="autora" />
                    </div>
                    <div className="autora-parag">
                        <p>
                            Lara Oliveira é arquiteta e urbanista de formação, atualmente buscando conhecimentos
                            e desbravando o mundo tech com foco em desenvolvimento front-end. Fazendo parte da turma
                            On17 do Bootcamp "Todas em Tech" da <span><a href="https://reprograma.com.br/" target="_blank">Reprograma.</a></span>
                        </p>
                        <p>
                            A aspirante a desenvolvedora buscou desenvolver este site pensando na época em que buscou
                            ajuda profissional para iniciar a transição de gênero, mas não sabia onde procurar e nem
                            com quem contar. Deste modo, traz esta proposta para que haja um fácil acesso de onde buscar
                            um atendimento em saúde para transição de gênero e apoio emocional.
                        </p>
                    </div>
                </div>
                <section>
                    <h3>Conecte-se</h3>
                    <div className="links">
                        <a href="https://github.com/laraof" target="_blank"><img src={github} alt="github logo" /></a>
                        <a href="https://www.linkedin.com/in/lara-oliveira-%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%E2%9A%A7%EF%B8%8F-a653a4121/" target="_blank"><img src={linkedin} alt="linkedin logo" /></a>
                        <a href="https://www.instagram.com/lara.f.arq/" target="_blank"><img src={instagram} alt="instagram logo" /></a>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Sobre