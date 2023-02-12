import React, { useState } from "react";
import { edocartaTask } from "../firebase.js";
import ReCAPTCHA from "react-google-recaptcha";
import acebichado from "../img/acebichado.png";
import avocado from "../img/avocado.png";
import furay from "../img/furay.png";
import saltado from "../img/saltado.png";
import seiji from "../img/seiji.png";
import incaKola from "../img/icn-18.png";
import cocaCola from "../img/icn-19.png";
import edologo from "../img/edo-logo.jpg";
import { useNavigate } from "react-router-dom";

const EdoCartaForm = (props) => {
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

  const handleSubmitedo = (e) => {
    e.preventDefault();
    edocartaTask(
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
    <form onSubmit={handleSubmitedo}>
      {!formcarta && (
        <div className="flex">
          <div className="screen-porcion-carta">
            <div className="titulo-creador">
              <div className="image-brand"></div>
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
              <h4 >CARTA</h4>
            </div>
            <div className="content-white">
              <div className="item-carta">
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
                  <div className="formulario-carta">
                    <div className="bebida-carta">
                      <input
                        onChange={handleInputChange}
                        type="checkbox"
                        id="acebichado"
                        name="acebichado"
                      />
                      <label htmlFor="acebichado"> 10 Cortes - S/22.50</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-carta">
                <div className="boximage">
                  <img src={furay} className="img-carta" alt="logo" />
                  <p className="titulo-item">LIKE FURAY</p>
                </div>
                <div className="items">
                  <p className="info-item">
                    Relleno de Lomo apanado con tajadas de Palta y Queso Crema.
                  </p>
                  <div className="formulario-carta">
                    <div className="bebida-carta">
                      <input
                        onChange={handleInputChange}
                        type="checkbox"
                        id="likeFuray"
                        name="likeFuray"
                      />
                      <label htmlFor="likeFuray"> 10 Cortes - S/22.50</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-carta">
                <div className="boximage">
                  <img src={avocado} className="img-carta" alt="logo" />
                  <p className="titulo-item">QUE" TAL PALTA</p>
                </div>
                <div className="items">
                  <p className="info-item">
                    Relleno de Langostino al Panko con Queso Crema, cubierto de
                    Palta con Ajonjolí Negro.
                  </p>
                  <div className="formulario-carta">
                    <div className="bebida-carta">
                      <input
                        onChange={handleInputChange}
                        type="checkbox"
                        id="queTalPalta"
                        name="queTalPalta"
                      />
                      <label htmlFor="queTalPalta"> 10 Cortes - S/22.50</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-carta">
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
                  <div className="formulario-carta">
                    <div className="bebida-carta">
                      <input
                        onChange={handleInputChange}
                        type="checkbox"
                        id="lomitoSaltado"
                        name="lomitoSaltado"
                      />
                      <label htmlFor="lomitoSaltado">10 Cortes - S/22.50</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-carta">
                <div className="boximage">
                  <img src={seiji} className="img-carta" alt="logo" />
                  <p className="titulo-item">SEIJINHO</p>
                </div>
                <div className="items">
                  <p className="info-item">
                    Relleno de pescado al panko, acompañado de rodajas de palta,
                    nori frito de cubierta con
                    Queso doncs al orégano derretido.
                  </p>
                  <div className="formulario-carta">
                    <div className="bebida-carta">
                      <input
                        onChange={handleInputChange}
                        type="checkbox"
                        id="seijilinho"
                        name="seijilinho"
                      />
                      <label htmlFor="seijilinho"> 10 Cortes - S/22.50</label>
                    </div>
                  </div>
                </div>
              </div>
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
              <button onClick={() => setFormcarta(true)} className="btn-elegir-cartas">
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

export default EdoCartaForm;
