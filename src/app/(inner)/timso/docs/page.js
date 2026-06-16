'use client';
import { Typography, Box, Paper, Grid, Chip } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import GavelIcon from '@mui/icons-material/Gavel';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const docs2017 = [
  { code: 'Концепция', title: 'Концепция внедрения ТИМСО в Республике Казахстан', year: 2017 },
  { code: 'РДС РК 1.02-04-2018', title: 'Руководящий документ по системе — основные положения ТИМСО', year: 2018 },
  { code: 'СП РК 1.02-111', title: 'Свод правил. ТИМСО. Часть 1. Общие требования', year: 2018 },
  { code: 'СП РК 1.02-112', title: 'Свод правил. ТИМСО. Часть 2. Управление данными', year: 2018 },
  { code: 'СП РК 1.02-113', title: 'Свод правил. ТИМСО. Часть 3. Проектирование', year: 2018 },
  { code: 'СП РК 1.02-114', title: 'Свод правил. ТИМСО. Часть 4. Строительство', year: 2018 },
  { code: 'СП РК 1.02-115', title: 'Свод правил. ТИМСО. Часть 5. Эксплуатация', year: 2018 },
  { code: 'СП РК 1.02-116', title: 'Свод правил. ТИМСО. Часть 6. Требования к ПО', year: 2018 },
  { code: 'СП РК 1.02-117', title: 'Свод правил. ТИМСО. Часть 7. Безопасность данных', year: 2018 },
];

const docs2019 = [
  { code: 'СП РК 1.02-ЖЦ-4', title: 'Жизненный цикл объекта. Часть 4. Строительная организация', year: 2019 },
  { code: 'СП РК 1.02-ЖЦ-5', title: 'Жизненный цикл объекта. Часть 5. Эксплуатирующая организация', year: 2019 },
  { code: 'Классификатор BIM', title: 'Классификатор строительной информации для ТИМСО', year: 2019 },
];

export default function DocsPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: NAVY }}>
        Нормативные документы ТИМСО
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Chip label="Приказ Министра № 197 от 11.04.2017" sx={{ bgcolor: BLUE, color: '#fff', mb: 3, fontWeight: 600 }} />

      <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#334155', mb: 4 }}>
        Документы разработаны в соответствии с Планом, утверждённым приказом Министра по делам
        строительства Республики Казахстан № 197 от 11 апреля 2017 года. Документы регулируют
        применение технологий информационного моделирования (ТИМСО/BIM) на всех этапах жизненного
        цикла строительных объектов.
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <GavelIcon sx={{ color: BLUE }} />
          <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>Документы 2017–2018</Typography>
        </Box>
        <Grid container spacing={2}>
          {docs2017.map((d) => (
            <Grid item xs={12} key={d.code}>
              <Paper sx={{
                p: 2.5,
                borderRadius: '6px',
                border: '1px solid ' + BORDER,
                display: 'flex',
                gap: 2,
                alignItems: 'flex-start',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
              }}>
                <DescriptionIcon sx={{ color: BLUE, mt: 0.2, flexShrink: 0 }} />
                <Box>
                  <Chip label={d.code} size="small" sx={{ bgcolor: NAVY, color: '#fff', fontFamily: 'monospace', fontWeight: 600, mb: 0.5 }} />
                  <Typography sx={{ color: '#334155', lineHeight: 1.6 }}>{d.title}</Typography>
                </Box>
                <Chip label={d.year} size="small" sx={{ bgcolor: GRAY_BG, color: GRAY_TEXT, ml: 'auto', flexShrink: 0 }} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <GavelIcon sx={{ color: BLUE }} />
          <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>Документы 2019</Typography>
        </Box>
        <Grid container spacing={2}>
          {docs2019.map((d) => (
            <Grid item xs={12} key={d.code}>
              <Paper sx={{
                p: 2.5,
                borderRadius: '6px',
                border: '1px solid ' + BORDER,
                display: 'flex',
                gap: 2,
                alignItems: 'flex-start',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
              }}>
                <DescriptionIcon sx={{ color: BLUE, mt: 0.2, flexShrink: 0 }} />
                <Box>
                  <Chip label={d.code} size="small" sx={{ bgcolor: NAVY, color: '#fff', fontFamily: 'monospace', fontWeight: 600, mb: 0.5 }} />
                  <Typography sx={{ color: '#334155', lineHeight: 1.6 }}>{d.title}</Typography>
                </Box>
                <Chip label={d.year} size="small" sx={{ bgcolor: BLUE_LIGHT, color: BLUE, ml: 'auto', flexShrink: 0 }} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
