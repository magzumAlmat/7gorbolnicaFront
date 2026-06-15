'use client';
import { Typography, Box, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Chip, Divider, Avatar } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GavelIcon from '@mui/icons-material/Gavel';

const members = [
  'Республика Казахстан', 'Российская Федерация', 'Республика Беларусь',
  'Украина', 'Республика Узбекистан', 'Республика Кыргызстан',
  'Республика Таджикистан', 'Азербайджанская Республика',
  'Республика Армения', 'Республика Молдова',
];

const missions = [
  'Координация технической политики в области технического регулирования строительной деятельности',
  'Разработка межгосударственных строительных нормативов (МГСН) и сводов правил',
  'Содействие взаимному признанию национальных нормативных документов стран СНГ',
  'Обмен опытом и лучшими практиками в сфере строительной науки и нормирования',
  'Организация совместных научно-технических исследований',
  'Гармонизация национальных строительных норм с международными стандартами',
];

const events = [
  { year: '2024', title: 'XLII заседание БОКС', place: 'Алматы, Казахстан', desc: 'Утверждение плана работ на 2024–2025 годы, рассмотрение проектов межгосударственных стандартов.' },
  { year: '2023', title: 'XLI заседание БОКС', place: 'Минск, Беларусь', desc: 'Принятие резолюции о гармонизации строительных норм в рамках ЕАЭС.' },
  { year: '2022', title: 'XL заседание БОКС', place: 'Москва, Россия', desc: 'Обсуждение вопросов сейсмобезопасности и единых подходов к оценке рисков.' },
  { year: '2021', title: 'XXXIX заседание БОКС', place: 'Ташкент, Узбекистан', desc: 'Утверждение межгосударственных документов по тепловой защите зданий.' },
];

export default function BoccPage() {
  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1e40af 100%)',
          color: '#fff',
          borderRadius: 3,
          p: { xs: 3, md: 5 },
          mb: 4,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <GroupsIcon sx={{ fontSize: 40 }} />
          <Chip label="Межгосударственное сотрудничество" sx={{ bgcolor: '#F59E0B', color: '#0F172A', fontWeight: 700 }} />
        </Box>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
          БОКС — Базовая организация стран СНГ
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.7, mb: 2, fontSize: '0.95rem' }}>
          по стандартизации и нормированию в строительстве
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9, maxWidth: 720 }}>
          КазНИИСА выполняет функции секретариата Базовой организации стран СНГ по стандартизации
          и нормированию в строительстве (БОКС). Организация координирует техническую политику
          в области технического регулирования строительной деятельности государств — участников СНГ.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        {/* Mission */}
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{ borderRadius: 3, p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <GavelIcon sx={{ color: '#0369A1' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
                Миссия и задачи БОКС
              </Typography>
            </Box>
            <List dense disablePadding>
              {missions.map((item, i) => (
                <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start' }}>
                  <ListItemIcon sx={{ minWidth: 28, mt: 0.5 }}>
                    <CheckCircleOutlineIcon sx={{ color: '#0369A1', fontSize: 18 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Members */}
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{ borderRadius: 3, p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <GroupsIcon sx={{ color: '#0369A1' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
                Страны-участницы СНГ
              </Typography>
            </Box>
            <Grid container spacing={1}>
              {members.map((country, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Box
                    sx={{
                      display: 'flex', alignItems: 'center', gap: 1.5,
                      p: 1, borderRadius: 1,
                      bgcolor: i === 0 ? '#EFF6FF' : 'transparent',
                      border: i === 0 ? '1px solid #BFDBFE' : '1px solid transparent',
                    }}
                  >
                    <Avatar sx={{ width: 28, height: 28, bgcolor: '#0369A1', fontSize: '0.75rem', fontWeight: 700 }}>
                      {country.slice(0, 1)}
                    </Avatar>
                    <Typography variant="body2" color={i === 0 ? '#0369A1' : 'text.secondary'} sx={{ fontWeight: i === 0 ? 700 : 400 }}>
                      {country}
                      {i === 0 && <Typography component="span" variant="caption" sx={{ ml: 0.5, color: '#F59E0B', fontWeight: 700 }}>(секретариат)</Typography>}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Recent events */}
        <Grid item xs={12}>
          <Paper elevation={1} sx={{ borderRadius: 3, p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <EventNoteIcon sx={{ color: '#0369A1' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
                Заседания БОКС
              </Typography>
            </Box>
            <Grid container spacing={2}>
              {events.map((ev, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <Box
                    sx={{
                      p: 2, borderRadius: 2,
                      border: '1px solid #E2E8F0',
                      height: '100%',
                      borderTop: i === 0 ? '3px solid #F59E0B' : '3px solid #0369A1',
                    }}
                  >
                    <Chip
                      label={ev.year}
                      size="small"
                      sx={{ bgcolor: '#0F172A', color: '#fff', fontWeight: 700, mb: 1 }}
                    />
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A', mb: 0.5 }}>
                      {ev.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#0369A1', fontWeight: 600, display: 'block', mb: 1 }}>
                      {ev.place}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                      {ev.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Info box */}
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ borderRadius: 2, p: 3, bgcolor: '#F0F9FF', border: '1px solid #BAE6FD' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0369A1', mb: 1 }}>
              О статусе секретариата
            </Typography>
            <Typography variant="body2" color="text.secondary">
              КазНИИСА выполняет функции секретариата БОКС на основании решения Совета глав правительств
              СНГ. Секретариат обеспечивает организационно-техническое сопровождение деятельности БОКС,
              ведение архива нормативных документов, координацию рабочих групп и подготовку
              проектов резолюций заседаний.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
