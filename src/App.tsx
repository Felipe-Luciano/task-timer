import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global.ts'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router.tsx'
import { CyclesContext } from './contexts/CyclesContext.tsx'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
         <CyclesContext>
           <Router />
         </CyclesContext>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
