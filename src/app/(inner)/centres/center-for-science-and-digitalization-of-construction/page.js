'use client';

import { Typography, Box, List, ListItem, ListItemText, Paper } from '@mui/material';

export default function ScienceCenterPage() {
  const directions = [
    { title: 'Научные исследования', desc: 'Проведение фундаментальных и прикладных исследований в области строительства и архитектуры.' },
    { title: 'Цифровизация (BIM)', desc: 'Разработка и внедрение технологий информационного моделирования на всех этапах жизненного цикла зданий.' },
    { title: 'Геоинформационные системы', desc: 'Создание и сопровождение ГИС-систем для мониторинга застройки территорий.' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Центр науки и цифровизации
      </Typography>
      
      <Typography variant="body1" paragraph>
        Центр науки и цифровизации строительства АО «КазНИИСА» является ведущим подразделением, отвечающим за 
        научно-технологическое развитие строительной отрасли Казахстана.
      </Typography>

      <Paper elevation={0} sx={{ p: 4, bgcolor: '#f0f4f8', mb: 4, borderLeft: '4px solid #2887B6' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#002e5b' }}>Основные направления деятельности:</Typography>
        <List>
          {directions.map((dir, i) => (
            <ListItem key={i} alignItems="flex-start" sx={{ px: 0 }}>
              <ListItemText 
                primary={<Typography variant="subtitle1" fontWeight={700} color="#2887B6">{dir.title}</Typography>}
                secondary={<Typography variant="body2">{dir.desc}</Typography>}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
