
import { IoMdSchool } from "react-icons/io";
import { FcAddressBook, FcBusinessman, FcCellPhone, FcGlobe, FcGoogle } from "react-icons/fc";
import "./QuienSoy.css";
import  "../js/app"
import Redes from "../Redes-latera/Redes";
import Carrusel from "../Carrusel/Carrusel"
import Skills from "../Skills/Skills";
import avatar from "./avataaars.svg"





export function QuienSoy() {
  return (
    <section className="container mt-5 pt-5  animate__animated animate__fadeIn --animate-duration', '2s' text-white ">
      <Redes />
      <div className="row align-items-baseline">



        <div className="col-12 col-lg-4">
        <img width="70%" className="masthead-avatar mb-5 grow" src={avatar} alt="avatar"></img>
      </div>

      <div className="col-12 col-lg-6">
      <h1 className="title text-center mt-5 mb-5 ">darrollador full-start</h1>
      </div>
      
      </div>


     

      <div className="row m-2 ">
     
        <div className="col-12 col-lg-8 titulo ">
          <h4 className="d-flex  align-items-center mb-3">
            <span>
              <FcBusinessman className="fs-2"/>
            </span>
            <span className="text-white h2 ">Resumen Profesional</span>
           
          </h4>
          
          <p className="parrafo">
            <span className="text-info">Acerca de Mi</span>: hola me llamo
            Johandry rojas, soy full-start con formación y experiencia en{" "}
            <strong className="text-decoration-underline">
              html5 css bootstrap sass JavaScript React Redux , jquery php ,
              codeigniter 3 y control de verciones con git
            </strong>{" "}
            Me gusta mezclar estos dos perfiles porque puedo entender la idea
del negocio tanto en la parte estratégica como en la de desarrollo.

   Mi camino en el mundo de la programación Web comienza en el año

            2018, estudie programación web Digital y desarrollando un Plan de

            Marketing Digital y un Wordpress para la empresa Mendoza Cercos

            Eléctricos, luego en el 2020, Henry se cruzó en mi camino y di él

            Salto definitivo a la programación. Ahora en el 2021 me encuentro

            Dedicándome full-time a la programación.
          </p>

          <div className=" ">
            <h4 className="d-flex  align-items-center mb-2">
              <span>
                <IoMdSchool/>
              </span>
              <span className="text-text-info ">Educacion</span>
            </h4>
            <p className=" titulo parrafo">
              ingeniero informática at Uni ojeda, ciudad ojeda Sep, 2018 - Sep,
              2023 Carrera universitaria en curso Ingeniero en informática Uni
              ojeda, Lagunillas Sep, 2019 - Sep, 2022 Sep, 2021 - Sep,
            </p>
          </div>
        </div>

        <aside className="col-md-4 order-md-2 mb-4">
        <div className="parrafo">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="">Direccion </span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Estado</h6>
                <small className="">Estado Zulia</small>
              </div>
               <span className="text-muted"><FcGlobe className="fs-2"/></span> 
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Ciudad</h6>
                <small className="text-muted">Ciudad ojeda</small>
              </div>
              <span className="text-muted"><FcGlobe className="fs-2"/></span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Parroquia</h6>
                <small className="text-muted">Alonso de ojeda</small>
              </div>
              <span className="text-muted"><FcGlobe className="fs-2"/></span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0 ">Telefono</h6>
                <small className="fs-4">+58-04240404817</small>
              </div>
              <span className="text-success"><FcCellPhone className="fs-2"/></span>
            </li>
          

            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Pagina web</h6>
                
              </div>
              <span className="text-muted"><FcGoogle className="fs-2"/></span>
            </li>
       
          </ul>

     
        </div>
       
          

        </aside>

        

      </div>

      <div className="row m-2 ">

      <div className=" col-lg-8 col-md-8 mb-3 ">
      <Carrusel/>
      </div>
        <h4 class="d-flex  align-items-center mb-2">
          <span>
            <FcCellPhone className="fs-2"/>
          </span>
          <span className="text-info">Contactos</span>
        </h4>
        <div
          className="col-12 col-lg-8 col-md-8   animacion"
          id="Contactos" 
        >
          <p className="">
            <strong>Para contactarme puedes Enviarme un WhatsApp: {" "}
            <span className="text-primary ">
            <FcCellPhone className="fs-2"/>+58 04246404817 Enviarme un correo:<FcAddressBook className="fs-2"/> johandryrojas19@gmail.com
            </span>{" "}
            Por GitHub: rojas.rojas440 Resolución de problemas. Aceptar críticas
            y errores. Buena administración del tiempo. Aprendizaje consta
            </strong>
          </p>
        </div>


        <Skills/>

     
      </div>

     

      

     
    </section>
  );
}

export default QuienSoy;
