import { Link } from 'react-router-dom'
import hormoniza from '../../assets/Hormoniza-Logo.png'
import './menu.css'

function Menu() {
    return (
        <>
            <div className='container'>
                <div className='logo'>
                    <img src={hormoniza} alt="logo hormoniza" />
                </div>
                <div className='navbar hamb-nav'>
                    <ul className='menu'>
                        <li className='item'>
                            <Link className='link' to='/'>Hormoniza</Link>
                        </li>
                        <li className='item'>
                            <Link className='link' to='/mapa'>Mapa</Link>
                        </li>
                        <li className='item'>
                            <Link className='link' to='/entenda'>Entenda</Link>
                        </li>
                        <li className='item'>
                            <Link className='link' to='/sobre'>Sobre</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menu