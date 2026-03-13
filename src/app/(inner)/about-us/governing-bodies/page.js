'use client';

import { Typography, Box, List, ListItem, ListItemText, Divider } from '@mui/material';

export default function GoverningBodiesPage() {
  const bodies = [
    { name: 'Общее собрание акционеров', desc: 'Высший орган управления Обществом.' },
    { name: 'Совет директоров', desc: 'Орган управления, осуществляющий общее руководство деятельностью Общества, за исключением вопросов, отнесенных законодательством и Уставом Общества к исключительной компетенции общего собрания акционеров.' },
    { name: 'Правление (Генеральный директор)', desc: 'Исполнительный орган Общества, осуществляющий руководство его текущей деятельностью.' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Органы управления
      </Typography>
      
      <Typography variant="body1" paragraph>
        Система корпоративного управления АО «КазНИИСА» основывается на защите прав и законных интересов акционеров 
        и направлена на обеспечение эффективной деятельности, сохранение финансовой устойчивости и прибыльности.
      </Typography>

      <List sx={{ mt: 2 }}>
        {bodies.map((body, index) => (
          <Box key={index}>
            <ListItem alignItems="flex-start" sx={{ px: 0, py: 3 }}>
              <ListItemText
                primary={
                  <Typography variant="h6" sx={{ color: '#2887B6', fontWeight: 700, mb: 1 }}>
                    {body.name}
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" sx={{ lineHeight: 1.6, color: '#333' }}>
                    {body.desc}
                  </Typography>
                }
              />
            </ListItem>
            {index < bodies.length - 1 && <Divider />}
          </Box>
        ))}
      </List>
    </Box>
  );
}
