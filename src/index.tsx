import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import Routes from './routes'
import GlobalStyle from './styles/global'

import { theme } from './styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
