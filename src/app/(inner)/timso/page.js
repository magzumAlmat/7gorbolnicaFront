'use client';
import { Typography, Box, Paper, Grid, Chip, Divider } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const meetings = [
  { date: 'Август 2018', location: 'Алматы', desc: 'Первое заседание комиссии СНГ по нормативному регулированию BIM. Обсуждение концепции межгосударственного сотрудничества в сфере ТИМСО.' },
  { date: 'Октябрь 2018', location: 'Москва', desc: 'Второе заседание. Согласование подходов к разработке единых стандартов информационного моделирования для стран СНГ.' },
  { date: 'Март 2019', location: 'Москва', desc: 'Третье заседание. Рассмотрение проектов межгосударственных стандартов (ГОСТ) и планов работ комиссии.' },
  { date: 'Май 2019', location: 'Минск', desc: 'Четвёртое заседание. Утверждение дорожной карты по гармонизации BIM-нормативной базы в странах Содружества.' },
];

export default function TimsoPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: '#0F172A' }}>
        ТИМСО
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
        <Chip label="Технология информационного моделирования" sx={{ bgcolor: '#0369A1', color: '#fff', fontWeight: 600 }} />
        <Chip label="Строительных объектов" sx={{ bgcolor: '#0F172A', color: '#fff', fontWeight: 600 }} />
      </Box>

      <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#334155', mb: 4 }}>
        ТИМСО (Технология информационного моделирования строительных объектов) — казахстанское
        обозначение технологии BIM (Building Information Modeling). КазНИИСА является национальным
        центром компетенций по разработке нормативной базы ТИМСО и международного сотрудничества
        в этой области.
      </Typography>

      <Paper sx={{ p: 3, mb: 4, bgcolor: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <PublicIcon sx={{ color: '#0369A1' }} />
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
            Международное сотрудничество — Комиссия СНГ
          </Typography>
        </Box>
        <Typography sx={{ color: '#334155', lineHeight: 1.8 }}>
          КазНИИСА принимает активное участие в работе межгосударственной комиссии СНГ по формированию
          нормативно-правовой базы BIM. Комиссия объединяет представителей России, Казахстана,
          Беларуси и других стран Содружества для гармонизации стандартов информационного моделирования.
        </Typography>
      </Paper>

      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#0F172A' }}>
        Заседания комиссии СНГ
      </Typography>

      <Box sx={{ position: 'relative' }}>
        <Box sx={{ position: 'absolute', left: 20, top: 0, bottom: 0, width: 2, bgcolor: '#E2E8F0' }} />
        <Grid container spacing={2}>
          {meetings.map((m, i) => (
            <Grid item xs={12} key={i}>
              <Box sx={{ pl: 6, position: 'relative' }}>
                <Box sx={{ position: 'absolute', left: 12, top: 20, width: 18, height: 18, borderRadius: '50%', bgcolor: '#0369A1', border: '3px solid #fff', boxShadow: '0 0 0 2px #0369A1' }} />
                <Paper sx={{ p: 3, borderRadius: 2, border: '1px solid #E2E8F0' }}>
                  <Box sx={{ display: 'flex', gap: 3, mb: 1.5, flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#0369A1' }}>
                      <EventIcon sx={{ fontSize: 18 }} />
                      <Typography sx={{ fontWeight: 700, fontSize: '0.95rem' }}>{m.date}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#64748B' }}>
                      <LocationOnIcon sx={{ fontSize: 18 }} />
                      <Typography sx={{ fontSize: '0.9rem' }}>{m.location}</Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ color: '#334155', lineHeight: 1.7 }}>{m.desc}</Typography>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
