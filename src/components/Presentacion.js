import React from "react";
import FotoPerfil from "../img/foto-perfil-ok.jpg";
import IconoPerfil from "../img/icono-perfil.svg";
import IconoCV from "../img/icono-file-text.svg";

const Presentación = ({ english }) => {
  window.addEventListener("scroll", function () {
    let elements = document.getElementsByClassName("scroll-content");
    let screenSize = window.innerHeight;

    for (var i = 0; i < elements.length; i++) {
      let element = elements[i];

      if (element.getBoundingClientRect().top < screenSize) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    }
  });

  return (
    <div className="perfil">
      <div className="contenedor">
        <div className="icono-flex">
          <img src={IconoPerfil} alt="perfil"></img>
          <h2>{english ? "Profile" : "Perfil"}</h2>
        </div>
        <div className="contenedor-perfil ">
          <div className="primer-bloque fadeLeft scroll-content">
            <img className="imagen-perfil" src={FotoPerfil} alt="foto"></img>
            <p>
              {english
                ? "Web developer. Self-taught, creative and constant."
                : "Desarrolladora Web. Autodidacta, creativa y constante."}
            </p>
          </div>
          <div className="segundo-bloque fadeRight scroll-content">
            <p>
              <span>
                {english ? "Interesting data:" : "Datos interesantes:"}
              </span>
            </p>
            <ul>
              <li>
                <p>
                  {english
                    ? "I have had a successful business for 9 years, I sold it for study web programming"
                    : "He tenido un negocio con éxito durante 9 años, lo vendí para estudiar Programación web."}
                </p>
                <p>
                  {english
                    ? "I studied Audiovisual Communication at the University of Seville."
                    : "Estudié Comunicación Audiovisual en la Universidad de Sevilla."}
                </p>
                <p>
                  {english
                    ? "As a television producer and director, I learned to organize and lead work teams"
                    : "Como productora y realizadora de televisión aprendí a organizar y liderar equipos de trabajo."}
                </p>
                <p>
                  {english
                    ? "I developed my social skills by working in front of the public."
                    : "Desarrollé mis habilidades sociales trabajando cara al público."}
                </p>
                <p>{english ? "More info in my CV!" : "¡Más info en mi CV!"}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="icono-link">
          <img src={IconoCV} alt="CV"></img>
          <a className="link" href="https://ireloppin.github.io/cv/">
            {english ? "See my CV" : "Ver mi CV"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Presentación;
