import { Link } from 'react-router-dom'
import bike from '../../Assets/bike.png'
import './Header.scss'


const Header = () => {
    return (
        <header className='header'>
            <Link to='/'>
                <img className='bike-logo' src={bike} alt='bike logo with toilet paper back wheel'/>
            </Link>
            <div className='name'>
                <p>piddles & peddles</p>
            </div>
        </header>
    )
}

export default Header