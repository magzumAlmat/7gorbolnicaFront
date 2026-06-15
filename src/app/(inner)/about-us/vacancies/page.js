'use client';
import { Typography, Box, Paper, Grid, Chip } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const NAVY = '#0F172A';
const ACCENT = '#0369A1';
const AMBER = '#F59E0B';
const BG = '#F8FAFC';

const vacancies = [
  {
    title: 'Юрисконсульт',
    address: '3 мкр 44А, Алматы',
    date: '3 декабря 2025',
    desc: 'Правовое сопровождение деятельности института, подготовка договоров и юридических заключений.',
  },
  {
    title: 'Главный специалист сектора закупок',
    address: 'Алматы',
    date: '22 апреля 2025',
    desc: 'Организация и проведение закупочных процедур в соответствии с законодательством РК.',
  },
  {
    title: 'Специалист по охране труда',
    address: 'Алматы',
    date: '21 апреля 2025',
    desc: 'Обеспечение соблюдения требований охраны труда и промышленной безопасности.',
  },
  {
    title: 'Помощник системного администратора',
    address: 'Алматы',
    date: '24 февраля 2025',
    desc: 'Поддержка ИТ-инфраструктуры, администрирование серверов и рабочих станций.',
  },
];

export default function VacanciesPage() {
  return (
    <Box>
      <Chip label="Вакансии" size="small" sx={{ bgcolor: AMBER, color: NAVY, fontWeight: 700, mb: 1.5, fontFamily: '"Roboto Mono", monospace' }} />
      <Typography variant="h4" sx={{ fontWeight: 800, color: NAVY, mb: 1, fontFamily: '"Exo 2", sans-serif' }}>
        Вакансии
      </Typography>
      <Box sx={{ width: 60, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 2 }} />
      <Typography sx={{ color: '#64748B', mb: 4, fontSize: '0.95rem' }}>
        Мы ищем квалифицированных специалистов, готовых развиваться вместе с нами. Отправьте резюме на электронный адрес института.
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        {vacancies.map((v, i) => (
          <Paper key={i} elevation={0} sx={{ p: 3, border: '1px solid #E2E8F0', borderRadius: 3, bgcolor: BG }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, mb: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{ p: 1, bgcolor: `${ACCENT}15`, borderRadius: 2, display: 'flex' }}>
                  <WorkIcon sx={{ color: ACCENT, fontSize: 22 }} />
                </Box>
                <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem' }}>{v.title}</Typography>
              </Box>
              <Chip label="Открыта" size="small" sx={{ bgcolor: '#D1FAE5', color: '#065F46', fontWeight: 600, fontSize: '0.75rem' }} />
            </Box>
            <Typography sx={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.6, mb: 2 }}>{v.desc}</Typography>
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.7 }}>
                <LocationOnIcon sx={{ fontSize: 15, color: '#94A3B8' }} />
                <Typography sx={{ fontSize: '0.82rem', color: '#64748B', fontFamily: '"Roboto Mono", monospace' }}>{v.address}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.7 }}>
                <CalendarTodayIcon sx={{ fontSize: 15, color: '#94A3B8' }} />
                <Typography sx={{ fontSize: '0.82rem', color: '#64748B', fontFamily: '"Roboto Mono", monospace' }}>{v.date}</Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>

      <Paper elevation={0} sx={{ mt: 4, p: 3, bgcolor: NAVY, borderRadius: 3 }}>
        <Typography sx={{ color: '#CBD5E1', fontSize: '0.9rem', lineHeight: 1.7 }}>
          По вопросам трудоустройства обращайтесь в отдел кадров АО «КазНИИСА» по адресу:{' '}
          <Box component="span" sx={{ color: AMBER, fontFamily: '"Roboto Mono", monospace' }}>hr@kazniisa.kz</Box>
          {' '}или по телефону:{' '}
          <Box component="span" sx={{ color: AMBER, fontFamily: '"Roboto Mono", monospace' }}>+7 (727) 291-87-99</Box>
        </Typography>
      </Paper>
    </Box>
  );
}
