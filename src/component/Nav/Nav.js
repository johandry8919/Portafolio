import { NavLink} from "react-router-dom";
import "./Nav.css";

export function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand animate__animated animate__flash   text-white"
            Link
            to={"/"}
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            Desarrollador full-stack
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse show" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0 icon-list">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className=" nav-link" to={"/QuienSoy"}>
                  Quien Soy
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className=" nav-link" to={"/Miproyectos"}>
                  Mis proyectos
                </NavLink>
              </li>
            </ul>
       
          </div>
        </div>
      </nav>

      
    </div>
  );
}

export default Nav;
