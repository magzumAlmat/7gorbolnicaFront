'use client';
import { Typography, Box, Paper, Grid, Chip } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const NAVY = '#0F172A';
const ACCENT = '#0369A1';
const AMBER = '#F59E0B';
const BG = '#F8FAFC';

const awards = [
  {
    title: '«Самая яркая BIM-идея года»',
    location: 'Москва',
    year: '2016',
    desc: 'Международная премия за достижения в области информационного моделирования зданий.',
    icon: '🏆',
  },
  {
    title: '«Лидер Казахстана»',
    location: 'Казахстан',
    year: '2014',
    desc: 'Национальная премия, признающая выдающийся вклад организации в развитие страны.',
    icon: '🥇',
  },
  {
    title: '«Лидер Казахстана»',
    location: 'Казахстан',
    year: '2013',
    desc: 'Национальная премия, признающая выдающийся вклад организации в развитие страны.',
    icon: '🥇',
  },
  {
    title: '«Лидер отрасли»',
    location: 'Казахстан',
    year: '2014',
    desc: 'Отраслевая премия за лидерство в строительной науке и проектировании.',
    icon: '⭐',
  },
  {
    title: '«Лидер отрасли»',
    location: 'Казахстан',
    year: '2013',
    desc: 'Отраслевая премия за лидерство в строительной науке и проектировании.',
    icon: '⭐',
  },
];

export default function AwardsPage() {
  return (
    <Box>
      <Chip label="Награды" size="small" sx={{ bgcolor: AMBER, color: NAVY, fontWeight: 700, mb: 1.5, fontFamily: '"Roboto Mono", monospace' }} />
      <Typography variant="h4" sx={{ fontWeight: 800, color: NAVY, mb: 1, fontFamily: '"Exo 2", sans-serif' }}>
        Награды и достижения
      </Typography>
      <Box sx={{ width: 60, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 2 }} />
      <Typography sx={{ color: '#64748B', mb: 4, fontSize: '0.95rem' }}>
        АО «КазНИИСА» удостоен ряда престижных национальных и международных наград, подтверждающих высокий профессиональный уровень института.
      </Typography>

      <Grid container spacing={3}>
        {awards.map((a, i) => {
          const awardPhotos = [
            '/images/kazniisa/bim-award.webp',
            '/images/kazniisa/leader-award.webp',
            '/images/kazniisa/leader-award.webp',
            '/images/kazniisa/industry-leader.webp',
            '/images/kazniisa/industry-leader.webp',
          ];
          return (
            <Grid item xs={12} sm={6} key={i}>
              <Paper elevation={0} sx={{ p: 3, border: `1px solid ${i === 0 ? AMBER : '#E2E8F0'}`, borderRadius: 3, bgcolor: i === 0 ? `${AMBER}08` : BG, height: '100%' }}>
                <Box component="img" src={awardPhotos[i]} alt={a.title} sx={{ width: '100%', maxWidth: 320, borderRadius: 2, mb: 2 }} />
                <Box sx={{ fontSize: '2rem', mb: 1.5 }}>{a.icon}</Box>
                <Box sx={{ display: 'flex', gap: 1, mb: 1.5, flexWrap: 'wrap' }}>
                  <Chip label={a.year} size="small" sx={{ bgcolor: NAVY, color: '#fff', fontFamily: '"Roboto Mono", monospace', fontSize: '0.75rem' }} />
                  <Chip label={a.location} size="small" sx={{ bgcolor: `${ACCENT}15`, color: ACCENT, fontSize: '0.75rem' }} />
                </Box>
                <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem', mb: 1, lineHeight: 1.3 }}>{a.title}</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.6 }}>{a.desc}</Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
