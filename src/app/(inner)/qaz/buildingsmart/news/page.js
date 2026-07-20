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
    title: 'Реестр участников buildingSmart kazakhstan',
    icon: <GroupsIcon />,
    color: BLUE,
  },
  {
    title: 'Бюллетень buildingSmart kazakhstan, апрель 2026',
    icon: <PublicIcon />,
    color: '#0284C7',
  },
  {
    title: 'Тәуелсіздік күнімен құттықтаймыз!',
    icon: <PublicIcon />,
    color: '#059669',
  },
  {
    title: 'Алматыда цифрлық құрылыс саласындағы жылдың ең маңызды оқиғаларының бірі — BuildingSMART Kazakhstan Awards & StudentSMART Cup 2025 өтті',
    icon: <EmojiEventsIcon />,
    color: BLUE,
  },
  {
    title: '«ҚазҚСҒЗИ» АҚ делегациясы АҚШ-та өткен сейсмикалық оқшаулау жөніндегі 19-шы Дүниежүзілік конференцияға қатысты',
    icon: <PublicIcon />,
    color: '#0284C7',
  },
  {
    title: 'Бюллетень buildingSmart kazakhstan, сентябрь 2025',
    icon: <PublicIcon />,
    color: '#0284C7',
  },
  {
    title: 'Қазақстандағы buildingSMART және Бразилиядағы buildingSMART ұйымдарының онлайн-кездесуі: құрылыс саласындағы цифрлық трансформация тәжірибесімен алмасу',
    icon: <HandshakeIcon />,
    color: '#059669',
  },
  {
    title: 'Орталық Азия BIM Клубының кездесу қорытындылары: құрылыс саласындағы цифрлық ынтымақтастықты нығайту',
    icon: <GroupsIcon />,
    color: '#059669',
  },
  {
    title: '«Engineering center LTD» компаниясы «ҚазҚСҒЗИ» АҚ базасында құрылған «buildingSMART Kazakhstan» ұйымының алғашқы корпоративтік қатысушысы атанды',
    icon: <GroupsIcon />,
    color: '#059669',
  },
  {
    title: '«ҚазҚСҒЗИ» АҚ құрылыс саласын цифрландырудың ашық стандарттарын дамыту бойынша стратегиялық талқылауға қатысты',
    icon: <GroupsIcon />,
    color: BLUE,
  },
  {
    title: '«ҚазҚСҒЗИ» АҚ  Сингапурдағы buildingSMART International Summit – 2025 құрылыс цифрландыру жөніндегі жаһандық саммитіне қатысуда',
    icon: <PublicIcon />,
    color: BLUE,
  },
  {
    title: 'Astana Construction Forum-да құрылыс саласындағы BIM маңыздылығы туралы айтылды',
    icon: <PublicIcon />,
    color: '#0284C7',
  },
  {
    title: 'Қазақстандағы құрылыс саласын цифрландыру перспективалары',
    icon: <GroupsIcon />,
    color: '#0284C7',
  },
  {
    title: 'BIM - дегі деректерді басқарудың өзекті мәселелері мен практикалық кейстері «ҚазҚСҒЗИ» АҚ-да өткен семинарда талқыланды',
    icon: <GroupsIcon />,
    color: '#0284C7',
  },
  {
    title: 'АО «КазНИИСА» получило статус официального представительства buildingSMART',
    icon: <EmojiEventsIcon />,
    color: BLUE,
  },
];

export default function NewsBuildingsmartPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Жаңалықтар
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 2 }} />
      <Chip label="BuildingSMART Kazakhstan" sx={{ bgcolor: BLUE, color: '#fff', fontWeight: 600, mb: 4 }} />

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
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.05rem' }}>
                  {item.title}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
