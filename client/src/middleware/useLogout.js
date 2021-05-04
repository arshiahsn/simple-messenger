import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../UserContext";


export default function useLogout(){
    const history = useHistory();
    const { object, setObject } = useContext(UserContext);
    setObject({user: null});
    localStorage.removeItem("token");
    history.replace("/login");
  }