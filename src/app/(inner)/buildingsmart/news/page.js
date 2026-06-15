'use client';
import { Typography, Box, Grid, Divider, Paper, Chip } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import PublicIcon from '@mui/icons-material/Public';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

const news = [
  {
    title: 'buildingSMART Kazakhstan Awards & StudentSMART Cup 2025',
    date: 'Октябрь 2025',
    category: 'Событие года',
    color: AMBER,
    icon: <EmojiEventsIcon />,
    desc: 'Одно из важнейших событий года в области цифрового строительства — buildingSMART Kazakhstan Awards & StudentSMART Cup 2025 — состоялось в Алматы. Мероприятие объединило ведущих специалистов отрасли, молодых инженеров и представителей государственных структур.',
  },
  {
    title: 'Делегация КазНИИСА на 19-й Всемирной конференции по сейсмоизоляции (США)',
    date: '2025',
    category: 'Международное участие',
    color: '#0369A1',
    icon: <PublicIcon />,
    desc: 'Делегация АО «КазНИИСА» приняла участие в 19-й Всемирной конференции по сейсмической изоляции, состоявшейся в США. Участие позволило обменяться опытом с ведущими мировыми экспертами в области сейсмостойкого строительства.',
  },
  {
    title: 'Engineering Center LTD — первый корпоративный участник-член BuildingSMART Казахстан',
    date: '2025',
    category: 'Членство',
    color: '#059669',
    icon: <GroupsIcon />,
    desc: 'Компания Engineering Center LTD стала первым корпоративным участником-членом BuildingSMART Казахстан. Это знаменательное событие отражает растущий интерес казахстанского строительного бизнеса к международным openBIM-стандартам.',
  },
];

const upcomingEvents = [
  { title: 'buildingSMART International Summit', date: '18 марта 2025', location: 'Сингапур' },
  { title: 'BIM Клуб Центральной Азии', date: '7 апреля 2025', location: 'Алматы' },
  { title: 'BuildingSMART Kazakhstan Conference & Awards', date: '23 октября 2025', location: 'Алматы' },
];

export default function NewsBuildingsmartPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Новости BuildingSMART Казахстан
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 2 }} />
      <Chip label="BuildingSMART Казахстан" sx={{ bgcolor: '#0369A1', color: '#fff', fontWeight: 600, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        Актуальные новости и события BuildingSMART Казахстан — официального представителя
        международной организации buildingSMART в Республике Казахстан с марта 2024 года.
        Следите за достижениями, мероприятиями и развитием openBIM-сообщества в стране.
      </Typography>

      {/* News */}
      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Последние новости
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={3} sx={{ mb: 5 }}>
        {news.map((item) => (
          <Grid item xs={12} key={item.title}>
            <Paper
              sx={{
                p: 3,
                borderRadius: 2,
                border: '1px solid #E2E8F0',
                borderLeft: `4px solid ${item.color}`,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: 1,
                  mb: 1.5,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY }}>
                  {item.title}
                </Typography>
                <Chip
                  label={item.category}
                  size="small"
                  sx={{ bgcolor: item.color, color: '#fff', fontWeight: 600 }}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#64748B', mb: 1.5 }}>
                <CalendarTodayIcon sx={{ fontSize: 16 }} />
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 600 }}>{item.date}</Typography>
              </Box>
              <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
                {item.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Upcoming events */}
      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Предстоящие мероприятия
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Box
        sx={{
          borderLeft: '4px solid #F59E0B',
          pl: 3,
          py: 2,
          bgcolor: '#FAFAFA',
          mb: 3,
          borderRadius: '0 8px 8px 0',
        }}
      >
        {upcomingEvents.map((ev, i) => (
          <Box
            key={ev.title}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 1,
              py: 1,
              borderBottom: i < upcomingEvents.length - 1 ? '1px solid #E2E8F0' : 'none',
            }}
          >
            <Typography sx={{ fontWeight: 600, color: NAVY }}>{ev.title}</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography sx={{ fontSize: '0.9rem', color: '#64748B' }}>{ev.date}</Typography>
              <Typography sx={{ fontSize: '0.9rem', color: '#64748B' }}>{ev.location}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
