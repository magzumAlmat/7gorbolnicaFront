'use client';
import { Typography, Box, Grid, Paper, Chip } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import PublicIcon from '@mui/icons-material/Public';
import HandshakeIcon from '@mui/icons-material/Handshake';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const news = [
  {
    title: 'Реестр участников buildingSMART Казахстан',
    date: '',
    category: 'Реестр',
    color: BLUE,
    icon: <GroupsIcon />,
    desc: 'Реестр участников buildingSMART Казахстан.',
  },
  {
    title: 'Бюллетень buildingSMART Казахстан, апрель 2026',
    date: 'Апрель 2026',
    category: 'Бюллетень',
    color: '#0284C7',
    icon: <PublicIcon />,
    desc: 'Бюллетень buildingSMART Казахстан, апрель 2026.',
  },
  {
    title: 'Поздравление с Днём независимости Республики Казахстан',
    date: '',
    category: 'Поздравление',
    color: '#059669',
    icon: <PublicIcon />,
    desc: 'Поздравление с Днём независимости Республики Казахстан.',
  },
  {
    title: 'buildingSMART Kazakhstan Awards & StudentSMART Cup 2025',
    date: 'Октябрь 2025',
    category: 'Событие года',
    color: BLUE,
    icon: <EmojiEventsIcon />,
    desc: 'Одно из важнейших событий года в области цифрового строительства — buildingSMART Kazakhstan Awards & StudentSMART Cup 2025 — состоялось в Алматы.',
  },
  {
    title: 'Участие в Международной конференции по сейсмоизоляции',
    date: 'Сентябрь 2025',
    category: 'Конференция',
    color: '#0284C7',
    icon: <PublicIcon />,
    desc: 'Делегация АО «КазНИИСА» приняла участие в 19-й Всемирной конференции по сейсмоизоляции (США).',
  },
  {
    title: 'Бюллетень buildingSMART Казахстан, сентябрь 2025',
    date: 'Сентябрь 2025',
    category: 'Бюллетень',
    color: '#0284C7',
    icon: <PublicIcon />,
    desc: 'Бюллетень buildingSMART Казахстан, сентябрь 2025.',
  },
  {
    title: 'Онлайн-встреча Казахстан — Бразилия',
    date: 'Май 2025',
    category: 'Сотрудничество',
    color: '#059669',
    icon: <HandshakeIcon />,
    desc: 'Онлайн-встреча по обмену опытом цифровой трансформации строительства между Казахстаном и Бразилией.',
  },
  {
    title: 'Встреча Central Asia BIM Club',
    date: 'Апрель 2025',
    category: 'Сотрудничество',
    color: '#059669',
    icon: <GroupsIcon />,
    desc: 'Встреча Central Asia BIM Club, посвящённая укреплению цифрового сотрудничества в строительной отрасли.',
  },
  {
    title: 'Engineering Center LTD — первый корпоративный участник buildingSMART Казахстан',
    date: 'Апрель 2025',
    category: 'Членство',
    color: '#059669',
    icon: <GroupsIcon />,
    desc: 'Компания Engineering Center LTD стала первым корпоративным участником-членом buildingSMART Казахстан.',
  },
  {
    title: 'Обсуждение развития открытых стандартов',
    date: 'Март 2025',
    category: 'Стандарты',
    color: BLUE,
    icon: <GroupsIcon />,
    desc: 'Стратегическое обсуждение развития открытых стандартов и цифровизации строительства.',
  },
  {
    title: 'buildingSMART International Summit — Сингапур 2025',
    date: 'Март 2025',
    category: 'Саммит',
    color: BLUE,
    icon: <PublicIcon />,
    desc: 'Участие АО «КазНИИСА» в международном саммите buildingSMART по цифровизации (Сингапур).',
  },
  {
    title: 'Выступление на Astana Construction Forum',
    date: 'Октябрь 2024',
    category: 'Форум',
    color: '#0284C7',
    icon: <PublicIcon />,
    desc: 'Выступление на Astana Construction Forum с акцентом на важность BIM для строительной отрасли.',
  },
  {
    title: 'Круглый стол TIMSO',
    date: 'Октябрь 2024',
    category: 'Круглый стол',
    color: '#0284C7',
    icon: <GroupsIcon />,
    desc: 'Круглый стол TIMSO, посвящённый перспективам цифровизации строительства Казахстана.',
  },
  {
    title: 'Семинар по управлению данными BIM',
    date: 'Сентябрь 2024',
    category: 'Семинар',
    color: '#0284C7',
    icon: <GroupsIcon />,
    desc: 'Семинар с практическими кейсами по управлению данными в BIM.',
  },
  {
    title: 'Статус официального представителя buildingSMART',
    date: 'Март 2024',
    category: 'Статус',
    color: BLUE,
    icon: <EmojiEventsIcon />,
    desc: 'АО «КазНИИСА» получило статус официального представителя buildingSMART.',
  },
];

export default function NewsBuildingsmartPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Новости BuildingSMART Казахстан
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 2 }} />
      <Chip label="BuildingSMART Казахстан" sx={{ bgcolor: BLUE, color: '#fff', fontWeight: 600, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        Актуальные новости и события BuildingSMART Казахстан — официального представителя
        международной организации buildingSMART в Республике Казахстан с марта 2024 года.
      </Typography>

      <Grid container spacing={3}>
        {news.map((item) => (
          <Grid item xs={12} key={item.title}>
            <Paper
              sx={{
                p: 3,
                borderRadius: '6px',
                border: '1px solid ' + BORDER,
                borderLeft: `4px solid ${item.color}`,
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1, mb: 1.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.05rem' }}>
                  {item.title}
                </Typography>
                <Chip label={item.category} size="small" sx={{ bgcolor: item.color, color: '#fff', fontWeight: 600 }} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: GRAY_TEXT, mb: 1.5 }}>
                <CalendarTodayIcon sx={{ fontSize: 16 }} />
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 600 }}>{item.date}</Typography>
              </Box>
              <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>
                {item.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
