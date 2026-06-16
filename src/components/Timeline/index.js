'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const milestones = [
  { year: '1961', title: 'Основание института', desc: 'Создан Казахский научно-исследовательский и проектный институт строительства и архитектуры.' },
  { year: '1971', title: 'Первые сейсмические исследования', desc: 'Запуск программы изучения сейсмостойкости зданий в сейсмоактивных зонах Казахстана.' },
  { year: '1988', title: 'Землетрясение и новые стандарты', desc: 'После разрушительных землетрясений институт разработал обновлённые нормы сейсмостойкого строительства.' },
  { year: '1999', title: 'Реорганизация в АО', desc: 'Институт преобразован в Акционерное Общество «КазНИИСА» с расширением направлений деятельности.' },
  { year: '2015', title: 'Цифровая трансформация', desc: 'Создание Центра науки и цифровизации строительства, внедрение BIM-технологий.' },
  { year: '2024', title: 'Современный этап', desc: '5 профильных центров, 4 региональных филиала, более 1000 реализованных проектов.' },
];

export default function Timeline() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F8FAFC' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" sx={{ color: '#0369A1', fontWeight: 700, letterSpacing: 3, fontSize: 13 }}>
            Наша история
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, color: '#0C2340', mt: 1, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
            Более 60 лет на службе строительной науки
          </Typography>
        </Box>

        <Box sx={{ position: 'relative' }}>
          <Box sx={{
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: 3,
            bgcolor: '#e2e8f0',
            transform: 'translateX(-50%)',
            borderRadius: 2,
          }} />

          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <Grid
                container
                key={i}
                sx={{
                  mb: { xs: 4, md: 0 },
                  position: 'relative',
                  minHeight: { md: 160 },
                  alignItems: 'center',
                }}
                direction={isLeft ? 'row' : 'row-reverse'}
              >
                <Grid item xs={12} md={5} sx={{ textAlign: { md: isLeft ? 'right' : 'left' } }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      border: '1px solid #e2e8f0',
                      bgcolor: 'white',
                      mx: { md: 3 },
                      transition: 'all 0.3s',
                      '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 8px 25px rgba(0,0,0,0.08)', borderColor: '#0891B2' },
                    }}
                  >
                    <Typography sx={{ fontWeight: 700, color: '#0C2340', fontSize: '1rem', mb: 0.5 }}>
                      {m.title}
                    </Typography>
                    <Typography sx={{ color: '#64748b', fontSize: 14, lineHeight: 1.6 }}>
                      {m.desc}
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center', my: { xs: 1, md: 0 } }}>
                  <Box sx={{
                    width: 56, height: 56,
                    borderRadius: '50%',
                    bgcolor: '#0C2340',
                    color: '#60A5FA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: 14,
                    position: 'relative',
                    zIndex: 2,
                    border: '4px solid #F8FAFC',
                    boxShadow: '0 4px 12px rgba(12,35,64,0.3)',
                  }}>
                    {m.year}
                  </Box>
                </Grid>

                <Grid item xs={12} md={5} />
              </Grid>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
