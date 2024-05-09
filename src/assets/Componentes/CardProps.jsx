import Styles from './CardProps.module.css'


function CardProps({imagem, titulo, texto}) {
    return(
       <section className={Styles.card}>
        <img src={imagem} className={Styles.selo} alt="selo de ok" />
        <h2  className={Styles.titulo_card}>{titulo}</h2>
        <p className={Styles.texto_card}>{texto}</p>
       </section>
    )
}

export default CardProps