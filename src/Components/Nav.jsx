import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Nav = (props) => {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar style={{backgroundColor:'black'}}>
            <Toolbar>
              <Typography variant="h6" component="div">
                Scroll to hide App bar
              </Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        
      </React.Fragment>
    </>
  );
};

export default Nav;
