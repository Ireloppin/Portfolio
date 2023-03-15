import Presentacion from "./components/Presentacion";
import Proyectos from "./components/Proyectos";
import Formacion from "./components/Formacion";
import IconoFacebook from "./img/icono-facebook.svg";
import IconoLinkeIn from "./img/icono-linkedin.svg";
import IconoMail from "./img/icono-mail.svg";
import IconoGithub from "./img/icono-github-coral.svg";

import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";

function App() {
  const [english, setEnglish] = useState(false);
  return (
    <div>
      <header className="header">
        <div className="contenedor">
          <section className="idioma-button">
            <button className="button" onClick={() => setEnglish(!english)}>
              {english ? "ES" : "EN"}
            </button>
          </section>

          <div className="header-flex">
            <Player
              src="https://assets2.lottiefiles.com/packages/lf20_YXPR4EZKbT.json"
              className="player"
              loop
              autoplay
            />
            <div className="logo">
              <h1>
                Deve<span>Loppin</span>
              </h1>
              <h2 className="h2-blanco">Irene López Pineda</h2>
              <h3 className="h3-blanco">
                {english
                  ? "Web Developer and Audiovisual Communicator"
                  : "Desarrolladora Web y Comunicadora audiovisual"}
              </h3>
            </div>
          </div>
          <div className="iconos-contacto">
            <a
              href="https://www.linkedin.com/in/irene-lopez-pineda/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icono-contacto"
                src={IconoLinkeIn}
                alt="linkedin"
              ></img>
            </a>

            <a
              href="https://github.com/Ireloppin"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icono-contacto"
                src={IconoGithub}
                alt="github"
              ></img>
            </a>

            <a
              href="https://www.facebook.com/irene.lopezpineda"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icono-contacto"
                src={IconoFacebook}
                alt="facebook"
              ></img>
            </a>

            <a
              href="mailto:elcorreodeirene@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icono-contacto" src={IconoMail} alt="email"></img>
            </a>
          </div>
        </div>
      </header>
      <Presentacion english={english} />
      <Proyectos english={english} />
      <Formacion english={english} />

      <footer className="footer">
        <div className="contenedor">
          <div className="iconos-contacto">
            <a
              href="https://www.linkedin.com/in/irene-lopez-pineda/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icono-contacto"
                src={IconoLinkeIn}
                alt="linkedin"
              ></img>
            </a>

            <a
              href="https://github.com/Ireloppin"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icono-contacto"
                src={IconoGithub}
                alt="github"
              ></img>
            </a>

            <a
              href="https://www.facebook.com/irene.lopezpineda"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icono-contacto"
                src={IconoFacebook}
                alt="facebook"
              ></img>
            </a>

            <a
              href="mailto:elcorreodeirene@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icono-contacto" src={IconoMail} alt="email"></img>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
