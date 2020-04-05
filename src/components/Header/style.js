
export default (theme) => ({
  Appbar: {
    marginBottom: '3rem',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
});
