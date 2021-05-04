import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import UserContext from "../UserContext";
import useDashboard from "../middleware/useDashboard";
import { Redirect } from 'react-router-dom';
import SearchAppBar from '../components/SearchAppBar'
import UserList from '../components/UserList'
import ChatBox from '../components/ChatBox'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import ChatTextField from "../components/ChatTextField";
import { makeStyles } from "@material-ui/core/styles";
import AllUsersContext from '../AllUsersContext';
import theme from '../themes/theme'

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("xs")]: {

    },
    [theme.breakpoints.down("sm")]: {

    },
    [theme.breakpoints.up("md")]: {

    },
    [theme.breakpoints.up("lg")]: {
 
    },
    backgroundColor: '#bbdefb'
  },
  main:{
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    height: '70vh',
  },
  userList:{
    overflow: 'auto',
    width: '70%',
    paddingLeft: 0,
    height: '100%'
  },
  chatBox:{
    overflow: 'auto',
    height: '100%'
  },
  chatTextField:{
    overflow: 'auto',
    height: '100%'
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const { object, setObject } = useContext(UserContext);
  const {users, setUsers, selectedUser, setSelectedUser} = useContext(AllUsersContext);
  const [reload, setReload] = useState(false);
  const toggleReload = () => {
    setReload(!reload);
  };
  useDashboard();
  if (object.user == null)
    return <Redirect to="/login" />
  else
    return (
      <Container className={classes.root}>
        <SearchAppBar/>
        <Grid container>
          <Container className={classes.main}>
            <Box className={classes.userList} borderLeft={1} borderRight={1}>
              <UserList/>
            </Box>
            <Container className={classes.chatBox}>
              <ChatBox reload={reload}/>
            </Container>
          </Container>
          <Container className={classes.chatTextField}>
          <ChatTextField toggleReload={toggleReload}/>
            </Container>
          
        </Grid>
      </Container>
    );
  
    
}
