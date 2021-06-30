import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/Logo.svg";

import "./styles.css";

export default function UserRegister() {
  return (
    <div className="register-container">
      <div className="content">
        <div className="logo-user-register">
          <img src={logo} alt="Traz Pra Mim" />

          <h1>Cadastro de usuários</h1>
          <p>
            Faça seu cadatro, entre na plataforma para adquirir produtos típicos
            das cidades.
          </p>

          <Link className="back-link" to="/">
            Já possui uma conta?<span>Clique aqui</span>
          </Link>
        </div>
        <form>
          <input placeholder="Nome completo" />
          <div className="input-group">
            <input placeholder="Cpf" />
            <input placeholder="Rg" />
            <input type="number" placeholder="Idade" style={{ width: 110 }} />
          </div>
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />

          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="Uf" style={{ width: 80 }} />
          </div>
          <input placeholder="Endereço" />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
