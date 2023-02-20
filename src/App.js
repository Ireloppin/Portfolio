
import Presentacion from './components/Presentacion';
import Proyectos from './components/Proyectos';
import Formacion from './components/Formacion';
import IconoFacebook from './img/icono-facebook.svg'
import IconoLinkeIn from './img/icono-linkedin.svg'
import IconoMail from './img/icono-mail.svg'

import { Player } from '@lottiefiles/react-lottie-player';




function App() {
    
  return (
    <div>
      <header className='header'>
        <div className='contenedor'>
        
        <div className='header-flex'>
            <Player src="https://assets2.lottiefiles.com/packages/lf20_YXPR4EZKbT.json"
            className="player"
            loop
            autoplay/>
            <div className='logo'>
              <h1>Deve<span>Loppin</span></h1>
              <h2 className='h2-blanco'>Irene López Pineda</h2>
               <h3 className='h3-blanco'>Desarrolladora Web y Comunicadora audiovisual</h3>
              </div>
        </div>      
        <div className='iconos-contacto'>

        <img src={IconoMail} alt="email"></img>
        <img src={IconoFacebook} alt="facebook"></img>
        <img src={IconoLinkeIn} alt="linkedin"></img>

        
        </div>
      
    
        
      </div>
    </header>
      <Presentacion />
      <Proyectos />
      <Formacion />
      
      <footer className='footer'>
        <div className='contenedor'>
     
        
        <div className='iconos-contacto'>
        <a href="mailto:elcorreodeirene@gmail.com"><img src={IconoMail} alt="email"></img></a>
        <a href="https://www.facebook.com/irene.lopezpineda"> <img src={IconoFacebook} alt="facebook"></img></a>
        <a href="https://github.com/Ireloppin"><img src={IconoLinkeIn} alt="linkedin"></img></a>
        
        </div>

        </div>
      </footer>
    </div>
  );
}

export default App;
