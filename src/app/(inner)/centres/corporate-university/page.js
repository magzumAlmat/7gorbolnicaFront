'use client';
import { Typography, Box, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Chip, Divider } from '@mui/material';
import { School, CheckCircle, CalendarMonth, EmojiEvents, Group, WorkspacePremium } from '@mui/icons-material';

const COURSES = [
  {
    num: 1,
    title: 'Технический надзор в строительстве',
    desc: 'Функции и ответственность технического надзора, нормативная база, документооборот.',
    duration: '40 ч',
    audience: 'Инженеры ТН',
  },
  {
    num: 2,
    title: 'Авторский надзор',
    desc: 'Организация авторского надзора, права и обязанности авторов проекта, отчётность.',
    duration: '24 ч',
    audience: 'Проектировщики',
  },
  {
    num: 3,
    title: 'Сметное дело и ценообразование',
    desc: 'Разработка сметной документации, ресурсный метод, современные нормативы РК.',
    duration: '40 ч',
    audience: 'Сметчики',
  },
  {
    num: 4,
    title: 'BIM и цифровые технологии в строительстве',
    desc: 'Основы информационного моделирования, ТИМСО, работа в Autodesk Revit.',
    duration: '32 ч',
    audience: 'ИТР',
  },
  {
    num: 5,
    title: 'Безопасность и охрана труда на объектах',
    desc: 'Требования по охране труда, промышленная безопасность, расследование несчастных случаев.',
    duration: '16 ч',
    audience: 'Инженеры по ОТ',
  },
  {
    num: 6,
    title: 'Геодезические работы в строительстве',
    desc: 'Геодезическое сопровождение строительства, разбивочные работы, исполнительные съёмки.',
    duration: '24 ч',
    audience: 'Геодезисты',
  },
  {
    num: 7,
    title: 'Управление строительными проектами',
    desc: 'Планирование, контроль, управление рисками и командой на строительном объекте.',
    duration: '32 ч',
    audience: 'Руководители',
  },
];

const CERT_TYPES = [
  { label: 'ИТР', title: 'Аттестация инженерно-технических работников', desc: 'Обязательная аттестация для ИТР строительных организаций согласно законодательству РК' },
  { label: 'ТН', title: 'Технический надзор', desc: 'Квалификационный аттестат специалиста по техническому надзору' },
  { label: 'АН', title: 'Авторский надзор', desc: 'Подтверждение компетенций по авторскому надзору за строительством' },
  { label: 'ПБ', title: 'Промышленная безопасность', desc: 'Аттестация по промышленной безопасности для опасных производственных объектов' },
];

export default function CorporateUniversity() {
  return (
    <Box>
      {/* Hero */}
      <Box sx={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)', borderRadius: 3, p: { xs: 3, md: 5 }, mb: 4, color: '#fff' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <School sx={{ fontSize: 48, color: '#F59E0B' }} />
          <Box>
            <Typography variant="overline" sx={{ color: '#F59E0B', fontWeight: 700, letterSpacing: 2 }}>
              КазНИИСА — Центр
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
              Корпоративный университет
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1" sx={{ opacity: 0.85, maxWidth: 700, lineHeight: 1.8 }}>
          Профессиональная подготовка и аттестация специалистов строительной отрасли.
          7 учебных курсов, занятия 3–4 раза в месяц, выдача квалификационных свидетельств.
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, mt: 3, flexWrap: 'wrap' }}>
          {[['7', 'учебных курсов'], ['3–4', 'раза в месяц'], ['4', 'вида аттестации']].map(([num, label]) => (
            <Box key={label} sx={{ textAlign: 'center' }}>
              <Typography variant="h3" sx={{ fontWeight: 900, color: '#F59E0B', lineHeight: 1 }}>{num}</Typography>
              <Typography variant="caption" sx={{ opacity: 0.8 }}>{label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Courses */}
      <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', mb: 2 }}>
        Учебные курсы
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {COURSES.map((c) => (
          <Grid item xs={12} sm={6} lg={4} key={c.num}>
            <Paper
              elevation={0}
              sx={{
                border: '1px solid #E2E8F0',
                borderRadius: 3,
                p: 2.5,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': { borderColor: '#0369A1', boxShadow: '0 4px 16px rgba(3,105,161,0.10)' },
                transition: 'all 0.2s',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                <Box sx={{ width: 32, height: 32, borderRadius: '50%', background: '#0369A1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Typography variant="caption" sx={{ color: '#fff', fontWeight: 800 }}>{c.num}</Typography>
                </Box>
                <Chip label={c.duration} size="small" sx={{ background: '#F1F5F9', color: '#0369A1', fontWeight: 700, fontSize: 11 }} />
              </Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A', mb: 1, lineHeight: 1.4 }}>
                {c.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.6, flex: 1, mb: 1.5 }}>
                {c.desc}
              </Typography>
              <Chip label={c.audience} size="small" sx={{ alignSelf: 'flex-start', background: '#EFF6FF', color: '#0369A1', fontWeight: 600, fontSize: 11 }} />
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Certification */}
      <Paper elevation={0} sx={{ border: '1px solid #E2E8F0', borderRadius: 3, p: 3.5, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
          <WorkspacePremium sx={{ color: '#F59E0B' }} />
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
            Виды аттестации
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {CERT_TYPES.map((ct, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <Chip label={ct.label} sx={{ background: '#F59E0B', color: '#0F172A', fontWeight: 800, minWidth: 48, flexShrink: 0 }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A' }}>{ct.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.6 }}>{ct.desc}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Schedule info */}
      <Paper elevation={0} sx={{ border: '1px solid #E2E8F0', borderRadius: 3, p: 3, background: '#F8FAFC' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
          <CalendarMonth sx={{ color: '#0369A1' }} />
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
            Расписание и формат обучения
          </Typography>
        </Box>
        <List dense>
          {[
            'Занятия проводятся 3–4 раза в месяц по рабочим дням',
            'Очный формат с практическими занятиями на объектах',
            'Выдача удостоверения о повышении квалификации государственного образца',
            'Корпоративное обучение выездными группами по договору',
            'Возможность дистанционного обучения по отдельным модулям',
          ].map((item, i) => (
            <ListItem key={i} sx={{ px: 0 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <CheckCircle sx={{ color: '#0369A1', fontSize: 16 }} />
              </ListItemIcon>
              <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', color: '#334155' }} />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Box sx={{ mt: 3, p: 3, borderRadius: 3, background: '#FFFBEB', border: '1px solid #FDE68A' }}>
        <Typography variant="body2" sx={{ color: '#78350F', fontWeight: 500 }}>
          Корпоративный университет КазНИИСА — аккредитованный учебный центр для подготовки
          и аттестации ИТР строительной отрасли Республики Казахстан.
        </Typography>
      </Box>
    </Box>
  );
}
