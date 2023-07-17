import React from "react";
import "./Auth.css";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { logout, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className="login-page">
      {!isAuthenticated && (
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
            alt="logo"
          />
        </div>
      )}
      <div className="buttons">
        {isAuthenticated ? (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="btn logout-btn"
          >
            Log Out
          </button>
        ) : (
          <button onClick={() => loginWithRedirect()} className="btn">
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
