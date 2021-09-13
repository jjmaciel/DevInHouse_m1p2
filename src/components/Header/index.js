import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import useStyles from './style';
import headerTheme from '../theme/theme';


export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root} >
        <ThemeProvider theme={headerTheme}>
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

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
      </div>
    );
  }