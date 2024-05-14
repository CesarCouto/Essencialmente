import Styles from './Horario.module.css'

function Horario(){
    return(
        <div>
            <div className={Styles.fundo_contato}>
            <div className={Styles.container_texto_contato}>
                <h2 className={Styles.texto_contato}>Entre em contato e agende um horário</h2>
            </div>

            <div className={Styles.container_btn}>
                <a href="https://api.whatsapp.com/send?phone=5511916464183&text=Ol%C3%A1%20Paula" target='_blank'><button className={Styles.btn}>Entrar em contato</button></a>
            </div>
        </div>
        </div>
    )
}

export default Horario