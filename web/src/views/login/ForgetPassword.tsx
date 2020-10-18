import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

import { SignContainer } from "../../components";

import "../../styles/views/login.scss";

export const ForgetPassword = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      setLoading(true);
      //const response = await api.get(`users/${email}`);
    } finally {
      setLoading(false);
      history.push(`/redefine/newpassword/${email}`);
    }
  };

  return (
    <SignContainer>
      <form className="login" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Esqueci a senha</legend>
          <div className="input-block">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </fieldset>
        <button className="primary-button" type="submit" disabled={!email}>
          {loading && <FaSpinner />}
          {!loading && `Redefinir senha`}
        </button>
      </form>
    </SignContainer>
  );
};
