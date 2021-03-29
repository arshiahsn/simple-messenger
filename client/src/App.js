import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./themes/theme.js";
// import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import socketClient  from "socket.io-client";


const SERVER = "http://127.0.0.1:8080";

import "./App.css";

function App() {
  var socket = socketClient (SERVER);
  const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem("user"));

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/">
          <Redirect to="/signup" />
        </Route>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
