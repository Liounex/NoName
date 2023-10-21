import { useState } from "react";

function Mensaje() {
    const [mensaje, setMensaje] = useState("Hola, mundo!")

    return (
        <div>
            <h1>{mensaje}</h1>
            <button onClick={() => setMensaje("Adiós, mundo!")}>Cambiar mensaje</button>
            <button onClick={() => window.location.href = '/index.html'}>AFTER</button>
        </div>
    )
}

function Contact() {
    return (
        <>
            <div>
                <Mensaje />
                <div>PAGINA 2</div>
            </div>
        </>

    )
}

export default Contact
