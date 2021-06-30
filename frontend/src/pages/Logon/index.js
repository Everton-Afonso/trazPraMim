import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo.svg";

import "./styles.css";

export default function Logon() {
  return (
    <div className="logon-container">
      <div className="content">
        <div className="form">
          <form>
            <h1>Faça seu logon</h1>

            <input type="text" placeholder="Entre com seu email" />
            <input type="text" placeholder="Entre com sua senha" />

            <button className="button" type="submit">
              Entrar
            </button>

            <Link className="back-link" to="/userRegister">
              Ainda não possui uma conta?<span>Clique aqui</span>
            </Link>
          </form>
        </div>
        <div className="logo">
          <img src={logo} alt="Traz Pra Mim" />
          <Link className="back-link work" to="/travelerRegister">
            Deseja trabalhar conosco?<span>Clique aqui</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
