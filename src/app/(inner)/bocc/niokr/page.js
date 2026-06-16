'use client';
import { Typography, Box, Divider } from '@mui/material';
import Link from 'next/link';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const RESEARCH_AREAS = [
  {
    title: 'Сейсмостойкое строительство',
    desc: 'Экспериментальные и теоретические исследования в области сейсмостойкости зданий и сооружений, разработка методов оценки и повышения сейсмической устойчивости существующих конструкций.',
  },
  {
    title: 'Гармонизация нормативной базы',
    desc: 'Разработка единых межгосударственных стандартов и нормативных документов для стран СНГ в области строительства с учётом сейсмических условий каждого региона.',
  },
  {
    title: 'Инженерная сейсмология',
    desc: 'Исследования по сейсмическому микрорайонированию территорий, оценке сейсмической опасности площадок строительства, прогнозированию сейсмических воздействий.',
  },
  {
    title: 'Новые конструктивные решения',
    desc: 'Разработка и апробация инновационных конструктивных систем и сейсмоизолирующих устройств для повышения безопасности зданий в сейсмоактивных регионах.',
  },
];

export default function NiokrPage() {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        НИОКР
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Научно-исследовательские и опытно-конструкторские работы (НИОКР) являются одним из ключевых
        направлений деятельности БОСС. Базовая организация координирует совместные исследования
        стран-участниц СНГ в области сейсмостойкого строительства.
      </Typography>

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
          Результатами экспериментальных и научных исследований БОСС могут воспользоваться
          все страны Содружества Независимых Государств для повышения безопасности строительства
          в сейсмоактивных регионах.
        </Typography>
      </Box>

      <Typography
        variant="h6"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 3 }}
      >
        Основные направления исследований
      </Typography>

      {RESEARCH_AREAS.map((area, i) => (
        <Box key={i}>
          <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 }, mb: 3, alignItems: 'flex-start' }}>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: '2rem',
                color: BLUE,
                lineHeight: 1,
                minWidth: 40,
                flexShrink: 0,
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </Typography>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem', mb: 0.5 }}>
                {area.title}
              </Typography>
              <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
                {area.desc}
              </Typography>
            </Box>
          </Box>
          {i < RESEARCH_AREAS.length - 1 && <Divider sx={{ mb: 3 }} />}
        </Box>
      ))}

      <Box sx={{ mt: 4 }}>
        <Link
          href="/bocc"
          style={{
            color: NAVY,
            fontWeight: 700,
            fontSize: '0.9rem',
            textDecoration: 'none',
            borderBottom: '2px solid ' + BLUE,
            paddingBottom: 1,
          }}
        >
          ← Вернуться к разделу БОСС
        </Link>
      </Box>
    </Box>
  );
}
