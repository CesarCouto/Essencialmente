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
            <li className={Styles.linkItem}><Link to='/Quem_Somos' className={Styles.link}>Quem somos </Link></li>
            <li className={Styles.linkItem}><Link to='/Contato' className={Styles.link}>Contato</Link></li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=5511916464183&text=Ol%C3%A1%20Paula" target='_blank' rel=''>
                <button className={Styles.btn_contato}>
                  Whatsapp <img src={Whatsapp} alt="Logo do Whatsapp" />
                </button>
              </a>
            </li>
          </ul>
        </nav>

        <nav className={Styles.nav_right}>
          <a href="https://www.facebook.com/clinicaessencialmente" target='_blank'><img src={Facebook} className={Styles.redes_sociais} alt="Logo do facebook" /></a>
          <a href="https://www.instagram.com/paulavirginia.psicologa/" target='_blank'><img src={Instagram} className={Styles.redes_sociais} alt="Logo do Instagram" /></a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
