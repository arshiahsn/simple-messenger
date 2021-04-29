import { useContext } from "react";
import UserContext from "../UserContext";
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';


/**
 * Sends an async authentication request using username
 * and password to register the user.
 *
 * @return {signup} The signup function.
 */
function useRegister() {
    const history = useHistory();
    const { object, setObject } = useContext(UserContext);
    const signup = async (username, email, password) => {
      const requestOptions = {
        method: 'POST'
      };
      const res = await fetch(
        `/auth/signup?username=${username}&email=${email}&password=${password}`
      , requestOptions).then(res => res.json());
      const userObject = {
        user: res.user
    }
      setObject(userObject);
      localStorage.setItem("token", Cookies.get('token'));
      history.push("/dashboard");
    };


  }

  export default useRegister;