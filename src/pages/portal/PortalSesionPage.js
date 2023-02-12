import "./PortalPage.css";
import logo from "../../img/logo-shugo_Mesa de trabajo 1.svg";
import { Link } from "react-router-dom";

export default function PortalSesionPage() {
  return (
    <section className="sec-crearcuenta">
      <div className="info-forms">
        <div className="header-text">
          <p className="t-head" >Portal Empresas</p>
          <p className="p-head" >Inicia sesión para comenzar</p>
        </div>
        <img src={logo} className="logo-portal" alt="logo" />
      </div>
      <div className="cont-forms">
        <div className="casillero-tre">
          <p className="p-cas" >Usuario:</p>
          <input
            className="input-sesion"
            type="text"
            placeholder="Escribe aqui..."
          ></input>
          <p className="p-cas">Contraseña:</p>
          <input
            className="input-sesion"
            type="text"
            placeholder="Escribe aqui..."
          ></input>
          <p className="p-contra" >¿Olvidaste tu contraseña?</p>
        </div>
        <Link to="/portal-empresa" class="btn-form">
          Ingresar
        </Link>
      </div>
      <section className="foot-sec">
        <p className="foot-tit" >Atención al Cliente</p>
        <p className="foot-des">
          Cualquier reclamo o recomendación utiliza nuestros canales de atención
          al cliente
        </p>
        <div className="conexis">
          <div className="conix" ></div>
          <div className="conix"></div>
          <div className="conix"></div>
        </div>
        <p className="foot-des">Desarrollado por Tomi Cibermarketing S.A.C</p>
      </section>
    </section>
  );
}
