import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import './index.css';
import App from './App';
import store from "./store/index";
import darkTheme from './style'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <Router>
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </Router>
);
