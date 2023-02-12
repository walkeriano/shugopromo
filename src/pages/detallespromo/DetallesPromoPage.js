import "./DetallesPromoPage.css";
import React, { useState } from "react";
import mascot from "../../img/cod-mascot.svg";
import qr from "../../img/cod-qr.svg";
import logo from "../../img/logo-shugo_Mesa de trabajo 1.svg";
import logofri from "../../img/logofri.jpg";
import iconmore from "../../img/icon-more.svg";
import portadapromo from "../../img/promofri.jpg";
import { Link } from "react-router-dom";

export default function DetallesPromoPage() {
  const [textdscto, setTextdscto] = useState(false);
  const [codgenerator, setCodgenerator] = useState(false);

  return (
    <section className="bg-detalles">
      <div className="marca-block">
        <Link to="/promos" className="btn-marca-salir">
          Volver
        </Link>
        <img src={logo} className="logo-portal-promos" alt="logo" />
      </div>
      <img src={portadapromo} className="banner-promo" alt="logo" />
      <div className="view-perfil">
        <div className="perfil-info">
          <img src={logofri} className="img-marca" alt="logo" />
          <div className="text-marca">
            <p className="t-marca">Fridays tm</p>
            <p className="p-marca">Restaurante</p>
          </div>
        </div>
        <div className="btn-marca-salir">Ver más</div>
      </div>
      {!textdscto && (
        <div className="box-info-promo">
          <h4 className="t-box">
            38% dscto. en tacos crispy + Gaseosa 500ml - Black Friday
          </h4>
          <div className="linea-info"></div>
          <p className="tyc">Términos y condiciones</p>
          <p className="dscrp-tyc">
            lorem ipsum dolor sit amet lorem, consectetur adipiscing elit,lorem
            ipsum dolor sit amet lorem, consectetur adipiscing elitlorem...
          </p>
          <button onClick={() => setTextdscto(true)} className="b-vermas">
            <img src={iconmore} className="imore" alt="logo" />
          </button>
        </div>
      )}
      {textdscto ? (
        <div className="box-info-promo-two">
          <h4 className="t-box">
            38% dscto. en tacos crispy + Gaseosa 500ml - Black Friday
          </h4>
          <div className="linea-info"></div>
          <p className="tyc">Términos y condiciones</p>
          <p className="dscrp-tyc">
            lorem ipsum dolor sit amet lorem, consectetur adipiscing elit,lorem
            ipsum dolor sit amet lorem, consectetur adipiscing elitlorem lorem
            ipsum dolor sit amet lorem, consectetur adipiscing elit,lorem ipsum
            dolor sit amet lorem, consectetur adipiscing elitlorem lorem ipsum
            dolor sit amet lorem, consectetur adipiscing elit,lorem ipsum dolor
            sit amet lorem, consectetur adipiscing elitlorem lorem ipsum dolor
            sit amet lorem, consectetur adipiscing elit,lorem ipsum dolor sit
            amet lorem, consectetur adipiscing elitlorem lorem ipsum dolor sit
            amet lorem, consectetur adipiscing elit,lorem ipsum dolor sit amet
            lorem, consectetur adipiscing elitlorem
          </p>
          <button onClick={() => setTextdscto(false)} className="b-vermas-two">
            <img src={iconmore} className="imore-two" alt="logo" />
          </button>
        </div>
      ) : null}

      {!codgenerator && (
        <div className="box-gradient">
          <div className="box-codigo">
            <div className="info-dscto">
              <h4 className="tittle-cod">Promo disponible</h4>
              <p className="p-cod">Adquiere este dscto. totalmente gratis</p>
              <button onClick={() => setCodgenerator(true)} className="b-cod">
                Generar Código
              </button>
            </div>
            <div className="img-dscto">
              <img src={mascot} className="mascot" alt="mascota-dscto" />
            </div>
          </div>
        </div>
      )}
      {codgenerator ? (
        <div className="box-gradient-two">
          <p className="text-inc">Escanear código QR</p>
          <div className="box-codigo-two">
            <img src={qr} className="qr" alt="mascota-dscto" />
          </div>
          <button onClick={() => setCodgenerator(false)} className="b-cod-two">
            Cerrar
          </button>
        </div>
      ) : null}
      <Link to="/promos" className="fin-btn">
        Ir al inicio
      </Link>
      <section className="foot-sec">
        <p className="foot-tit">Atención al Cliente</p>
        <p className="foot-des">
          Cualquier reclamo o recomendación utiliza nuestros canales de atención
          al cliente
        </p>
        <div className="conexis">
          <div className="conix"></div>
          <div className="conix"></div>
          <div className="conix"></div>
        </div>
        <p className="foot-des">Desarrollado por Tomi Cibermarketing S.A.C</p>
      </section>
    </section>
  );
}
