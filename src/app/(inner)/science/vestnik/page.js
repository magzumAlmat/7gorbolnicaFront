'use client';

import { Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import Image from 'next/image';

export default function VestnikPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Журнал «Вестник АО «КазНИИСА»
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box sx={{ border: '1px solid #eee', p: 1, borderRadius: 1 }}>
            {/* Заглушка для обложки журнала */}
            <Box sx={{ bgcolor: '#002e5b', height: 350, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center', p: 4 }}>
              <Typography variant="h6">ВЕСТНИК<br/>КазНИИСА</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="body1" paragraph>
            Научно-технический журнал «Вестник АО «КазНИИСА» издается с 2008 года и является рецензируемым изданием, 
            включенным в перечень ККСОН МОН РК.
          </Typography>
          <Typography variant="body2" paragraph color="text.secondary">
            Журнал публикует статьи по актуальным проблемам сейсмостойкого строительства, строительной механики, 
            архитектуры и цифровых технологий в строительстве.
          </Typography>
          
          <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Button variant="contained" sx={{ bgcolor: '#2887B6' }}>Архив номеров</Button>
            <Button variant="outlined" sx={{ color: '#2887B6', borderColor: '#2887B6' }}>Требования к статьям</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
