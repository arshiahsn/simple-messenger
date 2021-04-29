import { useContext } from "react";
import UserContext from "../UserContext";
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';

/**
 * Sends an async authentication request using username
 * and password to authenticate the user.
 *
 * @return {login} The login function.
 */
function useLogin(email, password) {
    const history = useHistory();
    const { object, setObject } = useContext(UserContext); 
    const login = async (email, password) => {
      const requestOptions = {
        method: 'POST'
      };
      const res = await fetch(
        `/auth/login?email=${email}&password=${password}`
      , requestOptions).then(res => res.json());
      const userObject = {
        user: res
    }
      
      setObject(userObject);
      localStorage.setItem("token", Cookies.get('token'));
      history.push("/dashboard");
  
    };

    return login;
  }

  export default useLogin;