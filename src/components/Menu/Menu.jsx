import { Link } from 'react-router-dom'
import hormoniza from '../../assets/Hormoniza-Logo.png'
import './menu.css'

function Menu() {
    return (
        <>
            <nav className='container'>
                
                <input type="checkbox" id='check' />

                <label className='responsive-menu responsive-check' htmlFor="check">
                    <div></div>
                    <div></div>
                    <div></div>
                </label>

                <div className='logo'>
                    <Link to='/'><img src={hormoniza} alt="logo hormoniza" /></Link>
                </div>
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
            </nav>
        </>
    )
}

export default Menu