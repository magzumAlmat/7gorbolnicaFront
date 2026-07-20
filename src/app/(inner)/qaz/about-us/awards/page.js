'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';
import ImageLightbox, { useImageLightbox } from '../../../../../components/ImageLightbox';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const awards = [
  {
    title: '«Жылдың ең жарқын BIM-идеясы»',
    location: 'Мәскеу',
    year: '2016',
    desc: 'Институт «Ғимараттар мен құрылыстарды ақпараттық модельдеу технологияларын қолданудың әлемдік тәжірибесін талдаудың негізінде Қазақстан Республикасының құрылыс саласына ақпараттық модельдеуді (ВІМ) енгізу тұжырымдамасы» жобасы үшін марапат алды.',
    img: '/images/kazniisa/bim-idea-award.jpg',
  },
  {
    title: '«Қазақстан көшбасшысы — 2014 және 2013»',
    location: 'Астана',
    year: '2014–2013',
    desc: '«Қазақстан көшбасшысы» ұлттық бизнес-рейтингінің қабырғалық медалімен «ҚазҚСҒЗИ» АҚ Қазақстанның экономикасын дамытуға қосқан елеулі үлесі, өндірістік қызметтің жоғарғы стандарттарын қалыптастырғаны және елдің халықаралық имиджін сақтағаны үшін марапатталды.',
    img: '/images/kazniisa/leader-kz-award.webp',
  },
  {
    title: '«Сала көшбасшысы — 2013 және 2014»',
    location: 'Астана',
    year: '2013–2014',
    desc: '«Сала көшбасшысы» ұлттық сертификаты «ҚазҚСҒЗИ» АҚ-ға ауқымдары мен төлем қабілеттілігі инвестициялық тартымдылық алуға мүмкіндік беретін және Қазақстанның экономикасын дамытуға әлеуметтік үлес қосатын құрылыс саласының экономикалық көшбасшысы ретінде табысталды.',
    img: '/images/kazniisa/leader-industry-award.webp',
  },
];

export default function AwardsPage() {
  const { lightbox, openLightbox, closeLightbox } = useImageLightbox();

  return (
    <Box>
      <ImageLightbox {...lightbox} onClose={closeLightbox} />

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Марапаттар
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

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
    </Box>
  );
}
