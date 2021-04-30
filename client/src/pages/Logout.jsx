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
import useLogout from '../middleware/useLogout';
import Box from '@material-ui/core/Box';

export default function Logout() {
  const { object, setObject } = useContext(UserContext);
  useLogout();
    return (
      <>
        <SearchAppBar/>
        <Grid container>
          <Box>Logging out</Box>
        </Grid>
        
      </>
    );
  
    
}
