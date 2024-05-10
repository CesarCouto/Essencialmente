import Styles from './Contato.module.css'

function Contato(){
    return(
        <div className={Styles.fundo}>
            <div className={Styles.container_texto}>
                <h2 className={Styles.texto_contato}>Entre em contato e agende um horário</h2>
            </div>

            <div className={Styles.container_btn}>
                <button className={Styles.btn}>Entrar em contato</button>
            </div>
        </div>
    )
}

export default Contato