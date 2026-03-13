import React from 'react';
import { Typography, Box, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { Info, CheckCircle } from '@mui/icons-material';

export default function PacientamPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Информация для пациентов
      </Typography>
      <Paper elevation={0} sx={{ p: 3, mb: 4, bgcolor: '#e3f2fd' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, display: 'flex', alignItems: 'center' }}>
          <Info sx={{ mr: 1, color: '#1976d2' }} /> Важно знать
        </Typography>
        <Typography variant="body2">
          При посещении клиники необходимо иметь при себе удостоверение личности и направление при наличии.
        </Typography>
      </Paper>
      <List>
        {['Правила внутреннего распорядка', 'Порядок госпитализации', 'Права и обязанности пациентов', 'Диагностические исследования'].map((text) => (
          <ListItem key={text} sx={{ px: 0 }}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <CheckCircle sx={{ color: '#2887B6', fontSize: 20 }} />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}