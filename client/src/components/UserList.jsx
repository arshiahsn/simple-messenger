import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AllUsersContext from '../AllUsersContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import DotBadge from '../components/DotBadge'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    maxHeight: 400,
    overflow: 'auto'
  },
  inline: {
    display: 'inline',
  },
}));

export default function UserList() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const {users, setSelectedUser, searchUsers} = useContext(AllUsersContext);
  const userList = users;
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setSelectedUser(userList[index].id);

  };
  
  
  return (
    <List component="nav" className={classes.root}>
      {userList.map((user, index)=>
        <div>
            <ListItem
            key={user.id}
            alignItems="flex-start"
            button
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
            >
                <ListItemAvatar>
                <DotBadge user={user.username} isOnline={false} src={user.avatar}/>
                </ListItemAvatar>
                <ListItemText
                primary={user.username}
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        {user.msgHistory[user.msgHistory.length-1].msg}
                    </Typography>
                    
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </div>
      )}

    </List>
  );
}
