import "../css/skill.css";

const Skill = () => {

    window.onscroll = function () { efectoHabilidades() };

    //funcion que aplica la animación de la barra de habilidades
    const efectoHabilidades = () => {
        var skills = document.getElementById("skills");
        var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

        // Definir umbral para salir del componente
        var umbralSalida = 300;

        if (distancia_skills >= 300) {
            // Si la distancia está dentro del componente
            document.getElementById("html").classList.add("barra-progreso1");
            document.getElementById("js").classList.add("barra-progreso2");
            document.getElementById("bd").classList.add("barra-progreso3");
            document.getElementById("nj").classList.add("barra-progreso4");
            document.getElementById("rac").classList.add("barra-progreso5");
        } else {
            // Si la distancia está fuera del componente, quitar las clases
            document.getElementById("html").classList.remove("barra-progreso1");
            document.getElementById("js").classList.remove("barra-progreso2");
            document.getElementById("bd").classList.remove("barra-progreso3");
            document.getElementById("nj").classList.remove("barra-progreso4");
            document.getElementById("rac").classList.add("barra-progreso5");
        }
    };

    return (
        <div className="contenedor-skills" id="skills">
            <h3>HABILIDADES </h3>
            <div className="skill">
                <div className="info">
                    <p> <span className="lista"> </span>Html & Css</p>
                    <span className="porcentaje">90%</span>
                </div>

                <div className="barra">
                    <div className="" id="html"></div>
                </div>
            </div>
            <div className="skill">
                <div className="info">
                    <p> <span className="lista"> </span>Javascript</p>
                    <span className="porcentaje">90%</span>
                </div>

                <div className="barra">
                    <div className="" id="js"></div>
                </div>
            </div>
            <div className="skill">
                <div className="info">
                    <p> <span className="lista"> </span>Bases de Datos</p>
                    <span className="porcentaje">80%</span>
                </div>

                <div className="barra">
                    <div className="" id="bd"></div>
                </div>
            </div>
            <div className="skill">
                <div className="info">
                    <p> <span className="lista"> </span>Node js</p>
                    <span className="porcentaje">85%</span>
                </div>

                <div className="barra">
                    <div className="" id="nj"></div>
                </div>
            </div>                      
            <div className="skill">
                <div className="info">
                    <p> <span className="lista"> </span>React</p>
                    <span className="porcentaje">75%</span>
                </div>

                <div className="barra">
                    <div className="" id="rac"></div>
                </div>
            </div> 

        </div>
    )
}

export default Skill;