import { createTheme } from '@mui/material/styles'

const themeColors = {
  text: {
    primary: '#fff',
    lightBlue: '#c6d0eb',
    lavender: '#e4e2ee',
    purple: '#462ab6',
    gray: '#abaabe',
    subtitle: '#9191ab'
  }
}

const darkTheme = createTheme({
  ...themeColors,
  palette: {
    mode: 'dark'
  }
})

export default darkTheme
