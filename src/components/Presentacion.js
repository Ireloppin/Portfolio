import React from "react";
import FotoPerfil from "../img/foto-perfil-ok.jpg";
import IconoPerfil from "../img/icono-perfil.svg";
import IconoCV from "../img/icono-file-text.svg";

const Presentación = () => {
  window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;
    
      for(var i = 0; i < elements.length; i++) {
        let element = elements[i];
  
        if(element.getBoundingClientRect().top < screenSize) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      }
  });

  return (
    <div className="perfil">
      <div className="contenedor">
      <h1 className='etiquetas'>{'<Header>'}</h1>
        <div className="icono-flex">
          <img src={IconoPerfil} alt="perfil"></img>
          <h2>Perfil</h2>
        </div>
        <div className="contenedor-perfil ">
          <div className="primer-bloque fadeLeft scroll-content">
            <img className="imagen-perfil" src={FotoPerfil} alt="foto"></img>
            <p>
              Desarrolladora Web por vocación. Autodidacta, creativa y
              constante.{" "}
            </p>
           
          </div>
          <div className="segundo-bloque fadeRight scroll-content">
            <p><span>Datos interesantes sobre mí:</span></p>
            <ul>
              <li>
              <p>He tenido un negocio con éxito durante 9 años, lo vendí para estudiar Programación web.</p>
              <p>Estudié Comunicación Audiovisual en la Universidad de Sevilla.</p>
              <p>He trabajado como operadora de cámara, productora y realizadora de televisión.</p>
              <p>Durante 4 años estudié Árabe porque gusto, por curiosidad</p>
              <p>Hay mucho más, ¡pero no me cabe aquí!</p>
              </li>
            </ul>
          </div>

          
        </div>
        <div className="icono-link">
              <img src={IconoCV} alt="CV"></img>
              <a className="link" href="https://ireloppin.github.io/cv/">
                Ver CV
              </a>
            </div>
            <h1 className='etiquetas'>{'</Header>'}</h1>
      </div>
    </div>
  );
};

export default Presentación;
