import './App.css'
import Contacto from './components/Contacto'
import Copy from './components/Copy'
import Inicio from './components/Inicio'
import Nav from './components/Nav'
import Portafolio from './components/Portafolio'
import Servicios from './components/Servicios'
import Skill from './components/Skill'

function App() {
  return (
    <>
      <Nav />
      <Inicio />
      <Servicios />
      <Skill />
      <Portafolio />
      <Contacto />
      <Copy />
    </>
  )
}

export default App
