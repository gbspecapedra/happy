import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { SignContainer } from "../../components";
import api from "../../services/api";

import "../../styles/views/login.scss";

export const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberme, setRememberMe] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const response = await api.get(`users/${email}`);

    if (!response?.data) return alert("Usuário não encontrado!");

    history.push(`/users/${response.data.id}`);
  };

  return (
    <SignContainer>
      <form className="login" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Fazer login</legend>
          <div className="input-block">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
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
        <fieldset>
          <div className="input-block last-block">
            <input
              id="rememberme"
              type="checkbox"
              checked={rememberme}
              onChange={(event) => setRememberMe(event.target.checked)}
            />
            <label htmlFor="rememberme" className="remember">
              Lembrar-me
            </label>
            <Link to="/redefine">
              <strong>Esqueci minha senha</strong>
            </Link>
          </div>
        </fieldset>
        <button
          type="submit"
          className="primary-button"
          style={{ marginTop: "2.5rem" }}
        >
          Entrar
        </button>
        <Link
          to="/signup"
          className="secondary-button"
          style={{ marginTop: "0.5rem" }}
        >
          <strong>Cadastrar</strong>
        </Link>
      </form>
    </SignContainer>
  );
};
