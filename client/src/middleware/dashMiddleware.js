import { useContext } from "react";
import UserContext from "../UserContext";
import { useHistory } from "react-router-dom";


/**
 * Sends an async authentication request using cookies
 * to fetch user info when the dashboard is refreshed.
 *
 * @return {dash} The authentication function.
 */
export default function UseDashboard() {
    const history = useHistory();
    const { object, setObject } = useContext(UserContext);
    let resolved = false;
    const dash = async () =>  {
        const requestOptions = {
          method: 'GET'
        };
        const res = await fetch(
          `/auth/me`
        , requestOptions).then(res => res.json()).catch(error => {
          console.log(error);
          setObject({user: null});
          localStorage.removeItem("token");
          history.push("/login");
        })
          
          const userObject = {
            user: res
          }
          console.log(userObject);
          setObject(userObject);
          history.push("/dashboard");  
      };
      return dash;
}

