import React from 'react';
// MUI Components
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';
// Theme Styles
import theme from './config/stylesConfig';
import RouterApp from './config/Router';
// Components
import Header from './components/Header';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container style={{ paddingTop: '5rem' }}>
        <RouterApp />
      </Container>
    </ThemeProvider>
  );
}

export default App;
