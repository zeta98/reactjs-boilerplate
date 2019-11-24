import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#99e6ff',
      main: '#62bfde',
      dark: '#1f8aad'
    },
    secondary: { main: '#333132' },
    background: { main: '#FFFFFF' },
  },
  typography: {
    fontFamily: 'Rubik, Roboto',
  },
})

export default theme
