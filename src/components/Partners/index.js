'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';

const partners = [
  { name: 'Министерство индустрии и инфраструктурного развития РК', abbr: 'МИИР', color: '#0C2340' },
  { name: 'Министерство по чрезвычайным ситуациям РК', abbr: 'МЧС', color: '#dc2626' },
  { name: 'Акимат города Алматы', abbr: 'АА', color: '#0891B2' },
  { name: 'НАО «Талассемблея народа Казахстана»', abbr: 'НАО', color: '#0369A1' },
  { name: 'Казахстанская Жилищная Компания', abbr: 'КЖК', color: '#10b981' },
  { name: 'АО «НК «Қазақстан Ғарыш Сапары»', abbr: 'КҒС', color: '#8b5cf6' },
];

const testimonials = [
  {
    text: 'КазНИИСА — надёжный партнёр в области строительной науки. Их экспертиза в сейсмостойком проектировании не имеет аналогов в регионе.',
    author: 'Ведущий архитектор',
    org: 'Министерство индустрии РК',
  },
  {
    text: 'Благодаря специалистам института мы смогли внедрить BIM-технологии на всех этапах проектирования крупных инфраструктурных объектов.',
    author: 'Главный инженер',
    org: 'АО «Самрук-Қазына»',
  },
];

export default function Partners() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" sx={{ color: '#0891B2', fontWeight: 700, letterSpacing: 3, fontSize: 13 }}>
            Партнёры и отзывы
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, color: '#0C2340', mt: 1, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
            Нам доверяют ведущие организации
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ mb: 8 }}>
          {partners.map((p, i) => (
            <Grid item xs={6} sm={4} md={2} key={i}>
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  textAlign: 'center',
                  borderRadius: 3,
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 8px 20px rgba(0,0,0,0.06)', borderColor: p.color },
                }}
              >
                <Avatar sx={{ bgcolor: p.color, width: 52, height: 52, mb: 1.5, fontSize: 16, fontWeight: 700 }}>
                  {p.abbr}
                </Avatar>
                <Typography sx={{ fontSize: 12, color: '#475569', fontWeight: 500, lineHeight: 1.4 }}>
                  {p.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3}>
          {testimonials.map((t, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  border: '1px solid #e2e8f0',
                  bgcolor: '#F8FAFC',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <FormatQuote sx={{ fontSize: 48, color: '#0891B220', position: 'absolute', top: 16, right: 20 }} />
                <Typography sx={{ color: '#334155', fontSize: 15, lineHeight: 1.8, fontStyle: 'italic', mb: 3 }}>
                  «{t.text}»
                </Typography>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: '#0C2340', fontSize: 14 }}>{t.author}</Typography>
                  <Typography sx={{ color: '#64748b', fontSize: 13 }}>{t.org}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
