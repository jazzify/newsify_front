export default (theme) => ({
  root: {
    maxWidth: 400,
    [theme.breakpoints.up('lg')]: {
      maxWidth: 500,
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
});
