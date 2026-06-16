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
    title: '«Цифровое будущее строительства» — стратегическая сессия BuildingSMART Казахстан',
    date: '5 июня 2026',
    category: 'Стратегическая сессия',
    color: BLUE,
    icon: <GroupsIcon />,
    desc: 'В Алматы состоялась стратегическая сессия «Цифровое будущее строительства», организованная BuildingSMART Казахстан. Обсуждались приоритеты внедрения BIM и цифровых технологий в строительную отрасль.',
  },
  {
    title: 'Укрепление сотрудничества с Китаем по стандартам строительства',
    date: '2 июня 2026',
    category: 'Сотрудничество',
    color: '#059669',
    icon: <HandshakeIcon />,
    desc: 'АО «КазНИИСА» развивает партнёрство с Китаем в области нормирования и ценообразования в строительстве. Обсуждены вопросы гармонизации стандартов и обмена опытом.',
  },
  {
    title: 'XVII Международная конференция «Инновации и передовые решения» (Бишкек)',
    date: '28–29 мая 2026',
    category: 'Конференция',
    color: '#0284C7',
    icon: <PublicIcon />,
    desc: 'Специалисты АО «КазНИИСА» приняли участие в XVII Международной научно-практической конференции «Инновации и передовые решения» в Бишкеке.',
  },
  {
    title: 'Project Professionals Summit 2026',
    date: '18 мая 2026',
    category: 'Саммит',
    color: BLUE,
    icon: <PublicIcon />,
    desc: 'Мероприятие прошло в Executive Education Center Университета КИМЭП. Обсуждались современные подходы к управлению проектами и цифровизации строительной отрасли.',
  },
  {
    title: 'buildingSMART Kazakhstan Awards & StudentSMART Cup 2025',
    date: 'Октябрь 2025',
    category: 'Событие года',
    color: BLUE,
    icon: <EmojiEventsIcon />,
    desc: 'Одно из важнейших событий года в области цифрового строительства — buildingSMART Kazakhstan Awards & StudentSMART Cup 2025 — состоялось в Алматы. Мероприятие объединило ведущих специалистов отрасли, молодых инженеров и представителей государственных структур.',
  },
  {
    title: 'Engineering Center LTD — первый корпоративный участник BuildingSMART Казахстан',
    date: '2025',
    category: 'Членство',
    color: '#059669',
    icon: <GroupsIcon />,
    desc: 'Компания Engineering Center LTD стала первым корпоративным участником-членом BuildingSMART Казахстан, что отражает растущий интерес строительного бизнеса к международным openBIM-стандартам.',
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
