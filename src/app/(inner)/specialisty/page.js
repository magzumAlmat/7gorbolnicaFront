import React from 'react';
import { Typography, Box, Grid, Avatar, Paper } from '@mui/material';

export default function SpecialistyPage() {
  return (
    <Box>
      <Typography variant="body1" paragraph>
        В нашей клинике работают высококвалифицированные специалисты, среди которых доктора и кандидаты медицинских наук.
      </Typography>
      <Grid container spacing={3}>
        {[1, 2, 3, 4].map((i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', border: '1px solid #eee' }}>
              <Avatar sx={{ width: 100, height: 100, mx: 'auto', mb: 2, bgcolor: '#2887B6' }}>В</Avatar>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>Врач Специалист</Typography>
              <Typography variant="body2" color="text.secondary">Терапевт высокого уровня</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}