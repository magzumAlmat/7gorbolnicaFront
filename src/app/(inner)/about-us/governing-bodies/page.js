'use client';
import { Typography, Box, Paper, Grid, Chip, Divider, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';

const NAVY = '#0F172A';
const ACCENT = '#0369A1';
const AMBER = '#F59E0B';
const BG = '#F8FAFC';

const board = [
  { name: 'Бесимбаев Е.Т.', role: 'Председатель Совета директоров', initials: 'БЕ', chair: true },
  { name: 'Рысдавлетов М.Б.', role: 'Член Совета директоров', initials: 'РМ' },
  { name: 'Карибаева М.К.', role: 'Член Совета директоров', initials: 'КМ' },
  { name: 'Кульбаев Б.Б.', role: 'Член Совета директоров', initials: 'КБ' },
  { name: 'Есенова К.Е.', role: 'Член Совета директоров', initials: 'ЕК' },
  { name: 'Сатжанов К.С.', role: 'Член Совета директоров', initials: 'СК' },
];

const management = [
  { name: 'Кульбаев Б.Б.', role: 'Генеральный директор', initials: 'КБ' },
  { name: 'Шокбаров Е.М.', role: 'Управляющий директор по производству', initials: 'ШЕ' },
  { name: 'Шахнович А.Ю.', role: 'Управляющий директор по развитию и цифровизации', initials: 'ША' },
];

export default function GoverningBodiesPage() {
  return (
    <Box>
      <Chip label="Управление" size="small" sx={{ bgcolor: AMBER, color: NAVY, fontWeight: 700, mb: 1.5, fontFamily: '"Roboto Mono", monospace' }} />
      <Typography variant="h4" sx={{ fontWeight: 800, color: NAVY, mb: 1, fontFamily: '"Exo 2", sans-serif' }}>
        Органы управления
      </Typography>
      <Box sx={{ width: 60, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 3 }} />
      <Box component="img" src="/images/kazniisa/org-structure-2025.webp" alt="Организационная структура КазНИИСА 2025" sx={{ width: '100%', maxWidth: 600, borderRadius: 2, mb: 4 }} />

      <Paper elevation={0} sx={{ p: 3, bgcolor: `${ACCENT}08`, border: `1px solid ${ACCENT}25`, borderRadius: 3, mb: 4 }}>
        <Typography variant="overline" sx={{ color: ACCENT, fontFamily: '"Roboto Mono", monospace', fontWeight: 700, letterSpacing: 1, display: 'block', mb: 1 }}>
          Единственный акционер
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Box component="img" src="/images/kazniisa/ministry-logo.webp" alt="Министерство промышленности и строительства РК" sx={{ height: 48, objectFit: 'contain', flexShrink: 0 }} />
          <Typography sx={{ fontWeight: 600, color: NAVY, fontSize: '1rem' }}>
            Комитет по делам строительства и жилищно-коммунального хозяйства Министерства промышленности и строительства Республики Казахстан
          </Typography>
        </Box>
      </Paper>

      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
          <StarIcon sx={{ color: AMBER }} />
          <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontFamily: '"Exo 2", sans-serif' }}>
            Совет директоров
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {board.map((m, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper elevation={0} sx={{
                p: 2.5, border: `1px solid ${m.chair ? AMBER : '#E2E8F0'}`,
                borderRadius: 2, bgcolor: m.chair ? `${AMBER}10` : BG,
                display: 'flex', alignItems: 'center', gap: 2,
              }}>
                <Avatar sx={{ bgcolor: m.chair ? AMBER : NAVY, color: m.chair ? NAVY : '#fff', fontWeight: 700, width: 44, height: 44, fontSize: '0.85rem' }}>
                  {m.initials}
                </Avatar>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem' }}>{m.name}</Typography>
                  <Typography sx={{ color: '#64748B', fontSize: '0.78rem', lineHeight: 1.4 }}>{m.role}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
          <PersonIcon sx={{ color: ACCENT }} />
          <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontFamily: '"Exo 2", sans-serif' }}>
            Руководство
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {management.map((m, i) => {
            const photos = [
              '/images/kazniisa/kulbaev-director.webp',
              '/images/kazniisa/shokbarov.webp',
              '/images/kazniisa/shakhnovitch.webp',
            ];
            return (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Paper elevation={0} sx={{ p: 2.5, border: '1px solid #E2E8F0', borderRadius: 2, bgcolor: BG, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box component="img" src={photos[i]} alt={m.name} sx={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                  <Box>
                    <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem' }}>{m.name}</Typography>
                    <Typography sx={{ color: '#64748B', fontSize: '0.78rem', lineHeight: 1.4 }}>{m.role}</Typography>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Paper elevation={0} sx={{ p: 2.5, border: '1px solid #E2E8F0', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar sx={{ bgcolor: '#64748B', color: '#fff', fontWeight: 700, width: 44, height: 44, fontSize: '0.85rem' }}>ЕБ</Avatar>
        <Box>
          <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem' }}>Ермекбаев Б.С.</Typography>
          <Typography sx={{ color: '#64748B', fontSize: '0.78rem', fontFamily: '"Roboto Mono", monospace' }}>Внутренний аудитор</Typography>
        </Box>
      </Paper>
    </Box>
  );
}
