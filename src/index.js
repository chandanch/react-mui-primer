import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#388E3C',
    },
    secondary: {
      main: orange[600],
    },
    primerColor: {
      main: '#3f51b5',
      dark: '#303f9f',
      light: '#9fa8da',
    },
  },
  typography: {
    captorText: {
      fontSize: '15px',
      fontWeight: 500,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
