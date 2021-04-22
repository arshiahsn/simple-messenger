import React, { useContext } from "react";
import UserContext from "../UserContext";
import { Link, useHistory } from "react-router-dom";
import Cookies from 'js-cookie';


export default function UseLogin() {
    const history = useHistory();
    const { object, setObject } = useContext(UserContext); 
    const login = async (email, password) => {
      const requestOptions = {
        method: 'POST'
      };
      const res = await fetch(
        `/auth/login?email=${email}&password=${password}`
      , requestOptions).then(res => res.json());
      console.log(res);
      const userObject = {
        user: res
    }
      
      setObject(userObject);
      localStorage.setItem("token", Cookies.get('token'));
      history.push("/dashboard");
  
    };


    return login;
  }

