'use client';
import { Typography, Box, Grid } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

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
      <Typography variant="h3" sx={{ fontWeight: 800, color: NAVY, mb: 1 }}>
        Нормы стран СНГ
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        В рамках деятельности Базовой организации ведётся работа по разработке единых норм сейсмостойкого строительства для всех государств — членов СНГ. Проведена оценка действующих национальных нормативных документов. Следующий этап предусматривает установление гармонизированных единых стандартов и национальных приложений.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Единые нормы направлены на совершенствование сейсмостойкого строительства в странах СНГ и устранение существующих законодательных пробелов в строительном надзоре.
        </Typography>
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Нормативные документы по странам
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
