import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { SignContainer } from "../../components";

import "../../styles/views/login.scss";

export const NewPassword = () => {
  const history = useHistory();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    console.log({
      oldPassword,
      newPassword,
      confirmPassword,
    });

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
