import "../css/portafolio.css";
import climapp from '../img/clima.jpg';
import todolist from '../img/todolist.jpg';
import memoram from '../img/memoram.png';
import raya from '../img/raya.png';
import mundo from '../img/mundo.png';

const Portafolio = () => {
    return (
        <div id="portfolio">
            <h3 className="titulo-seccion">Mis Proyectos</h3>
            <div className="container-Proyectos">

                <div className="proyecto">
                    <div className="overlay"></div>
                    <img src={mundo} alt="" />
                    <div className="info">
                        <h4>Clima App</h4>
                        <p>En esta aplicacion puse a prueba todos mis conocimientos de Front, Back y Database, utilizando tecnologias como
                            React, Node, Postgres, para asi tener un desafio personal y mostrar de lo que soy capaz.
                            Esta aplicacion nos permite tener una lista de todos los paises con informacion importante y ademas actividades turisticas
                            que el usuario tambien le podra agregar<a href="https://app-countries-theta.vercel.app/"> Ingresa aqui</a>
                        </p>
                    </div>
                </div>

                <div className="proyecto">
                    <div className="overlay"></div>
                    <img src={climapp} alt="" />
                    <div className="info">
                        <h4>Clima App</h4>
                        <p>Esta aplicacion diseñada con REACT, nos permitira ver en tiempo real las condiciones climaticas
                            de cualquier pais o ciudad. <a href="https://main--cool-cassata-bab2ea.netlify.app/"> Ingresa aqui</a>
                        </p>
                    </div>
                </div>

                <div className="proyecto">
                    <div className="overlay"></div>
                    <img src={todolist} alt="" />
                    <div className="info">
                        <h4>Todo List</h4>
                        <p>Escribe tus tareas pendientes para llevar un orden en tus que haceres, apliacion diseñada con REACT que te
                            permite marcar tareas hechas, editarlas y/o eliminarlas.<a href="https://main--remarkable-jelly-9deb14.netlify.app/"> Ingresa aqui</a>
                        </p>
                    </div>
                </div>

                <div className="proyecto">
                    <div className="overlay"></div>
                    <img src={raya} alt="" />
                    <div className="info">
                        <h4>Juego en Raya</h4>
                        <p>Juego diseñado con REACT para que te diviertas con tus amigos en el clasico juego en raya
                            <a href="https://main--animated-rabanadas-222a68.netlify.app/"> Ingresa aqui</a>
                        </p>
                    </div>
                </div>

                <div className="proyecto">
                    <div className="overlay"></div>
                    <img src={memoram} alt="" />
                    <div className="info">
                        <h4>Juego Memoram</h4>
                        <p>Juego diseñado con REACT para que pruebes tu memoria y hablidad mientras te diviertes con este clasico
                            <a href="https://main--playful-gumption-d0ef2d.netlify.app/"> Ingresa aqui</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portafolio;