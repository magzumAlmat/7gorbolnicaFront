'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

const norms = [
  { country: 'Азербайджан', document: null },
  { country: 'Армения', document: null },
  { country: 'Беларусь', document: null },
  { country: 'Казахстан', document: 'СП РК 2.03-30-2017 Строительство в сейсмических зонах' },
  { country: 'Кыргызстан', document: 'СН КР 20-02-2018' },
  { country: 'Молдавия', document: 'РСН 13-87' },
  { country: 'Россия', document: 'СП (СНиП) РФ Сейсмостойкое строительство' },
  { country: 'Таджикистан', document: 'СНиП РТ 22-07-2018 Сейсмостойкое строительство' },
  { country: 'Туркмения', document: 'СНТ 2.01.08-19 Строительство в сейсмических районах. Часть 1' },
  { country: 'Узбекистан', document: null },
  { country: 'Украина', document: 'ДБН В.1.1-12:2014' },
];

export default function NormsOfCisCountries() {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}>
        Нормы стран СНГ
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        В рамках деятельности Базовой организации ведётся работа по разработке единых норм сейсмостойкого строительства для всех государств — членов СНГ. Проведена оценка действующих национальных нормативных документов. Следующий этап предусматривает установление гармонизированных единых стандартов и национальных приложений.
      </Typography>

      <Box
        sx={{
          borderLeft: '4px solid #F59E0B',
          pl: 3,
          py: 2,
          bgcolor: '#FAFAFA',
          fontStyle: 'italic',
          mb: 4,
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Единые нормы направлены на совершенствование сейсмостойкого строительства в странах СНГ и устранение существующих законодательных пробелов в строительном надзоре.
        </Typography>
      </Box>

      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Нормативные документы по странам
      </Typography>
      <Divider sx={{ borderColor: AMBER, mb: 3 }} />

      <Grid container spacing={2}>
        {norms.map(({ country, document }) => (
          <Grid item xs={12} sm={6} key={country}>
            <Box
              sx={{
                p: 2,
                border: '1px solid #E2E8F0',
                borderRadius: 2,
                height: '100%',
                borderLeft: document ? '4px solid #F59E0B' : '4px solid #CBD5E1',
              }}
            >
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem', mb: 0.5 }}>
                {country}
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: document ? '#334155' : '#94A3B8', lineHeight: 1.6 }}>
                {document || 'Документ на стадии разработки'}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
