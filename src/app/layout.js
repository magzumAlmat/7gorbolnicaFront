"use client";

import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import { Providers } from "./providers";
import AppThemeProvider from "../components/ThemeProvider/index.js"; 

import { Box } from "@mui/material";
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideHeader = pathname === '/authorizedDashboard';

  return (
    <html lang="ru" suppressHydrationWarning={true}>
      <body>
        <AppThemeProvider>
          <Providers>
            {!hideHeader && <Header />}
            <Box component="main" sx={{ 
              minHeight: "100vh",
            }}>
              {children}
            </Box>
            <Footer />
          </Providers>
        </AppThemeProvider>
      </body>
    </html>
  );
}