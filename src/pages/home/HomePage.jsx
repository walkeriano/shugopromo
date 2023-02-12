import "./HomePage.css";
import logo from "../../img/logo-shugo_Mesa de trabajo 1.svg";
import tomy from "../../img/tomy-dscto.svg";
import start from "../../img/icon-start.svg";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section>
      <div className="body-home">
        <div className="box-cont" >
          <div className="box-white">
            <p className="titular">
              Descuentos exclusivos en tus marcas favoritas.
            </p>
            <img src={logo} className="logo-shugo" alt="logo" />
          </div>
          <Link className="boton" to="/promos">
            <img src={start} className="i-start" alt="logo" />
          </Link>
          <div className="box-portal" >
            <Link className="boton-rest" to="/portal-restaurantes">
              <img src={tomy} className="i-tommy" alt="logo" />
              <p>Portal Empresas</p>
            </Link>
          </div>
          <p className="nosotros">Desarrollado por Tomi Cibermarketing S.A.C</p>
        </div>
        
      </div>
    </section>
  );
}
