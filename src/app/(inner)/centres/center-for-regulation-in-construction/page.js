'use client';

import { Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';

export default function RegulationCenterPage() {
  const functions = [
    { title: 'Разработка нормативных документов', desc: 'Создание СН, СП, и других актов, регулирующих процессы в строительстве.' },
    { title: 'Адаптация международных стандартов', desc: 'Работа по внедрению Еврокодов и других мировых практик в Казахстане.' },
    { title: 'Экспертиза проектов нормативов', desc: 'Научно-техническая экспертиза предложений по изменению действующих норм.' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Центр нормирования
      </Typography>
      
      <Typography variant="body1" paragraph>
        Центр нормирования в строительстве обеспечивает актуализацию и совершенствование нормативно-технической 
        базы Республики Казахстан в соответствии с современными требованиями безопасности.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#002e5b' }}>Задачи центра:</Typography>
        <List>
          {functions.map((fn, i) => (
            <ListItem key={i} sx={{ px: 0, py: 2 }}>
              <ListItemIcon>
                <CheckCircleOutline sx={{ color: '#2887B6' }} />
              </ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight={700}>{fn.title}</Typography>}
                secondary={fn.desc}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
