'use client';

import { Typography, Box, Button, Grid, Card, CardContent } from '@mui/material';
import { School, WorkspacePremium, Groups } from '@mui/icons-material';

export default function CorporateUniversityPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Корпоративный университет
      </Typography>
      
      <Typography variant="body1" paragraph>
        Корпоративный университет АО «КазНИИСА» — это образовательная платформа для повышения квалификации 
        специалистов строительной отрасли, инженеров, проектировщиков и госслужащих.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        {[
          { title: 'Курсы BIM', icon: <WorkspacePremium />, color: '#10b857' },
          { title: 'Семинары по нормам', icon: <School />, color: '#2887B6' },
          { title: 'Вебинары', icon: <Groups />, color: '#002e5b' },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card elevation={0} sx={{ textAlign: 'center', bgcolor: '#f8f9fa', py: 2 }}>
              <CardContent>
                <Box sx={{ color: item.color, mb: 1 }}>{item.icon}</Box>
                <Typography variant="subtitle2" fontWeight={700}>{item.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 5, p: 4, bgcolor: '#002e5b', color: 'white', borderRadius: 2, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Готовы повысить свою квалификацию?</Typography>
        <Button variant="contained" sx={{ bgcolor: '#FDE428', color: '#002e5b', fontWeight: 700, '&:hover': { bgcolor: '#e5cf24' } }}>
          Записаться на курс
        </Button>
      </Box>
    </Box>
  );
}
