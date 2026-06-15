'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

const sections = ['Сейсмостойкое строительство', 'Информационные технологии', 'Ценообразование', 'Нормирование'];

const archive = [
  { year: 2025, issues: 'Вып. 1–3' },
  { year: 2024, issues: '4 выпуска' },
  { year: 2023, issues: '4 выпуска' },
  { year: 2022, issues: '4 выпуска' },
  { year: 2021, issues: '4 выпуска' },
  { year: 2020, issues: '4 выпуска' },
  { year: 2019, issues: '12 ежемесячных выпусков' },
  { year: 2018, issues: '12 ежемесячных выпусков' },
  { year: 2017, issues: '12 ежемесячных выпусков' },
];

export default function VestnikPage() {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Вестник КазНИИСА
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 2 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 1 }}>
        Издаётся с 2011 года
      </Typography>

      <Box
        sx={{
          borderLeft: '4px solid #F59E0B',
          pl: 3,
          py: 2,
          bgcolor: '#FAFAFA',
          fontStyle: 'italic',
          mb: 4,
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Научный журнал «Вестник КазНИИСА» основан в 2011 году. Публикует результаты теоретических
          и экспериментальных исследований по актуальным вопросам строительства, сейсмостойкости,
          ценообразования и нормирования в строительной отрасли Республики Казахстан.
        </Typography>
      </Box>

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 2 }}
      >
        Разделы журнала
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={2} sx={{ mb: 4 }}>
        {sections.map((s, i) => (
          <Grid item xs={12} sm={6} key={s}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              <Box component="span" sx={{ fontWeight: 700, color: NAVY, mr: 1 }}>
                {i + 1}.
              </Box>
              {s}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 2 }}
      >
        Архив выпусков
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={2}>
        {archive.map((a) => (
          <Grid item xs={12} sm={6} md={4} key={a.year}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', py: 1, borderBottom: '1px solid #E2E8F0' }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem' }}>{a.year}</Typography>
              <Typography sx={{ fontSize: '1rem', color: '#334155' }}>{a.issues}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
