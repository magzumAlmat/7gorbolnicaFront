'use client';
import { Typography, Box, Paper, Grid, Chip } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import BugReportIcon from '@mui/icons-material/BugReport';

const goals = [
  { icon: <GridViewIcon sx={{ color: '#0369A1' }} />, title: 'Единое информационное пространство', desc: 'Создание унифицированной системы классификации строительной информации, понятной всем участникам отрасли.' },
  { icon: <SyncAltIcon sx={{ color: '#0369A1' }} />, title: 'Упрощённый обмен данными', desc: 'Стандартизация форматов и кодов для беспрепятственного обмена информацией между системами и организациями.' },
  { icon: <ManageSearchIcon sx={{ color: '#0369A1' }} />, title: 'Управление проектами', desc: 'Повышение эффективности управления строительными проектами через единую классификацию объектов и процессов.' },
  { icon: <BugReportIcon sx={{ color: '#059669' }} />, title: 'Снижение ошибок', desc: 'Минимизация ошибок при передаче данных и обработке информации благодаря унифицированным кодам.' },
];

export default function RegistryTimsoPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: '#0F172A' }}>
        ЕСККС
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
        <Chip label="Единая система" sx={{ bgcolor: '#0369A1', color: '#fff', fontWeight: 600 }} />
        <Chip label="Классификации и кодирования" sx={{ bgcolor: '#0F172A', color: '#fff', fontWeight: 600 }} />
        <Chip label="Строительной информации" sx={{ bgcolor: '#F59E0B', color: '#fff', fontWeight: 600 }} />
      </Box>

      <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#334155', mb: 4 }}>
        ЕСККС — Единая система классификации и кодирования строительной информации. Разработана
        в рамках внедрения ТИМСО в Республике Казахстан. Обеспечивает унификацию наименований,
        характеристик и кодов объектов строительной отрасли для применения в информационных
        моделях и BIM-процессах.
      </Typography>

      <Paper sx={{ p: 3, mb: 4, bgcolor: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', mb: 1 }}>Назначение системы</Typography>
        <Typography sx={{ color: '#334155', lineHeight: 1.8 }}>
          ЕСККС служит основой для формирования цифровых информационных моделей строительных объектов.
          Система охватывает классификацию строительных элементов, материалов, работ, оборудования
          и процессов в соответствии с международными стандартами openBIM (IFC, bSDD).
        </Typography>
      </Paper>

      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#0F172A' }}>Цели ЕСККС</Typography>
      <Grid container spacing={3}>
        {goals.map((g) => (
          <Grid item xs={12} sm={6} key={g.title}>
            <Paper sx={{ p: 3, borderRadius: 2, border: '1px solid #E2E8F0', height: '100%' }}>
              <Box sx={{ mb: 1.5 }}>{g.icon}</Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', mb: 0.5 }}>{g.title}</Typography>
              <Typography sx={{ color: '#64748B', lineHeight: 1.7, fontSize: '0.95rem' }}>{g.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
