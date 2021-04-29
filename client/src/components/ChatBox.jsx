import React, {useContext} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AllUsersContext from '../AllUsersContext';


const action = (timestamp) => (
    <Button color="secondary" size="small">
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

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} />
        {selectedUser.msgHistory.map((msg, index)=>
          <SnackbarContent message={msg} action={action(index)} style={{ width: '50%' }}/>
        )}
      </Container>
    </React.Fragment>
  );
}