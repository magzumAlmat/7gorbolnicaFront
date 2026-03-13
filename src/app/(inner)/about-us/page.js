'use client';

import { Typography, Box, Grid, Paper } from '@mui/material';

export default function AboutUsPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Об АО «КазНИИСА»
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
        АО «Казахский научно-исследовательский и проектный институт строительства и архитектуры» (АО «КазНИИСА») — 
        это единственный в Казахстане государственный научно-исследовательский и проектный институт в области строительства.
      </Typography>

      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
        Институт был основан в 1931 году и на протяжении более 90 лет является ведущим научным центром в строительной отрасли 
        страны. Основная миссия КазНИИСА заключается в обеспечении надежности и безопасности зданий и сооружений, 
        а также в развитии научно-технического потенциала строительного комплекса Казахстана.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={0} sx={{ p: 3, bgcolor: '#f0f7fc', height: '100%', borderLeft: '4px solid #2887B6' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#002e5b' }}>Наша миссия</Typography>
            <Typography variant="body2" color="text.secondary">
              Научное сопровождение строительной отрасли для обеспечения безопасности и комфортной среды жизнедеятельности граждан.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={0} sx={{ p: 3, bgcolor: '#f0f7fc', height: '100%', borderLeft: '4px solid #2887B6' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#002e5b' }}>Наша задача</Typography>
            <Typography variant="body2" color="text.secondary">
              Разработка и внедрение инновационных технологий, нормативных документов и стандартов в области строительства и архитектуры.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
