import "./Inicio.css";
import Portafolio from "./Portafolio/Portafolio";
import Header from "./Header/Header";
import Skills from "./Skills/Skills";

function Inicio() {
  return (
    <div className="container-fluid Contx ">
      <Header />

      <div className="col-12 text-center">
        <h2>Caraterisitcas</h2>
        <div className="row">
          <div className="col-12 col-md-4 mt-5  ">
            <div style={{ transform: "none" }}>
              <span class="sc-bczRLJ ihlGpp">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 576 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"></path>
                </svg>
              </span>
            </div>

            <h4>Comunicación</h4>
            <p>
              Comunicación activa con el cliente sobre el desarrollo de su sitio
              web o aplicación web.
            </p>
          </div>
          <div className="col-12 col-md-4 mt-5">
            <div style={{ transform: "none" }}>
              <span className="sc-bczRLJ ihlGpp">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"></path>
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                </svg>
              </span>
            </div>
            <h4>Responsabilidad</h4>
            <p>
              Sentido de la responsabilidad y a la hora de los tiempos de
              entrega.
            </p>
          </div>
          <div className="col-12 col-md-4 mt-5">
            <div style={{ transform: "none" }}>
              <span class="sc-bczRLJ ihlGpp">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"></path>
                </svg>
              </span>
            </div>
            <h4>Creatividad</h4>
            <p>
              En el desarrollo la creatividad es muy importante porque con ella
              podemos resolver un problema de un millón de maneras!
            </p>
          </div>
        </div>

      

        <div className="row mt-5">
          <div className="col-12">
            <div className="section-title">
              <h2>Mis Servicios</h2>
              <p>Servicios que ofrezco en DarioCoding</p>
            </div>
            <div className="row">
              <div className="col-md-4" style={{ transform: "none" }}>
                <div className="service-desc">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      color: " rgb(255, 255, 255)",
                      fontSize: " 42px",
                      width: "120px",
                      height: " 120px",
                      padding: " 40px 0px",
                      background:
                        "linear-gradient(to right, rgb(99, 114, 255) 0%, rgb(92, 169, 251) 100%)",
                      borderRadius: " 50%",
                      boxShadow: " rgba(0, 0, 0, 0.05) 10px 10px 10px",
                    }}
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M18 16h-2v-1H8v1H6v-1H2v5h20v-5h-4zM20 8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v4h4v-2h2v2h8v-2h2v2h4v-4c0-1.1-.9-2-2-2zm-5 0H9V6h6v2z"></path>
                  </svg>
                  <h3>Desarrollo web</h3>
                  <p>
                    Diseño y creación de paginas web intuitivas y funcionales
                    con páginas de contacto y dinámicas con programación.
                  </p>
                </div>
              </div>

              <div className="col-md-4" style={{ transform: "none" }}>
                <div className="service-desc">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      color: " rgb(255, 255, 255)",
                      fontSize: " 42px",
                      width: "120px",
                      height: " 120px",
                      padding: " 40px 0px",
                      background:
                        "linear-gradient(to right, rgb(99, 114, 255) 0%, rgb(92, 169, 251) 100%)",
                      borderRadius: " 50%",
                      boxShadow: " rgba(0, 0, 0, 0.05) 10px 10px 10px",
                    }}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <h3>Aplicaciones web y aplicaciones de escritorio</h3>
                  <p>
                    Aplicaciones web que pueden estar ubicadas en la web y
                    además de eso poder convertir esa aplicación web en una
                    aplicación de escritorio.
                  </p>
                </div>
              </div>

              <div className="col-md-4" style={{ transform: "none" }}>
                <div className="service-desc">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      color: " rgb(255, 255, 255)",
                      fontSize: " 42px",
                      width: "120px",
                      height: " 120px",
                      padding: " 40px 0px",
                      background:
                        "linear-gradient(to right, rgb(99, 114, 255) 0%, rgb(92, 169, 251) 100%)",
                      borderRadius: " 50%",
                      boxShadow: " rgba(0, 0, 0, 0.05) 10px 10px 10px",
                    }}
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"></path>
                  </svg>
                  <h3>Aplicaciones de escritorio</h3>
                  <p>
                    Aplicaciones de escritorio totalmente offline con una base
                    de datos interna en su computadora y con capacidad de
                    generar archivos excel y pdf.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Portafolio />
      <Skills/>

    </div>
  );
}

export default Inicio;
