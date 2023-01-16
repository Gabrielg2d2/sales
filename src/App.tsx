import { theme } from 'global/styles/theme'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { SalesPage } from 'pages'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <SalesPage />
      <CssBaseline />
    </ThemeProvider>
  )
}
