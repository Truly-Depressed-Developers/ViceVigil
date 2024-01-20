'use client'

import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Navbar} from "@/components/Navbar/Navbar";

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
      {children}
    </ThemeProvider>
  );
}

export {LayoutWrapper};