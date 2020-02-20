import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: '10px 0',
  },
});

const Title = props => {
  const { title } = props;
  const classes = useStyles();

  return (
    <h1 className={ classes.root }>{ title }</h1>
  );
};

export default Title;
