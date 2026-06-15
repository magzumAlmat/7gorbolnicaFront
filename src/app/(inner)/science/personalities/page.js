'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';
const TEXT = '#334155';

const personalities = [
  {
    name: 'Ержанов Сырымгали Ержанович',
    description: 'Выдающийся учёный в области строительной науки Казахстана.',
  },
  {
    name: 'Тастанбеков Ахылбек Тастанбекович',
    description: 'Специалист в области сейсмостойкого строительства.',
  },
  {
    name: 'Абаканов Миркен Сейткасымович',
    description: 'Исследователь в области строительных технологий.',
  },
  {
    name: 'Есенберлина Дилфруза Ильясовна',
    description: 'Вклад в развитие нормативной базы строительства Казахстана.',
  },
  {
    name: 'Тулеев Турсынбай Дуйсенбаевич',
    description: 'Специалист в области комплексного строительства.',
  },
  {
    name: 'Лапин Владимир Алексеевич',
    description: 'Учёный в области строительной науки и проектирования.',
  },
  {
    name: 'Ицков Игорь Эфроимович',
    description: 'Исследователь в области инженерно-геологических изысканий.',
  },
  {
    name: 'Шахович Юлий Гедалевич',
    description: 'Специалист в области строительного нормирования.',
  },
];

export default function PersonalitiesPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Персоналии
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 4 }}>
        АО «КазНИИСА» на протяжении десятилетий объединяет выдающихся учёных, инженеров и
        исследователей, внёсших значительный вклад в развитие строительной науки Казахстана.
        Ниже представлены персоналии, чья деятельность определила облик института и отрасли.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Grid container spacing={3}>
        {personalities.map((person) => (
          <Grid item xs={12} sm={6} key={person.name}>
            <Box
              sx={{
                p: 3,
                border: '1px solid #E2E8F0',
                borderRadius: 2,
                borderLeft: '4px solid #F59E0B',
                height: '100%',
                bgcolor: '#FAFAFA',
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Exo 2", sans-serif',
                  fontWeight: 700,
                  color: NAVY,
                  fontSize: '1rem',
                  mb: 1,
                }}
              >
                {person.name}
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.7, color: TEXT }}>
                {person.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ mt: 5, mb: 4 }} />

      <Box
        sx={{
          borderLeft: '4px solid #F59E0B',
          pl: 3,
          py: 2,
          bgcolor: '#FAFAFA',
          fontStyle: 'italic',
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>
          АО «КазНИИСА» — государственный научно-исследовательский и проектный институт в области
          эффективного развития комплексного строительства Казахстана, включая районы с особо
          сложными инженерно-геологическими условиями и регионы, подверженные землетрясениям.
        </Typography>
      </Box>
    </Box>
  );
}
