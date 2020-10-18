import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import { SignContainer } from "../../components";
import api from "../../services/api";

import "../../styles/views/login.scss";

export const SignUp = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await api.post("users", {
      name,
      email,
      password,
    });

    alert("Cadastro realizado com sucesso!");
    history.push("/signin");
  };

  return (
    <SignContainer>
      <form className="login" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Criar usuário</legend>
          <div className="input-block">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </fieldset>
        <button className="primary-button" type="submit">
          Cadastrar
        </button>
      </form>
    </SignContainer>
  );
};
