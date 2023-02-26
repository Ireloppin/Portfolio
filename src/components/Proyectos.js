import React from "react";
import IconoProyectos from "../img/icono-proyectos.svg";
import IconoHome from "../img/icono-home.svg";
import IconoBraces from "../img/icono-braces.svg";
import CotizadorCriptos from "../img/proyectos/cotizador-criptos.jpg";
import KnitTools from "../img/proyectos/knit-tools.jpg";
import Presupuestos from "../img/proyectos/control-de-presupuesto.jpg";
import BuscaPelis from "../img/proyectos/buscador-pelis.jpg";
import SepiaPhoto from "../img/proyectos/SepiaPhoto.jpg"

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
 
        <div className="icono-flex">
          <img src={IconoProyectos} alt="proyectos"></img>
          <h2 className="h2-blanco">Proyectos</h2>
        </div>
        <div className="lista-proyectos">
         
          <div className="proyecto">
            <img
              className="imagen-proyecto fadeTop scroll-content"
              src={KnitTools}
              alt="Knit-Tools"
            ></img>
            <h3>Herramienta para tejedoras</h3>
            <p className="proyecto-info" >React App con LocalStore para guardar los datos de tus labores, contar la vueltas tejidas y calcular puntos y vueltas.</p>
            <div className="links-proyecto">
              <div className='icono-link-pro'>
                <img src={IconoHome} alt="Ver proyecto"></img> 
                <a className="link-pro"
                href="https://ireloppin.github.io/Knit-Tools/">
                Ver web
                </a>
              </div>

              <div className='icono-link-pro'>
                <img src={IconoBraces} alt="Ver repo"></img> 
                <a className="link-pro"
                href="https://github.com/Ireloppin/Knit-Tools">
                Ver repo
                </a>
              </div>
            </div>
          </div>
          <div className="proyecto">
            <img
              className="imagen-proyecto fadeTop scroll-content"
              src={CotizadorCriptos}
              alt="cotizador-criptos"
            ></img>
            <h3>Cotizador de Criptomonedas</h3>
            <p className="proyecto-info">React App con consulta a API de cotización de criptomonedas con opciones de monedas.</p>
            <div className="links-proyecto">
            <div className='icono-link-pro' >
                <img src={IconoHome} alt="Ver proyecto"></img> 
                <a className="link-pro"
                href="https://ireloppin.github.io/Cotizador-Criptomonedas-React/">
                Ver web
                </a>
              </div>
              <div className='icono-link-pro'>
                <img src={IconoBraces} alt="Ver repo"></img> 
                <a className="link-pro"
                href="https://github.com/Ireloppin/Cotizador-Criptomonedas-React">
                Ver repo
                </a>
              </div>
            </div>
          </div>

          <div className="proyecto">
            <img
              className="imagen-proyecto fadeTop scroll-content"
              src={SepiaPhoto}
              alt="presupuestos"
            ></img>
            <h3 >Editor de imágenes</h3>
            <p className="proyecto-info">App creada con Svelte y Typescript que pone en sepia la foto que le pases.</p>
            <div className="links-proyecto">
            <div className='icono-link-pro'>
                <img src={IconoHome} alt="Ver proyecto"></img> 
                <a className="link-pro"
                href="https://ireloppin.github.io/Sepia-Photo-Hackaton/">
                Ver web
                </a>
              </div>
              <div className='icono-link-pro'>
                <img src={IconoBraces} alt="Ver repo"></img> 
                <a className="link-pro"
                href="https://github.com/Ireloppin/Sepia-Photo-Hackaton">
                Ver repo
                </a>
              </div>
            </div>
          </div>

          <div className="proyecto">
            <img
              id="scroll-content"
              className="imagen-proyecto fadeTop scroll-content"
              src={BuscaPelis}
              alt="presupuestos"
            ></img>
            <h3>Buscador de películas</h3>
            <p className="proyecto-info">React App con consulta a API de películas con posibilidad de orden alfabético.</p>
            <div className="links-proyecto">
            <div className='icono-link-pro'>
                <img src={IconoHome} alt="Ver proyecto"></img> 
                <a className="link-pro"
                href="https://ireloppin.github.io/Buscadordepelis/">
                Ver web
                </a>
              </div>
              <div className='icono-link-pro'>
                <img src={IconoBraces} alt="Ver repo"></img> 
                <a className="link-pro"
                href="https://github.com/Ireloppin/Buscadordepelis">
                Ver repo
                </a>
              </div>
            </div>          
          </div>

          <div className="proyecto">
            <img
              className="imagen-proyecto fadeTop scroll-content"
              src={Presupuestos}
              alt="presupuestos"
            ></img>
            <h3 >Control de Presupuestos</h3>
            <p className="proyecto-info">React App con LocalStorage para establecer un presupuesto y controlarlo.</p>
            <div className="links-proyecto">
            <div className='icono-link-pro'>
                <img src={IconoHome} alt="Ver proyecto"></img> 
                <a className="link-pro"
                href="https://ireloppin.github.io/control-presupuesto-react-vite/">
                Ver web
                </a>
              </div>
              <div className='icono-link-pro'>
                <img src={IconoBraces} alt="Ver repo"></img> 
                <a className="link-pro"
                href="https://github.com/Ireloppin/control-presupuesto-react-vite">
                Ver repo
                </a>
              </div>

            </div>
          </div>

        </div>
     
      </div>
    </div>
  );
};

export default Proyectos;
