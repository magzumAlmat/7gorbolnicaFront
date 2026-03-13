'use client';

import { Typography, Box, Card, CardContent, Grid } from '@mui/material';

export default function BuildingSmartEventsPage() {
  const events = [
    { title: 'Конференция OpenBIM 2025', date: '15 Мая, 2025', location: 'Алматы' },
    { title: 'Вебинар: Стандарты IFC', date: '20 Апреля, 2025', location: 'Онлайн' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Мероприятия BuildingSMART
      </Typography>
      
      <Grid container spacing={3}>
        {events.map((event, i) => (
          <Grid item xs={12} key={i}>
            <Card elevation={0} sx={{ border: '1px solid #eee' }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={700} color="#2887B6">{event.title}</Typography>
                <Typography variant="body2" color="text.secondary">{event.date} — {event.location}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
