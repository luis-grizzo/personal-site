import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import Routes from './routes'
import GlobalStyle from './styles/global'

import { theme } from './styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Routes/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
