import { useState } from "react"
import { Link } from 'react-router-dom'
import '../assets/css/App.css'


function Mensaje() {
    const [mensaje, setMensaje] = useState("Hola, mundo!")

    return (
        <div>
            <h1>{mensaje}</h1>
            <button onClick={() => setMensaje("Adiós, mundo!")}>Cambiar mensaje</button>
            <button> <Link to="/">AFTER</Link></button>
        </div>
    )
}

function Homes() {
    return (
        <>
            <div>
                <Mensaje />
                <div>PAGINA 2</div>
                    <Link to="/" className="trr">Ir a otra ruta</Link>
            </div>
        </>

    )
}

export default Homes
