// src/components/ThemeProvider.js
'use client';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// Цветовая схема kazniisa.kz
const theme = createTheme({
  palette: {
    primary: { 
      main: '#2887B6',      // основной голубой цвет сайта
      dark: '#002e5b',      // тёмно-синий (навигация, текст)
      light: '#3a9ec8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FDE428',      // жёлтый акцент
      dark: '#d4bf1e',
      contrastText: '#002e5b',
    },
    success: {
      main: '#10b857',      // зелёный
    },
    background: { 
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Open Sans", "Roboto", "Inter", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

export default function AppThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}