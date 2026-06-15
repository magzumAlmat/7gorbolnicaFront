'use client';

import { Box, Container, Grid } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import Sidebar from '../../components/Sidebar';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { innerPageData } from '../../data/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

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

  const [allDocuments, setAllDocuments] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/kazniisa/news');
        setAllDocuments(res.data);
      } catch (err) {
        console.error("Failed to fetch news", err);
      }
    };
    fetchNews();
  }, []);

  const latestNews = useMemo(() => {
    return allDocuments
      .slice(0, 5)
      .map(news => ({
        title: news.title?.ru || 'Нет заголовка',
        date: news.publishedAt ? new Date(news.publishedAt).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }) : '',
        link: `/news/${news.slug}`
      }));
  }, [allDocuments]);

  return (
    <Box>
      <PageHeader title={pageData.title} breadcrumbs={pageData.breadcrumbs} />
      <Container maxWidth="lg" sx={{ pt: 6, pb: 8 }}>
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
