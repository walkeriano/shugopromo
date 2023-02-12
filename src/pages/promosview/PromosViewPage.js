import "./PromosViewPage.css";
import { Link } from "react-router-dom";
import iconbuscar from "../../img/icon-buscar.svg";
import CategoriesBar from "../../components/CategoriesBar.js";

export default function PromosViewPage() {
  return (
    <section  className="bg-promos">
        <div className="buscador" >
          <input className="inp-buscar" type="search" placeholder="Buscar por marca">
          </input>
          <div className="bloq"></div>
          <button className="btn-icon-search" >
            <img src={iconbuscar} className="icon-item" alt="logo" />
          </button>
        </div>
        <section className="box-promos" >
          <div className="line">
            <Link className="line-prom-one" to="/detalle-promo" ></Link>
            <div className="line-prom-one" ></div>
          </div>
          <div className="line-horizontal"></div>
          <div className="line">
            <div className="line-prom-one" ></div>
            <div className="line-prom-one" ></div>
          </div>
          <div className="line-horizontal"></div>
          <div className="line">
            <div className="line-prom-one" ></div>
            <div className="line-prom-one" ></div>
          </div>
          <div className="line-horizontal"></div>
          <div className="line">
            <div className="line-prom-one" ></div>
            <div className="line-prom-one" ></div>
          </div>
        </section>
        <CategoriesBar/>
    </section>
  );
}
