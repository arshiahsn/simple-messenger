import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import UserContext from '../UserContext';
import LetterAvatars from './LetterAvatars';
import {theme} from '../themes/theme'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  margin: {
    margin: theme.spacing.unit * 2
  },
  customBadge: {
    backgroundColor: "#00AFD7",
    color: "white"
  }
}));

export default function DotBadge(props) {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <Badge color={props.isOnline?"secondary":"primary"} variant="dot">
        <LetterAvatars alt={props.user} src={props.src} />
      </Badge>
    </div>
  );
}
