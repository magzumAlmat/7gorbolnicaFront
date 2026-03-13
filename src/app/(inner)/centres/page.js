'use client';

import { Typography, Box, Grid, Card, CardContent, Divider } from '@mui/material';
import Link from 'next/link';

export default function CentresListPage() {
  const centres = [
    { title: 'Центр науки и цифровизации', path: '/centres/center-for-science-and-digitalization-of-construction', icon: '01' },
    { title: 'Центр нормирования', path: '/centres/center-for-regulation-in-construction', icon: '02' },
    { title: 'Центр типового проектирования', path: '/centres/center-for-standard-and-individual-design', icon: '03' },
    { title: 'Центр сейсмостойкости', path: '/centres/center-for-seismic-resistance-inspection-of-buildings-and-structures', icon: '04' },
    { title: 'Корпоративный университет', path: '/centres/corporate-university', icon: '05' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#002e5b' }}>
        Центры АО «КазНИИСА»
      </Typography>
      <Typography variant="body2" sx={{ mb: 4, color: '#666' }}>
        Специализированные подразделения института, работающие по ключевым направлениям строительной отрасли.
      </Typography>
      
      <Grid container spacing={3}>
        {centres.map((centre, i) => (
          <Grid item xs={12} key={i}>
            <Card 
              component={Link} 
              href={centre.path}
              elevation={0}
              sx={{ 
                p: 1, 
                textDecoration: 'none', 
                border: '1px solid #eee',
                transition: '0.3s',
                '&:hover': { bgcolor: '#f0f7fc', borderColor: '#2887B6' }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: 900, color: '#e0e0e0', mr: 3, minWidth: 50 }}>
                  {centre.icon}
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" fontWeight={700} color="#002e5b">
                    {centre.title}
                  </Typography>
                </Box>
                <Typography sx={{ color: '#2887B6', fontWeight: 700 }}>Подробнее →</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
