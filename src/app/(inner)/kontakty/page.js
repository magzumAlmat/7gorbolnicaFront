import React from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';
import { Phone, LocationOn, Email, AccessTime } from '@mui/icons-material';

export default function KontaktyPage() {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Контактная информация</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOn sx={{ color: '#2887B6', mr: 2 }} />
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>Адрес</Typography>
                <Typography variant="body2">г. Алматы, мкр. Калкаман-2</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Phone sx={{ color: '#2887B6', mr: 2 }} />
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>Телефон</Typography>
                <Typography variant="body2">+7 (727) 270 90 90</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AccessTime sx={{ color: '#2887B6', mr: 2 }} />
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>Режим работы</Typography>
                <Typography variant="body2">Круглосуточно (экстренная помощь)</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ height: 300, bgcolor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography color="text.secondary">Карта скоро будет добавлена</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}