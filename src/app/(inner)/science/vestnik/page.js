'use client';
import { Typography, Box, Paper, Grid, Chip, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuBookIcon from '@mui/icons-material/MenuBook';

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
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: '#0F172A' }}>
        Вестник КазНИИСА
      </Typography>
      <Chip label="Издаётся с 2011 года" sx={{ bgcolor: '#0369A1', color: '#fff', mb: 3, fontWeight: 600 }} />

      <Paper sx={{ p: 3, mb: 4, bgcolor: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <MenuBookIcon sx={{ color: '#0369A1' }} />
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>О журнале</Typography>
        </Box>
        <Typography sx={{ color: '#334155', lineHeight: 1.8 }}>
          Научный журнал «Вестник КазНИИСА» основан в 2011 году. Публикует результаты теоретических
          и экспериментальных исследований по актуальным вопросам строительства, сейсмостойкости,
          ценообразования и нормирования в строительной отрасли Республики Казахстан.
        </Typography>
      </Paper>

      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#0F172A' }}>Разделы журнала</Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {sections.map((s, i) => (
          <Grid item xs={12} sm={6} key={s}>
            <Paper sx={{ p: 2.5, borderRadius: 2, border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ width: 36, height: 36, borderRadius: '50%', bgcolor: '#0369A1', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>
                {i + 1}
              </Box>
              <Typography sx={{ fontWeight: 600, color: '#0F172A' }}>{s}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#0F172A' }}>Архив выпусков</Typography>
      <Grid container spacing={2}>
        {archive.map((a) => (
          <Grid item xs={12} sm={6} md={4} key={a.year}>
            <Paper sx={{ p: 2, borderRadius: 2, border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography sx={{ fontWeight: 700, color: '#0F172A', fontSize: '1.1rem' }}>{a.year}</Typography>
              <Chip label={a.issues} size="small" sx={{ bgcolor: '#F1F5F9', color: '#334155' }} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
