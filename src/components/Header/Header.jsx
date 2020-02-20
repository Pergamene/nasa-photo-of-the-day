import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../../images/logo.png';

const useStyles = makeStyles({
  root: {
    marginTop: '20px',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <img className={ classes.root } src={ logo } alt="nasa apod" />
  );
};

export default Header;
