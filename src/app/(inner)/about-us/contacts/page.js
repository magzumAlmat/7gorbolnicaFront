'use client';
import { Typography, Box, Paper, Grid, Chip, Divider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const NAVY = '#0F172A';
const ACCENT = '#0369A1';
const AMBER = '#F59E0B';
const BG = '#F8FAFC';

const offices = [
  {
    name: 'Главный офис — Алматы',
    address: 'г. Алматы, 3-й микрорайон, 44А',
    phone: '+7 (727) 291-87-99',
    email: 'info@kazniisa.kz',
    hours: 'Пн–Пт: 09:00–18:00',
    primary: true,
  },
  {
    name: 'Восточно-Казахстанский филиал',
    address: 'Восточно-Казахстанская область',
    phone: '+7 (7232) XX-XX-XX',
    email: 'vk@kazniisa.kz',
    hours: 'Пн–Пт: 09:00–18:00',
  },
  {
    name: 'Южно-Казахстанский филиал',
    address: 'г. Тараз',
    phone: '+7 (7262) XX-XX-XX',
    email: 'yk@kazniisa.kz',
    hours: 'Пн–Пт: 09:00–18:00',
  },
  {
    name: 'Астанинский филиал',
    address: 'г. Астана',
    phone: '+7 (7172) XX-XX-XX',
    email: 'astana@kazniisa.kz',
    hours: 'Пн–Пт: 09:00–18:00',
  },
  {
    name: 'Отдел кадров',
    address: 'г. Алматы, 3-й микрорайон, 44А',
    phone: '+7 (727) 291-87-99',
    email: 'hr@kazniisa.kz',
    hours: 'Пн–Пт: 09:00–17:00',
  },
];

export default function ContactsPage() {
  return (
    <Box>
      <Chip label="Контакты" size="small" sx={{ bgcolor: AMBER, color: NAVY, fontWeight: 700, mb: 1.5, fontFamily: '"Roboto Mono", monospace' }} />
      <Typography variant="h4" sx={{ fontWeight: 800, color: NAVY, mb: 1, fontFamily: '"Exo 2", sans-serif' }}>
        Контакты
      </Typography>
      <Box sx={{ width: 60, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 4 }} />

      <Grid container spacing={2.5}>
        {offices.map((o, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Paper elevation={0} sx={{
              p: 3, border: `1px solid ${o.primary ? ACCENT : '#E2E8F0'}`,
              borderRadius: 3, bgcolor: o.primary ? `${ACCENT}06` : BG, height: '100%',
            }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem', mb: 2, fontFamily: '"Exo 2", sans-serif' }}>
                {o.name}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                  <LocationOnIcon sx={{ fontSize: 16, color: '#94A3B8', mt: 0.2, flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '0.88rem', color: '#334155' }}>{o.address}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneIcon sx={{ fontSize: 16, color: '#94A3B8', flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '0.88rem', color: '#334155', fontFamily: '"Roboto Mono", monospace' }}>{o.phone}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmailIcon sx={{ fontSize: 16, color: '#94A3B8', flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '0.88rem', color: ACCENT, fontFamily: '"Roboto Mono", monospace' }}>{o.email}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccessTimeIcon sx={{ fontSize: 16, color: '#94A3B8', flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '0.82rem', color: '#64748B' }}>{o.hours}</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
