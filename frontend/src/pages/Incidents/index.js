import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo.svg";

import "./styles.css";

export default function Incidents() {
  return (
    <div className="incidents-container">
      <div className="content">
        <div className="logo-user-register">
          <img src={logo} alt="Traz Pra Mim" />

          <h1>Para onde vai viajar?</h1>
          <p>
            Descreva em detalher para onde você ira viajar e quais produtos está
            levando.
          </p>

          <Link className="back-link" to="/profile">
            <span>Voltar</span>
          </Link>
        </div>
        <form>
          <input placeholder="Titulo da Viajem" />
          <textarea className="textarea-incidents" placeholder="Descrição" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
