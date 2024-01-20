'use client'

import {createTheme, ThemeProvider} from "@mui/material/styles";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const LayoutWrapper = ({
                         children,
                       }: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        {children}
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export {LayoutWrapper};