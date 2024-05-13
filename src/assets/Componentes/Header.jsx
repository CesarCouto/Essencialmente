import { Link } from 'react-router-dom'

import Styles from './Header.module.css'
import Logo from '../Imagens/logo.png'
import Facebook from '../Imagens/facebook.png'
import Instagram from '../Imagens/instagram.png'
import Whatsapp from '../Imagens/whatsapp.png'

function Header(){
    return(
        <div>
            <header  className={Styles.header}>
                
                <nav className={Styles.nav_left}>
                    <Link to='/Essencialmente'><img src={Logo} className={Styles.logo} alt="Logo Essencialmente" /> </Link> 
                </nav>

                <nav className={Styles.nav_link}>
                    <ul>
                        <li id={Styles.inicio}><Link to='/Essencialmente'>Início</Link></li>
                        <li>Quem somos</li>
                        <li><Link to='/Contato'> Contato</Link></li>
                        <li><button className={Styles.btn_contato}>Whatsapp <img src={Whatsapp} alt="Logo do Whatsapp" /></button></li>
                    </ul>
                </nav>

                <nav className={Styles.nav_right}>
                    <img src={Facebook} className={Styles.redes_sociais} alt="Logo do facebook" />
                    <img src={Instagram} className={Styles.redes_sociais} alt="Logo do Instagram" />
                </nav>
               
            </header>
          
        </div>
    )
}

export default Header