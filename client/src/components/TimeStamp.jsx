import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';

export default function TimeStamp(props){
    const [showFullDate, setShowFullDate] = useState(false);
    const timestamp = props.timestamp;
    let date = timestamp.getDate() + "-" + (timestamp.getMonth() + 1) + "-" + timestamp.getFullYear();
    let time = timestamp.getHours() + ":" + timestamp.getMinutes();
    const currentDate = new Date();
    const formattedCurrentDate = currentDate.getDate() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getFullYear();
    const handleClick = (event) => {
        if(showFullDate)
          setShowFullDate(false);
        else
          setShowFullDate(true);
    }

    if (formattedCurrentDate === date)
      return(
        <Button color="#ffffff" size="small" onClick={(event) => handleClick(event)}>
          {(showFullDate)?time:date + " " + time}
        </Button>
      );
    else
      return(
        <Button color="#ffffff" size="small" onClick={(event) => handleClick(event)}>
          {(showFullDate)?date:date + " " + time}
        </Button>
      );
}