import "./Inicio.css"
import avatar from "./images/avataaars.svg"
import Portafolio from "./Portafolio/Portafolio";
function Inicio() {
  return (
    <div class="animate__animated animate__fadeIn --animate-duration', '2s'">
    <header class="masthead container  text-center  mt-5">
            <div class=" ">
                
                <img width="150" class="masthead-avatar img-fluid mb-5 grow" src={avatar} alt="..."/>
                <h1 class="masthead-heading text-uppercase mb-0 animate__animated --animate-duration', '4s'  animate__headShake">darrollador full-start</h1>

                <p class="masthead-subheading font-weight-light mb-0">Diseñador web</p>
            </div>
        </header>

        <Portafolio/>

     


    
      
    </div>
  );
};

export default  Inicio;