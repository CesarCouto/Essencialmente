import Styles from './Home.module.css'
import Sobre from './Sobre'
import Competencia from './Competencia'
import Servico from './Servico'


function Home(){
    return(
      
         <main className={Styles.main}>
            <div className={Styles.container_texto}>
                <h1 className={Styles.titulo}>Essencialmente Clínica de Psicologia</h1>
                <p className={Styles.texto_home}>A Clínica de Psicologia Bem Estar foi fundada pela psicóloga e psicanalista Givalda Cardoso Fideles Pinto com o propósito de auxiliar indivíduos em suas jornadas rumo ao bem-estar emocional. Reconhecendo a importância da psicoterapia para resolver conflitos existenciais, a clínica promove um ambiente de acolhimento e compreensão, valorizando a singularidade de cada cliente. Comprometida em oferecer suporte profissional e compassivo, a Bem Estar busca ajudar os clientes a alcançar autonomia e crescimento pessoal.</p>
            </div>    
            <Sobre />
            <Competencia />
            <Servico />
             </main>
    )
}



export default Home