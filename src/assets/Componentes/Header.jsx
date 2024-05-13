import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Header.module.css';
import Logo from '../Imagens/logo.png';
import Facebook from '../Imagens/facebook.png';
import Instagram from '../Imagens/instagram.png';
import Whatsapp from '../Imagens/whatsapp.png';

function Header() {
  return (
    <div>
      <header className={Styles.header}>
        <nav className={Styles.nav_left}>
          <Link to='/Essencialmente'>
            <img src={Logo} className={Styles.logo} alt="Logo Essencialmente" />
          </Link>
        </nav>

        <nav className={Styles.nav_link}>
          <ul>
            <li className={Styles.linkItem}><Link to='/Essencialmente' className={Styles.link}>Início</Link></li>
            <li className={Styles.linkItem}>Quem somos</li>
            <li className={Styles.linkItem}><Link to='/Contato' className={Styles.link}>Contato</Link></li>
            <li>
              <button className={Styles.btn_contato}>
                Whatsapp <img src={Whatsapp} alt="Logo do Whatsapp" />
              </button>
            </li>
          </ul>
        </nav>

        <nav className={Styles.nav_right}>
          <img src={Facebook} className={Styles.redes_sociais} alt="Logo do facebook" />
          <img src={Instagram} className={Styles.redes_sociais} alt="Logo do Instagram" />
        </nav>
      </header>
    </div>
  );
}

export default Header;
