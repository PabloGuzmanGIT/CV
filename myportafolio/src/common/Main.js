import "./Main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import sql from "../assets/sql.png";
import python from "../assets/python.png";
import heroku from "../assets/heroku.png";
import React from "react";

function Main() {
  return (
    <div>
      <div className="subtitulo1">
        <h2> Lenguajes de programacion </h2>
      </div>
      <div className="iconos">
        <div className="cuadrados" >
          <a>
          <img src={html} alt="" />
          </a>
        </div>
        <div className="cuadrados" >
          <a>
          <img src={css} alt="" />
          </a>
        </div>
        <div className="cuadrados" >
          <a>
          <img src={js} alt="" />
          </a>
        </div>
        <div className="cuadrados" >
          <a>
          <img src={sql} alt="" />
          </a>
        </div>
        <div className="cuadrados" >
          <a>
          <img src={python} alt="" />
          </a>
        </div>
        <div className="cuadrados" >
          <a>
          <img src={heroku} alt="" />
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default Main;
