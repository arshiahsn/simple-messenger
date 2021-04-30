import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'no-wrap',
    width: '100%',
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
  button: {
    margin: theme.spacing(1),
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

export default function ChatTextField() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
          id="outlined-full-width"
          label="Text"
          style={{ margin: 8 }}
          placeholder=""
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
                className={classes.button}
                variant="contained" 
                color="primary" 
                component="span">
                Upload
                </Button>
            </label>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
            >
                Send
            </Button>
        </div>
    </div>
  );
}
