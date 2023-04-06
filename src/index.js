import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';
import { green, orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#388E3C',
    },
    secondary: {
      main: orange[600],
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
