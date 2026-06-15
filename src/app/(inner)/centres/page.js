'use client';
import { Typography, Box, Paper, Grid, Button, Chip } from '@mui/material';
import {
  DomainVerification,
  Gavel,
  Computer,
  Architecture,
  School,
  Terrain,
  ArrowForward,
} from '@mui/icons-material';
import Link from 'next/link';

const CENTRES = [
  {
    icon: <Terrain sx={{ fontSize: 40, color: '#0369A1' }} />,
    title: 'Центр по сейсмостойкости зданий и сооружений',
    short: 'Техническое обследование объектов, сейсмическая паспортизация, структурные расчёты и испытания строительных материалов.',
    chips: ['Обследование', 'Паспортизация', 'Испытания'],
    href: '/centres/center-for-seismic-resistance-inspection-of-buildings-and-structures',
  },
  {
    icon: <Gavel sx={{ fontSize: 40, color: '#0369A1' }} />,
    title: 'Центр нормирования в строительстве',
    short: 'Разработка нормативных документов, стандартов сметного нормирования и мониторинг цен на строительные материалы.',
    chips: ['НТД', 'Сметное нормирование', 'Мониторинг цен'],
    href: '/centres/center-for-regulation-in-construction',
  },
  {
    icon: <Computer sx={{ fontSize: 40, color: '#0369A1' }} />,
    title: 'Центр науки и цифровизации строительства',
    short: 'Внедрение BIM/ТИМСО, разработка стандартов информационного моделирования и цифровая трансформация отрасли.',
    chips: ['BIM', 'ТИМСО', 'Цифровизация'],
    href: '/centres/center-for-science-and-digitalization-of-construction',
  },
  {
    icon: <Architecture sx={{ fontSize: 40, color: '#0369A1' }} />,
    title: 'Центр типового и индивидуального проектирования',
    short: 'Типовые проекты жилых и общественных зданий, индивидуальное проектирование, архив проектных решений 2010–2016 гг.',
    chips: ['Типовые проекты', 'Жильё', 'Общественные здания'],
    href: '/centres/center-for-standard-and-individual-design',
  },
  {
    icon: <School sx={{ fontSize: 40, color: '#0369A1' }} />,
    title: 'Корпоративный университет',
    short: '7 учебных курсов для специалистов строительной отрасли, аттестация ИТР, обучение 3–4 раза в месяц.',
    chips: ['Обучение', 'Аттестация ИТР', '7 курсов'],
    href: '/centres/corporate-university',
  },
  {
    icon: <DomainVerification sx={{ fontSize: 40, color: '#0369A1' }} />,
    title: 'Центр научно-технической экспертизы',
    short: 'Экспертиза проектной документации, независимая оценка технических решений, научное сопровождение строительных проектов.',
    chips: ['Экспертиза', 'Оценка', 'НТД'],
    href: '/centres',
  },
];

export default function CentresOverview() {
  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0F172A 0%, #0369A1 100%)',
          borderRadius: 3,
          p: { xs: 3, md: 5 },
          mb: 5,
          color: '#fff',
        }}
      >
        <Typography variant="overline" sx={{ color: '#F59E0B', fontWeight: 700, letterSpacing: 2 }}>
          КазНИИСА
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 2 }}>
          Центры компетенций
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.85, maxWidth: 680, fontWeight: 400 }}>
          Шесть специализированных центров, обеспечивающих полный цикл научного, нормативного и
          практического сопровождения строительной отрасли Казахстана.
        </Typography>
      </Box>

      {/* Cards */}
      <Grid container spacing={3}>
        {CENTRES.map((c, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Paper
              elevation={0}
              sx={{
                p: 3.5,
                border: '1px solid #E2E8F0',
                borderRadius: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.2s, border-color 0.2s',
                '&:hover': { boxShadow: '0 8px 32px rgba(3,105,161,0.12)', borderColor: '#0369A1' },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    background: '#EFF6FF',
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', lineHeight: 1.3 }}>
                  {c.title}
                </Typography>
              </Box>

              <Typography variant="body2" sx={{ color: '#475569', mb: 2.5, lineHeight: 1.7, flex: 1 }}>
                {c.short}
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2.5 }}>
                {c.chips.map((ch) => (
                  <Chip
                    key={ch}
                    label={ch}
                    size="small"
                    sx={{
                      background: '#F1F5F9',
                      color: '#0369A1',
                      fontWeight: 600,
                      fontSize: 11,
                    }}
                  />
                ))}
              </Box>

              <Button
                component={Link}
                href={c.href}
                endIcon={<ArrowForward />}
                sx={{
                  alignSelf: 'flex-start',
                  color: '#0369A1',
                  fontWeight: 700,
                  px: 0,
                  '&:hover': { background: 'transparent', color: '#0F172A' },
                }}
              >
                Подробнее
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Bottom accent */}
      <Box
        sx={{
          mt: 5,
          p: 3,
          borderRadius: 3,
          background: '#FFFBEB',
          border: '1px solid #FDE68A',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Box sx={{ color: '#F59E0B', fontSize: 32, lineHeight: 1 }}>★</Box>
        <Typography variant="body1" sx={{ color: '#78350F', fontWeight: 500 }}>
          КазНИИСА — ведущая научно-исследовательская организация в сфере строительства Казахстана.
          Все центры работают в едином научном и нормативном пространстве.
        </Typography>
      </Box>
    </Box>
  );
}
