import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        --darkPrimary: #5200FF;
        --darkSecondary: #D6D6D6;
        --darkTerciary: #7E7E7E
        --darkBackground: #0E1212
        --grey: #3A3A3A;
        --gray: var(--grey);
        --lightGrey: #e1e1e1;
        --lightGray: var(--lightGray);
        --offWhite: #ededed;
        --maxWidth: 1000px;
        --bs: 7px 12px 24px 0 rgba(0,0,0,0.19);
		font-size: 62.5%; 
        
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-family: 'Roboto Mono',--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        background: #0E1212;
    }

    a {
        text-decoration: none;
        color: var(--darkSecondary);
    }
    a:hover {
        text-decoration: underline;
    }
    button {
        font-family: 'Roboto Mono',--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    h1 {
        color: #7E7E7E;
    }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default Layout;
