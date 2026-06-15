'use client';
import { Typography, Box, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import { Architecture, CheckCircle, Apartment, Business, Park } from '@mui/icons-material';

const DEPARTMENTS = [
  {
    icon: <Apartment sx={{ color: '#0369A1', fontSize: 28 }} />,
    title: 'Отдел жилых зданий',
    desc: 'Типовые проекты жилых домов различной этажности — от малоэтажных до многоквартирных высотных зданий.',
    types: ['Малоэтажные дома', 'Среднеэтажные здания', 'Многоквартирные дома', 'Блокированная застройка'],
  },
  {
    icon: <Business sx={{ color: '#0369A1', fontSize: 28 }} />,
    title: 'Отдел общественных зданий',
    desc: 'Проекты школ, детских садов, медицинских учреждений, административных и культурных объектов.',
    types: ['Школы и детсады', 'Больницы и поликлиники', 'Административные здания', 'Культурные объекты'],
  },
  {
    icon: <Park sx={{ color: '#0369A1', fontSize: 28 }} />,
    title: 'Отдел индивидуального проектирования',
    desc: 'Разработка индивидуальных проектных решений с учётом специфики площадки и требований заказчика.',
    types: ['Уникальные объекты', 'Адаптация типовых проектов', 'Привязка к местности', 'Авторский надзор'],
  },
];

const ARCHIVE_PROJECTS = [
  { year: '2010–2012', desc: 'Серия типовых жилых домов для массовой застройки' },
  { year: '2012–2014', desc: 'Типовые проекты школ на 300, 600, 900 мест' },
  { year: '2013–2015', desc: 'Детские сады на 120, 240 мест — серия «Болашак»' },
  { year: '2014–2016', desc: 'Поликлиники и районные больницы' },
  { year: '2015–2016', desc: 'Административные здания акиматов районного уровня' },
];

const SERVICES = [
  'Разработка типовых проектных решений для государственных программ',
  'Адаптация и привязка типовых проектов к конкретным площадкам',
  'Индивидуальное проектирование по заданию заказчика',
  'Актуализация ранее разработанных типовых проектов',
  'Авторский надзор за строительством по проектам центра',
  'Разработка альбомов унифицированных узлов и деталей',
  'Технико-экономическое сравнение проектных вариантов',
];

export default function StandardDesignCentre() {
  return (
    <Box>
      {/* Hero */}
      <Box sx={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)', borderRadius: 3, p: { xs: 3, md: 5 }, mb: 4, color: '#fff' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Architecture sx={{ fontSize: 48, color: '#F59E0B' }} />
          <Box>
            <Typography variant="overline" sx={{ color: '#F59E0B', fontWeight: 700, letterSpacing: 2 }}>
              КазНИИСА — Центр
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
              Центр типового и индивидуального проектирования
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1" sx={{ opacity: 0.85, maxWidth: 700, lineHeight: 1.8 }}>
          Разработка типовых проектов жилых и общественных зданий, индивидуальное проектирование,
          архив типовых решений 2010–2016 годов для государственных строительных программ.
        </Typography>
      </Box>

      {/* Departments */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {DEPARTMENTS.map((d, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper elevation={0} sx={{ border: '1px solid #E2E8F0', borderRadius: 3, p: 3, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                <Box sx={{ p: 1, borderRadius: 2, background: '#EFF6FF' }}>{d.icon}</Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0F172A' }}>{d.title}</Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#64748B', mb: 2, lineHeight: 1.7 }}>{d.desc}</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {d.types.map(t => (
                  <Chip key={t} label={t} size="small" sx={{ background: '#F1F5F9', color: '#334155', fontSize: 11 }} />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Services */}
        <Grid item xs={12} md={7}>
          <Paper elevation={0} sx={{ border: '1px solid #E2E8F0', borderRadius: 3, p: 3.5 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', mb: 2 }}>
              Перечень услуг
            </Typography>
            <List dense>
              {SERVICES.map((s, i) => (
                <ListItem key={i} sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircle sx={{ color: '#0369A1', fontSize: 18 }} />
                  </ListItemIcon>
                  <ListItemText primary={s} primaryTypographyProps={{ variant: 'body2', color: '#334155' }} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Archive 2010-2016 */}
        <Grid item xs={12} md={5}>
          <Paper elevation={0} sx={{ border: '1px solid #E2E8F0', borderRadius: 3, p: 3.5 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', mb: 0.5 }}>
              Архив проектов 2010–2016
            </Typography>
            <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mb: 2 }}>
              Типовые проекты, разработанные в рамках государственных программ
            </Typography>
            {ARCHIVE_PROJECTS.map((p, i) => (
              <Box key={i} sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <Box sx={{ minWidth: 80 }}>
                  <Chip label={p.year} size="small" sx={{ background: '#0369A1', color: '#fff', fontWeight: 700, fontSize: 10 }} />
                </Box>
                <Typography variant="body2" sx={{ color: '#475569', lineHeight: 1.6 }}>{p.desc}</Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 3, p: 3, borderRadius: 3, background: '#FFFBEB', border: '1px solid #FDE68A' }}>
        <Typography variant="body2" sx={{ color: '#78350F', fontWeight: 500 }}>
          Типовые проекты центра применяются в государственных программах жилищного строительства
          и возведения объектов социальной инфраструктуры по всему Казахстану.
        </Typography>
      </Box>
    </Box>
  );
}
