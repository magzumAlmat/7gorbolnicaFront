'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import {
  Architecture, Science, AccountBalance, Computer, Engineering, School,
  ArrowForward
} from '@mui/icons-material';
import Link from 'next/link';

const services = [
  {
    icon: Architecture,
    title: 'Сейсмостойкость и обследование',
    desc: 'Техническое обследование зданий и сооружений, подтверждение сейсмической безопасности, расчёты и испытания конструкций.',
    color: '#0891B2',
    span: { xs: 12, md: 8 },
    featured: true,
    link: '/centres/center-for-seismic-resistance-inspection-of-buildings-and-structures',
  },
  {
    icon: AccountBalance,
    title: 'Нормирование в строительстве',
    desc: 'Разработка нормативных документов, сборников по сметному ценообразованию.',
    color: '#0369A1',
    span: { xs: 12, sm: 6, md: 4 },
    link: '/centres/center-for-regulation-in-construction',
  },
  {
    icon: Computer,
    title: 'BIM и цифровизация',
    desc: 'Внедрение технологий информационного моделирования в строительство.',
    color: '#10b981',
    span: { xs: 12, sm: 6, md: 4 },
    link: '/centres/center-for-science-and-digitalization-of-construction',
  },
  {
    icon: Engineering,
    title: 'Типовое и индивидуальное проектирование',
    desc: 'Разработка типовых проектов жилых и общественных зданий для многократной реализации.',
    color: '#8b5cf6',
    span: { xs: 12, sm: 6, md: 4 },
    link: '/centres/center-for-standard-and-individual-design',
  },
  {
    icon: School,
    title: 'Корпоративный университет',
    desc: 'Повышение квалификации работников и аттестация ИТР в области проектирования и строительства.',
    color: '#ec4899',
    span: { xs: 12, sm: 6, md: 4 },
    link: '/centres/corporate-university',
  },
  {
    icon: Science,
    title: 'Научные исследования',
    desc: 'Фундаментальные и прикладные исследования в области строительной науки и сейсмологии.',
    color: '#0C2340',
    span: { xs: 12, md: 8 },
    featured: true,
    link: '/science',
  },
];

export default function ServicesGrid() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Box sx={{ display: 'inline-block', width: 48, height: 3, bgcolor: '#0369A1', borderRadius: 1, mb: 2 }} />
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, color: '#0F172A', mt: 1, fontSize: { xs: '1.8rem', md: '2.4rem' }, letterSpacing: '-0.03em' }}
          >
            Ключевые направления
          </Typography>
          <Typography sx={{ color: '#64748B', mt: 2, maxWidth: 520, mx: 'auto', lineHeight: 1.7, fontSize: '15px' }}>
            Комплексные решения в строительной науке, проектировании и нормировании
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Grid item {...s.span} key={i}>
                <Paper
                  component={Link}
                  href={s.link}
                  elevation={0}
                  sx={{
                    p: s.featured ? 4 : 3,
                    height: '100%',
                    minHeight: s.featured ? 200 : 160,
                    borderRadius: 3,
                    border: '1px solid #e2e8f0',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 12px 30px ${s.color}20`,
                      borderColor: s.color,
                      '& .service-arrow': { opacity: 1, transform: 'translateX(0)' },
                      '& .service-bg': { opacity: 0.06 },
                    },
                  }}
                >
                  <Box
                    className="service-bg"
                    sx={{
                      position: 'absolute',
                      top: -30,
                      right: -30,
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      bgcolor: s.color,
                      opacity: 0.04,
                      transition: 'opacity 0.3s',
                    }}
                  />
                  <Box>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        bgcolor: `${s.color}14`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <Icon sx={{ color: s.color, fontSize: 26 }} />
                    </Box>
                    <Typography
                      variant={s.featured ? 'h5' : 'h6'}
                      sx={{ fontWeight: 700, color: '#0C2340', mb: 1, fontSize: s.featured ? '1.2rem' : '1rem' }}
                    >
                      {s.title}
                    </Typography>
                    <Typography sx={{ color: '#64748b', fontSize: 14, lineHeight: 1.6 }}>
                      {s.desc}
                    </Typography>
                  </Box>
                  <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 2 }}>
                    <Typography sx={{ color: s.color, fontWeight: 600, fontSize: 13 }}>
                      Подробнее
                    </Typography>
                    <ArrowForward
                      className="service-arrow"
                      sx={{ color: s.color, fontSize: 16, opacity: 0, transform: 'translateX(-8px)', transition: 'all 0.3s' }}
                    />
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
