'use client';

import { Typography, Box, Grid, Paper } from '@mui/material';

export default function BoccPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        БОСС (База объектов северных стран)
      </Typography>
      
      <Typography variant="body1" paragraph>
        БОСС — это масштабный проект по изучению опыта строительства в северных регионах и адаптации лучших 
        мировых практик к климатическим условиям Казахстана.
      </Typography>

      <Box sx={{ mt: 4, textAlign: 'center', p: 10, bgcolor: '#f0f0f0', borderRadius: 2 }}>
        <Typography color="text.secondary">Раздел находится в разработке</Typography>
      </Box>
    </Box>
  );
}
