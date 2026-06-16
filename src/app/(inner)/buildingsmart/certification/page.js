'use client';
import { Typography, Box, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DevicesIcon from '@mui/icons-material/Devices';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

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
      <Typography variant="h3" sx={{ fontWeight: 800, color: NAVY, mb: 1 }}>
        Профессиональная сертификация — Foundation
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 2 }} />
      <Chip label="#openBIM" sx={{ bgcolor: BLUE, color: '#fff', fontWeight: 600, mb: 4 }} />

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
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Параметры программы
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          { icon: <AccessTimeIcon sx={{ color: BLUE }} />, label: 'Продолжительность', value: '2 недели (стандартная программа)' },
          { icon: <DevicesIcon sx={{ color: BLUE }} />, label: 'Формат обучения', value: 'Дистанционно или очно' },
          { icon: <SchoolIcon sx={{ color: BLUE }} />, label: 'Стоимость включает', value: 'Все расходы на курс и один экзаменационный взнос' },
        ].map((item) => (
          <Grid item xs={12} sm={4} key={item.label}>
            <Paper sx={{
              p: 3,
              borderRadius: '6px',
              border: '1px solid ' + BORDER,
              height: '100%',
              transition: 'box-shadow 0.2s ease, transform 0.2s ease',
              '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
            }}>
              <Box sx={{ mb: 1 }}>{item.icon}</Box>
              <Typography sx={{ fontSize: '0.8rem', color: GRAY_TEXT, fontWeight: 600, mb: 0.5 }}>{item.label}</Typography>
              <Typography sx={{ fontWeight: 700, color: NAVY }}>{item.value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          Участникам разрешается повторная сдача экзамена один раз с оплатой только экзаменационного взноса.
          Для участия рекомендуются базовые знания процессов проектирования, строительства и эксплуатации зданий.
        </Typography>
      </Box>

      {/* Benefits */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Преимущества сертификации
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <List disablePadding sx={{ mb: 4 }}>
        {benefits.map((b) => (
          <ListItem key={b} sx={{ px: 0, py: 1, borderBottom: '1px solid #F1F5F9', '&:last-child': { borderBottom: 'none' } }}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <CheckCircleIcon sx={{ color: BLUE, fontSize: 20 }} />
            </ListItemIcon>
            <ListItemText
              primary={b}
              primaryTypographyProps={{ sx: { fontSize: '1rem', color: '#334155', lineHeight: 1.9 } }}
            />
          </ListItem>
        ))}
      </List>

      {/* Coordinator */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Координатор программы
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Paper sx={{
        p: 3,
        borderRadius: '6px',
        border: '1px solid ' + BORDER,
        borderLeft: '4px solid ' + BLUE,
        mb: 4,
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
      }}>
        <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1.1rem', mb: 1 }}>Мадина Умирзакова</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon sx={{ color: BLUE, fontSize: 18 }} />
            <Typography sx={{ color: '#334155' }}>+7 701 816 74 81 (WhatsApp)</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon sx={{ color: BLUE, fontSize: 18 }} />
            <Typography sx={{ color: '#334155' }}>mumirzakova@kazniisa.kz</Typography>
          </Box>
        </Box>
      </Paper>

      {/* FAQ */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Часто задаваемые вопросы
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box sx={{ mb: 4 }}>
        {faqs.map((faq) => (
          <Paper key={faq.q} sx={{
            p: 3,
            mb: 2,
            borderRadius: '6px',
            border: '1px solid ' + BORDER,
            transition: 'box-shadow 0.2s ease, transform 0.2s ease',
            '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
          }}>
            <Typography sx={{ fontWeight: 700, color: NAVY, mb: 1 }}>{faq.q}</Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{faq.a}</Typography>
          </Paper>
        ))}
      </Box>

      {/* Testimonials */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Отзывы участников
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Grid container spacing={3}>
        {testimonials.map((t) => (
          <Grid item xs={12} sm={6} key={t.author}>
            <Paper sx={{
              p: 3,
              borderRadius: '6px',
              border: '1px solid ' + BORDER,
              height: '100%',
              transition: 'box-shadow 0.2s ease, transform 0.2s ease',
              '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
            }}>
              <FormatQuoteIcon sx={{ color: BLUE, fontSize: 32, mb: 1 }} />
              <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic', mb: 2 }}>
                {t.text}
              </Typography>
              <Typography sx={{ fontWeight: 700, color: NAVY }}>{t.author}</Typography>
              <Typography sx={{ fontSize: '0.85rem', color: GRAY_TEXT }}>{t.role}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
