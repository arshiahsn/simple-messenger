import React, { useContext } from "react";
import UserContext from "../UserContext";
import { Link, useHistory } from "react-router-dom";

export default function UseRegister() {
    const history = useHistory();
    const { object, setObject } = useContext(UserContext);
    const login = async (username, email, password) => {
      const requestOptions = {
        method: 'POST'
      };
      const res = await fetch(
        `/auth/signup?username=${username}&email=${email}&password=${password}`
      , requestOptions).then(res => res.json());
      const userObject = {
        user: res.user,
        token: res.token
    }
      setObject(userObject);
      history.push("/dashboard");
    };


    return login;
  }