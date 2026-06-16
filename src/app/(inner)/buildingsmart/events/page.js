'use client';
import { Typography, Box, Paper, Grid, Chip } from '@mui/material';
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
    title: 'buildingSMART International Summit Singapore 2025',
    date: '18 марта 2025',
    location: 'Сингапур',
    type: 'Международный саммит',
    color: BLUE,
    icon: <PublicIcon />,
    desc: 'Ежегодный международный саммит buildingSMART — ключевое событие мирового BIM-сообщества. Представители КазНИИСА и BuildingSMART Казахстан приняли участие в обмене опытом по внедрению openBIM-стандартов.',
  },
  {
    title: 'BIM Клуб Центральной Азии',
    date: '7 апреля 2025',
    location: 'Алматы',
    type: 'Региональное мероприятие',
    color: '#059669',
    icon: <EventIcon />,
    desc: 'Региональная встреча специалистов в области BIM из стран Центральной Азии. Площадка для обмена практическим опытом внедрения технологий информационного моделирования в строительных проектах.',
  },
  {
    title: 'BuildingSMART Kazakhstan Conference & Awards',
    date: '23 октября 2025',
    location: 'Алматы',
    type: 'Конференция и награждение',
    color: BLUE,
    icon: <EventIcon />,
    desc: 'Ежегодная конференция BuildingSMART Казахстан с церемонией награждения лучших проектов и специалистов в области BIM. Ключевое событие для BIM-сообщества страны.',
  },
];

export default function EventsPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: NAVY }}>
        Мероприятия
      </Typography>
      <Chip label="BuildingSMART Казахстан" sx={{ bgcolor: BLUE, color: '#fff', mb: 3, fontWeight: 600 }} />

      <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#334155', mb: 4 }}>
        BuildingSMART Казахстан организует и участвует в международных и региональных мероприятиях
        по продвижению BIM-технологий и openBIM-стандартов в строительной отрасли.
      </Typography>

      <Grid container spacing={3}>
        {events.map((e, idx) => {
          const eventPhotos = [
            '/images/kazniisa/buildingsmart-session.webp',
            '/images/kazniisa/bim-club-ca.webp',
            null,
          ];
          return (
            <Grid item xs={12} key={e.title}>
              <Paper sx={{
                p: 3,
                borderRadius: '6px',
                border: '1px solid ' + BORDER,
                borderLeft: `4px solid ${e.color}`,
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
              }}>
                {eventPhotos[idx] && (
                  <Box component="img" src={eventPhotos[idx]} alt={e.title} sx={{ width: '100%', maxWidth: 600, borderRadius: '6px', mb: 2 }} />
                )}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY }}>{e.title}</Typography>
                  <Chip label={e.type} size="small" sx={{ bgcolor: e.color, color: '#fff', fontWeight: 600 }} />
                </Box>
                <Box sx={{ display: 'flex', gap: 3, mb: 2, flexWrap: 'wrap' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: GRAY_TEXT }}>
                    <EventIcon sx={{ fontSize: 18 }} />
                    <Typography sx={{ fontSize: '0.9rem', fontWeight: 600 }}>{e.date}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: GRAY_TEXT }}>
                    <LocationOnIcon sx={{ fontSize: 18 }} />
                    <Typography sx={{ fontSize: '0.9rem' }}>{e.location}</Typography>
                  </Box>
                </Box>
                <Typography sx={{ color: '#334155', lineHeight: 1.7 }}>{e.desc}</Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
