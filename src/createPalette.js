import * as React from 'react';
import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();


const theme = createTheme({
    palette: {
        background: {
            default: '',
            paper: '#002329',
        },
        primary: {
            main: '#18ffff',
            light: '#46FFFF',
            dark: '#10B2B2',
            contrastText: '#002920',
        },
        secondary: {
            main: '#ff9e80',
            light:'#FFB199',
            dark: '#B26E59',
            contrastText: '#2f2422',
        },
         backgroundColor: {
            main: '#002329',
            contrastText: '#fff',
        },
        text: {
            primary: '#d0e7e1',
            secondary: '#d0e7e1e3',
        },
        color: {
            main:'#fff',
        }
  },
    typography: {
        button: {
        fontFamily: '"Courier New", monospace',
        fontWeight: 500,
        letterSpacing: '0.09em',
        },
        h1: {
            fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', sans-serif",
        },
        fontFamily: 'Verdana, Geneva, sans-serif',
        body1: {
            fontWeight: 500,
        },
        subtitle1: {
            fontWeight: 300,
        },
    },
});

export default theme;