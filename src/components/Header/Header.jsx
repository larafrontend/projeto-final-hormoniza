import './header.css'

function Header(props) {
    return (
        <div className='header'>
            <img src={props.image} alt={props.description} />
            <h1>{props.children}</h1>
        </div>
    )
}

export default Header