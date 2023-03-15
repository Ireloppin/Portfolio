import React from "react";
import IconoHome from "../img/icono-home.svg";
import IconoBraces from "../img/icono-braces.svg";

const Proyecto = ({ proyecto, english }) => {
  const { imagen, nombre, texto, web, repo, name, text } = proyecto;
  return (
    <article className="articulo-proyecto">
      <header>
        <img
          className="imagen-proyecto fadeTop scroll-content"
          src={imagen}
          alt={nombre}
        ></img>
      </header>
      <main>
        <h3 className="h3-blanco">{english ? name : nombre}</h3>
        <p className="proyecto-info">{english ? text : texto}</p>
      </main>
      <div className="links-proyecto">
        <a className="link-pro" href={web}>
          <img src={IconoHome} alt="Ver proyecto"></img>
        </a>
        <a className="link-pro" href={repo}>
          <img src={IconoBraces} alt="Ver repo"></img>
        </a>
      </div>
    </article>
  );
};

export default Proyecto;
