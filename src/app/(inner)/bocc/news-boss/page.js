'use client';
import { useState, useEffect } from 'react';
import { Typography, Box, Divider, Chip, CircularProgress } from '@mui/material';
import { getExcerpt } from '../../../../lib/newsContent';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' });
}

export default function NewsBoss() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/kazniisa/news?section=boss`)
      .then((r) => r.json())
      .then((data) => setNews(Array.isArray(data) ? data : []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Новости БОСС
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        Актуальные новости и анонсы мероприятий Базовой организации государств — участников СНГ
        по сейсмостойкому строительству (БОСС).
      </Typography>

      {loading ? (
        <Box sx={{ textAlign: 'center', py: 6 }}><CircularProgress /></Box>
      ) : news.length === 0 ? (
        <Typography sx={{ color: GRAY_TEXT, py: 4 }}>Новостей пока нет.</Typography>
      ) : (
        news.map((item) => (
          <Box
            key={item.id || item.slug}
            sx={{
              mb: 3,
              p: 3,
              border: '1px solid ' + BORDER,
              borderRadius: '6px',
              borderLeft: '4px solid ' + BLUE,
              transition: 'box-shadow 0.2s ease, transform 0.2s ease',
              '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5, gap: 2 }}>
              <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', color: NAVY }}>
                {item.title?.ru || ''}
              </Typography>
              {item.publishedAt && (
                <Chip label={formatDate(item.publishedAt)} size="small" sx={{ bgcolor: BLUE_LIGHT, color: BLUE, fontWeight: 600, fontSize: '0.75rem', flexShrink: 0 }} />
              )}
            </Box>
            <Divider sx={{ mb: 1.5 }} />
            <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>
              {getExcerpt(item.content?.ru)}
            </Typography>
          </Box>
        ))
      )}
    </Box>
  );
}
