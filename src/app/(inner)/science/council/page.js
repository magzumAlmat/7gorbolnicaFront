'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

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
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Учёный совет
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 2 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        Учёный совет КазНИИСА является постоянно действующим коллегиальным органом научного управления
        института. В его состав входят ведущие учёные, доктора и кандидаты наук, представители отраслевых
        организаций и государственных структур в сфере строительства и архитектуры Республики Казахстан.
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
        <Typography sx={{ color: '#334155', lineHeight: 1.9, fontStyle: 'italic' }}>
          Учёный совет определяет стратегические направления научной деятельности института, рассматривает
          вопросы присвоения учёных степеней и звания, осуществляет научно-методическое руководство
          исследовательскими проектами и международным сотрудничеством.
        </Typography>
      </Box>

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 2 }}
      >
        Основные функции
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={4}>
        {functions.map((f, i) => (
          <Grid item xs={12} md={4} key={f.title}>
            <Typography
              variant="h6"
              sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}
            >
              {i + 1}. {f.title}
            </Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              {f.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
