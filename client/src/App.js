import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./themes/theme.js";
// import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import  UserContext  from './UserContext';
import Cookies from 'js-cookie';
import AllUsersContext from "./AllUsersContext.js";

function App() {
  const userList = 
    [
      {
        id: 1,
        username: 'Ali Connor',
        msgHistory: ['Hi!', 'How\'s it going?', 'Down for brunch on Saturday?'],
        avatar: 'some_url'
      }
    ,
      {
        id: 2,
        username: 'Joana Baez',
        msgHistory: ['Hello there!', 'How are you?', 'Up for a hike on Sunday?'],
        avatar: 'some_url_2'
      }
    ];
  const [object, setObject] = useState({
    user: null
  });
  const [users, setUsers] = useState({
    list: userList
  });
  const [selectedUser, setSelectedUser] = useState({
    user: null
  });
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <UserContext.Provider  value={{ object, setObject }}>
      <AllUsersContext.Provider value={{users, setUsers, selectedUser, setSelectedUser}}>
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
      </AllUsersContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
