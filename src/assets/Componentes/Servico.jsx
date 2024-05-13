import Styles from './Servico.module.css'
import CirculoProps from './CirculoProps'
import Psicologia from '../Imagens/psicologia.png'
import Avaliar from '../Imagens/avaliação.png'
import Orientar from '../Imagens/orientacao.png'

function Servico(){
    return(
        <div>
            <section className={Styles.servico}>
                <div className={Styles.container_texto_servico}>
                    <h2 className={Styles.titulo_servico}>Serviços</h2>
                    <h2 className={Styles.sub_titulo_servico}>Nossas especialidades</h2>
                    <div className={Styles.container_circulo}>
                    <CirculoProps 
                        imagem={Psicologia}
                        texto="Psicologia"              
                        />
                    <CirculoProps 
                        imagem={Avaliar}
                        texto="Avaliação Psicologica"
                    />

                    <CirculoProps 
                        imagem={Orientar}
                        texto="Orientação 
                        Vocacional"
                    />
                    </div> 
                </div>
            </section>
        </div>
    )
}

export default Servico