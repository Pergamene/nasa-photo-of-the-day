import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: '900px',
    width: '100%',
  },
});

const Image = props => {
  const { url, title } = props;
  const classes = useStyles();

  return(
    <img className={ classes.root } src={ url } alt={ title } />
  );
};

export default Image;
