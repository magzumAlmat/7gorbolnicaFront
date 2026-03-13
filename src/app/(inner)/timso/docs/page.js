'use client';

import { Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { PictureAsPdf } from '@mui/icons-material';

export default function TimsoDocsPage() {
  const docs = [
    { title: 'МСН 1.01-01-2019 «Информационное моделирование в строительстве»' },
    { title: 'Методические рекомендации по применению ТИМСО' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Нормативные документы ТИМСО
      </Typography>
      
      <List>
        {docs.map((doc, i) => (
          <ListItem key={i} sx={{ px: 0 }}>
            <ListItemIcon>
              <PictureAsPdf sx={{ color: '#d32f2f' }} />
            </ListItemIcon>
            <ListItemText primary={doc.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
