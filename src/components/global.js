import { createGlobalStyle } from 'styled-components';


// background: ${({ theme }) => theme.body};
//     color: ${({ theme }) => theme.text};

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: ${({ theme }) => theme.text};
    background-image:${({ theme }) => theme.backgroundImage};
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  footer {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }

  small {
    display: block;
  }

  button {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.text};
  }
`;