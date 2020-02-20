import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: '10px auto 20px',
    maxWidth: '850px',
  },
});

const Explanation = props => {
  const { explanation } = props;
  const classes = useStyles();

  return (
    <p className={ classes.root }>{ explanation }</p>
  );
};

export default Explanation;
