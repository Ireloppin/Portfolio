import React from "react";
import IconoFormacion from "../img/icono-herramientas.svg";
import IconoJavascript from "../img/icono-javascript.svg";
import IconoReact from "../img/icono-react.svg";
import IconoGit from "../img/icono-git.svg";
import IconoGithub from "../img/icono-github.svg";
import IconoCss from "../img/icono-css.svg";
import IconoHtml from "../img/icono-html.svg";
import IconoBootstrap from "../img/icono-bootstrap.svg";
import IconoFireBase from "../img/icono-firebase.svg";
import IconoLitElement from "../img/icono-Lit.svg";
import IconoDocker from "../img/icono-docker.svg";
import IconoTailwind from "../img/icono-tailwind.svg";
import IconoJest from "../img/icono-jest.svg";
import IconoCypress from "../img/icono-cypress.svg";

const Formacion = ({ english }) => {
  return (
    <div className="perfil">
      <div className="contenedor">
        <div className="icono-flex">
          <img src={IconoFormacion} alt="formacion"></img>
          <h2>{english ? "Skills" : "Habilidades"}</h2>
        </div>
        <div>
          <div className="iconos-tecnologia">
            <div className="tecnologia">
              <img src={IconoJavascript} alt="JavaScript"></img>
            </div>
            <div className="tecnologia">
              <img src={IconoReact} alt="React"></img>
            </div>
            <div className="tecnologia">
              <img src={IconoLitElement} alt="LitElement"></img>
            </div>
            <div className="tecnologia">
              <img src={IconoGit} alt="Git"></img>
            </div>
            <div className="tecnologia">
              <img src={IconoGithub} alt="Github"></img>
            </div>
            <div className="tecnologia">
              <img src={IconoCss} alt="Css"></img>
            </div>
            <div className="tecnologia">
              <img src={IconoHtml} alt="HTML"></img>
            </div>

            <div className="tecnologia">
              <img src={IconoFireBase} alt="Firebase"></img>
            </div>

            <div className="tecnologia">
              <img src={IconoDocker} alt="Docker"></img>
            </div>
            <div className="tecnologia">
              <img src={IconoJest} alt="Jest"></img>
            </div>
            <div className="tecnologia">
              <img src={IconoCypress} alt="Firebase"></img>
            </div>
            <div className="tecnologia">
              <img src={IconoBootstrap} alt="Booststrap"></img>
            </div>
            <div className="tecnologia">
              <img src={IconoTailwind} alt="Tailwind"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formacion;
