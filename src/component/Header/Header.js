
import avatar from "../images/logo_jr.png"
import  './header.css'
export default function Header() {
  return (
    <header className=" mt-5 m-auto">
          <div className="baner d-flex align-items-center flex-direction-row-reverse">
          <img width="200" classname=" imagen" src={avatar} alt="..."/>
            <div className="m-5">
            <h2 className="font-weight-lighter   ">Su solución y su desarrollador web profesional.</h2>
            </div>
          </div>

    </header>
  );
};