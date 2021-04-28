import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./themes/theme.js";
// import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
<<<<<<< HEAD
import socketClient  from "socket.io-client";
=======
>>>>>>> dev
import "./App.css";
import  UserContext  from './UserContext';
import Cookies from 'js-cookie';

const SERVER = "http://127.0.0.1:8080";



function App() {
<<<<<<< HEAD
  var socket = socketClient (SERVER);
  const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem("user"));

=======
  const [object, setObject] = useState({
    user: null
  });
  const [loggedIn, setLoggedIn] = useState(false);
>>>>>>> dev
  return (
    <UserContext.Provider  value={{ object, setObject }}>
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
    </UserContext.Provider>
  );
}

export default App;
