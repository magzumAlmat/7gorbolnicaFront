'use client';
import { Typography, Box, Paper, Grid, Chip, Divider } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const goals = [
  'Адаптация международных BIM-стандартов к условиям Казахстана',
  'Продвижение цифровизации строительной отрасли',
  'Формирование экосистемы BIM в стране',
  'Поддержка государственных инициатив в сфере ТИМСО',
];

const benefits = [
  { icon: <PublicIcon sx={{ color: '#0369A1' }} />, title: 'Глобальное сообщество', desc: 'Доступ к международной сети специалистов buildingSMART International и мировой базе знаний.' },
  { icon: <SchoolIcon sx={{ color: '#0369A1' }} />, title: 'Обучение и сертификация', desc: 'Участие в программах обучения, включая BuildingSMART Professional Certification-Foundation «Basic».' },
  { icon: <AccountTreeIcon sx={{ color: '#0369A1' }} />, title: 'Организационная поддержка', desc: 'Помощь во внедрении openBIM-процессов и стандартов (IFC, IDS, bSDD, BCF, UCM, Validation).' },
  { icon: <EmojiEventsIcon sx={{ color: '#0369A1' }} />, title: 'Статус и признание', desc: 'Официальный статус члена buildingSMART Kazakhstan, признаваемый на международном уровне.' },
];

const standards = ['IFC', 'IDS', 'bSDD', 'BCF', 'UCM', 'Validation'];

export default function BuildingSmartPage() {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <Box component="img" src="/images/kazniisa/buildingsmart-logo.webp" alt="buildingSMART logo" sx={{ height: 48, objectFit: 'contain' }} />
      </Box>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: '#0F172A' }}>
        BuildingSMART Казахстан
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
        <Chip label="Официальный представитель" sx={{ bgcolor: '#0369A1', color: '#fff', fontWeight: 600 }} />
        <Chip label="buildingSMART International" sx={{ bgcolor: '#0F172A', color: '#fff', fontWeight: 600 }} />
        <Chip label="Основан в 2024" sx={{ bgcolor: '#F59E0B', color: '#fff', fontWeight: 600 }} />
      </Box>

      <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#334155', mb: 3 }}>
        BuildingSMART Казахстан — официальный представитель buildingSMART International в Казахстане.
        Профессиональное сообщество специалистов в области BIM и ТИМСО (Технология информационного
        моделирования строительных объектов), объединяющее проектировщиков, строителей, заказчиков
        и государственные органы.
      </Typography>

      <Paper sx={{ p: 3, mb: 4, bgcolor: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', mb: 1 }}>Миссия</Typography>
        <Typography sx={{ color: '#334155', lineHeight: 1.8, fontStyle: 'italic' }}>
          Формирование инновационной строительной отрасли Казахстана посредством широкого внедрения
          технологий информационного моделирования (BIM/ТИМСО), адаптации международных openBIM-стандартов
          и создания устойчивой профессиональной экосистемы.
        </Typography>
      </Paper>

      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#0F172A' }}>Цели организации</Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {goals.map((g, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Paper sx={{ p: 2, borderRadius: 2, border: '1px solid #E2E8F0', display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <Box sx={{ width: 28, height: 28, borderRadius: '50%', bgcolor: '#0369A1', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0, mt: 0.2 }}>
                {i + 1}
              </Box>
              <Typography sx={{ color: '#334155', lineHeight: 1.7 }}>{g}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#0F172A' }}>Преимущества членства</Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {benefits.map((b) => (
          <Grid item xs={12} sm={6} key={b.title}>
            <Paper sx={{ p: 3, borderRadius: 2, border: '1px solid #E2E8F0', height: '100%' }}>
              <Box sx={{ mb: 1 }}>{b.icon}</Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', mb: 0.5 }}>{b.title}</Typography>
              <Typography sx={{ color: '#64748B', lineHeight: 1.7, fontSize: '0.95rem' }}>{b.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#0F172A' }}>Стандарты openBIM</Typography>
      <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 4 }}>
        {standards.map((s) => (
          <Chip key={s} label={s} sx={{ bgcolor: '#0F172A', color: '#fff', fontWeight: 700, fontSize: '0.9rem' }} />
        ))}
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 2, border: '1px solid #E2E8F0', bgcolor: '#F8FAFC' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', mb: 1 }}>История</Typography>
            <Box component="img" src="/images/kazniisa/bsmart-founder.webp" alt="Основатель buildingSMART Казахстан" sx={{ width: '100%', maxWidth: 600, borderRadius: 2, mb: 2 }} />
            <Typography sx={{ color: '#334155', lineHeight: 1.7 }}>
              В 2021 году КазНИИСА получил право на проведение обучения по программам buildingSMART.
              В начале 2024 года официально создан казахстанский чаптер (глава) buildingSMART International.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 2, border: '1px solid #E2E8F0', bgcolor: '#F8FAFC' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', mb: 1 }}>Сертификация</Typography>
            <Typography sx={{ color: '#334155', lineHeight: 1.7 }}>
              Курс <strong>BuildingSMART Professional Certification-Foundation «Basic»</strong> —
              базовый курс для специалистов, начинающих работу с BIM и openBIM-стандартами.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
