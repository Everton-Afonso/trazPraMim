import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logoImg from "../../../assets/Logo.svg";

import api from "../../../services/api";

import "./styles.css";

export default function ProfileUser() {
  const [incidents, setIncidents] = useState([]);

  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");

  const history = useHistory();

  useEffect(() => {
    api.get("incidents", {
      headers: {
        Authorization: userId,
      },
    })
      .then((response) => {
        setIncidents(response.data);
      });
  });

  function handleLogout() {
    localStorage.clear();

    history.push("/");
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Traz Pra Mim" />
        <span>Bem vindo(a) {userName}</span>

        <Link className="button" to="#">
          Perfil
        </Link>
        <button onClick={handleLogout} type="button" style={{ color: "#E02041" }}>
          Sair
        </button>
      </header>

      <h1>Proximas viajens Cadastradas</h1>

      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>Titulo: {incident.title}</strong>


            <strong>Descrição:</strong>
            <p>{incident.descriptionProducts}</p>

            <Link
              className="profile-traveler"
              to="#"
              title="Ver perfil do viajante"
            >
              Viajen<span>{incident.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
