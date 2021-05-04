import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./themes/theme.js";
// import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import "./App.css";
import  UserContext  from './UserContext';
import Cookies from 'js-cookie';
import AllUsersContext from "./AllUsersContext.js";

function App() {
  const userList = 
    [
      {
        id: '1',
        username: 'Ali Connor',
        msgHistory: [
          {msg: 'Hi!', rcv: true, timestamp: new Date('December 17, 2020 03:24:00')}, 
          {msg: 'How\'s it going?', rcv: true, timestamp: new Date('December 17, 2020 03:24:00')},
          {msg: 'Pretty good! How are you?', rcv: false, timestamp: new Date('December 17, 2020 03:26:00')},
          {msg: 'Down for brunch on Saturday?', rcv: true, timestamp: new Date('December 17, 2020 03:27:03')}
        ],
        avatar: 'some_url'
      }
    ,
      {
        id: '2',
        username: 'Joana Baez',
        msgHistory: [
          {msg: 'Hi there!', rcv: true, timestamp: new Date('December 17, 2020 05:24:00')}, 
          {msg: 'How\'re you doing?', rcv: true, timestamp: new Date('December 17, 2020 05:24:00')},
          {msg: 'Not too bad! Yourself?', rcv: false, timestamp: new Date('December 17, 2020 05:26:00')},
          {msg: 'Down for a hike on Sunday?', rcv: true, timestamp: new Date('December 17, 2020 05:27:03')}
        ],
        avatar: 'some_url_2'
      }
      ,
      {
        id: '3',
        username: 'Andrea Johanson',
        msgHistory: [
          {msg: 'Heeey!', rcv: false, timestamp: new Date('December 17, 2020 05:24:00')}, 
          {msg: 'Hey!', rcv: true, timestamp: new Date('December 17, 2020 05:24:00')},
          {msg: 'How\s everything?', rcv: false, timestamp: new Date('December 17, 2020 05:26:00')},
          {msg: 'Goood! Yourself?', rcv: true, timestamp: new Date('December 17, 2020 05:27:03')}
        ],
        avatar: 'some_url_2'
      }
      ,
      {
        id: '4',
        username: 'Isac Fields',
        msgHistory: [
          {msg: 'Hi there!', rcv: true, timestamp: new Date('December 17, 2020 05:24:00')}, 
          {msg: 'Hello!', rcv: false, timestamp: new Date('December 17, 2020 05:24:00')},
          {msg: 'Sup?', rcv: false, timestamp: new Date('December 17, 2020 05:26:00')},
          {msg: 'Not much. You?', rcv: true, timestamp: new Date('December 17, 2020 05:27:03')},
          {msg: 'Busy!', rcv: false, timestamp: new Date('December 17, 2020 05:27:03')},
          {msg: 'How about yourself?', rcv: false, timestamp: new Date('December 17, 2020 05:27:03')}
          ,{msg: 'Same old same old!', rcv: true, timestamp: new Date('December 17, 2020 05:27:03')}
        ],
        avatar: 'some_url_2'
      }
    ];
  const [object, setObject] = useState({
    user: null
  });
  const [users, setUsers] = useState(userList);
  const [selectedUser, setSelectedUser] = useState(
    null
  );
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <UserContext.Provider  value={{ object, setObject }}>
      <AllUsersContext.Provider value={{users, setUsers, selectedUser, setSelectedUser}}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/logout" component={Logout} />
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
