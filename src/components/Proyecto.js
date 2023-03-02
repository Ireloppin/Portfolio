import React from 'react'
import IconoHome from "../img/icono-home.svg";
import IconoBraces from "../img/icono-braces.svg";


const Proyecto = ({proyecto}) => {

  const {imagen, nombre, texto, web, repo}= proyecto
  return (
    <div>
            <img
              className="imagen-proyecto fadeTop scroll-content"
              src={imagen}
              alt={nombre}
            ></img>
            <h3>{nombre}</h3>
            <p className="proyecto-info" >{texto}</p>
            <div className="links-proyecto">      
                <a className="link-pro"
                href={web}>
                <img src={IconoHome} alt="Ver proyecto"></img>
                </a>
                <a className="link-pro"
                href={repo}>
                <img src={IconoBraces} alt="Ver repo"></img> 
                </a>
            </div>
          </div>
  )
}

export default Proyecto