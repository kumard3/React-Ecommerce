import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
// import useStyles from './styles'
import logo from "../../assets/commerce.png";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from './styles.js'

import {Link, useLocation } from 'react-router-dom'
const NavBar = ({totalItems}) => {
  const classes = useStyles();
  const Location = useLocation();

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Commers.js"
              height="25px"
              className={classes.image}
            />
          </Typography>
          <div className={classes.grow} />
          {  (Location.pathname === '/' && (

            <div className={classes.button}>
            <Link to='/cart'>go to cart</Link>
            <IconButton component ={Link} to="/cart" aria-label="Show cart intems" color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
            </Badge>
            </IconButton>
            </div>
            ))
          }
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
