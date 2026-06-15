'use client';
import { Typography, Box, Divider } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';
const TEXT = '#334155';

const collections = [
  {
    title: 'Сборник трудов по сейсмостойкости (выпуск 2)',
    category: 'Сейсмостойкое строительство',
  },
  {
    title: 'Сборник трудов по сейсмостойкости (выпуск 5)',
    category: 'Сейсмостойкое строительство',
  },
  {
    title: 'Сборник трудов по сейсмостойкости (выпуск 11)',
    category: 'Сейсмостойкое строительство',
  },
  {
    title: 'Сборник трудов по сейсмостойкости (выпуск 12)',
    category: 'Сейсмостойкое строительство',
  },
  {
    title: 'Журнал «Вестник АО КазНИИСА» №1 (апрель 2020)',
    category: 'Периодические издания',
  },
];

export default function CollectionsPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Сборники трудов АО «КазНИИСА»
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 4 }}>
        АО «КазНИИСА» регулярно издаёт сборники научных трудов, объединяющие результаты
        исследований сотрудников института в области сейсмостойкого строительства, цифровизации,
        нормирования и проектирования. Сборники доступны для ознакомления специалистам отрасли.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 3 }}
      >
        Доступные издания
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {collections.map((item, i) => (
          <Box
            key={i}
            sx={{
              p: 2.5,
              bgcolor: '#FAFAFA',
              border: '1px solid #E2E8F0',
              borderLeft: '4px solid #F59E0B',
              borderRadius: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: AMBER,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                mb: 0.5,
              }}
            >
              {item.category}
            </Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.7, color: TEXT, fontWeight: 500 }}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>

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
          Для получения полного перечня изданий и условий доступа обращайтесь по адресу{' '}
          <Box
            component="a"
            href="mailto:info@kazniisa.kz"
            sx={{
              color: AMBER,
              textDecoration: 'none',
              fontStyle: 'normal',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            info@kazniisa.kz
          </Box>
          .
        </Typography>
      </Box>
    </Box>
  );
}
