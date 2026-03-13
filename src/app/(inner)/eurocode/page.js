'use client';

import { Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { PictureAsPdf } from '@mui/icons-material';

export default function EurocodePage() {
  const docs = [
    { title: 'СП РК EN 1990:2002+A1:2005/2011 «Основы проектирования несущих конструкций»' },
    { title: 'СП РК EN 1991-1-1:2002/2011 «Воздействия на несущие конструкции»' },
    { title: 'СП РК EN 1992-1-1:2004/2011 «Проектирование железобетонных конструкций»' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Еврокоды
      </Typography>
      
      <Typography variant="body1" paragraph>
        В Казахстане осуществляется поэтапный переход на европейские нормы проектирования (Еврокоды). 
        АО «КазНИИСА» является основным разработчиком национальных приложений к Еврокодам.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#002e5b' }}>Нормативные документы:</Typography>
        <List>
          {docs.map((doc, i) => (
            <ListItem key={i} sx={{ px: 0 }}>
              <ListItemIcon>
                <PictureAsPdf sx={{ color: '#d32f2f' }} />
              </ListItemIcon>
              <ListItemText 
                primary={<Typography variant="body2" fontWeight={600}>{doc.title}</Typography>}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
