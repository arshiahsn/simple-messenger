import React, {useContext} from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import AllUsersContext from '../AllUsersContext';
import { PinDropSharp, SettingsInputAntennaOutlined } from '@material-ui/icons';
 

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'no-wrap',
    width: '100%',
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#757575",
    width: 100,
    height: 40
  },
  input: {
    display: 'none',
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: "flex-start",
    flexDirection: 'column'
  }
}));

export default function ChatTextField(props) {
  const classes = useStyles();
  const {users, setUsers, selectedUser, setSelectedUser} = useContext(AllUsersContext);
  const [textFieldValue, setTextFieldValue] = useState('');
  const {toggleReload} = props;
  
  const handleSendMessage = () => {
    const newUsers = users;
    const id = selectedUser;
    console.log(textFieldValue);
    newUsers.find(user=>user.id == id).msgHistory.push({msg: textFieldValue, rcv: false, timestamp: new Date(Date.now())});
    setUsers(newUsers);
    setTextFieldValue('');
    toggleReload();
  };
  const handleTextFieldChange = (e) => {
    setTextFieldValue(e.target.value);
};

  return (
    <div className={classes.root}>
      <TextField
          id="outlined-full-width"
          label=""
          style={{ margin: 8 }}
          placeholder="Message"
          helperText=""
          fullWidth
          multiline
          rows={4}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          className={classes.textField}
          onChange={handleTextFieldChange}
          value={textFieldValue}
        />
        <div className={classes.buttons}>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button
                size="medium" 
                className={classes.button}
                variant="contained" 
                component="span">
                Send File
                </Button>
            </label>
            <Button
                size="medium"
                variant="contained"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
                onClick={handleSendMessage}>
                Send
            </Button>
        </div>
    </div>
  );
}
