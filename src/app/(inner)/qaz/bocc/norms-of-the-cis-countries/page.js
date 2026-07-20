'use client';
import { Typography, Box, Grid } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const BORDER = '#E2E8F0';

const norms = [
  { country: 'Азербайджан', document: null },
  { country: 'Армения', document: null },
  { country: 'Беларусь', document: null },
  { country: 'Казахстан', document: 'СП РК 2.03-30-2017 Строительство в сейсмических зонах изм86 (1)' },
  { country: 'Кыргызстан', document: 'СН КР 20-02-2018 рус_ 11.06.21' },
  { country: 'Молдавия', document: 'Молдова РСН 13-87' },
  { country: 'Россия', document: 'СП С С Р РФ' },
  { country: 'Таджикистан', document: 'СНиП РТ 22-07-2018 Сейсмостойкое строительство' },
  { country: 'Туркмения', document: 'СНТ 2.01.08-19 Строительство в сейсмических районах. Часть 1.' },
  { country: 'Узбекистан', document: null },
  { country: 'Украина', document: 'dbn-v-1-1-12-2014-stroitelstvo-v-seysmicheskih-rayonah-ukrainy_compressed' },
];

export default function NormsOfCisCountries() {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontWeight: 800, color: NAVY, mb: 1 }}>
        ТМД елдерінің нормалары
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        Тиісті ұлттық нормативтік актілерге талдау жүргізілді. Келесі қадам келісілген
        бірыңғай нормалар мен оларға ұлттық қосымшаларды әзірлеу болуы тиіс. Бірыңғай нормалар
        ТМД кеңістігінде жер сілкінісіне төзімді құрылыстың дамуына серпін беріп қана қоймай,
        осы саланы реттейтін ұлттық заңнамалардағы олқылықтардың орнын толтыруға арналған.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          ТМД елдерінде жер сілкінісі құрылысындағы олқылықтарды бірлесіп жоятын болады.
        </Typography>
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Нормаларды сипаттау
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Grid container spacing={2}>
        {norms.map(({ country, document }) => (
          <Grid item xs={12} sm={6} key={country}>
            <Box
              sx={{
                p: 2,
                border: '1px solid ' + BORDER,
                borderRadius: '6px',
                height: '100%',
                borderLeft: document ? '4px solid ' + BLUE : '4px solid #CBD5E1',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
              }}
            >
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem', mb: document ? 0.5 : 0 }}>
                {country}
              </Typography>
              {document && (
                <Typography sx={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.6 }}>
                  {document}
                </Typography>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
