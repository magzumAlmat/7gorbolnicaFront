'use client';
import { Typography, Box, Divider } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BORDER = '#E2E8F0';

const meetings = [
  {
    number: '1-НШІ ОТЫРЫС',
    date: 'Қараша 13, 2019',
    time: '09:00 - 19:00',
    location: 'Алматы қаласы, Қажымұқан көшесі, 49 үй ("Shera Inn Hotel" қонақ үйі)',
  },
  {
    number: '2-НШІ ОТЫРЫС',
    date: 'Желтоқсан 25, 2020',
    time: '14:00 - 19:00',
    location: '3 шағынауданы 44а Алматы қ.',
  },
  {
    number: '3-НШІ ОТЫРЫС',
    date: 'Шілде 9, 2021',
    time: '14:00 - 19:00',
    location: '3 шағынауданы 44а Алматы қ.',
  },
  {
    number: '4-НШІ ОТЫРЫС',
    date: 'Шілде 4, 2022',
    time: '14:00 - 19:00',
    location: 'Бішкек қ.',
  },
];

export default function Meetings() {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontWeight: 800, color: NAVY, mb: 1 }}>
        Отырыстар
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 4 }} />

      {meetings.map((meeting, idx) => (
        <Box
          key={idx}
          sx={{
            mb: 3,
            p: 3,
            border: '1px solid ' + BORDER,
            borderRadius: '6px',
            borderLeft: '4px solid ' + BLUE,
            transition: 'box-shadow 0.2s ease, transform 0.2s ease',
            '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
          }}
        >
          <Typography
            sx={{
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
              {meeting.date} · {meeting.time}
            </Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              {meeting.location}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
