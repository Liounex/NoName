import { useState } from "react"
import { Link } from 'react-router-dom'
import '../assets/css/App.css'




function Mensaje() {
  const [mensaje, setMensaje] = useState("Hola, mundo!")

  return (
    <div>
      <h1>{mensaje}</h1>
      <button onClick={() => setMensaje("Adiós, mundo!")}>Cambiar mensaje</button>
      <button> <Link to="/homes">BEFORE</Link></button>
    </div>
  )
}


function App() {
  return (
    <>
      <div>
        <Mensaje />
        <div>PAGINA 1</div>
        <Link to="/homes" className="trr">Ir a otra ruta</Link>
      </div>
    </>

  )
}

export default App
