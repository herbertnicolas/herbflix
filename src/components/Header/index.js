import { Link } from 'react-router-dom';
import './index.css'

function Header(){
    return(
        <header>
            <Link to="/" className='logo'> HERBFLIX </Link>
            <div className='menu'>
                <Link to="/"> HOME </Link>
                <Link to="/favoritos"> MEUS FILMES </Link>
            </div>
        </header>
    )
}

export default Header;