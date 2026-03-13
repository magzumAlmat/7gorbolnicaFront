'use client';

import { Typography, Box, Grid, Paper } from '@mui/material';

export default function BuildingSmartPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        BuildingSMART Kazakhstan
      </Typography>
      
      <Typography variant="body1" paragraph>
        buildingSMART — это международное сообщество, целью которого является повышение эффективности строительной 
        отрасли путем внедрения открытых стандартов обмена данными (OpenBIM).
      </Typography>

      <Typography variant="body1" paragraph>
        Казахстанское отделение buildingSMART было создано на базе АО «КазНИИСА» для содействия интеграции 
        отечественного строительного комплекса в мировое цифровое пространство.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%', bgcolor: '#002e5b', color: 'white' }}>
            <Typography variant="h6" fontWeight={700} gutterBottom>OpenBIM</Typography>
            <Typography variant="body2">
              Универсальный подход к проектированию и строительству, основанный на открытых стандартах и процессах.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%', border: '2px solid #2887B6' }}>
            <Typography variant="h6" fontWeight={700} gutterBottom color="#2887B6">Наши цели</Typography>
            <Typography variant="body2">
              Разработка национальных стандартов на базе IFC и продвижение интересов казахстанских компаний.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
