'use client';

import { Typography, Box, Grid, Paper } from '@mui/material';

export default function PartnersPage() {
  const partners = [
    { name: 'Министерство промышленности и строительства РК' },
    { name: 'buildingSMART International' },
    { name: 'АО «КазНИИСА»' },
    { name: 'Евразийская экономическая комиссия' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Наши партнеры
      </Typography>
      
      <Typography variant="body1" paragraph>
        АО «КазНИИСА» активно сотрудничает с государственными органами, международными организациями 
        и ведущими компаниями строительной отрасли.
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {partners.map((partner, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Paper elevation={0} sx={{ p: 3, border: '1px solid #eee', textAlign: 'center', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="subtitle2" fontWeight={600} color="#002e5b">
                {partner.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
