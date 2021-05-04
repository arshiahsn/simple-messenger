import React, {useContext, useEffect, useState, setState, useRef} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AllUsersContext from '../AllUsersContext';
import theme from '../themes/theme'
import TimeStamp from './TimeStamp';

const action = (timestamp) => (
    <Button color="#ffffff" size="small">
      {timestamp}
    </Button>
  );

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      }
    },
    chat: {
        overflow: 'auto'
    },
    rcv: {
        margin: 5,
        backgroundColor: '#8bc34a',
        width: '50%'
    },
    noRcv: {
        margin: 5,
        backgroundColor: '#03a9f4',
        width: '50%'
        
    }
  }));



export default function ChatBox(props) {

  const {users, setUsers, selectedUser, setSelectedUser} = useContext(AllUsersContext);
  const classes = useStyles();
  const [reload, setReload] = useState(props.reload);
  const messages = ((selectedUser!==null)?users.find(user => user.id === selectedUser).msgHistory:null);
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
      if(messagesEndRef.current !== null)
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      
  };
    useEffect(() => {
        scrollToBottom();
        setReload(props.reload);
    }, [reload, props.reload]);

    if (selectedUser === null)
      return <div>Select a chat to start messaging.</div>;
    else
        return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" >  
            {
                messages.map((item, index)=>
                <Grid container justify={item.rcv?"flex-end":"flex-start"}>
                    <SnackbarContent 
                    message={item.msg} 
                    action={<TimeStamp timestamp={item.timestamp}/>} 
                    className={item.rcv?classes.rcv:classes.noRcv}/>        
                </Grid>)
            }
        <Grid container >
            <div ref={messagesEndRef}></div>
        </Grid>
        </Container>
        </React.Fragment>
    );

}