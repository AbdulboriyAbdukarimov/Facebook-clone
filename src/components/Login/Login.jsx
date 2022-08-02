import { Button } from "@mui/material";
import React from "react";
import "./login.css";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    //signIn
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.tadviser.ru/images/8/86/Facebook-logo-500x350.png"
          alt=""
        />
        <img
          src="https://logo-download.com/wp-content/data/images/svg/Facebook-logo.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
