import React from "react";

import Router from "./router";
import theme from "./theme";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
