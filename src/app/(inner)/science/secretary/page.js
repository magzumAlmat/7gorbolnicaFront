'use client';
import { Typography, Box, Paper, Grid, Chip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

const duties = [
  { icon: <EventNoteIcon sx={{ color: '#0369A1' }} />, title: 'Подготовка заседаний', desc: 'Организационная подготовка заседаний Учёного совета: формирование повестки, сбор материалов, уведомление членов совета.' },
  { icon: <FolderOpenIcon sx={{ color: '#0369A1' }} />, title: 'Документооборот', desc: 'Ведение протоколов и решений Учёного совета, хранение архива научной документации института.' },
  { icon: <PersonIcon sx={{ color: '#0369A1' }} />, title: 'Координация', desc: 'Взаимодействие с научными подразделениями, внешними организациями и государственными органами по вопросам научной деятельности.' },
];

export default function SecretaryPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: '#0F172A' }}>
        Учёный секретарь
      </Typography>
      <Chip label="Организация научной деятельности" sx={{ bgcolor: '#0369A1', color: '#fff', mb: 3, fontWeight: 600 }} />

      <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#334155', mb: 4 }}>
        Учёный секретарь КазНИИСА обеспечивает организационную и документационную поддержку научной
        деятельности института. Осуществляет координацию между научными подразделениями, руководством
        и Учёным советом, а также взаимодействие с внешними научными и государственными организациями.
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {duties.map((d) => (
          <Grid item xs={12} md={4} key={d.title}>
            <Paper sx={{ p: 3, borderRadius: 2, border: '1px solid #E2E8F0', height: '100%' }}>
              <Box sx={{ mb: 1.5 }}>{d.icon}</Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', mb: 1 }}>{d.title}</Typography>
              <Typography sx={{ color: '#64748B', lineHeight: 1.7, fontSize: '0.95rem' }}>{d.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ p: 3, bgcolor: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 2 }}>
        <Typography sx={{ color: '#334155', lineHeight: 1.8 }}>
          Для получения актуальной контактной информации об учёном секретаре и записи на консультацию
          обращайтесь в приёмную КазНИИСА по телефону или электронной почте, указанным в разделе «Контакты».
        </Typography>
      </Paper>
    </Box>
  );
}
