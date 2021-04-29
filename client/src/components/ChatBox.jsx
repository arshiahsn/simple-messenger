import React, {useContext} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AllUsersContext from '../AllUsersContext';
import theme from '../themes/theme'

const action = (timestamp) => (
    <Button color="#ffffff" size="small">
      {timestamp}
    </Button>
  );

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 500,
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

export default function ChatBox() {

  const {users, setUsers, selectedUser, setSelectedUser} = useContext(AllUsersContext);
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{ overflow: 'auto'}}>
        
        {
        
        ( selectedUser == null )?
          (<div></div>)
        
        :
            (selectedUser.msgHistory.map((item, index)=>
            <Grid container justify={item.rcv?"flex-end":"flex-start"} style={{backgroundColor: '#ffffff'}}>
                <SnackbarContent message={item.msg} action={action(item.timestamp.toString())} style={item.rcv?
                {
                    margin: 5,
                    backgroundColor: '#8bc34a',
                    width: '50%'
                    
                }
                :
                {
                    margin: 5,
                    backgroundColor: '#03a9f4',
                    width: '50%'
                    
                }}/>
            </Grid>
            ))
        }
        
      </Container>
    </React.Fragment>
  );
}