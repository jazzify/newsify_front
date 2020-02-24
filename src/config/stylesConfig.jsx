import { createMuiTheme } from '@material-ui/core/styles';
import Indigo from '@material-ui/core/colors/indigo';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#010A12',
    },
    secondary: Indigo,
    error: {
      main: '#E71D36',
    },
    warning: {
      main: '#FF9F1C',
    },
    info: {
      main: '#54CEC3',
    },
    success: {
      main: '#02D67A',
    },

  },
});

export default theme;
