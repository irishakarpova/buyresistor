import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#41B6FF',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#F8F8F8',
      dark: '#ba000d',
      contrastText: '#000',
    },
    background: {
      default: '#fbfbfb',
    },
  },
  shadows: [
    'none',
    '0px 7px 30px rgba(0, 0, 0, 0.07)',
    '0px 1px 10px rgba(63,177,248, 0.2)',
    '0px 1px 10px rgba(63,177,248, 0.2)',
    ...Array(25).fill('0px 1px 0px rgba(0, 0, 0, 0.1)'),
  ],
  shape: {
    borderRadius: 16,
  },

  components: {
    MuiToolbar: {
      styleOverrides: {
        regular: {
          padding: '45px',
          height: '60px',
          backgroundColor: '#fbfbfb',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          borderTop: '1px solid #dadada',
          borderLeft: '1px solid #dadada',
          borderBottom: '1px solid #dadada',
          background: 'none',
          width: 400,
          boxShadow: 'none',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: 1,
          fontSize: '9px',
          fontWeight: 500,
          borderRight: '1px solid #dadada',
          borderBottom: '1px solid #dadada',
        },
      },
    },
    // MuiIconButton: {
    //   styleOverrides: {
    //     root: {
    //       color: 'black',
    //     },
    //   },
    // },
  },
});
theme.typography.h3 = {
  color: '#414141',
  fontSize: 40,
};

export default theme;
