import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import Card from '../Card';
import styles from './style';


function Category(props) {
  const { classes, posts } = props;


  return (
    <>
      <Typography variant="h3" component="h2" className={classes.categoryTitle}>
        {posts[0]}
      </Typography>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            {posts[1].map((post) => (
              <Grid key={post.url} item>
                <Card post={post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styles)(Category);
