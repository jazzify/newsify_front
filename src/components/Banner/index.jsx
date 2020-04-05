import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import styles from './style';

function Banner(props) {
  const { classes, post } = props;

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.cover_img_url})` }}>
      <img style={{ display: 'none' }} src="https://images.pexels.com/photos/3626734/pexels-photo-3626734.jpeg" alt="{post.imageText} " />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Link
              color="secondary"
              variant="h6"
              href={post.original_post_url}
              rel="noopener"
              target="_blank"
            >
              Original post
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(Banner);
