import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import UserContext from '../UserContext';
import LetterAvatars from './LetterAvatars';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function DotBadge() {
  const classes = useStyles();
  const {object, setObject} = useContext(UserContext);

  return (
    <div className={classes.root}>
      <Badge color="secondary" variant="dot">
        <LetterAvatars user={object.user}/>
      </Badge>
    </div>
  );
}
