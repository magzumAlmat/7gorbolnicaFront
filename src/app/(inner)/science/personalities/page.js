'use client';
import { Typography, Box, Grid } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';
const TEXT = '#334155';

const personalities = [
  {
    name: 'Кульбаев Бегман Бахитович',
    description: 'Генеральный директор АО «КазНИИСА».',
  },
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
        sx={{ fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Персоналии
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 4 }}>
        АО «КазНИИСА» на протяжении десятилетий объединяет выдающихся учёных, инженеров и
        исследователей, внёсших значительный вклад в развитие строительной науки Казахстана.
        Ниже представлены персоналии, чья деятельность определила облик института и отрасли.
      </Typography>

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

      <Box
        sx={{
          bgcolor: BLUE_LIGHT,
          borderLeft: '4px solid ' + BLUE,
          borderRadius: '0 6px 6px 0',
          p: 3,
          mt: 5,
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
