import Styles from './Quem_Somos.module.css'
import Consultorio from '../Imagens/clinica-2.png'
import Espaco_1 from '../Imagens/espaco_1.png'
import Espaco_2 from '../Imagens/espaco_2.png'
import Espaco_3 from '../Imagens/espaco_3.png'
import Horario from './Horario'




function Quem_Somos(){
    return(
        <div>
            <section className={Styles.quem_somos}>
                <h2 className={Styles.titulo_principal}>Quem Somos</h2>
                <div className={Styles.container_texto}>
                    <p className={Styles.texto_principal}>Descubra mais sobre nossa missão e serviços. Não espere mais, entre em contato conosco hoje mesmo, agende um horário e dê o primeiro passo rumo a uma nova jornada. Estamos aqui para ajudar você a conquistar seus objetivos e viver plenamente.</p>
                </div>
            </section>

            <section className={Styles.consultorio}>
                <div className={Styles.texto_consultorio}>
                    <div className={Styles.container_texto_equipe}>
                        <h2 className={Styles.titulo_equipe}>Diversos Consultórios</h2>
                        <p className={Styles.texto_equipe}>
                        Consultorio disponivel para te atender a todo momento
                        </p>
                    </div>

                    <div className={Styles.container_texto_equipe}>
                        <h2 className={Styles.titulo_equipe}>Equipe qualificada</h2>
                        <p className={Styles.texto_equipe}>
                        Contamos com uma equipe de profissionais altamente qualificados.
                        </p>
                    </div>

                    <div className={Styles.container_texto_equipe}>
                        <h2 className={Styles.titulo_equipe}>Qualidade e bem-estar</h2>
                        <p className={Styles.texto_equipe}>
                        Na Essencialmente seu bem-estar é nossa prioridade.
                        </p>
                    </div>


                    <div className={Styles.texto_equipe}>
                        
                    </div>

                    <div className={Styles.texto_equipe}>
                        
                    </div>
                </div>

                <div className={Styles.container_imagem_consultorio}>
                    <img src={Consultorio} alt="" />
                </div>
            </section>

            <section className={Styles.espaco}>
                <h2 className={Styles.titulo_espaco}>Espaço</h2>
                <h2 className={Styles.sub_titulo_espaco}>Conheça nossa estrutura</h2>
                <div className={Styles.container_imagem_espaco}>
                    <div className={Styles.img}>
                        <img src={Espaco_1} alt="" />
                    </div>
                    <div className={Styles.img}>
                        <img src={Espaco_2} alt="" />
                    </div>
                    <div className={Styles.img}>
                        <img src={Espaco_3} alt="" />
                    </div>
                </div>
            </section>
            <Horario />
        </div>
    )
}

export default Quem_Somos