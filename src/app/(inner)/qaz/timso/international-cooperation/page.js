'use client';
import { Typography, Box, Link } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';
const TEXT = '#334155';

export default function InternationalCooperationPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Халықаралық ынтымақтастық
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 3 }}>
        Үкіметаралық қатынастарды нығайту және интеграциялық процестерге байланысты
        мәселелерді шешу шеңберінде ТМД Экономикалық кеңесінің шешімімен техникалық реттеу
        саласында келісілген саясат жүргізу және құрылыс саласында бірыңғай нормативтік база
        құру мақсатында ТМД-ға қатысушы мемлекеттердің базалық ұйымы құрылды.
      </Typography>

      <Box
        sx={{
          bgcolor: BLUE_LIGHT,
          borderLeft: '4px solid ' + BLUE,
          borderRadius: '0 6px 6px 0',
          p: 3,
          fontStyle: 'italic',
          mb: 4,
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>
          «ТМД-ға мүше мемлекеттердің негізгі ұйымы.»
        </Typography>
      </Box>

      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        Құрылыстағы ақпараттық модельдеу технологиясы саласындағы нормативтік-техникалық
        базаны дамыту жөніндегі комиссия
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 4 }}>
        ТМД-ға қатысушы мемлекеттерде ақпараттық модельдеу саласындағы нормативтік-техникалық
        базаны дамыту саласында келісілген мемлекетаралық саясатты әзірлеу үшін жағдайларды
        қамтамасыз ету мақсатында ТМД-ға қатысушы мемлекеттердің құрылыс кешеніндегі
        техникалық реттеу мәселелері жөніндегі базалық ұйымының үшінші отырысында 2018 жылғы
        8 маусымда Душанбе қаласында нормативтік-техникалық базаны дамыту жөніндегі кіші
        комиссия құру туралы шешім қабылданды.
      </Typography>
    </Box>
  );
}
