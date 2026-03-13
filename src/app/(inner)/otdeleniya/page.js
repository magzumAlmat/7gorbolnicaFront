import React from 'react';
import { Typography, Box, Paper, Grid } from '@mui/material';
import { LocalHospital } from '@mui/icons-material';

export default function OtdeleniyaPage() {
  return (
    <Box>
      <Typography variant="body1" paragraph>
        Городская клиническая больница №7 имеет в своем составе более 30 структурных подразделений, включая 19 клинических и 9 параклинических отделений.
      </Typography>
      <Grid container spacing={3}>
        {['Хирургия', 'Терапия', 'Гинекология', 'Нейрохирургия', 'Реанимация', 'Диагностика'].map((dept) => (
          <Grid item xs={12} sm={6} key={dept}>
            <Paper elevation={0} sx={{ p: 3, bgcolor: '#f8f9fa', borderLeft: '4px solid #2887B6' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocalHospital sx={{ color: '#2887B6', mr: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>{dept}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}