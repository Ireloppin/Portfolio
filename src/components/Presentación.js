import React from 'react';
import FotoPerfil from '../img/foto-perfil-ok.jpg';
import IconoPerfil from '../img/icono-perfil.svg';
import IconoCV from '../img/icono-file-text.svg';


const Presentación = () => {
  return (
    <div className='perfil'>
        <div className='contenedor'>
            <div className='icono-flex'>
                <img src={IconoPerfil} alt="perfil"></img>
                <h2>Perfil</h2>
            </div>
        <div className='grid-2-columnas'>
        <div>
        <img className='imagen-perfil' src={FotoPerfil} alt='foto'></img>
        </div>
        <div>
        
        <p>Desarrolladora Web por vocación. Autodidacta, autoexigente y constante. </p>

        

              <div className='icono-link'>
              <img src={IconoCV} alt="CV"></img> 
              <a className="link"
                href="https://ireloppin.github.io/cv/">
                Ver CV
              </a>
              
              </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Presentación