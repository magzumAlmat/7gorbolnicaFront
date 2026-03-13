'use client';

import { Typography, Box, Paper, Grid, Avatar } from '@mui/material';

export default function ScienceSecretaryPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Ученый секретарь
      </Typography>
      
      <Paper elevation={0} sx={{ p: 4, bgcolor: '#f8f9fa', mb: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={4}>
            <Avatar 
              sx={{ width: 200, height: 200, mx: 'auto', bgcolor: '#e0e0e0' }}
              variant="rounded"
            >
              Фото
            </Avatar>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#2887B6' }}>Имя Фамилия Отчество</Typography>
            <Typography variant="subtitle1" sx={{ color: '#666', mb: 2 }}>Ученый секретарь АО «КазНИИСА», кандидат технических наук</Typography>
            
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
              Ученый секретарь координирует научно-организационную деятельность Института, 
              обеспечивает работу Ученого совета и контролирует выполнение планов научно-исследовательских работ.
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#002e5b' }}>Основные функции:</Typography>
      <Typography variant="body2" component="div">
        <ul>
          <li>Подготовка материалов к заседаниям Ученого совета;</li>
          <li>Координация работы по подготовке научных кадров;</li>
          <li>Организация научных конференций и семинаров;</li>
          <li>Контроль за внедрением результатов НИР в производство.</li>
        </ul>
      </Typography>
    </Box>
  );
}
