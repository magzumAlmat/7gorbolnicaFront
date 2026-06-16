'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { getExcerpt } from '../../lib/newsContent';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const NAVY = '#0F172A';
const BLUE = '#0369A1';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function NewsSection() {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/kazniisa/news`)
      .then(r => r.json())
      .then(data => setLatest(data.slice(0, 6)))
      .catch(() => {});
  }, []);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Box sx={{ display: 'inline-block', width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mb: 2 }} />
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, color: NAVY, mt: 1, fontSize: { xs: '1.8rem', md: '2.4rem' }, letterSpacing: '-0.03em' }}
          >
            Новости
          </Typography>
          <Typography sx={{ color: GRAY_TEXT, mt: 2, maxWidth: 520, mx: 'auto', lineHeight: 1.7, fontSize: '15px' }}>
            Актуальные события и пресс-релизы АО «КазНИИСА»
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {latest.map((item) => (
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
                  borderRadius: 3,
                  overflow: 'hidden',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 30px rgba(3,105,161,0.12)',
                    borderColor: BLUE,
                    '& .news-arrow': { opacity: 1, transform: 'translateX(0)' },
                    '& .news-img': { transform: 'scale(1.05)' },
                  },
                }}
              >
                <Box sx={{ overflow: 'hidden', height: 190 }}>
                  <Box
                    className="news-img"
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
                  <Typography
                    sx={{
                      color: GRAY_TEXT,
                      fontSize: '0.82rem',
                      lineHeight: 1.5,
                      mb: 1.5,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {getExcerpt(item.content?.ru)}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 'auto' }}>
                    <Typography sx={{ color: BLUE, fontWeight: 600, fontSize: '0.82rem' }}>
                      Читать
                    </Typography>
                    <ArrowForwardIcon
                      className="news-arrow"
                      sx={{ color: BLUE, fontSize: 14, opacity: 0, transform: 'translateX(-6px)', transition: 'all 0.3s' }}
                    />
                  </Stack>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Paper
            component={Link}
            href="/about-us/news"
            elevation={0}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 4,
              py: 1.5,
              border: '1px solid ' + BORDER,
              borderRadius: 2,
              textDecoration: 'none',
              color: NAVY,
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'all 0.25s',
              '&:hover': { borderColor: BLUE, color: BLUE, transform: 'translateY(-2px)', boxShadow: '0 4px 12px rgba(3,105,161,0.1)' },
            }}
          >
            Все новости
            <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
