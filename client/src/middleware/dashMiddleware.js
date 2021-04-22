import React, { useContext } from "react";
import UserContext from "../UserContext";
import { Link, useHistory } from "react-router-dom";
import Cookies from 'js-cookie';


export default function UseDashboard() {
    const history = useHistory();
    const { object, setObject } = useContext(UserContext);
    const dash = async () => {
        const requestOptions = {
          method: 'GET'
        };
        const res = await fetch(
          `/auth/me`
        , requestOptions).then(res => res.json());
        const userObject = {
          user: res
      }
        console.log(userObject);
        setObject(userObject);
        history.push("/dashboard");
    
      };
      return dash;
}

