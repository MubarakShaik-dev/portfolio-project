import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all 0.25s linear;
    font-size: 16px;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  h1 { font-size: 3rem; }
  h2 { font-size: 2.5rem; }
  h3 { font-size: 1.75rem; }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
  }

  section {
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;
