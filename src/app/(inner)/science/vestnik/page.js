'use client';
import { Typography, Box, Grid } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

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
        sx={{ fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Вестник КазНИИСА
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 1 }}>
        Издаётся с 2011 года
      </Typography>

      <Box
        sx={{
          bgcolor: BLUE_LIGHT,
          borderLeft: '4px solid ' + BLUE,
          borderRadius: '0 6px 6px 0',
          p: 3,
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
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        Разделы журнала
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

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
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        Архив выпусков
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Grid container spacing={2}>
        {archive.map((a) => (
          <Grid item xs={12} sm={6} md={4} key={a.year}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', py: 1, borderBottom: '1px solid ' + BORDER }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem' }}>{a.year}</Typography>
              <Typography sx={{ fontSize: '1rem', color: '#334155' }}>{a.issues}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
