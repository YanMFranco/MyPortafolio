import "../css/contacto.css";
import { useState } from "react";

const Contacto = () => {

    // Estados locales para almacenar los valores de los campos y mensajes de error
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [tema, setTema] = useState('');
    const [mensaje, setMensaje] = useState('');

    // Estados para mensajes de error
    const [nombreError, setNombreError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [temaError, setTemaError] = useState('');
    const [mensajeError, setMensajeError] = useState('');

    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validar campos
        if (!nombre) {
            setNombreError('Este campo es requerido');
        } else {
            setNombreError('');
        }

        if (!email) {
            setEmailError('Este campo es requerido');
        } else {
            setEmailError('');
        }

        if (!tema) {
            setTemaError('Este campo es requerido');
        } else {
            setTemaError('');
        }

        if (!mensaje) {
            setMensajeError('Este campo es requerido');
        } else {
            setMensajeError('');
        }

        // Si todos los campos están completos, podrías enviar el formulario
        if (nombre && email && tema && mensaje) {
            // Aquí podrías realizar la lógica para enviar el formulario
            console.log('Formulario enviado');
        }
    };

    return (
        <div id="contacto">
            <h3 className="titulo-seccion">Contactanos ahora</h3>
            <div className="contenedor-form">
                <form onSubmit={handleSubmit}>
                    <div className="fila mitad">
                        <input
                            type="text"
                            placeholder="Nombre Completo *"
                            className="input-mitad"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <span className="error">{nombreError}</span>
                        <input
                            type="email"
                            placeholder="Dirección de Email"
                            className="input-mitad"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className="error">{emailError}</span>
                    </div>
                    <div className="fila">
                        <input
                            type="text"
                            placeholder="Tema..."
                            className="input-full"
                            value={tema}
                            onChange={(e) => setTema(e.target.value)}
                        />
                        <span className="error">{temaError}</span>
                    </div>
                    <div className="fila">
                        <textarea
                            cols="30"
                            rows="10"
                            placeholder="Tu Mensaje..."
                            className="input-full"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                        ></textarea>
                        <span className="error">{mensajeError}</span>
                    </div>

                    <input type="submit" value="Enviar Mensaje" className="btn-enviar" />
                </form>
            </div>
        </div>
    );
};

export default Contacto;