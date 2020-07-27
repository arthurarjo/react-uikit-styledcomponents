import React from "react";

import Router from "./router";
import theme from "./theme";
import { ThemeProvider } from "styled-components";

import { Reset } from "styled-reset";

function App() {
  return (
    <div className="app">
      <Reset />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
