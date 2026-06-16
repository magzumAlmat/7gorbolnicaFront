'use client';
import { Typography, Box, Grid, Divider, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import Link from 'next/link';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const courses = [
  { title: 'Технологии информационного моделирования (BIM)', hours: 72, format: 'Очно / Дистанционно' },
  { title: 'Обследование зданий и сооружений', hours: 72, format: 'Очно' },
  { title: 'Сейсмостойкое строительство', hours: 72, format: 'Очно' },
  { title: 'Проектирование зданий и сооружений', hours: 40, format: 'Очно / Дистанционно' },
  { title: 'Сметное дело в строительстве', hours: 40, format: 'Очно / Дистанционно' },
  { title: 'Техническое регулирование в строительстве', hours: 40, format: 'Очно' },
  { title: 'Охрана труда и техника безопасности в строительстве', hours: 40, format: 'Очно' },
  { title: 'Экспертиза проектной документации', hours: 40, format: 'Очно / Дистанционно' },
  { title: 'Основы buildingSMART и openBIM', hours: 24, format: 'Дистанционно' },
];

const advantages = [
  'Свидетельство об аттестации (рег. номер KZ21VVV00012695)',
  'Преподаватели — действующие эксперты и учёные КазНИИСА',
  'Занятия 3–4 раза в месяц в очном и дистанционном форматах',
  'Доступ к лабораторной базе и испытательному оборудованию',
  'Индивидуальные корпоративные программы для организаций',
  'Международная сертификация buildingSMART Foundation',
];

export default function CorporateUniversityPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Корпоративный университет
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Корпоративный университет АО «КазНИИСА» обеспечивает профессиональную подготовку и повышение
        квалификации специалистов строительной отрасли. Проводит аттестацию инженерно-технических
        работников в соответствии с требованиями законодательства Республики Казахстан.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, border: '1px solid ' + BORDER, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 2.5, mb: 3 }}>
        <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: BLUE, textTransform: 'uppercase', letterSpacing: '0.05em', mb: 0.5 }}>
          Руководитель
        </Typography>
        <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem' }}>
          Оразбекова Найля Капановна
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1.5, bgcolor: BLUE_LIGHT, borderRadius: '6px' }}>
          <SchoolIcon sx={{ color: BLUE, fontSize: 20 }} />
          <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem' }}>9 учебных курсов</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1.5, bgcolor: BLUE_LIGHT, borderRadius: '6px' }}>
          <VerifiedIcon sx={{ color: BLUE, fontSize: 20 }} />
          <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem' }}>Аттестация ИТР</Typography>
        </Box>
      </Box>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 5 }}>
        <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>
          <strong>Аттестация инженерно-технических работников</strong> — университет имеет свидетельство
          об аттестации с регистрационным номером KZ21VVV00012695. Аттестация проводится в соответствии
          с Правилами аттестации экспертов, осуществляющих экспертные работы и инженерные услуги в сфере
          архитектурной, градостроительной и строительной деятельности.
        </Typography>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 3 }}>
        Учебные курсы
      </Typography>

      <Grid container spacing={2} sx={{ mb: 5 }}>
        {courses.map((c, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box sx={{ p: 2.5, border: '1px solid ' + BORDER, borderRadius: '6px', height: '100%', transition: 'box-shadow 0.2s', '&:hover': { boxShadow: '0 4px 16px rgba(0,0,0,0.06)' } }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem', mb: 1, lineHeight: 1.4 }}>{c.title}</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip label={`${c.hours} ч.`} size="small" sx={{ bgcolor: BLUE, color: '#fff', fontWeight: 700, fontSize: '0.72rem' }} />
                <Chip label={c.format} size="small" variant="outlined" sx={{ borderColor: BORDER, color: GRAY_TEXT, fontSize: '0.72rem' }} />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 3 }}>
        Преимущества
      </Typography>
      {advantages.map((a, i) => (
        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
          <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: BLUE, mt: '9px', flexShrink: 0 }} />
          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>{a}</Typography>
        </Box>
      ))}

      <Divider sx={{ my: 4 }} />

      <Box sx={{ bgcolor: NAVY, borderRadius: '6px', p: 4, mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 1 }}>Контакты университета</Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mb: 2 }} />
        <Typography sx={{ color: '#CBD5E1', fontSize: '0.92rem', mb: 0.5 }}>Email: zhannet@kazniisa.kz</Typography>
        <Typography sx={{ color: '#CBD5E1', fontSize: '0.92rem', mb: 0.5 }}>Тел.: 8 (727) 226 94 10</Typography>
        <Typography sx={{ color: '#94A3B8', fontSize: '0.85rem' }}>3 микрорайон 44А, г. Алматы</Typography>
      </Box>

      <Link href="/centres" style={{ color: NAVY, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid ' + BORDER, paddingBottom: 1 }}>
        ← Все центры
      </Link>
    </Box>
  );
}
