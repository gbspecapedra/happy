import React, { FormEvent, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import { SignContainer } from "../../components";
import api from "../../services/api";

import "../../styles/views/login.scss";

interface RouteParams {
  email: string;
}

export const NewPassword = () => {
  const { email } = useParams<RouteParams>();
  const history = useHistory();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await api.put(`/users/${email}`, {
      oldPassword,
      newPassword,
      confirmPassword,
    });

    alert("Senha alterada com sucesso!");
    history.push("/signin");
  };

  return (
    <SignContainer showBackButton={false}>
      <form className="login" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Redefinição de senha</legend>
          <p>Escolha uma nova senha para você acessar o dashboard do Happy</p>
          <div className="input-block">
            <label htmlFor="oldPassword">Senha antiga</label>
            <input
              id="oldPassword"
              type="oldPassword"
              value={oldPassword}
              onChange={(event) => setOldPassword(event.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="newPassword">Nova senha</label>
            <input
              id="newPassword"
              type="newPassword"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="confirmPassword">Repetir senha</label>
            <input
              id="confirmPassword"
              type="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
        </fieldset>
        <button className="primary-button" type="submit">
          Salvar
        </button>
        <Link
          to="/"
          className="secondary-button"
          style={{ marginTop: "0.5rem" }}
          replace
        >
          <strong>Cancelar</strong>
        </Link>
      </form>
    </SignContainer>
  );
};
