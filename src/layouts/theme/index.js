import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    success: {
      main: '#6D9886',
    },
    primary: {
      main: '#393E46',
    },
    secondary: {
      main: '#F2E7D5',
    },
  },
  typography: {
    fontFamily: 'tanha, Vazir, Roboto',
  },
})

export const darkTheme = createTheme({
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
  },
  typography: {
    fontFamily: 'tanha, Vazir, Roboto',
  },
})
