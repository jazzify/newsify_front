import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { Grid, Typography } from '@material-ui/core';
import Card from '../Card';
import styles from './style';


function Category(props) {
  const { classes } = props;

  return (
    <>
      <Typography variant="h3" component="h2" className={classes.categoryTitle}>
        Post Category
      </Typography>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            {[0, 1, 2, 3].map((value) => (
              <Grid key={value} item>
                <Card />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styles)(Category);
