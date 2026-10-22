'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Typography, Box, Chip, Button, CircularProgress } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import ImageLightbox, { useImageLightbox } from '../../../../../components/ImageLightbox';
import EditorJSRenderer from '../../../../../components/EditorJSRenderer';
import { toEditorData, cleanNewsHtml } from '../../../../../lib/newsContent';

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
  const rawContent = article.content?.ru || '';
  const editorData = toEditorData(rawContent);

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

      {article.image && (
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
      )}

      <Box sx={{ maxWidth: 880 }}>
        {editorData ? (
          <EditorJSRenderer data={editorData} />
        ) : (
          <Box
            sx={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: '#334155',
              fontFamily: 'inherit',
              '& p': { mb: 2.2 },
              '& h1, & h2': { fontSize: '1.6rem', fontWeight: 800, color: NAVY, mt: 3.5, mb: 1.5 },
              '& h3, & h4': { fontSize: '1.25rem', fontWeight: 700, color: NAVY, mt: 3, mb: 1.2 },
              '& a': { color: BLUE, textDecoration: 'none', fontWeight: 600 },
              '& a:hover': { textDecoration: 'underline' },
              '& img': { maxWidth: '100%', height: 'auto', borderRadius: '8px', my: 2.5, boxShadow: '0 4px 14px rgba(15,23,42,0.08)' },
              '& ul, & ol': { pl: 3, mb: 2.5 },
              '& li': { mb: 0.75, lineHeight: 1.7 },
              '& blockquote': {
                borderLeft: '4px solid ' + BLUE,
                pl: 2.5,
                py: 1,
                my: 2.5,
                bgcolor: '#F8FAFC',
                borderRadius: '0 8px 8px 0',
                color: '#475569',
                fontStyle: 'italic',
              },
              '& table': { width: '100%', borderCollapse: 'collapse', my: 3, fontSize: '0.92rem' },
              '& th, & td': { p: 1.5, border: '1px solid ' + BORDER },
              '& th': { bgcolor: '#F8FAFC', fontWeight: 700, color: NAVY, textAlign: 'left' },
              '& .vc_custom_heading': { my: 2 },
              '& .wpb_wrapper': { width: '100%' },
            }}
            dangerouslySetInnerHTML={{ __html: cleanNewsHtml(rawContent) }}
          />
        )}
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
