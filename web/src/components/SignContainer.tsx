import React from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import signImg from "../assets/images/logo-sign.svg";
import "../styles/components/sign-container.scss";

interface SignContainerProps {
  children: React.ReactNode;
  showBackButton?: boolean;
}

export const SignContainer = (props: SignContainerProps) => {
  const { children, showBackButton = true } = props;
  const { goBack } = useHistory();

  return (
    <div className="sign-container">
      <aside>
        <header>
          <img src={signImg} alt="Happy" />
        </header>

        <footer>
          <strong>Florianópolis</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>

      <div className="content">
        {showBackButton && (
          <button type="button" className="enter-app" onClick={goBack}>
            <FiArrowLeft size={26} color="#15C3D6" />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};
