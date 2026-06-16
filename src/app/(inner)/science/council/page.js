'use client';
import { Typography, Box, Grid } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const functions = [
  { title: 'Утверждение программ', desc: 'Рассмотрение и утверждение планов научно-исследовательских работ института на текущий и перспективный периоды.' },
  { title: 'Оценка результатов', desc: 'Экспертная оценка завершённых исследований, заключений и рекомендаций для строительной отрасли.' },
  { title: 'Научное руководство', desc: 'Коллегиальное руководство научными направлениями, координация межотраслевых исследований и сотрудничества.' },
];

export default function CouncilPage() {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Учёный совет
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        Учёный совет КазНИИСА является постоянно действующим коллегиальным органом научного управления
        института. В его состав входят ведущие учёные, доктора и кандидаты наук, представители отраслевых
        организаций и государственных структур в сфере строительства и архитектуры Республики Казахстан.
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
        <Typography sx={{ color: '#334155', lineHeight: 1.9, fontStyle: 'italic' }}>
          Учёный совет определяет стратегические направления научной деятельности института, рассматривает
          вопросы присвоения учёных степеней и звания, осуществляет научно-методическое руководство
          исследовательскими проектами и международным сотрудничеством.
        </Typography>
      </Box>

      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        Основные функции
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Grid container spacing={4}>
        {functions.map((f, i) => (
          <Grid item xs={12} md={4} key={f.title}>
            <Box
              sx={{
                p: 3,
                border: '1px solid ' + BORDER,
                borderRadius: '6px',
                height: '100%',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 800, color: NAVY, mb: 1 }}
              >
                {i + 1}. {f.title}
              </Typography>
              <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
                {f.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
