import { createTheme, Theme } from '@mui/material/styles';
// import './Theme';

export const lightTheme: Theme = createTheme({
  status: {
    danger: '#f77',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#77f',
    },
    // text: {

    // }
  },
});

export default lightTheme;
