import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e3a8a', // Azul escuro, pode mudar!
      contrastText: '#fff',
    },
    secondary: {
      main: '#2563eb', // Azul claro, se quiser usar algum detalhe
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    fontWeightBold: 900,
  },
});

export default theme;
