'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

const awards = [
  {
    title: '«Самая яркая BIM-идея года»',
    location: 'Москва',
    year: '2016',
    desc: 'Международная премия за проект «Концепция внедрения BIM в строительной отрасли Республики Казахстан». Признание на уровне стран СНГ за вклад в цифровизацию строительства.',
  },
  {
    title: '«Лидер Казахстана — 2014»',
    location: 'Астана',
    year: '2014',
    desc: 'Национальный бизнес-рейтинг. Медаль за значительный вклад в экономику Республики Казахстан. Признание устойчивого развития и профессиональных достижений института.',
  },
  {
    title: '«Лидер Казахстана — 2013»',
    location: 'Астана',
    year: '2013',
    desc: 'Национальный бизнес-рейтинг. Медаль за значительный вклад в экономику Республики Казахстан.',
  },
  {
    title: '«Лидер отрасли — 2014»',
    location: 'Казахстан',
    year: '2014',
    desc: 'Национальный сертификат, удостоверяющий лидерство в строительной отрасли Республики Казахстан по итогам года.',
  },
  {
    title: '«Лидер отрасли — 2013»',
    location: 'Казахстан',
    year: '2013',
    desc: 'Национальный сертификат, удостоверяющий лидерство в строительной отрасли Республики Казахстан по итогам года.',
  },
];

export default function AwardsPage() {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, color: NAVY, mb: 1, fontFamily: '"Exo 2", sans-serif' }}
      >
        Награды и достижения
      </Typography>
      <Box sx={{ width: 60, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 5 }}>
        АО «КазНИИСА» удостоен ряда престижных национальных и международных наград,
        подтверждающих высокий профессиональный уровень института и его вклад в развитие
        строительной отрасли Республики Казахстан.
      </Typography>

      <Grid container spacing={3}>
        {awards.map((a, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Box
              sx={{
                p: 3,
                border: `1px solid ${i === 0 ? AMBER : '#E2E8F0'}`,
                borderRadius: 3,
                bgcolor: i === 0 ? `${AMBER}0A` : '#F8FAFC',
                height: '100%',
                boxSizing: 'border-box',
              }}
            >
              <Box sx={{ display: 'flex', gap: 1.5, mb: 2, flexWrap: 'wrap' }}>
                <Box
                  sx={{
                    px: 1.5,
                    py: 0.4,
                    bgcolor: NAVY,
                    borderRadius: 1,
                    display: 'inline-block',
                  }}
                >
                  <Typography
                    sx={{
                      color: '#fff',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      fontFamily: '"Exo 2", sans-serif',
                    }}
                  >
                    {a.year}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    px: 1.5,
                    py: 0.4,
                    bgcolor: `${AMBER}20`,
                    borderRadius: 1,
                    display: 'inline-block',
                  }}
                >
                  <Typography
                    sx={{ color: '#92400E', fontSize: '0.78rem', fontWeight: 600 }}
                  >
                    {a.location}
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: NAVY,
                  fontSize: '1rem',
                  mb: 1.5,
                  lineHeight: 1.4,
                  fontFamily: '"Exo 2", sans-serif',
                }}
              >
                {a.title}
              </Typography>
              <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
                {a.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 5 }} />

      <Box sx={{ bgcolor: NAVY, borderRadius: 3, p: 4 }}>
        <Typography
          sx={{
            color: '#CBD5E1',
            fontSize: '1rem',
            lineHeight: 1.9,
          }}
        >
          Награды отражают многолетний труд коллектива АО «КазНИИСА» в области строительной
          науки, нормирования, проектирования и внедрения передовых цифровых технологий
          в строительной отрасли Республики Казахстан.
        </Typography>
      </Box>
    </Box>
  );
}
