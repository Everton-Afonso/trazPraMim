import React from "react";
import { Link } from "react-router-dom";
import { FiTrash } from "react-icons/fi"
import logoImg from "../../assets/Logo.svg";

import "./styles.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Traz Pra Mim" />
        <span>Bem vindo(a) Everton</span>

        <Link className="button" to="/incidents/new">
          Cadastrar nova viagem
        </Link>
        <button type="button" style={{ color: "#E02041" }}>
          Sair
        </button>
      </header>

      <h1>Viajens Cadastradas</h1>

      <ul>
        <li>
          <strong>Titulo:</strong>
          <p>Machado</p>

          <strong>Descrição:</strong>
          <p>Descrição teste</p>

          <strong>Data da viagem:</strong>
          <p>12/12/1212</p>
          
          <button type="button">
            <FiTrash size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Titulo:</strong>
          <p>Machado</p>

          <strong>Descrição:</strong>
          <p>Descrição teste</p>

          <strong>Data da viagem:</strong>
          <p>12/12/1212</p>
          
          <button type="button">
            <FiTrash size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Titulo:</strong>
          <p>Machado</p>

          <strong>Descrição:</strong>
          <p>Descrição teste</p>

          <strong>Data da viagem:</strong>
          <p>12/12/1212</p>
          
          <button type="button">
            <FiTrash size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Titulo:</strong>
          <p>Machado</p>

          <strong>Descrição:</strong>
          <p>Descrição teste</p>

          <strong>Data da viagem:</strong>
          <p>12/12/1212</p>
          
          <button type="button">
            <FiTrash size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
