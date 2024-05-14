import Styles from './Footer.module.css'
import Logo from '../Imagens/logo.png'
import Facebook from '../Imagens/facebook.png'
import Whats from '../Imagens/zap.png'
import Instagram from '../Imagens/instagram.png'
import Local from '../Imagens/local.png'
import Relogio from '../Imagens/relogio.png'
import Email from '../Imagens/email.png'
import Telefone from '../Imagens/telefone.png'
import { Link } from 'react-router-dom'



function Footer(){
    return(
        <footer className={Styles.fundo}>
            <div className={Styles.container_imagens}>
                <Link to='/Essencialmente'><img src={Logo} alt="" /></Link>
                <div className={Styles.icons}>
                    <a href="https://api.whatsapp.com/send?phone=5511916464183&text=Ol%C3%A1%20Paula" target='_blank'><img src={Whats} className={Styles.icons_redes} alt="" /></a>
                    <a href="https://www.facebook.com/clinicaessencialmente" target='_blank'><img src={Facebook} className={Styles.icons_redes} alt="" /></a>
                    <a href="https://www.instagram.com/paulavirginia.psicologa/" target='_blank'><img src={Instagram} className={Styles.icons_redes} alt="" /></a>
                </div>
            </div>

            <div className={Styles.container_contato}>
                    <h2 className={Styles.titulo_principal_contato}>contato</h2>
                    <div className={Styles.contato}>
                        <img src={Local} className={Styles.local} alt="" />
                        <p className={Styles.texto_local}>Rua Bonifácio Cubas 641 - sala 03, Vila Albertina, São Paulo</p>
                    </div>
            </div>

            <div className={Styles.container_horario}>
                    <h2 className={Styles.titulo_principal_horario}>Horários</h2>
                    <div className={Styles.horario}>
                        <div className={Styles.horario_1}>
                            <img src={Relogio} className={Styles.icons_horario} alt="" />
                            <p className={Styles.texto_horario}>sexta 13:30 as 18:30</p>
                        </div>

                        <div className={Styles.horario_1}>
                            <img src={Email} className={Styles.icons_horario} alt="" />
                            <p className={Styles.texto_horario}>paulavirginia.psicologa@gmail.com</p>
                        </div>

                        <div className={Styles.horario_1}>
                            <img src={Telefone} className={Styles.icons_horario} alt="" />
                            <p className={Styles.texto_horario}>(11) 96882-1375</p>
                        </div>

                    </div>
            </div>
        </footer>
    )
}

export default Footer