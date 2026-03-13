'use client';

import { Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { PictureAsPdf } from '@mui/icons-material';

export default function EurocodeDocsPage() {
  const docs = [
    { title: 'Национальное приложение к EN 1990' },
    { title: 'Национальное приложение к EN 1991' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Перечень документов Еврокодов
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
