'use client';
import { Typography, Box, Paper, Grid, Chip, Avatar } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PublicIcon from '@mui/icons-material/Public';

const NAVY = '#0F172A';
const ACCENT = '#0369A1';
const AMBER = '#F59E0B';
const BG = '#F8FAFC';

const partners = [
  {
    name: 'Японское общество сейсмоизоляции',
    tag: 'Япония',
    year: '1993',
    desc: 'Сотрудничество в области сейсмоизоляции зданий и сооружений, обмен технологиями и стандартами.',
    initials: 'ЯОС',
  },
  {
    name: 'Ассоциация BuildingSMART',
    tag: 'Международная',
    year: null,
    desc: 'Партнёрство в области OpenBIM-технологий, разработки открытых стандартов информационного моделирования.',
    initials: 'BIM',
  },
  {
    name: 'Кыргызский ГУСТиА им. Н. Исанова',
    tag: 'Кыргызстан',
    year: '1998',
    desc: 'Академическое сотрудничество в сфере строительства и архитектуры, совместные исследования.',
    initials: 'КГУ',
  },
  {
    name: 'Назарбаев Университет',
    tag: 'Казахстан',
    year: '2010',
    desc: 'Совместные научные проекты, подготовка кадров, развитие инновационных строительных технологий.',
    initials: 'НУ',
  },
  {
    name: 'ГИССиИП',
    tag: 'СНГ',
    year: null,
    desc: 'Партнёрство в области сейсмостойкого строительства и инновационных проектных решений.',
    initials: 'ГИС',
  },
  {
    name: 'НИИСФ РААСН',
    tag: 'Москва',
    year: null,
    desc: 'Научно-исследовательское сотрудничество с Российской академией архитектуры и строительных наук.',
    initials: 'НИИ',
  },
];

export default function PartnersPage() {
  return (
    <Box>
      <Chip label="Партнёры" size="small" sx={{ bgcolor: AMBER, color: NAVY, fontWeight: 700, mb: 1.5, fontFamily: '"Roboto Mono", monospace' }} />
      <Typography variant="h4" sx={{ fontWeight: 800, color: NAVY, mb: 1, fontFamily: '"Exo 2", sans-serif' }}>
        Партнёрские организации
      </Typography>
      <Box sx={{ width: 60, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 2 }} />
      <Typography sx={{ color: '#64748B', mb: 3, fontSize: '0.95rem' }}>
        КазНИИСА поддерживает долгосрочные партнёрства с ведущими научными и профессиональными организациями в области строительства и архитектуры.
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', alignItems: 'center', mb: 4 }}>
        <Box component="img" src="/images/kazniisa/buildingsmart-logo.webp" alt="buildingSMART" sx={{ height: 48, objectFit: 'contain' }} />
        <Box component="img" src="/images/kazniisa/ministry-logo.webp" alt="Министерство промышленности и строительства РК" sx={{ height: 48, objectFit: 'contain' }} />
      </Box>

      <Grid container spacing={3}>
        {partners.map((p, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E2E8F0', borderRadius: 3, bgcolor: BG, height: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ bgcolor: NAVY, color: '#fff', fontWeight: 700, width: 48, height: 48, fontSize: '0.75rem', fontFamily: '"Roboto Mono", monospace' }}>
                  {p.initials}
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem', lineHeight: 1.3 }}>{p.name}</Typography>
                  <Box sx={{ display: 'flex', gap: 1, mt: 0.5, flexWrap: 'wrap' }}>
                    <Chip label={p.tag} size="small" sx={{ bgcolor: `${ACCENT}15`, color: ACCENT, fontSize: '0.7rem', height: 20 }} />
                    {p.year && <Chip label={`с ${p.year}`} size="small" sx={{ bgcolor: `${AMBER}20`, color: '#92400E', fontSize: '0.7rem', height: 20 }} />}
                  </Box>
                </Box>
              </Box>
              <Typography sx={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.6 }}>{p.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
