import Styles from './Contato.module.css'
import Telefone from '../Imagens/contato-grande.png'
import Whatsapp from '../Imagens/whats.png'
import Lugar from '../Imagens/lugar.png'
import Horario from './Horario'
import Mapa from './Mapa'
import Footer from './Footer'

function Contato(){
    return(
        <div>

        <main className={Styles.contato}>
            <h1 className={Styles.titulo_contato}>Contato</h1>         
        </main>

        <Mapa />

        <section className={Styles.lugar}>
          <div className={Styles.container_lugar}>
                <img src={Lugar} className={Styles.img_lugar} alt="" />
                <h2 className={Styles.titulo_lugar}>Unidade Bonifacio Cubas</h2>
                <p className={Styles.texto_lugar}>R. Bonifácio Cubas, 641 - Freguesia do Ó, São Paulo - SP, 02731-000</p>
                <p className={Styles.telefone_sobre}>TEL (11) 96882-1375</p>
          </div> 

        
        </section>
        
        <Horario />
        
        </div>
    )
}

export default Contato