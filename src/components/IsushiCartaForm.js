import React, { useState } from "react";
import { isushicartaTask } from "../firebase.js";
import ReCAPTCHA from "react-google-recaptcha";
import acebichado from "../img/acebichado.png";
import avocado from "../img/avocado.png";
import furay from "../img/furay.png";
import saltado from "../img/saltado.png";
import seiji from "../img/seiji.png";
import incaKola from "../img/icn-18.png";
import cocaCola from "../img/icn-19.png";
import isushibg from "../img/bg-brand.jpg";
import isushilogo from "../img/isushi-logo.png";
import priceIcon from "../img/icon-price.svg";
import { useNavigate } from "react-router-dom";

const IsushiCartaForm = (props) => {
  const initialStateValues = {
    masBebidaIncaKola: "",
    masBebidaCocaCola: "",
    acebichado: "",
    likeFuray: "",
    queTalPalta: "",
    lomitoSaltado: "",
    seijilinho: "",
    cliente: "",
    numero: "",
    direccion: "",
    formaPago: "",
    pedidoDetalle: "",
  };

  const [values, setValues] = useState(initialStateValues);
  const [formcarta, setFormcarta] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleChecked = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [e.target.name]: e.target.checked });
    console.log(e.target.checked);
  };

  const history = useNavigate();

  const handleSubmitIsushi = (e) => {
    e.preventDefault();
    isushicartaTask(
      values.masBebidaIncaKola,
      values.masBebidaCocaCola,
      values.acebichado,
      values.likeFuray,
      values.queTalPalta,
      values.lomitoSaltado,
      values.seijilinho,
      values.cliente,
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

  return (
    <form onSubmit={handleSubmitIsushi}>
      {!formcarta && (
        <div className="flex">
          <div className="screen-porcion-carta">
            <div className="titulo-creador">
              <img src={isushibg} className="image-brand" alt="logo" />
              <div className="info-creador">
                <div className="content-info">
                  <p className="name-brand">ISUSHI</p>
                  <p className="info-brand">San Miguel - Lima.</p>
                </div>
                <div className="content-hour">
                  <img src={isushilogo} className="image-perfil" alt="logo" />
                  <p className="info-brand-hora">
                    12:00 AM
                    <br />
                    7:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="pedido-tittle">
              <p>Selección de la Carta</p>
              <img src={priceIcon} className="icon-sel" alt="logo" />
            </div>
            <div className="content-white">
              <label htmlFor="acebichado" className="item-carta">
                <div className="boximage">
                  <img src={acebichado} className="img-carta" alt="logo" />
                  <p className="titulo-item">ACEBICHADO</p>
                </div>
                <div className="items">
                  <p className="info-item">
                    Relleno de Langostino al Panko con tajadas de Palta,
                    cubierto de pescado Bonito, bañado en salsa acebichada, con
                    toque de togarashi y neggi.
                  </p>
                  <div className="bebida-carta">
                    <input
                      onChange={handleInputChange}
                      type="checkbox"
                      id="acebichado"
                      name="acebichado"
                    />
                    <div className="price-item"> 10 Cortes - S/22.50</div>
                  </div>
                </div>
              </label>
              <label htmlFor="likeFuray" className="item-carta">
                <div className="boximage">
                  <img src={furay} className="img-carta" alt="logo" />
                  <p className="titulo-item">FURAI CARNIVORO</p>
                </div>
                <div className="items">
                  <p className="info-item">
                    Relleno de Lomo apanado con tajadas de Palta y Queso Crema.
                  </p>
                  <div className="bebida-carta">
                    <input
                      onChange={handleInputChange}
                      type="checkbox"
                      id="likeFuray"
                      name="likeFuray"
                    />
                    <div className="price-item"> 10 Cortes - S/22.50</div>
                  </div>
                </div>
              </label>
              <label htmlFor="queTalPalta" className="item-carta">
                <div className="boximage">
                  <img src={avocado} className="img-carta" alt="logo" />
                  <p className="titulo-item">APALTADO</p>
                </div>
                <div className="items">
                  <p className="info-item">
                    Relleno de Langostino al Panko con Queso Crema, cubierto de
                    Palta con Ajonjolí Negro.
                  </p>
                  <div className="bebida-carta">
                    <input
                      onChange={handleInputChange}
                      type="checkbox"
                      id="queTalPalta"
                      name="queTalPalta"
                    />
                    <div className="price-item"> 10 Cortes - S/22.50</div>
                  </div>
                </div>
              </label>
              <label htmlFor="lomitoSaltado" className="item-carta">
                <div className="boximage">
                  <img src={saltado} className="img-carta" alt="logo" />
                  <p className="titulo-item">LOMITO SALTADO</p>
                </div>
                <div className="items">
                  <p className="info-item">
                    Relleno de Lomo Apanado con Queso Crema y tajadas de Palta,
                    cubierta de Lomo fino flameado, acompañado de un saltado
                    Criollo.
                  </p>
                  <div className="bebida-carta">
                    <input
                      onChange={handleInputChange}
                      type="checkbox"
                      id="lomitoSaltado"
                      name="lomitoSaltado"
                    />
                    <div className="price-item">10 Cortes - S/22.50</div>
                  </div>
                </div>
              </label>
              <label htmlFor="seijilinho" className="item-carta">
                <div className="boximage">
                  <img src={seiji} className="img-carta" alt="logo" />
                  <p className="titulo-item">SEIJI-CHEESE</p>
                </div>
                <div className="items">
                  <p className="info-item">
                    Relleno de pescado al panko, acompañado de rodajas de palta,
                    nori frito de cubierta con Queso doncs al orégano derretido.
                  </p>
                  <div className="bebida-carta">
                    <input
                      onChange={handleInputChange}
                      type="checkbox"
                      id="seijilinho"
                      name="seijilinho"
                    />
                    <div className="price-item"> 10 Cortes - S/22.50</div>
                  </div>
                </div>
              </label>
              <div className="item-carta">
                <p className="titulo-item-bebida">BEBIDAS</p>
                <div className="flex-contenido-maki">
                  <label
                    htmlFor="masBebidaIncaKola"
                    className="flex-items-maki-bebida"
                  >
                    <img
                      src={incaKola}
                      className="item-contenido-maki"
                      alt="logo"
                    />
                    <p className="titulo-bebida">Inca kola</p>
                    <p className="titulo-bebida-price">+ S/.3.00</p>
                    <input
                      onChange={handleChecked}
                      type="checkbox"
                      id="masBebidaIncaKola"
                      name="masBebidaIncaKola"
                    />
                  </label>
                  <label
                    htmlFor="masBebidaCocaCola"
                    className="flex-items-maki-bebida"
                  >
                    <img
                      src={cocaCola}
                      className="item-contenido-maki"
                      alt="logo"
                    />
                    <p className="titulo-bebida">Coca Cola</p>
                    <p className="titulo-bebida-price">+ S/.3.00</p>
                    <input
                      onChange={handleInputChange}
                      type="checkbox"
                      id="masBebidaCocaCola"
                      name="masBebidaCocaCola"
                    />
                  </label>
                </div>
              </div>
              <button
                onClick={() => setFormcarta(true)}
                className="btn-elegir-cartas"
              >
                CONTINUAR
              </button>
            </div>
          </div>
        </div>
      )}
      {formcarta ? (
        <div className="flex">
          <div className="screen-porcion">
            <div className="content-white">
              <p className="h3-porcion">CONFIRMA TU PEDIDO</p>
              <div className="screen-datos">
                <p className="p-porcion">Ingresa los siguientes datos</p>
                <div className="formulario-datos">
                  <input
                    required="required"
                    onChange={handleInputChange}
                    className="inp-cliente"
                    type="text"
                    placeholder="Nombre completo"
                    name="cliente"
                  />

                  <input
                    required="required"
                    onChange={handleInputChange}
                    className="inp-cliente"
                    type="number"
                    placeholder="Número de contacto"
                    name="numero"
                  />

                  <input
                    required="required"
                    onChange={handleInputChange}
                    className="inp-cliente"
                    type="text"
                    placeholder="Dirección de entrega"
                    name="direccion"
                  />

                  <select
                    required="required"
                    onChange={handleInputChange}
                    className="inp-cliente"
                    id="formaPago"
                    name="formaPago"
                  >
                    <option name="formadepago">Método de pago</option>
                    <option name="visa">Transferencia</option>
                    <option name="efectivo">Efectivo</option>
                    <option name="YapePlin">Yape o Plin</option>
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
              </div>
              <br />
              <br />
            </div>
          </div>
          <button type="submit" className="btn-elegir-sold">
            COMPRAR
          </button>
        </div>
      ) : null}
    </form>
  );
};

export default IsushiCartaForm;
