'use client';

import { Typography, Box, List, ListItem, ListItemText, Paper, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

export default function AntiCorruptionPage() {
  const policies = [
    { title: 'Антикоррупционный стандарт АО «КазНИИСА»', date: '2023' },
    { title: 'Кодекс деловой этики', date: '2022' },
    { title: 'Положение о комплаенс-службе', date: '2023' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Противодействие коррупции
      </Typography>
      
      <Typography variant="body1" paragraph>
        АО «КазНИИСА» придерживается политики нулевой терпимости к любым проявлениям коррупции. 
        В институте функционирует Комплаенс-служба, ответственная за соблюдение антикоррупционного законодательства.
      </Typography>

      <Paper elevation={0} sx={{ p: 3, bgcolor: '#fffde7', border: '1px solid #fff59d', mb: 4 }}>
        <Typography variant="subtitle1" fontWeight={700} color="#f57f17" gutterBottom>
          Телефон доверия:
        </Typography>
        <Typography variant="h6" fontWeight={900}>8 (727) 226 94 10 (вн. 115)</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>Вы также можете отправить сообщение на почту: compliance@kazniisa.kz</Typography>
      </Paper>

      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#002e5b' }}>Документы:</Typography>
      <List>
        {policies.map((doc, i) => (
          <ListItem key={i} divider sx={{ px: 0 }}>
            <ListItemText 
              primary={<MuiLink href="#" sx={{ color: '#2887B6', fontWeight: 600, textDecoration: 'none' }}>{doc.title}</MuiLink>}
              secondary={`Опубликовано: ${doc.date}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
