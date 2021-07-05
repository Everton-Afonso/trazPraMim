import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import logoImg from "../../../assets/Logo.svg";

import api from "../../../services/api";

import "./styles.css";

export default function ProfileTraveler() {
  const [incidents, setIncidents] = useState([]);

  const travelerId = localStorage.getItem("travelerId");
  const travelerName = localStorage.getItem("TravelerName");

  useEffect(() => {
    api.get("profile", {
        headers: {
          Authorization: travelerId,
        },
      })
      .then((response) => {
        setIncidents(response.data);
      });
  }, [travelerId]);

  async function hanbleDeleteIncidents(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: travelerId,
        },
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert("Erro ao deletar, tente novamente");
    }
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Traz Pra Mim" />
        <span>Bem vindo(a) {travelerName}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar nova viagem
        </Link>
        <button type="button" style={{ color: "#E02041" }}>
          Sair
        </button>
      </header>

      <h1>Suas viagem Viajens Cadastradas</h1>

      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>Titulo:</strong>
            <p>{incident.title}</p>

            <strong>Descrição:</strong>
            <p>{incident.descriptionProducts}</p>

            <button onClick={() => hanbleDeleteIncidents(incident.id)} type="button">
              <FiTrash size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
