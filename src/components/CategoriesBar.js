import iconropa from "../img/icon-ropa.svg";
import iconcomidas from "../img/icon-comidas.svg";
import iconcalzado from "../img/icon-zapatilla.svg";
import iconsalud from "../img/icon-salud.svg";
import iconsupermarket from "../img/icon-supermarket.svg";
import iconsport from "../img/icon-gym.svg";
import iconvit from "../img/icon-vit.svg";
import iconmarket from "../img/icon-market.svg";
import iconcorte from "../img/icon-corte.svg";
import iconfav from "../img/fav-icon.svg";

import { Link } from "react-router-dom";
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ExampleContext from '../state/Example/ExampleContext.js';


const CategoriesBar = () => {
  const navigate = useNavigate();
  const { example } = useContext(ExampleContext);



  return (
    <section className="categories-bar">
      <div className="botonera">
        <p className="text-title">Categorías disponibles</p>
        <div className="overlay-cat">
          <div className="btn-cat">
            <div className="acc-btn-on">
              <img src={iconfav} className="icon-item" alt="logo" />
              <p>Favoritos</p>
            </div>
          </div>
          <button onClick={() => navigate('/promos-ropa')} className="btn-cat">
            <div className="acc-btn">
              <img src={iconropa} className="icon-item" alt="logo" />
            </div>
            <p>Ropa</p>
          </button>
          <button onClick={() => navigate('/')} className="btn-cat">
            <div className="acc-btn">
              <img src={iconcalzado} className="icon-item" alt="logo" />
            </div>
            <p>Calzado</p>
          </button>
          <button onClick={() => navigate('/promos')} className="btn-cat">
            <div className="acc-btn">
              <img src={iconcomidas} className="icon-item" alt="logo" />
            </div>
            <p>Comidas</p>
          </button>
          <button onClick={() => navigate('/promos')} className="btn-cat">
            <div className="acc-btn">
              <img src={iconsalud} className="icon-item" alt="logo" />
            </div>
            <p>Salud</p>
          </button>
          <button onClick={() => navigate('/promos')} className="btn-cat">
            <div className="acc-btn">
              <img src={iconsupermarket} className="icon-item" alt="logo" />
            </div>
            <p>Supermercados</p>
          </button>
          <button onClick={() => navigate('/promos')} className="btn-cat">
            <div className="acc-btn">
              <img src={iconsport} className="icon-item" alt="logo" />
            </div>
            <p>Deportes</p>
          </button>
          <button onClick={() => navigate('/promos')} className="btn-cat">
            <div className="acc-btn">
              <img src={iconvit} className="icon-item" alt="logo" />
            </div>
            <p>Entretenimiento</p>
          </button>
          <button onClick={() => navigate('/promos')} className="btn-cat">
            <div className="acc-btn">
              <img src={iconmarket} className="icon-item" alt="logo" />
            </div>
            <p>Markets</p>
          </button>
          <button  onClick={() => navigate('/promos')} className="btn-cat">
            <div className="acc-btn">
              <img src={iconcorte} className="icon-item" alt="logo" />
            </div>
            <p>Belleza</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesBar;
