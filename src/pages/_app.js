
import React, {useState} from "react"
import GlobalStyle  from "../theme/GlobalStyle"
import themeSettings from "../theme/GlobalTheme"
import {ThemeProvider} from "styled-components"
import  { SkeletonTheme } from 'react-loading-skeleton'




function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  return (
    (
      <>

        <GlobalStyle />
        <ThemeProvider theme={themeSettings[theme]}>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Component {...pageProps} />
          </SkeletonTheme>
        </ThemeProvider>
      </>
    )
  )
}

export default MyApp
