'use client';

import { Typography, Box, Card, CardContent, Grid, Button } from '@mui/material';

export default function VacanciesPage() {
  const jobs = [
    { title: 'Инженер-проектировщик', dept: 'Центр типового проектирования', salary: 'от 250 000 ₸' },
    { title: 'Младший научный сотрудник', dept: 'Центр сейсмостойкости', salary: 'от 200 000 ₸' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Вакансии
      </Typography>
      
      <Typography variant="body1" paragraph>
        Присоединяйтесь к команде ведущих экспертов строительной науки Казахстана. Мы предлагаем 
        стабильность, возможности для профессионального роста и участия в уникальных проектах.
      </Typography>

      {jobs.length > 0 ? (
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {jobs.map((job, i) => (
            <Grid item xs={12} key={i}>
              <Card elevation={0} sx={{ border: '1px solid #eee', '&:hover': { borderColor: '#2887B6' } }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={700} color="#002e5b">{job.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{job.dept} — {job.salary}</Typography>
                  </Box>
                  <Button variant="outlined" sx={{ color: '#2887B6', borderColor: '#2887B6' }}>Откликнуться</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography sx={{ mt: 3, fontStyle: 'italic' }}>На данный момент открытых вакансий нет.</Typography>
      )}
    </Box>
  );
}
