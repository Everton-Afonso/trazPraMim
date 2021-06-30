import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo.svg";

import "./styles.css";

export default function Profile() {
  return (
    <div class="profile-container">
      <header>
        <img src={logo} alt="Traz Pra Mim" />
        <span>Bem vindo(a) Everton</span>

        <Link className="button" to="/incidents/new">Cadastrar nova viagem</Link>
        
      </header>
    </div>
  );
}
