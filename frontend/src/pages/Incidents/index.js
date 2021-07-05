import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import logo from "../../assets/Logo.svg";

import api from "../../services/api";

import "./styles.css";

export default function Incidents() {
  const [title, setTitle] = useState("");
  const [descriptionProducts, setTDescriptionProducts] = useState("");

  const history = useHistory();

  const travelerId = localStorage.getItem("travelerId");

  async function handleNewProduct(e) {
    e.preventDefault();

    const data = {
      title,
      descriptionProducts
    };
    console.log(data);
    try {
      await api.post("/incidents", data, {
        headers: {
          Authorization: travelerId
        }
      })

      history.push("/traveler");
    } catch (err) {
      alert("Erro ao cadastrar a viagem, tente novamente");
    }
  }

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

          <Link className="back-link" to="/traveler">
            <span>Voltar</span>
          </Link>
        </div>
        <form onSubmit={handleNewProduct}>
          <input placeholder="Titulo da Viajem"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea className="textarea-incidents" placeholder="Descrição"
            value={descriptionProducts}
            onChange={(e) => setTDescriptionProducts(e.target.value)}
            required
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
