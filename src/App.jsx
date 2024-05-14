import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './assets/Componentes/Header'
import Home from './assets/Componentes/Home'
import Footer from './assets/Componentes/Footer'
import Contato from './assets/Componentes/Contato'
import Quem_Somos from './assets/Componentes/Quem_Somos'





function App() {
  

  return (
    <>
    <Router>
      <Header />
    <Routes>
       <Route path='/Essencialmente' element={ <Home /> } />  
       <Route path='/Contato' element={ <Contato /> } />
       <Route path='/Quem_Somos' element={ <Quem_Somos />} />

     </Routes>
     <Footer /> 
     </Router>
    </>
  )
}

export default App
