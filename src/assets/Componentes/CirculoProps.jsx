import Styles from './CirculoProps.module.css'

function CirculoProps({imagem,texto}){
    return(
        <div className={Styles.fundo}>
            <section className={Styles.circulo}>
                
                <div className={Styles.container_imagem}>
                    <img src={imagem} className={Styles.imagem_circulo} alt="" />
                </div>

                 <div className={Styles.container_texto}>
                    <h2 className={Styles.titulo_circulo}>{texto}</h2>
                </div>
            </section>
        </div>
    )
}

export default CirculoProps