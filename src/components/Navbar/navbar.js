import React from "react";
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
 import myLogo from "../../Assets/Images/logo1.png";
import MobileMenu from "../mobileMenu";
import DesktopMenu from "../desktopMenu";
// import LanguageMenu from "../languageMenu";





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  myLogo: {
    height: "50px",
    width: "50px",
  },

  toolBarOptions: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    justifyContent: "space-between",
    height: "15px",
    
    
  },

  navList: {
    display: "flex",
    justifyContent: "center",
  },
}));


const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
   
      <div id="myHeader" className={classes.root}>
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
          <Toolbar className={classes.toolBarOptions} > 
            <img src={myLogo} alt="#" className={classes.myLogo} /> 
            <div className={classes.navList}>
              {/* <LanguageMenu />  */}

              {isMobile ? <MobileMenu /> : <DesktopMenu />}
            </div>
          </Toolbar>
        </AppBar>
      </div>

    
  );
};

export default Navbar;