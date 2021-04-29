import { useContext, useEffect } from "react";
import UserContext from "../UserContext";
import { useHistory } from "react-router-dom";


/**
 * Sends an async authentication request using cookies
 * to fetch user info when the dashboard is refreshed.
 *
 * @return {dash} The authentication function.
 */
function useDashboard() {

    const history = useHistory();
    const { object, setObject } = useContext(UserContext);
    const dash = async () =>  {
      const requestOptions = {
        method: 'GET'
      };
      const res = await fetch(
        `/auth/me`
      , requestOptions).then(res => res.json()).catch(error => {
        setObject({user: null});
        localStorage.removeItem("token");
        history.push("/login");
      })
        
        const userObject = {
          user: res
        }
        setObject(userObject);
        history.push("/dashboard");  
    };

    useEffect(() =>  {
      const token = localStorage.getItem("token");
      if (!token) 
        history.push("/signup");
      else{
        dash();
      }
            
    }, []);


}

export default useDashboard;