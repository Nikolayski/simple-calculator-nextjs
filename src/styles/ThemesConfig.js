import { createGlobalStyle} from "styled-components"

export const greyTheme = {
    body: 'hsl(222, 26%, 31%)',
    text: 'white',
    toggleBorder: '#FFF',
  }
  
  export const blueTheme = {
    body: 'hsl(0, 0%, 90%)',
    text: 'black',
    toggleBorder: '#6B8096',
  }
  
  export const GlobalStyles = createGlobalStyle`
    body {
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
      font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
      transition: all 0.50s linear;
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    `;