import React from 'react';
import IconoFormacion from '../img/icono-herramientas.svg'
import IconoJavascript from '../img/icono-javascript.svg'
import IconoReact from '../img/icono-react.svg'
import IconoGit from '../img/icono-git.svg'
import IconoGithub from '../img/icono-github.svg'
import IconoCss from '../img/icono-css.svg'
import IconoHtml from '../img/icono-html.svg'

const Formacion = () => {
  return (
    <div className='perfil'>
        <div className='contenedor'>
            <div className='icono-flex'>
                <img src={IconoFormacion} alt="formacion"></img>
                <h2>Herramientas</h2>
            </div>
        <div>
            <div className='iconos-tecnologia'>
              <div className='tecnologia'>
              <img src={IconoJavascript} alt="JavaScript"></img> 
               <h3 className='h3-coral'>JavaScript</h3>
              </div>
              <div className='tecnologia'>
              <img src={IconoReact} alt="React"></img> 
               <h3 className='h3-coral'>React</h3>
              </div>
              <div className='tecnologia'>
              <img src={IconoGit} alt="Git"></img> 
               <h3 className='h3-coral'>Git</h3>
              </div>
              <div className='tecnologia'>
              <img src={IconoGithub} alt="Github"></img> 
               <h3 className='h3-coral'>Github</h3>
              </div>
              <div className='tecnologia'>
              <img src={IconoCss} alt="Css"></img> 
               <h3 className='h3-coral'>Css</h3>
              </div>
              <div className='tecnologia'>
              <img src={IconoHtml} alt="HTML"></img> 
               <h3 className='h3-coral'>HTML</h3>
              </div>
            
            
           
            </div>
        </div>
        </div>
    </div>
  )
}

export default Formacion