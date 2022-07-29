import Header from "../../components/Header/Header"
import mapa from "../../assets/Brasil-Logo.png"
import { useState, useEffect } from 'react'
import axios from "axios"
import './mapa.css'

function Mapa() {
    const [dados, setDados] = useState([])
    const [search, setSearch] = useState('')
    const [filteredDados, setFilteredDados] = useState([])
    const baseURL = 'https://my-json-server.typicode.com/laraof/transapi/locais'

    useEffect(() => {
        axios
        .get(baseURL)
        .then((response) => setDados(response.data))
    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value.toUpperCase())
    }

    useEffect(() => {
        setFilteredDados(dados.filter(local => local.estado.includes(search)))
    }, [dados, search])


    return (
        <>
            <Header
                image={mapa}
                description='mapa brasil trans'
            >
                Mapa
            </Header>
            <div className="all-container">
                <input type="text" className="input" placeholder="Digite a sigla de seu Estado" onChange={handleSearch} />
                <div className="card-container">
                    {filteredDados.map(info => {
                            return (
                                <div className="card" key={info.id}>
                                    <h2>{info.estado}</h2>
                                    <p>Cidade: {info.cidade}</p>
                                    <p>Local: {info.local}</p>
                                    <p>Endereço: {info.endereço}</p>
                                </div>
                            )
                    })}
                </div>
            </div>
        </>
    )
}

export default Mapa