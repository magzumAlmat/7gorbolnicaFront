'use client';
import { Typography, Box, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Chip, Divider } from '@mui/material';
import { Computer, CheckCircle, School, Code, Hub, Star } from '@mui/icons-material';

const DIRECTIONS = [
  {
    icon: <Code sx={{ color: '#0369A1' }} />,
    title: 'Разработка BIM-стандартов',
    items: [
      'Национальные стандарты информационного моделирования зданий',
      'Протоколы обмена данными (IFC, CDE)',
      'Требования к BIM-моделям на различных стадиях проектирования',
      'Классификаторы строительной информации',
    ],
  },
  {
    icon: <Hub sx={{ color: '#0369A1' }} />,
    title: 'Цифровая трансформация отрасли',
    items: [
      'Внедрение ТИМСО (технологии информационного моделирования)',
      'Разработка дорожных карт цифровизации строительства',
      'Пилотные BIM-проекты на объектах Казахстана',
      'Формирование цифровых двойников зданий',
      'Интеграция с ГИС и геопространственными данными',
    ],
  },
  {
    icon: <School sx={{ color: '#0369A1' }} />,
    title: 'Обучение и компетенции',
    items: [
      'Подготовка BIM-специалистов и BIM-менеджеров',
      'Семинары и тренинги по цифровым технологиям',
      'Методические пособия по BIM для проектировщиков',
      'Аккредитация учебных программ по ТИМСО',
    ],
  },
];

const COMPETENCIES = [
  'Autodesk Revit / Civil 3D',
  'IFC / OpenBIM',
  'Navisworks (коллизии)',
  'CDE-платформы',
  'Dynamo / Python-скриптинг',
  'GIS-интеграция',
  'Цифровые двойники',
  'Лазерное сканирование',
];

export default function ScienceDigitalizationCentre() {
  return (
    <Box>
      {/* Hero */}
      <Box sx={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)', borderRadius: 3, p: { xs: 3, md: 5 }, mb: 4, color: '#fff' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Computer sx={{ fontSize: 48, color: '#F59E0B' }} />
          <Box>
            <Typography variant="overline" sx={{ color: '#F59E0B', fontWeight: 700, letterSpacing: 2 }}>
              КазНИИСА — Центр
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
              Центр науки и цифровизации строительства
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1" sx={{ opacity: 0.85, maxWidth: 700, lineHeight: 1.8 }}>
          Внедрение BIM/ТИМСО в строительную отрасль Казахстана: разработка стандартов,
          цифровая трансформация процессов проектирования и строительства, подготовка специалистов.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1.5, mt: 2.5, flexWrap: 'wrap' }}>
          {['BIM', 'ТИМСО', 'OpenBIM', 'IFC', 'Цифровые двойники'].map(t => (
            <Chip key={t} label={t} size="small" sx={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontWeight: 700, border: '1px solid rgba(255,255,255,0.3)' }} />
          ))}
        </Box>
      </Box>

      {/* 3 directions */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {DIRECTIONS.map((d, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper elevation={0} sx={{ border: '1px solid #E2E8F0', borderRadius: 3, p: 3, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={{ p: 1, borderRadius: 2, background: '#EFF6FF' }}>{d.icon}</Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0F172A', lineHeight: 1.3 }}>
                  {d.title}
                </Typography>
              </Box>
              <List dense>
                {d.items.map((item, j) => (
                  <ListItem key={j} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 28 }}>
                      <CheckCircle sx={{ color: '#0369A1', fontSize: 16 }} />
                    </ListItemIcon>
                    <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', color: '#475569' }} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Competencies */}
      <Paper elevation={0} sx={{ border: '1px solid #E2E8F0', borderRadius: 3, p: 3.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <Star sx={{ color: '#F59E0B' }} />
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
            Технологические компетенции
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
          {COMPETENCIES.map(c => (
            <Chip
              key={c}
              label={c}
              sx={{
                background: '#F8FAFC',
                border: '1px solid #CBD5E1',
                color: '#0F172A',
                fontWeight: 600,
                '&:hover': { background: '#EFF6FF', borderColor: '#0369A1' },
              }}
            />
          ))}
        </Box>
      </Paper>

      <Box sx={{ mt: 3, p: 3, borderRadius: 3, background: '#FFFBEB', border: '1px solid #FDE68A' }}>
        <Typography variant="body2" sx={{ color: '#78350F', fontWeight: 500 }}>
          Центр координирует внедрение ТИМСО на государственном уровне и обеспечивает
          методологическую поддержку BIM-перехода строительных организаций Казахстана.
        </Typography>
      </Box>
    </Box>
  );
}
