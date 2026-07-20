'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';
import Link from 'next/link';
import ImageLightbox, { useImageLightbox } from '../../../../components/ImageLightbox';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const CENTRES = [
  {
    num: '01',
    title: 'Сейсмикаға төзімділік, ғимараттар мен құрылыстарды тексеру орталығы',
    href: '/qaz/centres/center-for-seismic-resistance-inspection-of-buildings-and-structures',
  },
  {
    num: '02',
    title: 'Үлгілік және индивидуалды жобалау орталығы',
    href: '/qaz/centres/center-for-standard-and-individual-design',
  },
  {
    num: '03',
    title: 'Центр науки и цифровизации строительства',
    href: '/qaz/centres/center-for-science-and-digitalization-of-construction',
  },
  {
    num: '04',
    title: 'Корпоративтік университет',
    href: '/qaz/centres/corporate-university',
  },
  {
    num: '05',
    title: 'Құрылыстағы нормалау орталығы',
    href: '/qaz/centres/center-for-regulation-in-construction',
  },
];

export default function CentresOverview() {
  const { lightbox, openLightbox, closeLightbox } = useImageLightbox();

  return (
    <Box>
      <ImageLightbox {...lightbox} onClose={closeLightbox} />

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Орталықтар
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box
        component="img"
        src="/images/kazniisa/centres-banner.webp"
        alt="Орталықтар"
        onClick={() => openLightbox('/images/kazniisa/centres-banner.webp', 'Орталықтар')}
        sx={{ width: '100%', maxWidth: 600, borderRadius: 1, mb: 3, display: 'block', cursor: 'zoom-in' }}
      />

      <Box
        sx={{
          bgcolor: BLUE_LIGHT,
          borderLeft: '4px solid ' + BLUE,
          borderRadius: '0 6px 6px 0',
          p: 3,
          mb: 5,
          fontStyle: 'italic',
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          «ҚазҚСҒЗИ» АҚ бас кеңсесі Алматыда орналасқан, институттың Астана, Өскемен және Тараз қалаларында филиалдары бар.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {CENTRES.map((c, i) => (
          <Grid item xs={12} key={i}>
            <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 }, alignItems: 'flex-start' }}>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: '2.5rem',
                  color: BLUE,
                  lineHeight: 1,
                  minWidth: 52,
                  flexShrink: 0,
                }}
              >
                {c.num}
              </Typography>
              <Box sx={{ flex: 1 }}>
                <Link
                  href={c.href}
                  style={{
                    color: NAVY,
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: NAVY,
                      mb: 1,
                      lineHeight: 1.35,
                      borderBottom: `2px solid ${BLUE}`,
                      display: 'inline-block',
                      pb: 0.5,
                    }}
                  >
                    {c.title}
                  </Typography>
                </Link>
              </Box>
            </Box>
            {c.num === '03' && (
              <Box
                component="img"
                src="/images/kazniisa/center-bim.webp"
                alt="Центр науки и цифровизации"
                onClick={() => openLightbox('/images/kazniisa/center-bim.webp', 'Центр науки и цифровизации')}
                sx={{ width: '100%', maxWidth: 500, borderRadius: 1, mt: 2, display: 'block', cursor: 'zoom-in' }}
              />
            )}
            {i < CENTRES.length - 1 && <Divider sx={{ mt: 3 }} />}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
