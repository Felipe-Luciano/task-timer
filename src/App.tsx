import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global.ts'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Timer</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
