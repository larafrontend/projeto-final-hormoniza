import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'
import Hormoniza from '../pages/Hormoniza/Hormoniza'
import Mapa from '../pages/Mapa/Mapa'
import Entenda from '../pages/Entenda/Entenda'
import Sobre from '../pages/Sobre/Sobre'

function ApplicationRoutes() {
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<Hormoniza />} />
                <Route path='mapa' element={<Mapa />} />
                <Route path='entenda' element={<Entenda />} />
                <Route path='sobre' element={<Sobre />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default ApplicationRoutes