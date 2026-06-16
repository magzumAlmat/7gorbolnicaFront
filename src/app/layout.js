"use client";

import "./globals.css";

import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import { Providers } from "./providers";
import AppThemeProvider from "../components/ThemeProvider/index.js"; 

import { Box } from "@mui/material";
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname === '/authorizedDashboard';

  return (
    <html lang="ru" suppressHydrationWarning={true}>
      <body>
        <AppThemeProvider>
          <Providers>
            {!isDashboard && <Header />}
            <Box component="main" sx={{
              minHeight: "100vh",
              bgcolor: '#fff',
            }}>
              {children}
            </Box>
            {!isDashboard && <Footer />}
          </Providers>
        </AppThemeProvider>
      </body>
    </html>
  );
}