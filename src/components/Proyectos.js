import React from "react";
import IconoProyectos from "../img/icono-proyectos.svg";
import datosProyectos from '../mocks/datosProyectos.json'
import Proyecto from "./Proyecto";


const Proyectos = () => {
    const proyectos = datosProyectos.proyectos
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
    <div className="proyectos">
      <div className="contenedor">
 
        <div className="icono-flex">
          <img src={IconoProyectos} alt="proyectos"></img>
          <h2 className="h2-blanco">Proyectos</h2>
        </div>
        <ul className="lista-proyectos">

          {proyectos.map(proyecto =>
          <li key= {proyecto.id} className="proyecto">
            <Proyecto proyecto={proyecto}/> 
          </li>
          
          )}

        </ul>
     
      </div>
    </div>
  );
};

export default Proyectos;
