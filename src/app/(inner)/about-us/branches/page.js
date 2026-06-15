'use client';
import { Typography, Box, Paper, Grid, Chip, Avatar } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const NAVY = '#0F172A';
const ACCENT = '#0369A1';
const AMBER = '#F59E0B';
const BG = '#F8FAFC';

const branches = [
  {
    name: 'Восточно-Казахстанский филиал',
    director: 'Бегимханова А.А.',
    city: 'Восточный Казахстан',
    year: '2013',
    initials: 'ВКФ',
    color: ACCENT,
  },
  {
    name: 'Южно-Казахстанский филиал',
    director: 'Байтемиров М.Н.',
    city: 'Тараз',
    year: null,
    initials: 'ЮКФ',
    color: '#0891B2',
  },
  {
    name: 'Астанинский филиал',
    director: 'Хасен А.А.',
    city: 'Астана',
    year: null,
    initials: 'АФ',
    color: '#7C3AED',
  },
];

export default function BranchesPage() {
  return (
    <Box>
      <Chip label="Филиалы" size="small" sx={{ bgcolor: AMBER, color: NAVY, fontWeight: 700, mb: 1.5, fontFamily: '"Roboto Mono", monospace' }} />
      <Typography variant="h4" sx={{ fontWeight: 800, color: NAVY, mb: 1, fontFamily: '"Exo 2", sans-serif' }}>
        Филиалы
      </Typography>
      <Box sx={{ width: 60, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 2 }} />
      <Typography sx={{ color: '#64748B', mb: 3, fontSize: '0.95rem' }}>
        АО «КазНИИСА» располагает тремя региональными филиалами, обеспечивающими охват научно-исследовательских и проектных услуг по всей территории Республики Казахстан.
      </Typography>
      <Box component="img" src="/images/kazniisa/branches-map.webp" alt="Карта филиалов КазНИИСА" sx={{ width: '100%', maxWidth: 600, borderRadius: 2, mb: 4 }} />

      <Grid container spacing={3}>
        {branches.map((b, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper elevation={0} sx={{ p: 3.5, border: '1px solid #E2E8F0', borderRadius: 3, bgcolor: BG, height: '100%' }}>
              <Avatar sx={{ bgcolor: b.color, color: '#fff', fontWeight: 700, fontFamily: '"Roboto Mono", monospace', width: 52, height: 52, fontSize: '0.8rem', mb: 2 }}>
                {b.initials}
              </Avatar>
              <Typography sx={{ fontWeight: 800, color: NAVY, fontSize: '1rem', mb: 2, lineHeight: 1.3, fontFamily: '"Exo 2", sans-serif' }}>
                {b.name}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PersonIcon sx={{ fontSize: 16, color: '#94A3B8' }} />
                  <Typography sx={{ fontSize: '0.88rem', color: '#334155' }}>{b.director}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOnIcon sx={{ fontSize: 16, color: '#94A3B8' }} />
                  <Typography sx={{ fontSize: '0.88rem', color: '#334155' }}>{b.city}</Typography>
                </Box>
                {b.year && (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CalendarTodayIcon sx={{ fontSize: 16, color: '#94A3B8' }} />
                    <Typography sx={{ fontSize: '0.88rem', color: '#334155' }}>Создан в {b.year} г.</Typography>
                  </Box>
                )}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
