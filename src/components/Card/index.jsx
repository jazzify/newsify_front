import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import styles from './style';


function PostCard(props) {
  const { classes, post } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const redirectToOriginalPost = (url) => {
    window.open(url);
    handleClose();
  };


  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe" className={classes.avatar}>
            {post.post_type}
          </Avatar>
        )}
        action={(
          <IconButton aria-label="settings" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        )}
        title={post.title}
        subheader={post.original_post_date}
        titleTypographyProps={{ noWrap: true, className: classes.title }}
      />
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <MenuItem value="valor" onClick={() => redirectToOriginalPost(post.original_post_url)}>
          See original post
        </MenuItem>
      </Menu>
      <CardMedia
        className={classes.media}
        image={post.cover_img_url ? post.cover_img_url : '/NFY.png'}
        title={post.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" noWrap>
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(PostCard);
