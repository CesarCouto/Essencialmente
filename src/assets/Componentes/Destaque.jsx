import Styles from './Destaque.module.css'
import Paula from '../Imagens/paula.png'

function Destaque(){
    return(
        <div>
            <section className={Styles.fundo}>
               <div className={Styles.container}>
                   <h2 className={Styles.titulo_destaque}>Destaque</h2>
                   <div className={Styles.container_destaque}>
                       <div className={Styles.container_imagem}>
                            <h2 className={Styles.texto_profissional}>Profissional destaque</h2>
                            <img src={Paula} className={Styles.imagem_profissional} alt="" />
                       </div>
                       <div className={Styles.container_texto}>
                            <h2 className={Styles.titulo_profissional}>Dra Paula Virginia</h2>
                            <p className={Styles.texto_destaque}>Paula Virginia é mais que uma psicóloga e Analista Junguiana; ela personifica um padrão de excelência onde profissionalismo, autenticidade, responsabilidade, cuidado, amor e carinho são pilares inabaláveis.À frente da Essencialmente Clínica de Psicologia, Paula não apenas administra, mas nutre um ambiente onde o bem-estar é prioridade. Seu cuidado estende-se não somente aos pacientes, mas também aos profissionais e colaboradores da clínica. Com um zelo majestoso, ela oferece suporte não apenas profissional, mas também emocional, reconhecendo que o cuidado mútuo é essencial para o sucesso de todos.</p>
                       </div>
                   </div>
               </div>
            </section>
        </div>
    )
}

export default Destaque