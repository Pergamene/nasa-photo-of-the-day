import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginTop: '0',
    fontStyle: 'italic',
    fontSize: '.7em',
  },
});

const ImgDate = props => {
  const { date } = props;
  const classes = useStyles();

  return (
    <p className={ classes.root }>{ date }</p>
  );
};

export default ImgDate;
