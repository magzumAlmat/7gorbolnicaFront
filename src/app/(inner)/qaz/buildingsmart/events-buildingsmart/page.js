'use client';
import { Typography, Box, Grid, Paper, Chip } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublicIcon from '@mui/icons-material/Public';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const events = [
  {
    title: '«ҚазҚСҒЗИ» АҚ Сингапурдағы buildingSMART International Summit – 2025 құрылыс цифрландыру жөніндегі жаһандық саммитіне қатысуда',
    date: 'Март 18, 2025',
    time: '09:00 - 18:30',
    location: 'Singapore',
    type: 'Международный саммит',
    color: BLUE,
    icon: <PublicIcon />,
  },
  {
    title: 'BIM Клуб Центральной Азии',
    date: 'Апрель 7, 2025',
    time: '09:00 - 18:30',
    location: '3 шағынауданы 44а Алматы қ.',
    type: 'Региональное мероприятие',
    color: '#059669',
    icon: <EventIcon />,
  },
  {
    title: 'BuildingSMART Kazakhstan Conference & Awards',
    date: 'Октябрь 23, 2025',
    time: '09:00 - 19:00',
    location: 'проспект Aль-Фараби 77/7, Алматы',
    type: 'Конференция и награждение',
    color: BLUE,
    icon: <EventIcon />,
  },
];

export default function EventsBuildingsmartPage() {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontWeight: 800, color: NAVY, mb: 1 }}>
        Оқиғалар
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 2 }} />
      <Chip label="BuildingSMART Kazakhstan" sx={{ bgcolor: BLUE, color: '#fff', fontWeight: 600, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        2024 жылдың наурыз айынан бастап Қазақстан құрылыс объектілерін ақпараттық модельдеу
        (BIM) саласындағы стандарттар мен технологияларды әзірлеу және қолдау бойынша жұмыс
        істейтін халықаралық ұйым buildingSmart-тың ресми өкілдігіне айналды.
      </Typography>

      <Grid container spacing={3}>
        {events.map((e) => (
          <Grid item xs={12} key={e.title}>
            <Paper
              sx={{
                p: 3,
                borderRadius: '6px',
                border: '1px solid ' + BORDER,
                borderLeft: `4px solid ${e.color}`,
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: 1,
                  mb: 2,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY }}>
                  {e.title}
                </Typography>
                <Chip
                  label={e.type}
                  size="small"
                  sx={{ bgcolor: e.color, color: '#fff', fontWeight: 600 }}
                />
              </Box>

              <Box sx={{ display: 'flex', gap: 3, mb: 2, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: GRAY_TEXT }}>
                  <EventIcon sx={{ fontSize: 18 }} />
                  <Typography sx={{ fontSize: '0.9rem', fontWeight: 600 }}>
                    {e.date} · {e.time}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: GRAY_TEXT }}>
                  <LocationOnIcon sx={{ fontSize: 18 }} />
                  <Typography sx={{ fontSize: '0.9rem' }}>{e.location}</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
          Сұрақтар қалды ма? Бізге хабарласыңыз.
        </Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mx: 'auto' }} />
      </Box>
    </Box>
  );
}
