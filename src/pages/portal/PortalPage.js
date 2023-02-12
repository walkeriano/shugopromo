import React from "react";
import "./PortalPage.css";
import { Link } from "react-router-dom";

export default function PortalPage() {
  return (
    <section>
      <div className="box-forms">
        <div className="info-forms">
          <div className="header-text">
            <p>Portal Empresas</p>
            <p>Inicia sesión para comenzar</p>
          </div>
          <div className="logo-portal"></div>
        </div>
        <div className="image-banner"></div>
        <section className="acces-all">
          <Link to="/portal-inicio-sesion"> Iniciar Sesion</Link>
          <div className="border-acces"></div>
          <Link to="/portal-registro-restaurantes"> Crear cuenta</Link>
        </section>
        <section className="description-portal">
          <p>MAS PROMOS, MAS VENTAS</p>
          <p>
            Aumenta la posibilidad de conseguir nuevos clientes interesados en
            tu producto, utiliza las funciones gratis que te permitirán generar
            nuevas promociones
          </p>
          <section className="flex-benefits">
            <div className="box-benefits"></div>
            <div className="box-benefits"></div>
          </section>
          <section className="flex-benefits">
            <div className="box-benefits"></div>
            <div className="box-benefits"></div>
          </section>
        </section>
        <section className="pago-portal">
          <div className="cont-info">
            <p>FUNCIONES PAGADAS</p>
            <p>
              Todas las marcas tienen la posibilidad de poder pagar para
              aumentar su visibilidad en la plataforma, escoger en que lugar
              aparecer y encontrar más clientes que otros restaurantes.
            </p>
          </div>
          <div className="boxes">
            <div className="box-one">
              <p>SUPERPOSICION DE UBICACION</p>
            </div>
          </div>
          <div className="box-right">
            <div className="box-one">
              <p>SUPERPOSICION DE UBICACION</p>
            </div>
          </div>
          <div className="boxes">
            <div className="box-one">
              <p>SUPERPOSICION DE UBICACION</p>
            </div>
          </div>
          <div className="box-right">
            <div className="box-one">
              <p>SUPERPOSICION DE UBICACION</p>
            </div>
          </div>
        </section>
        <section className="sec-notice">
          <div className="cont-info-notice">
            <h3>COMIENZA AHORA</h3>
            <p>Hay clientes esperando por ti</p>
          </div>
          <button className="btn-contacto">Empezar</button>
        </section>
        <section className="sec-footer">
          <div className="info-footer">
            <div className="box-log"></div>
            <div className="dscription">
              <p>
                Este producto digital está bajo la supervisión de la empresa
                representante legal Tomi Cibermarketing S.A.C. - RUC: 8945687.
              </p>
              <p>
                Cualquier reclamo o recomendación utiliza nuestros canales de
                Atención al cliente: 993 744 956 / hola@shugo.pe
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
