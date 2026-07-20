'use client';
import { Typography, Box, Grid } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const BORDER = '#E2E8F0';

const personalities = [
  { name: 'Ержанов Сырымгали Ержанович' },
  { name: 'Тастанбеков Ахылбек Тастанбекович' },
  { name: 'Абаканов Миркен Сейткасымович' },
  { name: 'Дильфруза Ильясовна Есенберлина' },
  { name: 'Тулеев Турсымбай Дуйсембаевич' },
  { name: 'Лапин Владимир Алексеевич' },
  { name: 'Ицков Игорь Ефроимович' },
  { name: 'Шахнович Юлий Гедальевич' },
];

export default function PersonalitiesPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Есімнама
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Grid container spacing={3}>
        {personalities.map((person) => (
          <Grid item xs={12} sm={6} key={person.name}>
            <Box
              sx={{
                p: 3,
                border: '1px solid ' + BORDER,
                borderRadius: '6px',
                borderLeft: '4px solid ' + BLUE,
                height: '100%',
                bgcolor: BLUE_LIGHT,
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  color: NAVY,
                  fontSize: '1rem',
                }}
              >
                {person.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
