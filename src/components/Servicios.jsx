import "../css/servicios.css";

const Servicios = () => {
    return (
        <div id="servicios">
            <h3 className="titulo-seccion">MIS SERVICIOS</h3>
            <div className="fila">
                <div className="servicio">
                    <span className="icono"> <i className="fa-solid fa-code"></i></span>
                    <h4>Desarrollo Frontend</h4>
                    <hr />
                    <ul className="servicios-tag">
                        <li>Web</li>
                        <li>Graphic</li>
                        <li>SEO</li>
                    </ul>
                    <p>
                        <li>Creación de interfaces de usuario atractivas y responsivas.</li>
                        <li>Desarrollo de aplicaciones web utilizando tecnologías como HTML, CSS y JavaScript.</li>
                        <li>Implementación de diseño y experiencia de usuario (UX/UI).</li>
                    </p>
                </div>
                <div className="servicio">
                    <span className="icono"><i className="fa-solid fa-file-code"></i></span>
                    <h4>Desarrollo Backend</h4>
                    <hr />
                    <ul className="servicios-tag">
                        <li>Web</li>
                        <li>Graphic</li>
                        <li>SEO</li>
                    </ul>
                    <p>
                        <li>Diseño y creación de arquitecturas de servidor.</li>
                        <li>Desarrollo de lógica de negocio y manipulación de datos.</li>
                        <li>Implementación de API RESTful o GraphQL para la comunicación entre el frontend y el backend.</li>
                    </p>
                </div>
                <div className="servicio">
                    <span className="icono"><i class="fa-solid fa-business-time"></i></span>
                    <h4>Mantenimiento y Soporte</h4>
                    <hr />
                    <ul className="servicios-tag">
                        <li>Web</li>
                        <li>Graphic</li>
                        <li>SEO</li>
                    </ul>
                    <p>
                        <li>Actualización y mantenimiento continuo de aplicaciones existentes.</li>
                        <li>Resolución de problemas y ofrecimiento de soporte técnico.</li>
                    </p>
                </div>
            </div>
            <div className="fila">
                <div className="servicio">
                    <span className="icono"><i class="fa-solid fa-cloud-arrow-up"></i></span>
                    <h4>Automatización y Despliegue</h4>
                    <hr />
                    <ul className="servicios-tag">
                        <li>Web</li>
                        <li>Graphic</li>
                        <li>SEO</li>
                    </ul>
                    <p>
                        <li>Implementación de procesos de CI/CD (Integración Continua/Despliegue Continuo) para automatizar la entrega de código.</li>
                        <li>Configuración y administración de servidores y entornos de desarrollo y producción.</li>
                    </p>
                </div>
                <div className="servicio">
                    <span className="icono"><i class="fa-solid fa-handshake"></i></span>
                    <h4>Colaboración y Comunicación</h4>
                    <hr />
                    <ul className="servicios-tag">
                        <li>Web</li>
                        <li>Graphic</li>
                        <li>SEO</li>
                    </ul>
                    <p>
                        <li>Trabajo en equipo y colaboración con otros desarrolladores, diseñadores y profesionales del negocio.</li>
                        <li>Comunicación efectiva con los stakeholders para comprender los requisitos del proyecto.</li>
                    </p>
                </div>
                <div className="servicio">
                    <span className="icono"><i class="fa-solid fa-magnifying-glass"></i></span>
                    <h4>Investigación y Adopción de Tecnologías</h4>
                    <hr />
                    <ul className="servicios-tag">
                        <li>Web</li>
                        <li>Graphic</li>
                        <li>SEO</li>
                    </ul>
                    <p>
                        <li>Investigación continua de nuevas tecnologías y herramientas.</li>
                        <li>Adopción de las mejores prácticas y tendencias en el desarrollo de software.</li>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Servicios;