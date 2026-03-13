'use client';

import { Typography, Box, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { Assessment, Engineering, History } from '@mui/icons-material';

export default function SeismicCenterPage() {
  const activities = [
    { title: 'Паспортизация зданий', icon: <Assessment sx={{ color: '#2887B6' }} />, desc: 'Обследование и оценка сейсмостойкости существующей застройки.' },
    { title: 'Научное сопровождение', icon: <Engineering sx={{ color: '#2887B6' }} />, desc: 'Испытания конструкций на сейсмические воздействия в лабораторных условиях.' },
    { title: 'Мониторинг безопасности', icon: <History sx={{ color: '#2887B6' }} />, desc: 'Долгосрочное наблюдение за состоянием уникальных объектов в сейсмоопасных регионах.' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Центр сейсмостойкости
      </Typography>
      
      <Typography variant="body1" paragraph>
        Центр обследования зданий и сооружений на сейсмостойкость АО «КазНИИСА» специализируется на оценке 
        безопасности объектов, расположенных в регионах с высокой сейсмической активностью.
      </Typography>

      <Box sx={{ mt: 4 }}>
        {activities.map((item, i) => (
          <Paper key={i} elevation={0} sx={{ p: 3, mb: 2, border: '1px solid #eee', display: 'flex', gap: 3, alignItems: 'flex-start' }}>
            <Box sx={{ p: 1.5, bgcolor: '#f0f7fc', borderRadius: 2 }}>{item.icon}</Box>
            <Box>
              <Typography variant="subtitle1" fontWeight={700} color="#002e5b">{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
