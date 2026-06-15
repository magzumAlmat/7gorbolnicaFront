'use client';
import { Typography, Box, Paper, Grid, Chip, Divider } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TimelineIcon from '@mui/icons-material/Timeline';

const NAVY = '#0F172A';
const ACCENT = '#0369A1';
const AMBER = '#F59E0B';
const BG = '#F8FAFC';

const timeline = [
  { year: '1931', text: 'Создан НИИСМиС — Научно-исследовательский институт строительных материалов и строительства' },
  { year: '1957', text: 'Вошёл в состав Казахского филиала Академии строительства и архитектуры СССР' },
  { year: '1964', text: 'Передан в состав КазпромстройНИИпроект' },
  { year: '1990', text: 'Реорганизован в КазНИИССА; первый директор — Жунусов Т.Ж.' },
  { year: '2012', text: 'Реорганизован в акционерное общество АО «КазНИИСА»' },
];

const spheres = [
  'BIM-технологии и информационное моделирование',
  'Мониторинг и техническое обследование зданий',
  'Сейсмические исследования и сейсмозащита',
  'Обучение и повышение квалификации специалистов',
  'Лабораторные услуги и испытания материалов',
  'Проектные работы любой сложности',
  'Экспертные и консультационные услуги',
  'Научно-исследовательские и опытно-конструкторские работы',
  'Специальные технические условия',
];

export default function HistoryPage() {
  return (
    <Box>
      <Chip label="История" size="small" sx={{ bgcolor: AMBER, color: NAVY, fontWeight: 700, mb: 1.5, fontFamily: '"Roboto Mono", monospace' }} />
      <Typography variant="h4" sx={{ fontWeight: 800, color: NAVY, mb: 1, fontFamily: '"Exo 2", sans-serif' }}>
        История КазНИИСА
      </Typography>
      <Box sx={{ width: 60, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 3 }} />
      <Box component="img" src="/images/kazniisa/history-banner.webp" alt="История КазНИИСА" sx={{ width: '100%', maxWidth: 600, borderRadius: 2, mb: 4 }} />

      {/* Timeline */}
      <Box sx={{ mb: 5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
          <TimelineIcon sx={{ color: ACCENT }} />
          <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontFamily: '"Exo 2", sans-serif' }}>
            Хронология
          </Typography>
        </Box>
        <Box sx={{ position: 'relative', pl: 3 }}>
          <Box sx={{ position: 'absolute', left: 0, top: 8, bottom: 8, width: 3, bgcolor: `${ACCENT}30`, borderRadius: 2 }} />
          {timeline.map((item, i) => (
            <Box key={i} sx={{ position: 'relative', mb: 3, pl: 3 }}>
              <Box sx={{
                position: 'absolute', left: -24, top: 6, width: 14, height: 14,
                borderRadius: '50%', bgcolor: i === timeline.length - 1 ? AMBER : ACCENT,
                border: '3px solid #fff', boxShadow: '0 0 0 2px ' + (i === timeline.length - 1 ? AMBER : ACCENT),
              }} />
              <Paper elevation={0} sx={{ p: 2.5, border: '1px solid #E2E8F0', borderRadius: 2, bgcolor: i === timeline.length - 1 ? `${AMBER}10` : BG }}>
                <Typography sx={{ fontFamily: '"Roboto Mono", monospace', fontWeight: 700, color: ACCENT, fontSize: '0.85rem', mb: 0.5 }}>
                  {item.year}
                </Typography>
                <Typography sx={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {item.text}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Spheres */}
      <Paper elevation={0} sx={{ p: 3.5, bgcolor: NAVY, borderRadius: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 2.5, fontFamily: '"Exo 2", sans-serif' }}>
          Сфера деятельности
        </Typography>
        <Grid container spacing={1.5}>
          {spheres.map((s, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <CheckCircleIcon sx={{ color: AMBER, fontSize: 18, mt: 0.3, flexShrink: 0 }} />
                <Typography sx={{ color: '#CBD5E1', fontSize: '0.9rem', lineHeight: 1.6 }}>{s}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}
