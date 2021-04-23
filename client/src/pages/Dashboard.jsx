import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import UserContext from "../UserContext";
import UseDashboard from "../middleware/dashMiddleware";


function OnLoadDash() {
    const { object, setObject } = useContext(UserContext);
    const history = useHistory();
    const dash = UseDashboard();
    React.useEffect(() =>  {
      const token = localStorage.getItem("token");
      if (!token) 
        history.push("/signup");
      else
          dash();    
    }, []);
}



export default function Dashboard() {
  const history = useHistory();
  const { object, setObject } = useContext(UserContext);
  OnLoadDash();
  if (object.user == null)
    return <p>Loading...</p>;
  else
    return (
      <>
        {/* For testing purposes right now, ignore styling */}
        <p>Dashboard</p>
        <p>User: {JSON.stringify(object.user.username)}</p>
        <button
          onClick={() => {
            setObject({user: null});
            localStorage.removeItem("token");
            history.push("/login");
          }}
        >
          Logout
        </button>
        
      </>
    );
  
    
}
