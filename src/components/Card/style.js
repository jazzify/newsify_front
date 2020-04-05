export default (theme) => ({
  root: {
    [theme.breakpoints.up('xs')]: {
      maxWidth: 310,
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 400,
    },
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
  title: {
    [theme.breakpoints.up('xs')]: {
      width: 160,
    },
    [theme.breakpoints.up('md')]: {
      width: 260,
    },
    [theme.breakpoints.up('lg')]: {
      width: 360,
    },
  },
});
