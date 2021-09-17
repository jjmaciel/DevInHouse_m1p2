import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import theme from '../Theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    color: '#000000',
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  zap: {
    marginRight: 20,
    fontSize: 20,
    color: "#ffffff",
  }
}));

function ButtonAppBar(props) {

  const classes = useStyles();

  return (
    <div className={classes.root} >
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Link className={classes.link} to="/">
                <MenuIcon />
              </Link>
            </IconButton>

            <Typography variant="h6" className={classes.title}>
              <span className={classes.zap} >ZAP SYSTEM</span>

              <Link className={classes.link} to="/dashboard">
                <Button color="inherit">Dashboard</Button>
              </Link>

              <Link className={classes.link} to="/messages">
                <Button color="inherit">Mensagens</Button>
              </Link>

            </Typography>
            <Link className={classes.link} to="/">
              <Button color="inherit" onClick={() => window.location.reload()}>Logout</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}


export default ButtonAppBar;