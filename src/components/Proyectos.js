import React from "react";
import IconoProyectos from "../img/icono-proyectos.svg";
import IconoHome from "../img/icono-home.svg";
import IconoBraces from "../img/icono-braces.svg";
import CotizadorCriptos from "../img/proyectos/cotizador-criptos.jpg";
import KnitTools from "../img/proyectos/knit-tools.jpg";
import Presupuestos from "../img/proyectos/control-de-presupuesto.jpg";

const Proyectos = () => {

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
      <h1 className='etiquetas'>{'<Main>'}</h1>
        <div className="icono-flex">
          <img src={IconoProyectos} alt="proyectos"></img>
          <h2 className="h2-blanco">Proyectos</h2>
        </div>
        <div className="lista-proyectos">
          <div>
            <img
              className="imagen-proyecto fadeTop scroll-content"
              src={KnitTools}
              alt="Knit-Tools"
            ></img>
            <h3 className="h3-blanco">Herramienta para tejedoras</h3>
            <div className="links-proyecto">
              <div className='icono-link-pro'>
                <img src={IconoHome} alt="Ver proyecto"></img> 
                <a className="link-pro"
                href="https://ireloppin.github.io/Knit-Tools/">
                Ver web
                </a>
              </div>
              <div className='icono-link-pro'>
                <img src={IconoBraces} alt="Ver proyecto"></img> 
                <a className="link-pro"
                href="https://github.com/Ireloppin/Knit-Tools">
                Ver repo
                </a>
              </div>
            </div>
          </div>
          <div>
            <img
              className="imagen-proyecto fadeTop scroll-content"
              src={CotizadorCriptos}
              alt="cotizador-criptos"
            ></img>
            <h3 className="h3-blanco">Cotizador de Criptomonedas</h3>
            <div className="links-proyecto">
            <div className='icono-link-pro'>
                <img src={IconoHome} alt="Ver proyecto"></img> 
                <a className="link-pro"
                href="https://ireloppin.github.io/Cotizador-Criptomonedas-React/">
                Ver web
                </a>
              </div>
              <div className='icono-link-pro'>
                <img src={IconoBraces} alt="Ver proyecto"></img> 
                <a className="link-pro"
                href="https://github.com/Ireloppin/Cotizador-Criptomonedas-React">
                Ver repo
                </a>
              </div>

            </div>
          </div>
          <div>
            <img
              id="scroll-content"
              className="imagen-proyecto fadeTop scroll-content"
              src={Presupuestos}
              alt="presupuestos"
            ></img>
            <h3 className="h3-blanco">Control de Presupuestos</h3>
            <div className="links-proyecto">
            <div className='icono-link-pro'>
                <img src={IconoHome} alt="Ver proyecto"></img> 
                <a className="link-pro"
                href="https://ireloppin.github.io/control-presupuesto-react-vite/">
                Ver web
                </a>
              </div>
              <div className='icono-link-pro'>
                <img src={IconoBraces} alt="Ver proyecto"></img> 
                <a className="link-pro"
                href="https://github.com/Ireloppin/control-presupuesto-react-vite">
                Ver repo
                </a>
              </div>

            </div>
          </div>
        </div>
        <h1 className='etiquetas'>{'</Main>'}</h1>
      </div>
    </div>
  );
};

export default Proyectos;
