import foto from "../img/FrancoNew.png";
import "../css/inicio.css";
import cv from "../components/others/CvYanFranco.pdf";

const Inicio = () => {
    return (
        <div id="sobremi">
            <div className="contenedor-foto">
                <img src={foto} alt="" />
            </div>
            <div className="sobremi">
                <p className="titulo-seccion">Sobre Mi</p>
                <h2>Hola, Soy <span>Yan Franco Moreno Henao</span> </h2>
                <h3>Desarrollador FullStack</h3>
                <p>
                    Soy un desarrollador full stack altamente motivado y con experiencia en proyectos cortos.
                    Busco unirme a una empresa innovadora donde pueda aplicar y mejorar mis habilidades de programación y desarrollo web. Estoy dispuesto a trabajar arduamente para adquirir nuevas habilidades y conocimientos en el campo de la tecnología. Mi objetivo a corto plazo es trabajar en proyectos desafiantes para obtener experiencia laboral y contribuir al crecimiento de la empresa.
                    A largo plazo, aspiro a convertirme en un desarrollador experto y valorado, liderando proyectos exitosos y ofreciendo soluciones innovadoras a los clientes.
                    Estoy emocionado por trabajar en un entorno que valore la innovación y el trabajo en equipo y estoy dispuesto a contribuir con una actitud positiva y pasión por la tecnología.
                </p>

                <a href={cv} download="Curriculum_Vitae.pdf">Descargar CV</a>
            </div>
        </div>
    )
}

export default Inicio;