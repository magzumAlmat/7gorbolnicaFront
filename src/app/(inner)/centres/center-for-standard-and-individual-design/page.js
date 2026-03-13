'use client';

import { Typography, Box, Grid, Paper } from '@mui/material';

export default function DesignCenterPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Центр типового проектирования
      </Typography>
      
      <Typography variant="body1" paragraph>
        Центр занимается созданием типовых проектов зданий и сооружений массового применения (школы, больницы, жилые дома), 
        что позволяет значительно сократить сроки и стоимость проектирования.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 4, bgcolor: '#f5f5f5', textAlign: 'center' }}>
            <Typography variant="h5" color="#2887B6" fontWeight={700}>1000+</Typography>
            <Typography variant="body2" color="text.secondary">разработанных типовых проектов</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
