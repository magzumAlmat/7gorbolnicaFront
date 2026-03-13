'use client';

import { Typography, Box, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';

export default function ResearchPage() {
  const projects = [
    { title: 'Разработка ГИС-карты сейсмического районирования РК', period: '2023-2025' },
    { title: 'Исследование влияния ветровых нагрузок на высотные здания в г. Астана', period: '2024' },
    { title: 'Совершенствование нормативной базы в области легких стальных конструкций', period: '2023-2024' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Научно-исследовательская работа
      </Typography>
      
      <Typography variant="body1" paragraph>
        Научно-исследовательская работа (НИР) является приоритетным направлением деятельности АО «КазНИИСА». 
        Институт выполняет исследования в рамках бюджетных программ, а также по заказам частных компаний и международных организаций.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 700, mt: 4, mb: 2, color: '#002e5b' }}>Текущие проекты:</Typography>
      
      <List>
        {projects.map((item, i) => (
          <Box key={i}>
            <ListItem sx={{ py: 2, px: 0 }}>
              <ListItemText 
                primary={<Typography fontWeight={700} color="#2887B6">{item.title}</Typography>}
                secondary={`Период реализации: ${item.period}`}
              />
            </ListItem>
            {i < projects.length - 1 && <Divider />}
          </Box>
        ))}
      </List>
    </Box>
  );
}
