'use client';
import { Typography, Box, Paper, Grid, Chip } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import BugReportIcon from '@mui/icons-material/BugReport';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const goals = [
  { icon: <GridViewIcon sx={{ color: BLUE }} />, title: 'Единое информационное пространство', desc: 'Создание унифицированной системы классификации строительной информации, понятной всем участникам отрасли.' },
  { icon: <SyncAltIcon sx={{ color: BLUE }} />, title: 'Упрощённый обмен данными', desc: 'Стандартизация форматов и кодов для беспрепятственного обмена информацией между системами и организациями.' },
  { icon: <ManageSearchIcon sx={{ color: BLUE }} />, title: 'Управление проектами', desc: 'Повышение эффективности управления строительными проектами через единую классификацию объектов и процессов.' },
  { icon: <BugReportIcon sx={{ color: BLUE }} />, title: 'Снижение ошибок', desc: 'Минимизация ошибок при передаче данных и обработке информации благодаря унифицированным кодам.' },
];

export default function RegistryTimsoPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: NAVY }}>
        ЕСККС
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
        <Chip label="Единая система" sx={{ bgcolor: BLUE, color: '#fff', fontWeight: 600 }} />
        <Chip label="Классификации и кодирования" sx={{ bgcolor: NAVY, color: '#fff', fontWeight: 600 }} />
        <Chip label="Строительной информации" sx={{ bgcolor: BLUE, color: '#fff', fontWeight: 600 }} />
      </Box>

      <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#334155', mb: 4 }}>
        ЕСККС — Единая система классификации и кодирования строительной информации. Разработана
        в рамках внедрения ТИМСО в Республике Казахстан. Обеспечивает унификацию наименований,
        характеристик и кодов объектов строительной отрасли для применения в информационных
        моделях и BIM-процессах.
      </Typography>

      <Paper sx={{ p: 3, mb: 4, bgcolor: BLUE_LIGHT, border: '1px solid ' + BORDER, borderRadius: '6px' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, mb: 1 }}>Назначение системы</Typography>
        <Typography sx={{ color: '#334155', lineHeight: 1.8 }}>
          ЕСККС служит основой для формирования цифровых информационных моделей строительных объектов.
          Система охватывает классификацию строительных элементов, материалов, работ, оборудования
          и процессов в соответствии с международными стандартами openBIM (IFC, bSDD).
        </Typography>
      </Paper>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Цели ЕСККС
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Grid container spacing={3}>
        {goals.map((g) => (
          <Grid item xs={12} sm={6} key={g.title}>
            <Paper sx={{
              p: 3,
              borderRadius: '6px',
              border: '1px solid ' + BORDER,
              height: '100%',
              transition: 'box-shadow 0.2s ease, transform 0.2s ease',
              '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
            }}>
              <Box sx={{ mb: 1.5 }}>{g.icon}</Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, mb: 0.5 }}>{g.title}</Typography>
              <Typography sx={{ color: GRAY_TEXT, lineHeight: 1.7, fontSize: '0.95rem' }}>{g.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
