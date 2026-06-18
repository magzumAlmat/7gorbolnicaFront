'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Typography, Box, Paper, Chip, Grid, CircularProgress } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { getExcerpt } from '../../../../../lib/newsContent';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

// URL-слаг архива (как на kazniisa.kz) -> значение поля category в БД (русское) + заголовок.
const CATEGORY_MAP = {
  events: { category: 'События', title: 'События' },
  speeches: { category: 'Выступления', title: 'Выступления' },
  science: { category: 'Наука', title: 'Наука' },
  announcements: { category: 'Объявления', title: 'Объявления' },
  'press-releases': { category: 'Пресс-релизы', title: 'Пресс-релизы' },
};

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function NewsCategoryArchivePage() {
  const params = useParams();
  const slug = decodeURIComponent(params?.category || '');
  // Известный слаг -> маппинг; иначе считаем, что в URL уже само значение категории.
  const meta = CATEGORY_MAP[slug] || { category: slug, title: slug };

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!meta.category) { setLoading(false); return; }
    fetch(`${API_URL}/api/kazniisa/news?category=${encodeURIComponent(meta.category)}`)
      .then(r => r.json())
      .then(data => setNews(Array.isArray(data) ? data : []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [meta.category]);

  if (loading) return <Box sx={{ textAlign: 'center', py: 8 }}><CircularProgress sx={{ color: BLUE }} /></Box>;

  return (
    <Box>
      <Chip label="Пресс-центр" size="small" sx={{ bgcolor: BLUE_LIGHT, color: BLUE, fontWeight: 700, mb: 1.5 }} />
      <Typography variant="h4" sx={{ fontWeight: 800, color: NAVY, letterSpacing: '-0.02em' }}>
        {meta.title}
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 1 }} />
      <Typography sx={{ color: GRAY_TEXT, fontSize: '0.95rem', mb: 4, maxWidth: 600 }}>
        Материалы рубрики «{meta.title}» АО «КазНИИСА»
      </Typography>

      {news.length === 0 ? (
        <Box sx={{ py: 6, textAlign: 'center', color: GRAY_TEXT }}>
          <Typography sx={{ fontSize: '0.95rem' }}>
            В рубрике «{meta.title}» пока нет публикаций.
          </Typography>
          <Typography
            component={Link}
            href="/about-us/news"
            sx={{ color: BLUE, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block', mt: 1.5, '&:hover': { textDecoration: 'underline' } }}
          >
            ← Все новости
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {news.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.slug}>
              <Paper
                component={Link}
                href={`/about-us/news/${item.slug}`}
                elevation={0}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  border: '1px solid ' + BORDER,
                  borderRadius: '8px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 24px rgba(3,105,161,0.12)',
                    borderColor: BLUE,
                    '& .news-arrow': { opacity: 1, transform: 'translateX(0)' },
                    '& .news-image': { transform: 'scale(1.04)' },
                  },
                }}
              >
                <Box sx={{ overflow: 'hidden', height: 180 }}>
                  <Box
                    className="news-image"
                    component="img"
                    src={item.image}
                    alt={item.title?.ru || ''}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  />
                </Box>
                <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                    <CalendarTodayIcon sx={{ fontSize: 13, color: GRAY_TEXT }} />
                    <Typography sx={{ fontSize: '0.75rem', color: GRAY_TEXT, fontWeight: 500 }}>
                      {formatDate(item.publishedAt)}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem', lineHeight: 1.4, mb: 1, flex: 1 }}>
                    {item.title?.ru || ''}
                  </Typography>
                  <Typography sx={{ color: GRAY_TEXT, fontSize: '0.82rem', lineHeight: 1.5, mb: 1.5, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {getExcerpt(item.content?.ru)}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 'auto' }}>
                    <Typography sx={{ color: BLUE, fontWeight: 600, fontSize: '0.82rem' }}>
                      Читать
                    </Typography>
                    <ArrowForwardIcon
                      className="news-arrow"
                      sx={{ color: BLUE, fontSize: 14, opacity: 0, transform: 'translateX(-6px)', transition: 'all 0.25s' }}
                    />
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
