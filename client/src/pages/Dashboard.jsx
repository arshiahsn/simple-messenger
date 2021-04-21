import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import UserContext from "../UserContext";

export default function Dashboard() {
  const history = useHistory();
  const { object, setObject } = useContext(UserContext);
  React.useEffect(() => {
    const user = object.user;
    if (user == null) history.push("/signup");
  }, []);

  return (
    <>
      {/* For testing purposes right now, ignore styling */}
      <p>Dashboard</p>
      <p>User: {JSON.stringify(object.user.username)}</p>
      <button
        onClick={() => {
          setObject({user: null, token: null});
          history.push("/login");
        }}
      >
        Logout
      </button>
    </>
  );
}
