
import Presentación from './components/Presentación';
import Proyectos from './components/Proyectos';
import Formacion from './components/Formacion';
import IconoFacebook from './img/icono-facebook.svg'
import IconoLinkeIn from './img/icono-linkedin.svg'
import IconoMail from './img/icono-mail.svg'



function App() {
    
  return (
    <div>
      <header className='header'>
        <div className='contenedor'>
        
        <h1>Bienvenid@ a mi portfolio</h1>
        <h2 className='h2-blanco'>Irene López Pineda</h2>
        <h3 className='h3-blanco'>Desarrolladora Web y Comunicadora audiovisual</h3>
        <div className='iconos-contacto'>
        <img src={IconoMail} alt="email"></img>
        <img src={IconoFacebook} alt="facebook"></img>
        <img src={IconoLinkeIn} alt="linkedin"></img>
        </div>
    
    
        
      </div>
    </header>
      <Presentación />
      <Proyectos />
      <Formacion />
      
      <footer className='footer'>
        <h3 className='h2-blanco'>Contacto</h3>
        <div className='iconos-contacto'>
        <a href="mailto:elcorreodeirene@gmail.com"><img src={IconoMail} alt="email"></img></a>
        <a href="https://www.facebook.com/irene.lopezpineda"> <img src={IconoFacebook} alt="facebook"></img></a>
        <a href="https://github.com/Ireloppin"><img src={IconoLinkeIn} alt="linkedin"></img></a>
        
        </div>
      </footer>
    </div>
  );
}

export default App;
