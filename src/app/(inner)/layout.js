'use client';

import { Box, Container, Grid } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import Sidebar from '../../components/Sidebar';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { innerPageData } from '../../data/navigation';

// Это базовый макет для всех внутренних страниц
export default function InnerLayout({ children }) {
  const pathname = usePathname();
  
  // Определяем заголовок и хлебные крошки на основе пути
  const pageData = useMemo(() => {
    // Находим наиболее подходящий ключ в данных
    const matchedPath = Object.keys(innerPageData).find(path => pathname.startsWith(path));
    
    if (matchedPath) {
      const data = innerPageData[matchedPath];
      
      const breadcrumbs = [];
      const segments = pathname.split('/').filter(Boolean);
      
      if (segments.length > 1) {
        const parentPath = `/${segments[0]}`;
        const parentData = innerPageData[parentPath];
        if (parentData) {
          breadcrumbs.push({ title: parentData.title, path: parentPath });
        }
      }

      return {
        ...data,
        breadcrumbs
      };
    }
    
    return { title: 'Страница', sidebarTitle: 'Разделы', menuItems: [], breadcrumbs: [] };
  }, [pathname]);

  const latestNews = [
    { title: 'В АО «КазНИИСА» состоялась рабочая встреча...', date: '13 Январь, 2026', link: '/news/mock-1' },
    { title: 'Поздравляем вас с наступающим Новым годом!', date: '31 Декабрь, 2025', link: '/news/mock-2' },
  ];

  return (
    <Box>
      <PageHeader title={pageData.title} breadcrumbs={pageData.breadcrumbs} />
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            {children}
          </Grid>
          <Grid item xs={12} md={3}>
            <Sidebar 
              title={pageData.sidebarTitle} 
              menuItems={pageData.menuItems} 
              latestNews={latestNews}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
