'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Typography, Box, Chip, Button, CircularProgress } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import ImageLightbox, { useImageLightbox } from '../../../../../components/ImageLightbox';
import { getParagraphs } from '../../../../../lib/newsContent';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function NewsArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const { lightbox, openLightbox, closeLightbox } = useImageLightbox();

  useEffect(() => {
    fetch(`${API_URL}/api/kazniisa/news/slug/${slug}`)
      .then(r => r.ok ? r.json() : null)
      .then(data => setArticle(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <Box sx={{ textAlign: 'center', py: 8 }}><CircularProgress sx={{ color: BLUE }} /></Box>;

  if (!article) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, mb: 2 }}>
          Новость не найдена
        </Typography>
        <Button component={Link} href="/about-us/news" startIcon={<ArrowBackIcon />} sx={{ color: BLUE }}>
          Вернуться к новостям
        </Button>
      </Box>
    );
  }

  const title = article.title?.ru || '';
  const paragraphs = getParagraphs(article.content?.ru);

  return (
    <Box>
      <ImageLightbox {...lightbox} onClose={closeLightbox} />

      <Button
        component={Link}
        href="/about-us/news"
        startIcon={<ArrowBackIcon />}
        sx={{ color: BLUE, fontWeight: 600, textTransform: 'none', mb: 3, ml: -1, fontSize: '0.9rem' }}
      >
        Все новости
      </Button>

      <Chip label={article.category || 'Новости'} size="small" sx={{ bgcolor: BLUE_LIGHT, color: BLUE, fontWeight: 700, mb: 1.5 }} />

      <Typography variant="h4" sx={{ fontWeight: 800, color: NAVY, lineHeight: 1.3, letterSpacing: '-0.02em', mb: 1.5 }}>
        {title}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 3 }}>
        <CalendarTodayIcon sx={{ fontSize: 14, color: GRAY_TEXT }} />
        <Typography sx={{ fontSize: '0.85rem', color: GRAY_TEXT, fontWeight: 500 }}>
          {formatDate(article.publishedAt)}
        </Typography>
      </Box>

      <Box
        component="img"
        src={article.image}
        alt={title}
        onClick={() => openLightbox(article.image, title)}
        sx={{
          width: '100%',
          maxHeight: 420,
          objectFit: 'cover',
          borderRadius: '8px',
          mb: 4,
          border: '1px solid ' + BORDER,
          cursor: 'zoom-in',
        }}
      />

      <Box sx={{ maxWidth: 760 }}>
        {paragraphs.map((p, i) => (
          <Typography
            key={i}
            sx={{
              fontSize: '1rem',
              lineHeight: 1.85,
              color: '#334155',
              mb: 2.5,
              whiteSpace: 'pre-line',
            }}
          >
            {p}
          </Typography>
        ))}
      </Box>

      <Box sx={{ borderTop: '1px solid ' + BORDER, mt: 5, pt: 3 }}>
        <Button
          component={Link}
          href="/about-us/news"
          startIcon={<ArrowBackIcon />}
          sx={{ color: BLUE, fontWeight: 600, textTransform: 'none', fontSize: '0.9rem' }}
        >
          Вернуться к новостям
        </Button>
      </Box>
    </Box>
  );
}
