'use client';

import { Typography, Box, Grid, Paper, Link as MuiLink } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';

export default function ContactsPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Контакты
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ p: 4, bgcolor: '#f8f8f8', borderLeft: '4px solid #2887B6' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>Головной офис (Алматы)</Typography>
            
            <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
              <LocationOn sx={{ color: '#2887B6' }} />
              <Box>
                <Typography variant="subtitle2" fontWeight={700}>Адрес:</Typography>
                <Typography variant="body2">050043, г. Алматы, 3-й микрорайон, д. 44А</Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
              <Phone sx={{ color: '#2887B6' }} />
              <Box>
                <Typography variant="subtitle2" fontWeight={700}>Телефон:</Typography>
                <MuiLink href="tel:87272269410" color="inherit" underline="hover" sx={{ fontSize: '14px' }}>
                  8 (727) 226 94 10
                </MuiLink>
              </Box>
            </Box>

            <Box sx={{ mb: 0, display: 'flex', gap: 2 }}>
              <Email sx={{ color: '#2887B6' }} />
              <Box>
                <Typography variant="subtitle2" fontWeight={700}>Email:</Typography>
                <MuiLink href="mailto:info@kazniisa.kz" color="inherit" underline="hover" sx={{ fontSize: '14px' }}>
                  info@kazniisa.kz
                </MuiLink>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          {/* Заглушка для карты */}
          <Box sx={{ 
            height: '100%', 
            minHeight: 300, 
            bgcolor: '#eee', 
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ddd'
          }}>
            <Typography color="text.secondary">Интерактивная карта (Google/Yandex)</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
