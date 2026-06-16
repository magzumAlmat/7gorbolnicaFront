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
    title: 'buildingSMART International Summit — Singapore 2025',
    date: '18 марта 2025',
    time: '09:00–18:30',
    location: 'Сингапур',
    type: 'Международный саммит',
    color: BLUE,
    icon: <PublicIcon />,
    desc: 'Ежегодный международный саммит buildingSMART — ключевое событие мирового BIM-сообщества. Участники обмениваются опытом по внедрению openBIM-стандартов на глобальном уровне. Представители КазНИИСА и BuildingSMART Казахстан приняли участие в мероприятии.',
  },
  {
    title: 'BIM Клуб Центральной Азии',
    date: '7 апреля 2025',
    time: '09:00–18:30',
    location: '3 микрорайон 44А, Алматы',
    type: 'Региональное мероприятие',
    color: '#059669',
    icon: <EventIcon />,
    desc: 'Региональная встреча специалистов в области BIM из стран Центральной Азии. Площадка для обмена практическим опытом внедрения технологий информационного моделирования в строительных проектах.',
  },
  {
    title: 'BuildingSMART Kazakhstan Conference & Awards',
    date: '23 октября 2025',
    time: '09:00–19:00',
    location: 'проспект Аль-Фараби 77/7, Алматы',
    type: 'Конференция и награждение',
    color: BLUE,
    icon: <EventIcon />,
    desc: 'Ежегодная конференция BuildingSMART Казахстан с церемонией награждения лучших проектов и специалистов в области BIM — ключевое событие для BIM-сообщества страны. Включает StudentSMART Cup 2025.',
  },
];

export default function EventsBuildingsmartPage() {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontWeight: 800, color: NAVY, mb: 1 }}>
        Мероприятия BuildingSMART
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 2 }} />
      <Chip label="BuildingSMART Казахстан" sx={{ bgcolor: BLUE, color: '#fff', fontWeight: 600, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        BuildingSMART Казахстан организует и участвует в международных и региональных мероприятиях
        по продвижению BIM-технологий и openBIM-стандартов в строительной отрасли. С марта 2024 года
        Казахстан является официальным представителем buildingSMART International.
      </Typography>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Ближайшие мероприятия
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

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

              <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
                {e.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
