import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import store from './store';
import { theme } from './components/styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider theme = {theme}>
  <Provider store={store}>
     <App />
  </Provider>
   
  </ThemeProvider>
    
  </React.StrictMode>
);


