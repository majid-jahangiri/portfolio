import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'dark',
    success: {
      main: '#6D9886',
    },
    primary: {
      main: '#393E46',
    },
    secondary: {
      main: '#F2E7D5',
    },
    info: {
      main: '#F7F7F7',
    },
  },
  typography: {
    fontFamily: 'Vazir, Roboto',
  },
})
