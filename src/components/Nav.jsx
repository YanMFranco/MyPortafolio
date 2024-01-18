import "../css/nav.css";

const Nav = () => {

    const responsiveMenu = () => {
        const x = document.getElementById("nav");
        if (x.className === "") {
            x.className = "responsive";
        } else {
            x.className = "";
        }
    }

    const seleccionar = (event) => {
        const opciones = document.querySelectorAll('#links a');
        opciones.forEach(opcion => opcion.className = "");
        event.target.className = "seleccionado";

        // Hacemos desaparecer el menú una vez que se ha seleccionado una opción en modo responsive
        const x = document.getElementById("nav");
        x.className = "";
    };

    return (
        <div className="Container-Nav">
            <section id="inicio" className="inicio">
                <div className="contenido">
                    <header>
                        <div className="contenido-header">
                            <h1>/YF/</h1>
                            <nav id="nav" className="">
                                <ul i="links">
                                    <li><a href="#inicio" className="seleccionado" onClick={(e) => seleccionar(e)}>INICIO</a></li>
                                    <li><a href="#sobremi" onClick={(e) => seleccionar(e)}>SOBRE MI</a></li>
                                    <li><a href="#servicios" onClick={(e) => seleccionar(e)}>SERVICIOS</a></li>
                                    <li><a href="#portfolio" onClick={(e) => seleccionar(e)}>PORTFOLIO</a></li>
                                    <li><a href="#contacto" onClick={(e) => seleccionar(e)}>CONTACTO</a></li>
                                </ul>
                            </nav>

                            <div id="icono-nav" onClick={responsiveMenu}>
                                <i className="fa-solid fa-bars"></i>
                            </div>

                            <div className="redes">
                                <a href="https://www.linkedin.com/in/yan-franco-moreno-henao-83b957247/"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="https://web.facebook.com/ymorenohe/"><i className="fa-brands fa-facebook"></i></a>
                                <a href="https://github.com/YanMFranco"><i className="fa-brands fa-github"></i></a>
                                <a href="https://wa.me/+573218968485"><i class="fa-brands fa-whatsapp"></i></a>
                            </div>

                        </div>
                    </header>
                    <div className="presentacion">
                        <p className="bienvenida">Bienvenidos</p>
                        <h2>Soy <span>Yan Franco Moreno Henao</span>, Desarrollador FullStack</h2>
                        <p className="descripcion">Este espacio refleja mi dedicación al mundo de la programación, donde fusiono creatividad, innovación y atención al detalle para lograr soluciones impactantes.
                         Aquí encontrarás una colección de mis trabajos más recientes, cada uno contando su propia historia única.</p>
                        <a href="#portfolio">Ir a Portafolio</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Nav;