'use client';

import { Typography, Box, Grid, Paper } from '@mui/material';
import { EmojiEvents } from '@mui/icons-material';

export default function AwardsPage() {
  const awards = [
    { title: 'Лидер отрасли 2023', year: '2023', desc: 'За вклад в развитие строительной науки Казахстана.' },
    { title: 'Лучший научно-исследовательский институт', year: '2022', desc: 'Премия в области архитектуры и строительства.' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Награды и достижения
      </Typography>
      
      <Grid container spacing={3}>
        {awards.map((award, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Paper elevation={0} sx={{ p: 3, border: '1px solid #eee', display: 'flex', gap: 2, alignItems: 'center' }}>
              <EmojiEvents sx={{ fontSize: 40, color: '#FDE428' }} />
              <Box>
                <Typography variant="subtitle1" fontWeight={700} color="#002e5b">{award.title}</Typography>
                <Typography variant="caption" color="text.secondary">{award.year}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>{award.desc}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
