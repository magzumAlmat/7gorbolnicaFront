'use client';
import { Typography, Box, Grid, Divider, Paper, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DevicesIcon from '@mui/icons-material/Devices';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

const benefits = [
  'Подтвердить экспертизу в области openBIM',
  'Получить признание в профессиональном сообществе',
  'Открыть новые карьерные возможности',
  'Поддерживать актуальные знания в openBIM',
  'Применять полученные знания в реальных проектах',
  'Внедрять методологии openBIM для повышения эффективности проектов',
];

const faqs = [
  {
    q: 'Что такое buildingSMART?',
    a: 'Международная организация, разрабатывающая и поддерживающая стандарты и технологии в области BIM.',
  },
  {
    q: 'Какой формат обучения доступен?',
    a: 'Доступны как дистанционный, так и очный форматы обучения.',
  },
  {
    q: 'Разрешён ли повторный экзамен?',
    a: 'Да, допускается одна пересдача с дополнительной оплатой экзаменационного взноса.',
  },
];

const testimonials = [
  {
    text: 'Курс соответствовал высоким профессиональным стандартам. Мы активно применяем полученные знания и продвигаем внедрение BIM среди партнёров.',
    author: 'Madi Kenzhin',
    role: 'DCC Lead Engineer, Astana',
  },
  {
    text: 'Увлекательный курс с доступным и понятным изложением материала. Искренняя благодарность преподавателям и организаторам.',
    author: 'Aizhan Akhmetzhanova',
    role: 'Аналитический эксперт',
  },
];

export default function CertificationPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Профессиональная сертификация — Foundation
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 2 }} />
      <Chip label="#openBIM" sx={{ bgcolor: '#0369A1', color: '#fff', fontWeight: 600, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        С марта 2024 года Казахстан является официальным представителем buildingSMART —
        международной организации, разрабатывающей стандарты и технологии в области
        информационного моделирования зданий (BIM).
      </Typography>
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        Программа buildingSMART Professional Certification – Foundation входит в число наиболее
        авторитетных квалификаций в мировой строительной отрасли. Участники получают знания
        в области ключевых принципов BIM, международных передовых практик и стратегий внедрения
        в казахстанском строительном секторе. Успешное прохождение программы даёт международный сертификат.
      </Typography>

      {/* Program details */}
      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Параметры программы
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          { icon: <AccessTimeIcon sx={{ color: AMBER }} />, label: 'Продолжительность', value: '2 недели (стандартная программа)' },
          { icon: <DevicesIcon sx={{ color: AMBER }} />, label: 'Формат обучения', value: 'Дистанционно или очно' },
          { icon: <SchoolIcon sx={{ color: AMBER }} />, label: 'Стоимость включает', value: 'Все расходы на курс и один экзаменационный взнос' },
        ].map((item) => (
          <Grid item xs={12} sm={4} key={item.label}>
            <Paper sx={{ p: 3, borderRadius: 2, border: '1px solid #E2E8F0', height: '100%' }}>
              <Box sx={{ mb: 1 }}>{item.icon}</Box>
              <Typography sx={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600, mb: 0.5 }}>{item.label}</Typography>
              <Typography sx={{ fontWeight: 700, color: NAVY }}>{item.value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          borderLeft: '4px solid #F59E0B',
          pl: 3,
          py: 2,
          bgcolor: '#FAFAFA',
          fontStyle: 'italic',
          mb: 4,
          borderRadius: '0 8px 8px 0',
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          Участникам разрешается повторная сдача экзамена один раз с оплатой только экзаменационного взноса.
          Для участия рекомендуются базовые знания процессов проектирования, строительства и эксплуатации зданий.
        </Typography>
      </Box>

      {/* Benefits */}
      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Преимущества сертификации
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <List disablePadding sx={{ mb: 4 }}>
        {benefits.map((b) => (
          <ListItem key={b} sx={{ px: 0, py: 1, borderBottom: '1px solid #F1F5F9', '&:last-child': { borderBottom: 'none' } }}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <CheckCircleIcon sx={{ color: AMBER, fontSize: 20 }} />
            </ListItemIcon>
            <ListItemText
              primary={b}
              primaryTypographyProps={{ sx: { fontSize: '1rem', color: '#334155', lineHeight: 1.9 } }}
            />
          </ListItem>
        ))}
      </List>

      {/* Coordinator */}
      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Координатор программы
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Paper sx={{ p: 3, borderRadius: 2, border: '1px solid #E2E8F0', borderLeft: `4px solid ${AMBER}`, mb: 4 }}>
        <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1.1rem', mb: 1 }}>Мадина Умирзакова</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon sx={{ color: AMBER, fontSize: 18 }} />
            <Typography sx={{ color: '#334155' }}>+7 701 816 74 81 (WhatsApp)</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon sx={{ color: AMBER, fontSize: 18 }} />
            <Typography sx={{ color: '#334155' }}>mumirzakova@kazniisa.kz</Typography>
          </Box>
        </Box>
      </Paper>

      {/* FAQ */}
      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Часто задаваемые вопросы
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Box sx={{ mb: 4 }}>
        {faqs.map((faq) => (
          <Paper key={faq.q} sx={{ p: 3, mb: 2, borderRadius: 2, border: '1px solid #E2E8F0' }}>
            <Typography sx={{ fontWeight: 700, color: NAVY, mb: 1 }}>{faq.q}</Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{faq.a}</Typography>
          </Paper>
        ))}
      </Box>

      {/* Testimonials */}
      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Отзывы участников
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={3}>
        {testimonials.map((t) => (
          <Grid item xs={12} sm={6} key={t.author}>
            <Paper sx={{ p: 3, borderRadius: 2, border: '1px solid #E2E8F0', height: '100%' }}>
              <FormatQuoteIcon sx={{ color: AMBER, fontSize: 32, mb: 1 }} />
              <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic', mb: 2 }}>
                {t.text}
              </Typography>
              <Typography sx={{ fontWeight: 700, color: NAVY }}>{t.author}</Typography>
              <Typography sx={{ fontSize: '0.85rem', color: '#64748B' }}>{t.role}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
