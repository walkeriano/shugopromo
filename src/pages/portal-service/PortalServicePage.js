import "./PortalServicePage.css";
import React, { useState } from "react";
import logo from "../../img/logo-shugo_Mesa de trabajo 1.svg";
import promo from "../../img/promo.svg";
import promof from "../../img/promo-of.svg";
import promotwo from "../../img/promo-of-two.svg";
import promotre from "../../img/promo-on-two.svg";
import iconservice from "../../img/iconservice.svg";
import iconservicetwo from "../../img/iconservicetwo.svg";
import iconservicetre from "../../img/iconservicetre.svg";
import iconpai from "../../img/pai.svg";
import { Link } from "react-router-dom";

export default function PortalServicePage() {
  const [portalser, setPortalser] = useState(false);

  return (
    <section className="sec-crearcuenta">
      <div className="info-head">
        <div className="head-text">
          <p>Portal Empresas</p>
          <Link to="/portal-inicio-sesion" class="volver-promo">
            Cerrar sesión
          </Link>
        </div>
        <img src={logo} className="logo-promo" alt="logo" />
      </div>
      <div className="marca-name">
        <div className="flex-info">
          <p className="name-brand">TGI. Fridays</p>
          <div className="cat">
            <div></div>
            <p>Restaurante</p>
          </div>
          <div className="statstore">
            <div className="light"></div>
            <p>Activo</p>
          </div>
        </div>
        <div className="pic"></div>
      </div>
      {!portalser && (
        <div className="marca-infox">
          <div className="funs-promos">
            <button className="marca-fun-one">
              <img src={promo} className="i-promo" alt="logo" />
              <p>Mis promos</p>
            </button>
            <button
              onClick={() => setPortalser(true)}
              className="marca-fun-on-two"
            >
              <img src={promof} className="i-promo" alt="logo" />
              <p>Crear promo</p>
            </button>
          </div>
          <div className="promos">
            <div className="up-box">
              <div className="info-promo">
                <div className="state-store">
                  <div className="light"></div>
                  <p>Disponible</p>
                </div>
                <p>35% dscto. en tacos...</p>
              </div>
              <div className="img-perfil"></div>
            </div>
            <div className="btns">
              <button className="btnone">Eliminar promo</button>
              <button className="btntwo">Ver detalles</button>
            </div>
          </div>
          <p className="p-promos">Última Actualización: 13/12/22</p>
        </div>
      )}
      {portalser ? (
        <div className="marca-infox">
          <div className="funs-promos">
            <button onClick={() => setPortalser(false)} className="marca-fun">
              <img src={promotwo} className="i-promo" alt="logo" />
              <p>Mis promos</p>
            </button>
            <button className="marca-fun-on">
              <img src={promotre} className="i-promo" alt="logo" />
              <p>Crear promo</p>
            </button>
          </div>
          <div className="form-box">
            <form className="form-itms">
              <input
                className="i-form"
                type="text"
                placeholder="Nombre Promoción"
                name=""
              ></input>
              <input
                className="i-des"
                type="text"
                placeholder="Descripción"
                name=""
              ></input>
              <input
                className="i-ter"
                type="text"
                placeholder="Términos y condiciones legales"
                name=""
              ></input>
              <input
                className="i-form"
                type="text"
                placeholder="Adjuntar Imagen"
                name=""
              ></input>
              <div className="funcase">
                <div className="hed-fun">
                  <div className="text-fun">
                    <h4 className="title-fun">
                      Aumenta la visibilidad de tu promoción
                    </h4>
                    <p className="p-fun">
                      Función pagada que te permite aumentar el alcance de tu
                      promoción.
                    </p>
                  </div>
                  <img src={iconpai} className="iconic" alt="logo" />
                </div>
                <div className="cont-fun">
                  <div className="fun-one">
                    <div className="context">
                      <p className="t-cont">Superposición de Ubicación</p>
                      <p className="p-cont">
                        Aparece en las primeras opciones en tus categorías.
                      </p>
                      <p className="pri-cont">S/.5x6 horas</p>
                    </div>
                    <div className="icons">
                      <img
                        src={iconservice}
                        className="iconservice"
                        alt="logo"
                      />
                      <label for="" className="label-activate">
                        Activar
                        <input type="radio" id="logo" name="" className="inp"></input>
                      </label>
                    </div>
                  </div>
                  <div className="fun-one">
                    <div className="context">
                      <p className="t-cont">Superposición de Ubicación</p>
                      <p className="p-cont">
                        Aparece en las primeras opciones en tus categorías.
                      </p>
                      <p className="pri-cont">S/.5x6 horas</p>
                    </div>
                    <div className="icons">
                      <img
                        src={iconservicetwo}
                        className="iconservice"
                        alt="logo"
                      />
                      <label for="" className="label-activate">
                        Activar
                        <input type="radio" id="logo" name="" className="inp"></input>
                      </label>
                    </div>
                  </div>
                  <div className="fun-one">
                    <div className="context">
                      <p className="t-cont">Superposición de Ubicación</p>
                      <p className="p-cont">
                        Aparece en las primeras opciones en tus categorías.
                      </p>
                      <p className="pri-cont">S/.5x6 horas</p>
                    </div>
                    <div className="icons">
                      <img
                        src={iconservicetre}
                        className="iconservice"
                        alt="logo"
                      />
                      <label for="" className="label-activate">
                        Activar
                        <input type="radio" id="logo" name="" className="inp"></input>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="box-kaptcha"></div>
                <button className="btn-crear">Crear Promoción</button>
              </div>
            </form>
          </div>
          <p className="p-promos">Última Actualización: 13/12/22</p>
        </div>
      ) : null}
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
