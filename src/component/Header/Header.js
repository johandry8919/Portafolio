
import avatar from "../images/avataaars.svg"
export default function Header() {
  return (
    <header className="row align-items-center justify-content-space-between mt-5">
            <div className="col-md-7 pt-5 bg-black ">
              <h1 className="display-4 pt-5 ">johandry rojas</h1>
              <h6 className="font-weight-light">Web Developer</h6>
              <p className="font-weight-lighter pt-2 ">Su solución y su desarrollador web profesional.</p>
         
            </div>
            <div class="col-md-4 col-6">
              {/* <img src="img/irina-delgado-logo.png" alt="" class="mt-3 "/> */}
              <img width="200" classname=" text-center    " src={avatar} alt="..."/>
            </div>
    </header>
  );
};