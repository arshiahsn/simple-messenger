import React, { useContext } from "react";
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
import Grid from '@material-ui/core/Grid';
import ChatTextField from "../components/ChatTextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    maxWidth: 800,
    maxHeigh: 1000,
    "& .MuiInput-underline:before": {
      borderBottom: "1.2px solid rgba(0, 0, 0, 0.2)"
    }
  },
  main:{
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row"
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const { object, setObject } = useContext(UserContext);
  useDashboard();
  if (object.user == null)
    return <Redirect to="/login" />
  else
    return (
      <Container className={classes.root}>
        <SearchAppBar/>
        <Grid container>
          <Container className={classes.main}>
            <UserList/>
            <ChatBox/>
          </Container>
          <ChatTextField/>
        </Grid>
      </Container>
    );
  
    
}
