'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Chip, Divider, Stack, Container } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import EditorJSRenderer from '../../../../components/EditorJSRenderer';

export default function NewsArticlePage({ params }) {
  const { id } = params;
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/kazniisa/news');
        // Match by slug (id is actually the slug from URL /news/slug)
        const found = res.data.find(n => n.slug === id || n.slug.includes(id));
        setArticle(found);
      } catch (err) {
        console.error("Error fetching article", err);
      } finally {
        setLoading(false);
      }
    };
    if (id && !id.startsWith('mock-')) {
      fetchArticle();
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) return <Container sx={{ py: 10, textAlign: 'center' }}><Typography>Загрузка новости...</Typography></Container>;
  if (!article) return <Container sx={{ py: 10, textAlign: 'center' }}><Typography>Новость не найдена</Typography></Container>;

  const dateStr = article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }) : '';

  const cat = article.category === 'uncategorized' ? 'Новости' : article.category;
  const title = article.title?.ru || 'Нет заголовка';

  return (
    <Container maxWidth="md" sx={{ py: 6, bgcolor: 'white', borderRadius: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', my: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          {cat && (
            <Chip 
              label={cat} 
              size="small" 
              sx={{ bgcolor: '#2887B6', color: 'white', fontWeight: 700, borderRadius: '4px' }} 
            />
          )}
          {dateStr && (
            <Chip 
              icon={<AccessTime sx={{ fontSize: '14px !important' }} />}
              label={dateStr} 
              size="small" 
              variant="outlined"
              sx={{ borderRadius: '4px' }}
            />
          )}
        </Stack>

        <Typography variant="h3" sx={{ color: '#002e5b', fontWeight: 800, lineHeight: 1.2, fontSize: { xs: '1.8rem', md: '2.6rem' }, mb: 3 }}>
          {title}
        </Typography>
        <Divider sx={{ mb: 4, width: '80px', height: '4px', bgcolor: '#2887B6', border: 'none' }} />
      </Box>

      {article.image && (
        <Box sx={{ width: '100%', borderRadius: '12px', overflow: 'hidden', mb: 5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <img src={article.image} alt={title} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </Box>
      )}
      
      <Box sx={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#334155', fontFamily: '"Inter", sans-serif' }}>
        <EditorJSRenderer data={(() => {
          const c = article.content?.ru;
          if (!c) return { blocks: [] };
          if (typeof c === 'string') { try { return JSON.parse(c); } catch { return { blocks: [] }; } }
          if (c.blocks) return c;
          return { blocks: [] };
        })()} />
      </Box>
    </Container>
  );
}
