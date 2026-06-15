'use client';
import { Typography, Box, Divider } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

const meetings = [
  {
    number: '1-Е ЗАСЕДАНИЕ',
    date: '13 ноября 2019',
    time: '09:00 – 19:00',
    location: 'г. Алматы, ул. Кажымукана, д. 49 (отель «Shera Inn Hotel»)',
  },
  {
    number: '2-Е ЗАСЕДАНИЕ',
    date: '25 декабря 2020',
    time: '14:00 – 19:00',
    location: '3 микрорайон 44А, г. Алматы',
  },
  {
    number: '3-Е ЗАСЕДАНИЕ',
    date: '9 июля 2021',
    time: '14:00 – 19:00',
    location: '3 микрорайон 44А, г. Алматы',
  },
  {
    number: '4-Е ЗАСЕДАНИЕ',
    date: '4 июля 2022',
    time: '14:00 – 19:00',
    location: 'г. Бишкек',
  },
];

export default function Meetings() {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}>
        Заседания
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        В рамках деятельности Базовой организации государств — участников СНГ по сейсмостойкому строительству (БОСС) проводятся регулярные заседания с участием представителей стран СНГ.
      </Typography>

      {meetings.map((meeting, idx) => (
        <Box
          key={idx}
          sx={{
            mb: 3,
            p: 3,
            border: '1px solid #E2E8F0',
            borderRadius: 2,
            borderLeft: '4px solid #F59E0B',
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Exo 2", sans-serif',
              fontWeight: 700,
              fontSize: '1.1rem',
              color: NAVY,
              mb: 1,
            }}
          >
            {meeting.number}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              <strong>Дата:</strong> {meeting.date}
            </Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              <strong>Время:</strong> {meeting.time}
            </Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              <strong>Место:</strong> {meeting.location}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
