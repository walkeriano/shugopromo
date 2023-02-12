import React, { useState } from "react";
import { isushipromoTask } from "../firebase.js";
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
import check from "../img/icon-complete.svg";
import priceIconOn from "../img/icon-price-on.svg";
import isushilogo from "../img/isushi-logo.png";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

const IsushiPromoForm = (props) => {
  const initialStateValues = {
    aClientRellenoLangostinoPanko: "",
    aClientRellenoBisteckApanado: "",
    aClientRellenoPescadoCrispy: "",
    aClientToppingPalta: "",
    aClientToppingQuesoCrema: "",
    aClientToppingTartaredePollo: "",
    aClientCubiertaQuesoDoncs: "",
    aClientCubiertaCebichitoChalaco: "",
    aClientCubiertaLikeFuray: "",
    aClientCubiertaSaltaditoCriollo: "",
    aClientCubiertaApaltado: "",
    aClientSalsAcebichada: "",
    aClientSalsaDulce: "",
    aClientSalsaSalada: "",
    aClientInkacola: "",
    aClientCocaCola: "",
    aClientAlertaAlergia: "",
    bClientRellenoLangostinoPanko: "",
    bClientRellenoBisteckApanado: "",
    bClientRellenoPescadoCrispy: "",
    bClientToppingPalta: "",
    bClientToppingQuesoCrema: "",
    bClientToppingTartaredePollo: "",
    bClientCubiertaQuesoDoncs: "",
    bClientCubiertaCebichitoChalaco: "",
    bClientCubiertaLikeFuray: "",
    bClientCubiertaSaltaditoCriollo: "",
    bClientCubiertaApaltado: "",
    bClientSalsAcebichada: "",
    bClientSalsaDulce: "",
    bClientSalsaSalada: "",
    bClientInkacola: "",
    bClientCocaCola: "",
    bClientAlertaAlergia: "",
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
    isushipromoTask(
      values.aClientRellenoLangostinoPanko,
      values.aClientRellenoBisteckApanado,
      values.aClientRellenoPescadoCrispy,
      values.aClientToppingPalta,
      values.aClientToppingQuesoCrema,
      values.aClientToppingTartaredePollo,
      values.aClientCubiertaQuesoDoncs,
      values.aClientCubiertaCebichitoChalaco,
      values.aClientCubiertaLikeFuray,
      values.aClientCubiertaSaltaditoCriollo,
      values.aClientCubiertaApaltado,
      values.aClientSalsAcebichada,
      values.aClientSalsaDulce,
      values.aClientSalsaSalada,
      values.aClientInkacola,
      values.aClientCocaCola,
      values.aClientAlertaAlergia,
      values.bClientRellenoLangostinoPanko,
      values.bClientRellenoBisteckApanado,
      values.bClientRellenoPescadoCrispy,
      values.bClientToppingPalta,
      values.bClientToppingQuesoCrema,
      values.bClientToppingTartaredePollo,
      values.bClientCubiertaQuesoDoncs,
      values.bClientCubiertaCebichitoChalaco,
      values.bClientCubiertaLikeFuray,
      values.bClientCubiertaSaltaditoCriollo,
      values.bClientCubiertaApaltado,
      values.bClientSalsAcebichada,
      values.bClientSalsaDulce,
      values.bClientSalsaSalada,
      values.bClientInkacola,
      values.bClientCocaCola,
      values.bClientAlertaAlergia,
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

  const [datos, setDatos] = useState(false);
  const [clientone, setClientone] = useState(false);
  const [clientwo, setClientwo] = useState(false);
  const [cierre, setCierre] = useState(false);

  return (
    <form onSubmit={handleSubmit}>
      {!clientone && (
        <div className="screen-porcion-promo-combo">
          <div className="titulo-creador">
            <img src={isushilogo} className="image-brand" alt="logo" />
            <div className="info-creador">
              <div className="content-info">
                <p className="name-brand">Isushi</p>
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
          <div className="pedido-screen">
            <p className="p-pedido-screen">Promo pa' compartir - S/.37.90</p>
            <img src={priceIconOn} className="icon-price-on" alt="price" />
          </div>
          <div className="box-combinacion">
            <div>
              <p className="p-title-promo">COMBO 1</p>
              <p className="p-text-promo">Elegir ingredientes</p>
            </div>
            <button
              onClick={() => setClientone(true)}
              className="btn-elegir-promo"
            >
              INICIAR
            </button>
          </div>
          <div className="box-combinacion">
            <div>
              <p className="p-title-promo-off">COMBO 2</p>
            </div>
            <div className="btn-elegir-off">INICIAR</div>
          </div>
        </div>
      )}
      {clientone ? (
        <div>
          <div>
            {!clientwo && (
              <div>
                <div className="pedido-screen">
                  <p className="p-pedido-screen">
                    Promo pa' compartir - S/.37.90
                  </p>
                  <img
                    src={priceIconOn}
                    className="icon-price-on"
                    alt="price"
                  />
                </div>
                <div className="screen-porcion">
                  <div className="screen-porcion-promo">
                    <div className="formulario-maki">
                      <img
                        src={contentMaki}
                        className="content-maki"
                        alt="partes maki"
                      />
                      <div className="recomendacion-maki">
                        <p className="h3-recomendacion-maki">
                          DESCUBRE
                          <br />
                          NUEVOS SABORES
                          <br />Y DISFRUTA
                        </p>
                      </div>
                      <p className="p-formulario-maki">RELLENO</p>
                      <p className="p-recomendacion-makifor">
                        Elige 1 ingrediente
                      </p>
                      <div className="flex-contenido-maki">
                        <label
                          htmlFor="aClientRellenoLangostinoPanko"
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
                            id="aClientRellenoLangostinoPanko"
                            name="aClientRellenoLangostinoPanko"
                          />
                        </label>
                        <label
                          htmlFor="aClientRellenoBisteckApanado"
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
                            id="aClientRellenoBisteckApanado"
                            name="aClientRellenoBisteckApanado"
                          />
                        </label>
                        <label
                          htmlFor="aClientRellenoPescadoCrispy"
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
                            id="aClientRellenoPescadoCrispy"
                            name="aClientRellenoPescadoCrispy"
                          />
                        </label>
                      </div>
                      <p className="p-formulario-maki">TOPPING</p>
                      <p className="p-recomendacion-makifor">
                        Elige 1 ingrediente
                      </p>
                      <div className="flex-contenido-maki">
                        <label
                          htmlFor="aClientToppingPalta"
                          className="flex-items-maki"
                        >
                          <img
                            src={palta}
                            className="item-contenido-maki"
                            alt="logo"
                          />
                          <span>Palta</span>
                          <input
                            onChange={handleInputChange}
                            type="checkbox"
                            id="aClientToppingPalta"
                            name="aClientToppingPalta"
                          />
                        </label>
                        <label
                          htmlFor="aClientToppingQuesoCrema"
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
                            id="aClientToppingQuesoCrema"
                            name="aClientToppingQuesoCrema"
                          />
                        </label>
                        <label
                          htmlFor="aClientToppingTartaredePollo"
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
                            id="aClientToppingTartaredePollo"
                            name="aClientToppingTartaredePollo"
                          />
                        </label>
                      </div>
                      <p className="p-formulario-maki">CUBIERTA</p>
                      <p className="p-recomendacion-makifor">
                        Elige 1 ingrediente
                      </p>
                      <div className="flex-contenido-maki">
                        <label
                          htmlFor="aClientCubiertaCebichitoChalaco"
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
                            id="aClientCubiertaCebichitoChalaco"
                            name="aClientCubiertaCebichitoChalaco"
                          />
                        </label>
                        <label
                          htmlFor="aClientCubiertaLikeFuray"
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
                            id="aClientCubiertaLikeFuray"
                            name="aClientCubiertaLikeFuray"
                          />
                        </label>
                        <label
                          htmlFor="aClientCubiertaSaltaditoCriollo"
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
                            id="aClientCubiertaSaltaditoCriollo"
                            name="aClientCubiertaSaltaditoCriollo"
                          />
                        </label>
                      </div>
                      <div className="flex-contenido-maki">
                        <label
                          htmlFor="aClientCubiertaApaltado"
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
                            id="aClientCubiertaApaltado"
                            name="aClientCubiertaApaltado"
                          />
                        </label>
                        <label
                          htmlFor="aClientCubiertaQuesoDoncs"
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
                            id="aClientCubiertaQuesoDoncs"
                            name="aClientCubiertaQuesoDoncs"
                          />
                        </label>
                      </div>
                      <p className="p-formulario-maki">SALSAS</p>
                      <div className="flex-contenido-maki">
                        <label
                          htmlFor="aClientSalsAcebichada"
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
                            id="aClientSalsAcebichada"
                            name="aClientSalsAcebichada"
                          />
                        </label>
                        <label
                          htmlFor="aClientSalsaDulce"
                          className="flex-items-maki"
                        >
                          <img
                            src={salsaDulce}
                            className="item-contenido-maki"
                            alt="logo"
                          />
                          <span>Dulce</span>
                          <input
                            onChange={handleInputChange}
                            type="checkbox"
                            id="aClientSalsaDulce"
                            name="aClientSalsaDulce"
                          />
                        </label>
                        <label
                          htmlFor="aClientSalsaSalada"
                          className="flex-items-maki"
                        >
                          <img
                            src={salsaSalada}
                            className="item-contenido-maki"
                            alt="logo"
                          />

                          <span>Salada</span>
                          <input
                            onChange={handleInputChange}
                            type="checkbox"
                            id="aClientSalsaSalada"
                            name="aClientSalsaSalada"
                          />
                        </label>
                      </div>
                      <p className="p-formulario-maki">BEBIDAS</p>
                      <div className="flex-contenido-maki">
                        <label
                          htmlFor="aClientInkacola"
                          className="flex-items-maki"
                        >
                          <img
                            src={incaKola}
                            className="item-contenido-maki"
                            alt="logo"
                          />
                          <span>Inca kola</span>
                          <input
                            onChange={handleInputChange}
                            type="checkbox"
                            id="aClientInkacola"
                            name="aClientInkacola"
                          />
                        </label>
                        <label
                          htmlFor="aClientCocaCola"
                          className="flex-items-maki"
                        >
                          <img
                            src={cocaCola}
                            className="item-contenido-maki"
                            alt="logo"
                          />
                          <span>Coca Cola</span>
                          <input
                            onChange={handleInputChange}
                            type="checkbox"
                            id="aClientCocaCola"
                            name="aClientCocaCola"
                          />
                        </label>
                      </div>
                      <div className="alergia-maki">
                        <input
                          onChange={handleInputChange}
                          type="checkbox"
                          id="aClientAlertaAlergia"
                          name="aClientAlertaAlergia"
                        />
                        <label htmlFor="aClientAlertaAlergia">
                          ¿Tienes alergia algún ingrediente?
                        </label>
                      </div>
                    </div>
                    <button
                      onClick={() => setClientwo(true)}
                      className="btn-elegir-promo-client"
                    >
                      CONTINUAR
                    </button>
                  </div>
                </div>
              </div>
            )}
            {clientwo ? (
              <div>
                {!cierre && (
                  <div className="screen-porcion-promo-combo">
                    <div>
                      <div className="pedido-screen">
                        <p className="p-pedido-screen">
                          Promo pa' compartir - S/.37.90
                        </p>
                        <img
                          src={priceIconOn}
                          className="icon-price-on"
                          alt="price"
                        />
                      </div>
                      <div className="box-combinacion-listo-cierre-dos">
                        <div>
                          <p className="p-title-promo-listo">COMBO 1</p>
                          <p className="p-text-promo-listo">Listo!</p>
                        </div>
                        <img
                          src={check}
                          className="checks-maki"
                          alt="checks-maki"
                        />
                      </div>
                      <div className="box-combinacion">
                        <div>
                          <p className="p-title-promo">COMBO 2</p>
                          <p className="p-text-promo">Elegir ingredientes</p>
                        </div>

                        <button
                          onClick={() => setCierre(true)}
                          className="btn-elegir-promo"
                        >
                          INICIAR
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {cierre ? (
                  <div>
                    {!datos && (
                      <div>
                        <div className="pedido-screen">
                          <p className="p-pedido-screen">
                            Promo pa' compartir - S/.37.90
                          </p>
                          <img
                            src={priceIconOn}
                            className="icon-price-on"
                            alt="price"
                          />
                        </div>
                        <div className="screen-porcion-listo">
                          <div className="box-combinacion-listo-cierre">
                            <div>
                              <p className="p-title-promo-listo">COMBO 1</p>
                              <p className="p-text-promo-listo">Listo!</p>
                            </div>
                            <img
                              src={check}
                              className="checks-maki"
                              alt="checks-maki"
                            />
                          </div>
                          <div className="content-form-promo">
                            <img
                              src={contentMaki}
                              className="content-maki"
                              alt="partes maki"
                            />
                            <div className="recomendacion-maki">
                              <p className="h3-recomendacion-maki">
                                DESCUBRE
                                <br />
                                NUEVOS SABORES
                                <br />Y DISFRUTA
                              </p>
                            </div>
                            <div className="formulario-maki">
                              <p className="p-formulario-maki">RELLENO</p>
                              <p className="p-recomendacion-makifor">
                                Elige 1 ingrediente
                              </p>
                              <div className="flex-contenido-maki">
                                <label
                                  htmlFor="bClientRellenoLangostinoPanko"
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
                                    id="bClientRellenoLangostinoPanko"
                                    name="bClientRellenoLangostinoPanko"
                                  />
                                </label>
                                <label
                                  htmlFor="bClientRellenoBisteckApanado"
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
                                    id="bClientRellenoBisteckApanado"
                                    name="bClientRellenoBisteckApanado"
                                  />
                                </label>
                                <label
                                  htmlFor="bClientRellenoPescadoCrispy"
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
                                    id="bClientRellenoPescadoCrispy"
                                    name="bClientRellenoPescadoCrispy"
                                  />
                                </label>
                              </div>
                              <p className="p-formulario-maki">TOPPING</p>
                              <p className="p-recomendacion-makifor">
                                Elige 1 ingrediente
                              </p>
                              <div className="flex-contenido-maki">
                                <label
                                  htmlFor="bClientToppingPalta"
                                  className="flex-items-maki"
                                >
                                  <img
                                    src={palta}
                                    className="item-contenido-maki"
                                    alt="logo"
                                  />
                                  <span>Palta</span>
                                  <input
                                    onChange={handleInputChange}
                                    type="checkbox"
                                    id="bClientToppingPalta"
                                    name="bClientToppingPalta"
                                  />
                                </label>
                                <label
                                  htmlFor="bClientToppingQuesoCrema"
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
                                    id="bClientToppingQuesoCrema"
                                    name="bClientToppingQuesoCrema"
                                  />
                                </label>
                                <label
                                  htmlFor="bClientToppingTartaredePollo"
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
                                    id="bClientToppingTartaredePollo"
                                    name="bClientToppingTartaredePollo"
                                  />
                                </label>
                              </div>
                              <p className="p-formulario-maki">CUBIERTA</p>
                              <p className="p-recomendacion-makifor">
                                Elige 1 ingrediente
                              </p>
                              <div className="flex-contenido-maki">
                                <label
                                  htmlFor="bClientCubiertaCebichitoChalaco"
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
                                    id="bClientCubiertaCebichitoChalaco"
                                    name="bClientCubiertaCebichitoChalaco"
                                  />
                                </label>
                                <label
                                  htmlFor="bClientCubiertaLikeFuray"
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
                                    id="bClientCubiertaLikeFuray"
                                    name="bClientCubiertaLikeFuray"
                                  />
                                </label>
                                <label
                                  htmlFor="bClientCubiertaSaltaditoCriollo"
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
                                    id="bClientCubiertaSaltaditoCriollo"
                                    name="bClientCubiertaSaltaditoCriollo"
                                  />
                                </label>
                              </div>
                              <div className="flex-contenido-maki">
                                <label
                                  htmlFor="bClientCubiertaApaltado"
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
                                    id="bClientCubiertaApaltado"
                                    name="bClientCubiertaApaltado"
                                  />
                                </label>
                                <label
                                  htmlFor="bClientCubiertaQuesoDoncs"
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
                                    id="bClientCubiertaQuesoDoncs"
                                    name="bClientCubiertaQuesoDoncs"
                                  />
                                </label>
                              </div>
                              <p className="p-formulario-maki">SALSAS</p>
                              <div className="flex-contenido-maki">
                                <label
                                  htmlFor="bClientSalsAcebichada"
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
                                    id="bClientSalsAcebichada"
                                    name="bClientSalsAcebichada"
                                  />
                                </label>
                                <label
                                  htmlFor="bClientSalsaDulce"
                                  className="flex-items-maki"
                                >
                                  <img
                                    src={salsaDulce}
                                    className="item-contenido-maki"
                                    alt="logo"
                                  />
                                  <span>Dulce</span>
                                  <input
                                    onChange={handleInputChange}
                                    type="checkbox"
                                    id="bClientSalsaDulce"
                                    name="bClientSalsaDulce"
                                  />
                                </label>
                                <label
                                  htmlFor="bClientSalsaSalada"
                                  className="flex-items-maki"
                                >
                                  <img
                                    src={salsaSalada}
                                    className="item-contenido-maki"
                                    alt="logo"
                                  />

                                  <span>Salada</span>
                                  <input
                                    onChange={handleInputChange}
                                    type="checkbox"
                                    id="bClientSalsaSalada"
                                    name="bClientSalsaSalada"
                                  />
                                </label>
                              </div>
                              <p className="p-formulario-maki">BEBIDAS</p>
                              <div className="flex-contenido-maki">
                                <label
                                  htmlFor="bClientInkacola"
                                  className="flex-items-maki"
                                >
                                  <img
                                    src={incaKola}
                                    className="item-contenido-maki"
                                    alt="logo"
                                  />
                                  <span>Inca kola</span>
                                  <input
                                    onChange={handleInputChange}
                                    type="checkbox"
                                    id="bClientInkacola"
                                    name="bClientInkacola"
                                  />
                                </label>
                                <label
                                  htmlFor="bClientCocaCola"
                                  className="flex-items-maki"
                                >
                                  <img
                                    src={cocaCola}
                                    className="item-contenido-maki"
                                    alt="logo"
                                  />
                                  <span>Coca Cola</span>
                                  <input
                                    onChange={handleInputChange}
                                    type="checkbox"
                                    id="bClientCocaCola"
                                    name="bClientCocaCola"
                                  />
                                </label>
                              </div>
                              <div className="alergia-maki">
                                <input
                                  onChange={handleInputChange}
                                  type="checkbox"
                                  id="bClientAlertaAlergia"
                                  name="bClientAlertaAlergia"
                                />
                                <label htmlFor="bClientAlertaAlergia">
                                  ¿Tienes alergia algún ingrediente?
                                </label>
                              </div>
                            </div>
                            <button
                              onClick={() => setDatos(true)}
                              className="btn-elegir-promo-client"
                            >
                              CONTINUAR
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    {datos ? (
                      <div>
                        <div className="pedido-screen">
                          <p className="p-pedido-screen">
                            Promo pa' compartir - S/.37.90
                          </p>
                          <img
                            src={priceIconOn}
                            className="icon-price-on"
                            alt="price"
                          />
                        </div>
                        <div className="screen-porcion-promo-combostd">
                          <div className="box-combinacion-listo-cierre">
                            <div>
                              <p className="p-title-promo-listo">COMBO 1</p>
                              <p className="p-text-promo-listo">Listo!</p>
                            </div>
                            <img
                              src={check}
                              className="checks-maki"
                              alt="checks-maki"
                            />
                          </div>
                          <div className="box-combinacion-listo-cierre">
                            <div>
                              <p className="p-title-promo-listo">COMBO 2</p>
                              <p className="p-text-promo-listo">Listo!</p>
                            </div>
                            <img
                              src={check}
                              className="checks-maki"
                              alt="checks-maki"
                            />
                          </div>
                          <div className="screen-datos-promo">
                            <p className="h3-porcion-promo">
                              CONFIRMA TU PEDIDO
                            </p>
                            <p className="p-porcion">
                              Ingresa los siguientes datos
                            </p>
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
                                <option value="formadepago">
                                  Método de pago
                                </option>
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
            ) : null}
          </div>
        </div>
      ) : null}
    </form>
  );
};

export default IsushiPromoForm;
