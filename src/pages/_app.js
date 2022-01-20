import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { greyTheme, blueTheme, GlobalStyles } from "../styles/ThemesConfig";

function MyApp({ Component, pageProps }) {
  const [theme, SetTheme] = useState("light");

  return (
    <ThemeProvider theme={theme == "light" ? greyTheme : blueTheme}> 
      <GlobalStyles />
      <Component {...pageProps} />
       {/* <button  onClick={() => theme == "light" ? SetTheme("blue") : SetTheme("light") }> Switch theme </button>   */}
   </ThemeProvider> 
  );
}

export default MyApp;
