import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';

const defaultTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: deepPurple,
    secondary: deepPurple
  },
});

const terminal = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      paper: 'black'
    }
  },
  typography: {
    fontFamily: [
     'Consolas',
     'monaco',
     'monospace'
    ].join(','),
    align: 'left',
  },
});

const wiki = createMuiTheme({
  palette: {
    type: 'light',
    primary: deepPurple,
    secondary: deepPurple
  },
  typography: {
    htmlFontSize: '12px',
    h1: {
      fontSize: '2.0em',
    },
    h2: {
      fontSize: '1.8em',
    },
    h3: {
      fontSize: '1.6em',
    },
    h4: {
      fontSize: '1.4em',
    },
    h5: {
      fontSize: '1.2em',
    },
    h6: {
      fontSize: '1.0em',
    },
  },
});

const wikiMenu = createMuiTheme({
  palette: {
    type: 'light',
    primary: deepPurple,
    secondary: deepPurple
  },
  typography: {
    htmlFontSize: '12px',
    subheading: {
      fontWeight: 'inherit'
    }
  },
});

export {
  defaultTheme,
  terminal,
  wiki,
  wikiMenu
};