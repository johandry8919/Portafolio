import { Link } from "react-router-dom";

// import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <div>
      <ul class="nav justify-content-end">
        <li class="nav-item">
            <Link to={"/"}>Inicio</Link>
        </li>
        <li class="nav-item">
            <Link to={"/QuienSoy"}>Cv</Link>
        </li>
        
        
      </ul>
    </div>
  );
};