import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import styles from './style';

function Banner(props) {
  const { classes } = props;

  return (
    // <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: 'url("https://images.pexels.com/photos/3626734/pexels-photo-3626734.jpeg")' }}>
      <img style={{ display: 'none' }} src="https://images.pexels.com/photos/3626734/pexels-photo-3626734.jpeg" alt="{post.imageText} " />
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {/* {post.title} */}
              title
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {/* {post.description} */}
              descr
            </Typography>
            <Link color="secondary" variant="subtitle1" href="#" rel="noopener">
              {/* {post.linkText} */}
              link text
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(Banner);
