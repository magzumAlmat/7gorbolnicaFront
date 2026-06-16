'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';
import ImageLightbox, { useImageLightbox } from '../../../../components/ImageLightbox';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const awards = [
  {
    title: '«Самая яркая BIM-идея года»',
    location: 'Москва',
    year: '2016',
    desc: 'Международная премия за проект «Концепция внедрения BIM в строительной отрасли Республики Казахстан». Признание на уровне стран СНГ за вклад в цифровизацию строительства.',
    img: '/images/kazniisa/bim-idea-award.jpg',
  },
  {
    title: '«Лидер Казахстана — 2014»',
    location: 'Астана',
    year: '2014',
    desc: 'Национальный бизнес-рейтинг. Медаль за значительный вклад в экономику Республики Казахстан. Признание устойчивого развития и профессиональных достижений института.',
    img: '/images/kazniisa/leader-kz-award.webp',
  },
  {
    title: '«Лидер Казахстана — 2013»',
    location: 'Астана',
    year: '2013',
    desc: 'Национальный бизнес-рейтинг. Медаль за значительный вклад в экономику Республики Казахстан.',
    img: null,
  },
  {
    title: '«Лидер отрасли — 2014»',
    location: 'Казахстан',
    year: '2014',
    desc: 'Национальный сертификат, удостоверяющий лидерство в строительной отрасли Республики Казахстан по итогам года.',
    img: '/images/kazniisa/leader-industry-award.webp',
  },
  {
    title: '«Лидер отрасли — 2013»',
    location: 'Казахстан',
    year: '2013',
    desc: 'Национальный сертификат, удостоверяющий лидерство в строительной отрасли Республики Казахстан по итогам года.',
    img: null,
  },
];

export default function AwardsPage() {
  const { lightbox, openLightbox, closeLightbox } = useImageLightbox();

  return (
    <Box>
      <ImageLightbox {...lightbox} onClose={closeLightbox} />

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Награды и достижения
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

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
                border: `1px solid ${i === 0 ? BLUE : BORDER}`,
                borderRadius: '6px',
                bgcolor: i === 0 ? BLUE_LIGHT : GRAY_BG,
                height: '100%',
                boxSizing: 'border-box',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
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
                    }}
                  >
                    {a.year}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    px: 1.5,
                    py: 0.4,
                    bgcolor: BLUE_LIGHT,
                    borderRadius: 1,
                    display: 'inline-block',
                  }}
                >
                  <Typography
                    sx={{ color: BLUE, fontSize: '0.78rem', fontWeight: 600 }}
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
                }}
              >
                {a.title}
              </Typography>
              <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
                {a.desc}
              </Typography>
              {a.img && (
                <Box
                  component="img"
                  src={a.img}
                  alt={a.title}
                  onClick={() => openLightbox(a.img, a.title)}
                  sx={{ width: '100%', maxHeight: 200, objectFit: 'contain', borderRadius: 1, mt: 2, cursor: 'zoom-in' }}
                />
              )}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 5 }} />

      <Box sx={{ bgcolor: NAVY, borderRadius: '6px', p: 4 }}>
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
