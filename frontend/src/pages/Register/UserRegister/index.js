import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../../services/api";

import logo from "../../../assets/Logo.svg";

import "./styles.css";

export default function UserRegister() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [address, setAddress] = useState("");

  const history = useHistory();

  async function handleUserRegister(e) {
    e.preventDefault();

    const data = {
      name,
      cpf,
      rg,
      age,
      email,
      whatsapp,
      city,
      uf,
      address,
    };

    try {
      const response = await api.post("/createUsers", data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push("/");
    } catch (err) {
      alert(`Erro no cadastro, tente novamente.`);
    }
  }

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
        <form onSubmit={handleUserRegister}>
          <input
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="input-group">
            <input
              placeholder="Cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <input
              placeholder="Rg"
              value={rg}
              onChange={(e) => setRg(e.target.value)}
            />
            <input
              type="number"
              placeholder="Idade"
              style={{ width: 110 }}
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="Uf"
              style={{ width: 80 }}
              maxLength="2"
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>
          <input
            placeholder="Endereço"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
