'use client';
import { Typography, Box, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Chip, Divider } from '@mui/material';
import { Terrain, CheckCircle, Description, Group, Science, Build } from '@mui/icons-material';

const SERVICES = [
  'Техническое обследование зданий и сооружений',
  'Сейсмическая паспортизация объектов',
  'Структурные расчёты несущих конструкций',
  'Испытания строительных материалов и конструкций',
  'Оценка остаточного ресурса зданий',
  'Экспертиза проектных решений по сейсмостойкости',
  'Мониторинг деформаций и осадок',
];

const TEMPLATES = [
  'Акт обследования несущих конструкций',
  'Технический паспорт здания',
  'Протокол испытания бетона',
  'Заключение о сейсмостойкости',
  'Акт визуального осмотра фасадов',
  'Протокол испытания арматурной стали',
  'Дефектная ведомость',
  'Акт обследования кровли',
  'Протокол ультразвукового контроля',
  'Акт обследования подвала',
  'Протокол испытания кирпичной кладки',
  'Заключение по инженерным сетям',
  'Акт обследования фундамента',
  'Протокол динамических испытаний',
  'Ведомость дефектов перекрытий',
  'Акт обследования лестничных клеток',
  'Протокол испытания сварных соединений',
  'Заключение по огнестойкости',
  'Акт обследования балконов и лоджий',
  'Протокол геодезической съёмки',
  'Акт обследования деревянных конструкций',
  'Протокол испытания на срез',
  'Заключение о категории технического состояния',
  'Акт обследования металлических конструкций',
  'Протокол испытания оснований',
  'Акт по результатам тепловизионного контроля',
  'Сводное техническое заключение',
];

const STAFF_ROLES = [
  { role: 'Инженеры-конструкторы', count: 'Расчёт несущих систем и сейсмостойкости' },
  { role: 'Учёные-исследователи', count: 'Научное сопровождение и методология' },
  { role: 'Специалисты по испытаниям', count: 'Лабораторные и натурные испытания' },
  { role: 'Технические эксперты', count: 'Выдача заключений и паспортов' },
];

export default function SeismicCentre() {
  return (
    <Box>
      {/* Hero */}
      <Box sx={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)', borderRadius: 3, p: { xs: 3, md: 5 }, mb: 4, color: '#fff' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Terrain sx={{ fontSize: 48, color: '#F59E0B' }} />
          <Box>
            <Typography variant="overline" sx={{ color: '#F59E0B', fontWeight: 700, letterSpacing: 2 }}>
              КазНИИСА — Центр
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
              Центр по сейсмостойкости зданий и сооружений
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1" sx={{ opacity: 0.85, maxWidth: 700, lineHeight: 1.8 }}>
          Комплексное техническое обследование объектов строительства, сейсмическая паспортизация,
          структурные расчёты и экспериментальные испытания строительных материалов и конструкций.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Services */}
        <Grid item xs={12} md={7}>
          <Paper elevation={0} sx={{ border: '1px solid #E2E8F0', borderRadius: 3, p: 3.5, mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Build sx={{ color: '#0369A1' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
                Виды работ и услуг
              </Typography>
            </Box>
            <List dense>
              {SERVICES.map((s, i) => (
                <ListItem key={i} sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircle sx={{ color: '#0369A1', fontSize: 18 }} />
                  </ListItemIcon>
                  <ListItemText primary={s} primaryTypographyProps={{ variant: 'body2', color: '#334155' }} />
                </ListItem>
              ))}
            </List>
          </Paper>

          {/* Experimental work */}
          <Paper elevation={0} sx={{ border: '1px solid #E2E8F0', borderRadius: 3, p: 3.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Science sx={{ color: '#0369A1' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
                Экспериментальные работы
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#475569', lineHeight: 1.8, mb: 2 }}>
              Центр проводит натурные и лабораторные испытания строительных материалов: бетона,
              арматурной стали, кирпичной кладки, металлических и деревянных конструкций.
              Применяются методы ультразвуковой дефектоскопии, динамических испытаний, тепловизионного
              контроля и геодезической съёмки.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {['Ультразвуковой контроль', 'Динамические испытания', 'Тепловизионный контроль', 'Геодезия', 'Лабораторные испытания'].map(c => (
                <Chip key={c} label={c} size="small" sx={{ background: '#EFF6FF', color: '#0369A1', fontWeight: 600, fontSize: 11 }} />
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Right column */}
        <Grid item xs={12} md={5}>
          {/* Staff */}
          <Paper elevation={0} sx={{ border: '1px solid #E2E8F0', borderRadius: 3, p: 3.5, mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Group sx={{ color: '#0369A1' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
                Состав специалистов
              </Typography>
            </Box>
            {STAFF_ROLES.map((s, i) => (
              <Box key={i}>
                <Box sx={{ py: 1.5 }}>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#0F172A' }}>{s.role}</Typography>
                  <Typography variant="caption" sx={{ color: '#64748B' }}>{s.count}</Typography>
                </Box>
                {i < STAFF_ROLES.length - 1 && <Divider />}
              </Box>
            ))}
          </Paper>

          {/* 27 templates */}
          <Paper elevation={0} sx={{ border: '1px solid #E2E8F0', borderRadius: 3, p: 3.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
              <Description sx={{ color: '#0369A1' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
                27 шаблонов документов
              </Typography>
            </Box>
            <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mb: 2 }}>
              Стандартизированные формы для всех типов обследований
            </Typography>
            <Box sx={{ maxHeight: 320, overflowY: 'auto', pr: 0.5 }}>
              {TEMPLATES.map((t, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, py: 0.75, borderBottom: i < TEMPLATES.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                  <Box sx={{ minWidth: 24, height: 24, borderRadius: '50%', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: '#0369A1', fontSize: 10 }}>{i + 1}</Typography>
                  </Box>
                  <Typography variant="caption" sx={{ color: '#334155', lineHeight: 1.6 }}>{t}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Accent bottom */}
      <Box sx={{ mt: 3, p: 3, borderRadius: 3, background: '#FFFBEB', border: '1px solid #FDE68A' }}>
        <Typography variant="body2" sx={{ color: '#78350F', fontWeight: 500 }}>
          Центр аккредитован на проведение технических обследований и выдачу сейсмических паспортов
          в соответствии с требованиями нормативных документов Республики Казахстан.
        </Typography>
      </Box>
    </Box>
  );
}
