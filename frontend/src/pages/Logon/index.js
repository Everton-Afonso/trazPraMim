import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import logo from "../../assets/Logo.svg";

import api from "../../services/api";

import "./styles.css";

export default function Logon() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  async function hanbleLogin(e) {
    e.preventDefault();

    try {
      try {
        const responseTraveler = await api.post("sessionsTraveler", { id });

        if (responseTraveler.data.id === id && responseTraveler.data.email === email) {
          localStorage.setItem("travelerId", id);
          localStorage.setItem("TravelerName", responseTraveler.data.name);

          history.push("/traveler");
        }
        else {
          alert("Email ou ID de acesso incorretos");
        }
      }
      catch (err) {
        const responseUser = await api.post("sessionsUser", { id });
        
        if (responseUser.data.id === id && responseUser.data.email === email) {
          localStorage.setItem("userId", id);
          localStorage.setItem("userName", responseUser.data.name);

          history.push("/user");
        }

      }
    } catch (err) {
      alert("Email ou ID de acesso incorretos");
    }
  }

  return (
    <div className="logon-container">
      <div className="content">
        <div className="form">
          <form onSubmit={hanbleLogin}>
            <h1>Faça seu logon</h1>

            <input
              type="email"
              placeholder="Entre com seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Insira seu ID de acesso"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />

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
