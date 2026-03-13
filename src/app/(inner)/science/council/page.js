'use client';

import { Typography, Box, Avatar, Grid, Paper } from '@mui/material';

export default function CouncilPage() {
  const members = [
    { name: 'Кульбаев Бегман Бахытович', role: 'Председатель Ученого совета', pos: 'Генеральный директор АО «КазНИИСА»' },
    { name: 'Имя Фамилия', role: 'Заместитель председателя', pos: 'Заместитель генерального директора' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Ученый совет
      </Typography>
      
      <Typography variant="body1" paragraph>
        Ученый совет АО «КазНИИСА» является постоянно действующим коллегиальным органом, 
        осуществляющим общее руководство научно-исследовательской и научно-технической деятельностью Общества.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        {members.map((person, i) => (
          <Grid item xs={12} key={i}>
            <Paper elevation={0} sx={{ p: 3, border: '1px solid #eee', display: 'flex', gap: 3, alignItems: 'center' }}>
              <Avatar sx={{ width: 80, height: 80, bgcolor: '#f0f0f0' }} />
              <Box>
                <Typography variant="subtitle1" fontWeight={700} color="#2887B6">{person.name}</Typography>
                <Typography variant="body2" fontWeight={600}>{person.role}</Typography>
                <Typography variant="caption" color="text.secondary">{person.pos}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
