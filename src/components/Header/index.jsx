import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import GitHubIcon from '@material-ui/icons/GitHub';

import styles from './style';


function Header(props) {
  const { classes } = props;

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          Newfisy
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <div className={classes.grow} />
        <div>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="Check project on github"
            href="https://github.com/jazzify/newsify_front"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Header);
