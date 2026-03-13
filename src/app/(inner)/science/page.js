'use client';

import { Typography, Box, List, ListItem, ListItemText, Paper } from '@mui/material';

export default function SciencePage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Научная деятельность
      </Typography>
      
      <Typography variant="body1" paragraph>
        АО «КазНИИСА» является ведущим научным центром строительной отрасли Казахстана. Мы осуществляем 
        фундаментальные и прикладные исследования, направленные на повышение надежности и сейсмостойкости зданий.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 700, mt: 4, mb: 2, color: '#002e5b' }}>Основные направления:</Typography>
      
      <Grid container spacing={2}>
        {[
          'Сейсмостойкое строительство',
          'Нормирование и стандартизация',
          'Строительная механика и расчеты',
          'Технологии информационного моделирования (BIM)',
          'Новые строительные материалы'
        ].map((item, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Paper elevation={0} sx={{ p: 2, border: '1px solid #eceff1', borderLeft: '3px solid #FDE428' }}>
              <Typography variant="body2" fontWeight={600}>{item}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// Нужно импортировать Grid
import { Grid } from '@mui/material';
