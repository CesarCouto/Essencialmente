import Styles from './Sobre.module.css'
import Clinica from '../Imagens/clinica.png'

function Sobre(){
    return(
        <div>
            <section>
                <div className={Styles.container_imagem}>
                    <img src={Clinica} alt="" />
                </div>

                <div className={Styles.container_texto}>
                    <h2 className={Styles.titulo_sobre}>SOBRE NÓS</h2>
                    <h3 className={Styles.sub_titulo}>Como podemos te ajudar?</h3>
                    <p className={Styles.texto_sobre}>A <strong>Essencialmente</strong> Clínica de Psicologia oferece suporte a indivíduos fragilizados pelas pressões do cotidiano e pelo estresse da sociedade contemporânea. Por meio de abordagens técnicas e científicas, a clínica proporciona acolhimento e intervenções psicológicas que visam promover a reconexão do paciente consigo mesmo e com as oportunidades ao seu redor.</p>
                </div>
            </section>
        </div>
    )
}

export default Sobre