'use client';

import { Typography, Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { usePathname } from 'next/navigation';

export default function DynamicKazniisaPage() {
  const pathname = usePathname();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/kazniisa/pages');
        // Match the pathname precisely (e.g. "/about-us/corporate-documents")
        let foundPage = res.data.find(p => p.slug === pathname);
        
        // Fallback 1: Check if slug includes pathname or vice versa
        if (!foundPage) {
          foundPage = res.data.find(p => p.slug.includes(pathname) || pathname.includes(p.slug));
        }
        
        // Fallback 2: Check by last path segment
        if (!foundPage) {
          const pathEnd = pathname.split('/').pop();
          foundPage = res.data.find(p => p.slug.includes(pathEnd));
        }
        
        setData(foundPage);
      } catch (err) {
        console.error("Error fetching dynamic page", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [pathname]);

  if (loading) {
    return (
      <Box sx={{ py: 10, textAlign: 'center' }}>
        <Typography>Загрузка страницы...</Typography>
      </Box>
    );
  }

  // If no data found in the KazNIISA DB, render a beautiful placeholder
  if (!data) {
    return (
      <Box sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#002e5b', mb: 2 }}>
          Страница в разработке
        </Typography>
        <Typography color="text.secondary">
          Контент для этой страницы скоро появится.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      animation: 'fadeInRight 0.5s ease-out',
      bgcolor: '#ffffff',
      p: { xs: 3, md: 5 },
      borderRadius: '12px',
      boxShadow: '0 10px 35px rgba(0,46,91,0.05)',
      border: '1px solid rgba(0,46,91,0.08)'
    }}>
      <Typography variant="h3" sx={{ 
        fontWeight: 800, 
        mb: 4, 
        color: '#002e5b', 
        borderBottom: '4px solid #FDE428', 
        display: 'inline-block', 
        pb: 1,
        fontSize: { xs: '2rem', md: '2.5rem' }
      }}>
        {data.title?.ru || 'Без заголовка'}
      </Typography>
      
      <Box 
        sx={{ 
          fontSize: '1.05rem', 
          lineHeight: 1.8, 
          color: '#334155',
          fontFamily: '"Inter", sans-serif',
          '& p': { mb: 2.5 },
          '& img': { maxWidth: '100%', height: 'auto', borderRadius: '4px', my: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
          '& h2': { fontSize: '1.8rem', fontWeight: 800, color: '#002e5b', mt: 4, mb: 2 },
          '& h3': { fontSize: '1.4rem', fontWeight: 700, color: '#002e5b', mt: 3, mb: 1.5 },
          '& a': { color: '#2887B6', textDecoration: 'none', fontWeight: 500 },
          '& a:hover': { textDecoration: 'underline' },
          '& ul': { pl: 3, mb: 3 },
          '& li': { mb: 1 },
          '& table': { width: '100%', borderCollapse: 'collapse', mb: 4, fontSize: '0.95rem' },
          '& th': { bgcolor: '#f1f5f9', color: '#002e5b', fontWeight: 700, p: 1.5, border: '1px solid #e2e8f0', textAlign: 'left' },
          '& td': { p: 1.5, border: '1px solid #e2e8f0' },
          '& tr:nth-of-type(even)': { bgcolor: '#fafafa' }
        }}
        dangerouslySetInnerHTML={{ __html: data.content?.ru || '<p>Нет контента</p>' }} 
      />
    </Box>
  );
}
