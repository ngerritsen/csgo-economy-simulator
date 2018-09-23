import { injectGlobal } from 'styled-components';

import theme from './theme';

injectGlobal`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: ${theme.fontSizes.text};
    font-family: Ubuntu, sans-serif;
    margin: 0;
    background-color: ${theme.colors.bg};
    color: ${theme.colors.fg};
  }

  button {
    cursor: pointer;
  }
`;
