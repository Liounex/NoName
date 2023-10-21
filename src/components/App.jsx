import { useState } from "react";

function Mensaje() {
  const [mensaje, setMensaje] = useState("Hola, mundo!")

  return (
    <div>
      <h1>{mensaje}</h1>
      <button onClick={() => setMensaje("Adiós, mundo!")}>Cambiar mensaje</button>
      <button onClick={() => window.location.href = './index2.html'}>BEFORE</button>
    </div>
  )
}

function App() {
  return (
    <>
      <div>
        <Mensaje />
        <div>PAGINA 1</div>
      </div>
    </>

  )
}

export default App
