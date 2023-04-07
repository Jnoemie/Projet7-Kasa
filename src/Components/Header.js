import { Link } from 'react-router-dom';
//import logo from '../Assets/logo.png'

//import '../Styles/Header.css'

function Header() {
    return (
        <div className='kasa-banner'>
            
            <ul className='menuNav'>
                <li className='menuPuce'> <Link to="/">Accueil</Link> </li>
                <li className='menuPuce'> <Link to="About">A Propos</Link> </li>
            </ul>
        </div>
    )
  }

  export default Header;