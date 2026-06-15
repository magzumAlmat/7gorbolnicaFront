'use client';
import { Typography, Box, Paper, Grid, Chip } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIcon from '@mui/icons-material/Assignment';
import VerifiedIcon from '@mui/icons-material/Verified';

const functions = [
  { icon: <AssignmentIcon sx={{ color: '#0369A1' }} />, title: 'Утверждение программ', desc: 'Рассмотрение и утверждение планов научно-исследовательских работ института на текущий и перспективный периоды.' },
  { icon: <VerifiedIcon sx={{ color: '#0369A1' }} />, title: 'Оценка результатов', desc: 'Экспертная оценка завершённых исследований, заключений и рекомендаций для строительной отрасли.' },
  { icon: <GroupsIcon sx={{ color: '#0369A1' }} />, title: 'Научное руководство', desc: 'Коллегиальное руководство научными направлениями, координация межотраслевых исследований и сотрудничества.' },
];

export default function CouncilPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: '#0F172A' }}>
        Учёный совет
      </Typography>
      <Chip label="Коллегиальный научный орган" sx={{ bgcolor: '#0369A1', color: '#fff', mb: 3, fontWeight: 600 }} />

      <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#334155', mb: 4 }}>
        Учёный совет КазНИИСА является постоянно действующим коллегиальным органом научного управления
        института. В его состав входят ведущие учёные, доктора и кандидаты наук, представители отраслевых
        организаций и государственных структур в сфере строительства и архитектуры Республики Казахстан.
      </Typography>

      <Paper sx={{ p: 3, mb: 4, bgcolor: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 2 }}>
        <Typography sx={{ color: '#92400E', lineHeight: 1.7, fontStyle: 'italic' }}>
          Учёный совет определяет стратегические направления научной деятельности института, рассматривает
          вопросы присвоения учёных степеней и звания, осуществляет научно-методическое руководство
          исследовательскими проектами и международным сотрудничеством.
        </Typography>
      </Paper>

      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#0F172A' }}>Основные функции</Typography>
      <Grid container spacing={3}>
        {functions.map((f) => (
          <Grid item xs={12} md={4} key={f.title}>
            <Paper sx={{ p: 3, borderRadius: 2, border: '1px solid #E2E8F0', height: '100%' }}>
              <Box sx={{ mb: 1.5 }}>{f.icon}</Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', mb: 1 }}>{f.title}</Typography>
              <Typography sx={{ color: '#64748B', lineHeight: 1.7, fontSize: '0.95rem' }}>{f.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
