'use client';

import { Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { PictureAsPdf } from '@mui/icons-material';

export default function CorporateDocumentsPage() {
  const docs = [
    { title: 'Устав АО «КазНИИСА»' },
    { title: 'Свидетельство о государственной регистрации' },
    { title: 'Кодекс корпоративного управления' },
    { title: 'Положение о Совете директоров' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Корпоративные документы
      </Typography>
      
      <Typography variant="body1" paragraph>
        В данном разделе представлены основные учредительные и нормативные документы, регламентирующие 
        деятельность АО «КазНИИСА».
      </Typography>

      <List sx={{ mt: 2 }}>
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
