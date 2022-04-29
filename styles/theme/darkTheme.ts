import { createTheme, Theme } from '@mui/material/styles';
// import './Theme';

export const darkTheme: Theme = createTheme({
  status: {
    danger: '#f77',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#007',
    }
  },
});

export default darkTheme;