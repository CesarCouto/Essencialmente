import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './assets/Componentes/Header'
import Home from './assets/Componentes/Home'
import Footer from './assets/Componentes/Footer'
import Contato from './assets/Componentes/Contato'





function App() {
  

  return (
    <>
    <Router>
      <Header />
    <Routes>
     * <Route path='/Essencialmente' element={ <Home /> } /> 
     <Route path='/Contato' element={ <Contato /> } />
     </Routes>
       <Footer />
     </Router>
    </>
  )
}

export default App
