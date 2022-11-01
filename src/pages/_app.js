
import React, {useState} from "react"
import GlobalStyle  from "../theme/GlobalStyle"
import themeSettings from "../theme/GlobalTheme"
import {ThemeProvider} from "styled-components"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Provider } from 'react-redux'

import { store } from '../Store/store'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  return (
    (
      <>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={themeSettings[theme]}>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Component {...pageProps} />
          </SkeletonTheme>
        </ThemeProvider>
      </Provider>
      </>
    )
  )
}

export default MyApp
