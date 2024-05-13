import Styles from './Mapa.module.css'
import Telefone from '../Imagens/contato-grande.png'
import Whatsapp from '../Imagens/whats.png'
import Lugar from '../Imagens/lugar.png'

function Mapa(){
    return(
        <div>
            <section className={Styles.principal}>
                <div className={Styles.container_texto}>
                    <h2 className={Styles.titulo_principal}>Entre em contato</h2>
                </div>

                 <div className={Styles.container}>
                     <div className={Styles.container_telefone}>
                     <h2 className={Styles.titulo_telefone}>Unidade Bonifacio Cubas</h2>
                        <div className={Styles.telefone_1}>
                        <img src={Telefone} className={Styles.img} alt="" />
                        <h2 className={Styles.numero}>(11) 96882-1375</h2>
                        <img src={Whatsapp} className={Styles.icon_rede} alt="" />
                        </div>

                        <div className={Styles.telefone_1}>
                        <img src={Telefone} className={Styles.img} alt="" />
                        <h2 className={Styles.numero}>(11) 91646-4183</h2>
                        <img src={Whatsapp} className={Styles.icon_rede} alt="" />
                        </div>
                    </div>

                    

                    

                    <div className={Styles.container_mapa}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3658.9804042957494!2d-46.6939545!3d-23.497215299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDI5JzUwLjAiUyA0NsKwNDEnMzguMiJX!5e0!3m2!1spt-BR!2sbr!4v1715492288150!5m2!1spt-BR!2sbr" 
                        width="885" 
                        height="556" 
                        style={{ border: "0" }} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe> 
                    </div>
                 </div>
            </section>

            
        </div>
    )
}

export default Mapa