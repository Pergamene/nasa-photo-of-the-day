import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '900px',
    height: '506px',
  },
});

const Video = props => {
  const { url, title } = props;
  const classes = useStyles();
  
  return (
    <iframe className={ classes.root } src={ url } title={ title } frameBorder="0" />
  );
};

export default Video;
