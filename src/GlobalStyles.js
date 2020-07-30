import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
    font-family: 'Inter', sans-serif;
  }
  *, button, input {
    border: 0;
    outline: 0;
  }
  ${reset}
  `;
