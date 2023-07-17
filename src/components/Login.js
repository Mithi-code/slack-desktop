import React from "react";
import { styled } from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import {signInWithPopup} from "firebase/auth";

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth,provider).catch((err)=>{
      alert(err.message)
    })
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt="slack-img"
        />
        <h1>Sign in to slack</h1>
        <Button type="submit" onClick={signIn}>
          Sign In with Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    text-transform: lowercase;
    background-color: green;
    color: #fff;
  }
`;
