import React, { useState } from "react";
import { edocreadorTask } from "../firebase.js";
import porcionpersonal from "../img/porcion-personal.png";
import porcionparados from "../img/porcion-parados.png";
import contentMaki from "../img/edit-makis.png";
import langostino from "../img/icn_01.png";
import carne from "../img/icn-02.png";
import pescado from "../img/icn-03.png";
import palta from "../img/icn-04.png";
import quesoCrema from "../img/icn-05.png";
import tartare from "../img/icn-08.png";
import quesoDoncs from "../img/icn-09.png";
import cebichito from "../img/icn-10.png";
import furay from "../img/icn-11.png";
import saltado from "../img/icn-12.png";
import paltado from "../img/icn-13.png";
import salsaacebichada from "../img/icn-15.png";
import salsaDulce from "../img/icn-16.png";
import salsaSalada from "../img/icn-17.png";
import incaKola from "../img/icn-18.png";
import cocaCola from "../img/icn-19.png";
import priceIcon from "../img/icon-price.svg";
import priceIconOn from "../img/icon-price-on.svg";
import ReCAPTCHA from "react-google-recaptcha";
import edologo from "../img/edo-logo.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const EdoCreadorForm = (props) => {
  const initialStateValues = {
    rellenoLangostinoPanko: "",
    rellenoBisteckApanado: "",
    rellenoPescadoCrispy: "",
    toppingPalta: "",
    toppingQuesoCrema: "",
    toppingTartaredePollo: "",
    cubiertaQuesoDoncs: "",
    cubiertaCebichitoChalaco: "",
    cubiertaLikeFuray: "",
    cubiertaSaltaditoCriollo: "",
    cubiertaApaltado: "",
    salsAcebichada: "",
    salsaDulce: "",
    salsaSalada: "",
    inkacola: "",
    cocaCola: "",
    alertaAlergia: "",
    nombre: "",
    numero: "",
    direccion: "",
    formaPago: "",
    pedidoDetalle: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    edocreadorTask(
      values.rellenoLangostinoPanko,
      values.rellenoBisteckApanado,
      values.rellenoPescadoCrispy,
      values.toppingPalta,
      values.toppingQuesoCrema,
      values.toppingTartaredePollo,
      values.cubiertaQuesoDoncs,
      values.cubiertaCebichitoChalaco,
      values.cubiertaLikeFuray,
      values.cubiertaSaltaditoCriollo,
      values.cubiertaApaltado,
      values.salsAcebichada,
      values.salsaDulce,
      values.salsaSalada,
      values.inkacola,
      values.cocaCola,
      values.alertaAlergia,
      values.nombre,
      values.numero,
      values.direccion,
      values.formaPago,
      values.pedidoDetalle
    );
    console.log(values);
    history("/pedido-exitoso");
  };

  const onChange = () => {
    console.log("nuevo formulario ingresado");
  };

  const [view, setView] = useState(false);
  const [datos, setDatos] = useState(false);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        {!view && (
          <div>
            <div className="screen-porcion-one">
              <div className="titulo-creador">
                <img src={edologo}  className="image-brand" alt="logo" />
                <div className="info-creador">
                  <div className="content-info" >
                    <p className="name-brand">Edo</p>
                    <p className="info-brand">Miraflores - Lima.</p>
                  </div>
                  <div className="content-hour" >
                    <img src={edologo}   className="image-perfil" alt="logo" />
                    <p className="info-brand-hora">12:00 AM<br/>7:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="pedido-tittle">
                <h4>ARMAR MAKIS</h4>
              </div>
              <div className="item-porcion">
                <div className="item-foto">
                  <img src={porcionpersonal} className="foto" alt="logo" />
                </div>
                <div className="flex-box">
                  <p className="tamano-porcion">PERSONAL</p>
                  <p className="p-recomendacion-combo">
                    10 cortes de makis + 1 Gaseosa de 500ml + Palitos + Salsas.
                  </p>
                  <div onClick={() => setView(true)} className="flex-price">
                    <p className="price-p">S/.19.90</p>
                    <img src={priceIconOn} className="icon-price" alt="price" />
                  </div>
                </div>
              </div>
              <div className="item-porcion">
                <div className="item-foto">
                  <img src={porcionparados} className="foto" alt="logo" />
                </div>
                <div className="flex-box">
                  <p className="tamano-porcion">
                    PA´ COMPARTIR
                  </p>
                  <p className="p-recomendacion-combo">
                    20 cortes de makis + 2 Gaseosas de 500ml + Palitos + Salsas.
                  </p>
                  <Link to="/makistore-isushi-creador-promo" className="flex-price">
                    <p className="price-p">S/.37.90</p>
                    <img src={priceIconOn} className="icon-price" alt="price" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {view ? (
          <div>
            {!datos && (
              <div>
                <div className="titulo-creador">
                  <div className="image-brand"></div>
                  <div className="info-creador">
                    <div>
                      <p className="name-brand">Isushi</p>
                      <p className="info-brand">San Miguel - Lima.</p>
                    </div>
                    <div>
                      <div className="image-perfil"></div>
                      <p className="info-brand">12:00AM - 7:00PM</p>
                    </div>
                  </div>
                </div>
                <div className="pedido-screen">
                  <p className="p-pedido-screen">Promo personal - S/.19.90</p>
                  <img
                    src={priceIconOn}
                    className="icon-price-on"
                    alt="price"
                  />
                </div>
                <div className="screen-porcion">
                  <img
                    src={contentMaki}
                    className="content-maki"
                    alt="partes maki"
                  />
                  <div className="recomendacion-maki">
                    <p className="h3-recomendacion-maki">
                      SELECCIONA
                      <br />
                      LOS INGREDIENTES
                    </p>
                  </div>
                  <div className="formulario-maki">
                    <p className="p-formulario-maki">RELLENO</p>
                    <p className="p-recomendacion-makifor">
                      Elige 1 ingrediente
                    </p>
                    <div className="flex-contenido-maki">
                      <label
                        htmlFor="rellenoLangostinoPanko"
                        className="flex-items-maki"
                      >
                        <img
                          src={langostino}
                          className="item-contenido-maki"
                          alt="logo"
                        />
                        <span>Langostino al panko</span>
                        <input
                          onChange={handleInputChange}
                          type="checkbox"
                          id="rellenoLangostinoPanko"
                          name="rellenoLangostinoPanko"
                        />
                      </label>
                      <label
                        htmlFor="rellenoBisteckApanado"
                        className="flex-items-maki"
                      >
                        <img
                          src={carne}
                          className="item-contenido-maki"
                          alt="logo"
                        />
                        <span>Bisteck apanado</span>
                        <input
                          onChange={handleInputChange}
                          type="checkbox"
                          id="rellenoBisteckApanado"
                          name="rellenoBisteckApanado"
                        />
                      </label>
                      <label
                        htmlFor="rellenoPescadoCrispy"
                        className="flex-items-maki"
                      >
                        <img
                          src={pescado}
                          className="item-contenido-maki"
                          alt="logo"
                        />
                        <span>Pescado crispy</span>
                        <input
                          onChange={handleInputChange}
                          type="checkbox"
                          id="rellenoPescadoCrispy"
                          name="rellenoPescadoCrispy"
                        />
                      </label>
                    </div>
                    <p className="p-formulario-maki">TOPPING</p>
                    <p className="p-recomendacion-makifor">
                      Elige 1 ingrediente
                    </p>
                    <div className="flex-contenido-maki">
                      <label htmlFor="toppingPalta" className="flex-items-maki">
                        <img
                          src={palta}
                          className="item-contenido-maki"
                          alt="logo"
                        />
                        <span>Palta</span>
                        <input
                          onChange={handleInputChange}
                          type="checkbox"
                          id="toppingPalta"
                          name="toppingPalta"
                        />
                      </label>
                      <label
                        htmlFor="toppingQuesoCrema"
                        className="flex-items-maki"
                      >
                        <img
                          src={quesoCrema}
                          className="item-contenido-maki"
                          alt="logo"
                        />
                        <span>Queso crema</span>
                        <input
                          onChange={handleInputChange}
                          type="checkbox"
                          id="toppingQuesoCrema"
                          name="toppingQuesoCrema"
                        />
                      </label>
                      <label
                        htmlFor="toppingTartaredePollo"
                        className="flex-items-maki"
                      >
                        <img
                          src={tartare}
                          className="item-contenido-maki"
                          alt="logo"
                        />
                        <span>Tartare de pollo</span>
                        <input
                          onChange={handleInputChange}
                          type="checkbox"
                          id="toppingTartaredePollo"
                          name="toppingTartaredePollo"
                        />
                      </label>
                    </div>

                    <p className="p-formulario-maki">CUBIERTA</p>
                    <p className="p-recomendacion-makifor">
                      Elige 1 ingrediente
                    </p>

                    <div className="flex-contenido-maki">
                      <label
                        htmlFor="cubiertaCebichitoChalaco"
                        className="flex-items-maki"
                      >
                        <img
                          src={cebichito}
                          className="item-contenido-maki"
                          alt="logo"
                        />
                        <span>Cebichito chalaco</span>
                        <input
                          onChange={handleInputChange}
                          type="checkbox"
                          id="cubiertaCebichitoChalaco"
                          name="cubiertaCebichitoChalaco"
                        />
                      </label>
                      <label
                        htmlFor="cubiertaLikeFuray"
                        className="flex-items-maki"
                      >
                        <img
                          src={furay}
                          className="item-contenido-maki"
                          alt="logo"
                        />
                        <span>Like furay</span>
                        <input
                          onChange={handleInputChange}
                          type="checkbox"
                          id="cubiertaLikeFuray"
                          name="cubiertaLikeFuray"
                        />
                      </label>
                      <label
                        htmlFor="cubiertaSaltaditoCriollo"
                        className="flex-items-maki"
                      >
                        <img
                          src={saltado}
                          className="item-contenido-maki"
                          alt="logo"
                        />
                        <span>Saltadito criollo</span>
                        <input
                          onChange={handleInputChange}
                          type="checkbox"
                          id="cubiertaSaltaditoCriollo"
                          name="cubiertaSaltaditoCriollo"
                        />
                      </label>
                    </div>
                    <div className="flex-contenido-maki">
                      <label
                        htmlFor="cubiertaApaltado"
                        className="flex-items-maki"
                      >
                        <img
                          src={paltado}
                          className="item-contenido-maki"
                          alt="logo"
                        />
                        <span>Apaltado</span>
                        <input
                          onChange={handleInputChange}
                          type="checkbox"
                          id="cubiertaApaltado"
                          name="cubiertaApaltado"
                        />
                      </label>
                      <label
                        htmlFor="cubiertaQuesoDoncs"
                        className="flex-items-maki"
                      >
                        <img
                          src={quesoDoncs}
                          className="item-contenido-maki"
                          alt="logo"
                        />
                        <span>Queso doncs</span>
                        <input
                          onChange={handleInputChange}
                          type="checkbox"
                          id="cubiertaQuesoDoncs"
                          name="cubiertaQuesoDoncs"
                        />
                      </label>
                    </div>
                    <p className="p-formulario-maki">SALSAS</p>
                    <div className="flex-contenido-maki">
                      <label
                        htmlFor="salsAcebichada"
                        className="flex-items-maki"
                      >
                        <img
                          src={salsaacebichada}
                          className="item-contenido-maki"
                          alt="logo"
                        />

                        <span>Acebichada</span>
                        <input
                          onChange={handleInputChange}
                          type="checkbox"
                          value="salsacebichada"
                          id="salsAcebichada"
                          name="salsAcebichada"
                        />
                      </label>
                      <label htmlFor="salsaDulce" className="flex-items-maki">
                        <img
                          src={salsaDulce}
                          className="item-contenido-maki"
                          alt="logo"
                        />
                        <span>Dulce</span>
                        <input
                          onChange={handleInputChange}
                          type="checkbox"
                          id="salsaDulce"
                          name="salsaDulce"
                        />
                      </label>
                      <label htmlFor="salsaSalada" className="flex-items-maki">
                        <img
                          src={salsaSalada}
                          className="item-contenido-maki"
                          alt="logo"
                        />

                        <span>Salada</span>
                        <input
                          onChange={handleInputChange}
                          type="checkbox"
                          id="salsaSalada"
                          name="salsaSalada"
                        />
                      </label>
                    </div>
                    <p className="p-formulario-maki">BEBIDAS</p>
                    <div className="flex-contenido-maki">
                      <label htmlFor="inkacola" className="flex-items-maki">
                        <img
                          src={incaKola}
                          className="item-contenido-maki"
                          alt="logo"
                        />
                        <span>Inca kola</span>
                        <input
                          onChange={handleInputChange}
                          type="checkbox"
                          id="inkacola"
                          name="inkacola"
                        />
                      </label>
                      <label htmlFor="cocaCola" className="flex-items-maki">
                        <img
                          src={cocaCola}
                          className="item-contenido-maki"
                          alt="logo"
                        />
                        <span>Coca Cola</span>
                        <input
                          onChange={handleInputChange}
                          type="checkbox"
                          id="cocaCola"
                          name="cocaCola"
                        />
                      </label>
                    </div>
                    <div className="alergia-maki">
                      <input
                        onChange={handleInputChange}
                        type="checkbox"
                        id="alertaAlergia"
                        name="alertaAlergia"
                      />
                      <label htmlFor="alertaAlergia">
                        ¿Tienes alergia algún ingrediente?
                      </label>
                    </div>
                  </div>
                  <button onClick={() => setDatos(true)} className="btn-elegir">
                    CONTINUAR
                  </button>
                </div>
              </div>
            )}
            {datos ? (
              <div>
                <div className="pedido-screen">
                  <p className="p-pedido-screen">Promo personal - S/.19.90</p>
                  <img
                    src={priceIconOn}
                    className="icon-price-on"
                    alt="price"
                  />
                </div>
                <div className="screen-porcion">
                  <div className="screen-datos">
                    <p className="h3-porcion">CONFIRMA TU PEDIDO</p>
                    <p className="p-porcion">Ingresa los siguientes datos</p>
                    <div className="formulario-datos">
                      <input
                        required="required"
                        onChange={handleInputChange}
                        className="inp-cliente"
                        placeholder="Nombre completo"
                        type="text"
                        id="nombre"
                        name="nombre"
                      />
                      <input
                        required="required"
                        onChange={handleInputChange}
                        className="inp-cliente"
                        type="number"
                        id="numero"
                        name="numero"
                        placeholder="Número de contacto"
                      />
                      <input
                        required="required"
                        onChange={handleInputChange}
                        className="inp-cliente"
                        type="text"
                        id="direccion"
                        name="direccion"
                        placeholder="Dirección de entrega"
                      />
                      <select
                        required="required"
                        onChange={handleInputChange}
                        className="inp-cliente"
                        id="formaPago"
                        name="formaPago"
                      >
                        <option value="formadepago">Método de pago</option>
                        <option value="visa">Transferencias</option>
                        <option value="efectivo">Efectivo</option>
                        <option value="YapePlin">Yape o Plin</option>
                      </select>
                      <textarea
                        onChange={handleInputChange}
                        className="form-text"
                        name="pedidoDetalle"
                        rows="5"
                        cols="30"
                        placeholder="¿Algún detalle en tu pedido?..."
                      ></textarea>
                      <div className="div-recaptcha">
                        <ReCAPTCHA
                          sitekey="6LeZDl8fAAAAALTGIuGsw6HOyZ61UFTR3lar1pnM"
                          onChange={onChange}
                          className="recaptcha"
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn-elegir-sold">
                      COMPRAR
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </form>
  );
};

export default EdoCreadorForm;
