import CardProps from './CardProps'
import Styles from './Competencia.module.css'
import Selo from '../Imagens/ok.png'
import Equipe from '../Imagens/equipe.png'
import Amor from '../Imagens/saude.png'

function Competencia(){
    return(
        <div>
            <section className={Styles.section_competencia}>
                <div className={Styles.overlay}></div> {/* Sobreposição */}
                <div className={Styles.container_card_1}>
                    <CardProps
                        imagem={Selo}
                        titulo="Qualidade garantida"
                        texto="A nossa equipe de profissionais te garante um atendimento de alta qualidade para suprir todas as suas necessidades."
                    />
                </div>

                <div className={Styles.container_card_2}>
                    <CardProps 
                        imagem={Equipe}
                        titulo="Nossos Profissionais"
                        texto="A nossa equipe de profissionais te garante um atendimento de alta qualidade para suprir todas as suas necessidades."              
                    />
                </div>

                <div className={Styles.container_card_3}>
                    <CardProps 
                    imagem={Amor}
                    texto="A nossa equipe de profissionais te garante um atendimento de alta qualidade para suprir todas as suas necessidades."
                    titulo="Seu bem estar é nossa prioridade"
                    
                    
                    
                    />
                </div>
            </section>
        </div>
    )
}

export default Competencia
