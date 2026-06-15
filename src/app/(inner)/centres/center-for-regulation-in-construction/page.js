'use client';
import { Typography, Box, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import { Gavel, CheckCircle, TrendingUp, MenuBook, BarChart } from '@mui/icons-material';

const ACTIVITIES = [
  'Разработка государственных нормативно-технических документов (НТД) в строительстве',
  'Актуализация строительных норм и правил (СНиП, СП)',
  'Разработка стандартов сметного нормирования',
  'Формирование ресурсных сметных норм (РСН)',
  'Методологическое обеспечение сметного ценообразования',
  'Мониторинг цен на строительные материалы, изделия и конструкции',
  'Подготовка индексов удорожания строительства',
  'Разработка территориальных единичных расценок (ТЕР)',
  'Экспертиза нормативных документов сторонних организаций',
];

const NTD_TYPES = [
  { label: 'СНиП / СП', desc: 'Строительные нормы и правила, своды правил' },
  { label: 'РСН', desc: 'Ресурсные сметные нормы' },
  { label: 'ТЕР', desc: 'Территориальные единичные расценки' },
  { label: 'МДС', desc: 'Методические документы в строительстве' },
  { label: 'ГОСТ / СТ РК', desc: 'Государственные и национальные стандарты' },
];

const MONITORING = [
  'Цены на бетон и железобетонные изделия',
  'Стоимость металлопроката и арматуры',
  'Цены на кирпич, блоки и кладочные материалы',
  'Стоимость тепло- и гидроизоляционных материалов',
  'Цены на отделочные материалы',
  'Стоимость инженерного оборудования',
  'Тарифы на строительные машины и механизмы',
  'Цены на перевозку грузов',
];

export default function RegulationCentre() {
  return (
    <Box>
      {/* Hero */}
      <Box sx={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)', borderRadius: 3, p: { xs: 3, md: 5 }, mb: 4, color: '#fff' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Gavel sx={{ fontSize: 48, color: '#F59E0B' }} />
          <Box>
            <Typography variant="overline" sx={{ color: '#F59E0B', fontWeight: 700, letterSpacing: 2 }}>
              КазНИИСА — Центр
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
              Центр нормирования в строительстве
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1" sx={{ opacity: 0.85, maxWidth: 700, lineHeight: 1.8 }}>
          Разработка нормативно-технической документации, стандартов сметного нормирования и
          систематический мониторинг цен на строительные материалы и ресурсы.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Main activities */}
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ border: '1px solid #E2E8F0', borderRadius: 3, p: 3.5, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <MenuBook sx={{ color: '#0369A1' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
                Направления деятельности
              </Typography>
            </Box>
            <List dense>
              {ACTIVITIES.map((a, i) => (
                <ListItem key={i} sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircle sx={{ color: '#0369A1', fontSize: 18 }} />
                  </ListItemIcon>
                  <ListItemText primary={a} primaryTypographyProps={{ variant: 'body2', color: '#334155' }} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          {/* NTD types */}
          <Paper elevation={0} sx={{ border: '1px solid #E2E8F0', borderRadius: 3, p: 3.5, mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Gavel sx={{ color: '#0369A1' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
                Виды разрабатываемых НТД
              </Typography>
            </Box>
            {NTD_TYPES.map((n, i) => (
              <Box key={i} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', mb: 1.5 }}>
                <Chip label={n.label} size="small" sx={{ background: '#0369A1', color: '#fff', fontWeight: 700, minWidth: 60, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: '#475569', lineHeight: 1.6 }}>{n.desc}</Typography>
              </Box>
            ))}
          </Paper>

          {/* Price monitoring */}
          <Paper elevation={0} sx={{ border: '1px solid #E2E8F0', borderRadius: 3, p: 3.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <BarChart sx={{ color: '#0369A1' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
                Мониторинг цен
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#64748B', mb: 2 }}>
              Ежеквартальный мониторинг по следующим позициям:
            </Typography>
            <List dense>
              {MONITORING.map((m, i) => (
                <ListItem key={i} sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <TrendingUp sx={{ color: '#F59E0B', fontSize: 16 }} />
                  </ListItemIcon>
                  <ListItemText primary={m} primaryTypographyProps={{ variant: 'body2', color: '#334155' }} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 3, p: 3, borderRadius: 3, background: '#FFFBEB', border: '1px solid #FDE68A' }}>
        <Typography variant="body2" sx={{ color: '#78350F', fontWeight: 500 }}>
          Центр является головной организацией по разработке нормативно-технической документации
          в строительстве Республики Казахстан и обеспечивает актуальность ценовой базы отрасли.
        </Typography>
      </Box>
    </Box>
  );
}
