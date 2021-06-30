import React from "react";

import "./styles.css";

import logo from "../../assets/Logo.svg";

export default function Logon() {
  return (
    <div className="logon-container">
      <div className="form">
        <form>
          <h1>Faça seu logon</h1>

          <input type="text" placeholder="Entre com seu email" />
          <input type="text" placeholder="Entre com sua senha" />

          <button className="button" type="submit">
            Entrar
          </button>

          <a href="/register">
            Ainda não possui uma conta?<span>Clique aqui</span>
          </a>
        </form>
      </div>
      <div className="logo">
        <img src={logo} alt="Traz Pra Mim" />
        <a href="/register">
          Deseja trabalhar conosco?<span>Clique aqui</span>
        </a>
      </div>
    </div>
  );
}
