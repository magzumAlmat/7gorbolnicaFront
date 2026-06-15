'use client';
import { Typography, Box, Paper, Grid, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import ArticleIcon from '@mui/icons-material/Article';

const NAVY = '#0F172A';
const ACCENT = '#0369A1';
const AMBER = '#F59E0B';
const BG = '#F8FAFC';

const categories = [
  {
    title: 'Организационные документы',
    icon: <FolderIcon />,
    color: ACCENT,
    items: ['Устав АО «КазНИИСА»', 'Внутренние регламенты и положения', 'Кодекс корпоративного управления'],
  },
  {
    title: 'Кодексы и политики',
    icon: <ArticleIcon />,
    color: '#0891B2',
    items: ['Кодекс корпоративной этики', 'Антикоррупционная политика', 'Политика управления рисками'],
  },
  {
    title: 'Отчёты об аудите',
    icon: <DescriptionIcon />,
    color: '#7C3AED',
    items: ['Отчёт внутреннего аудита', 'Заключение внешнего аудитора', 'Аудиторские заключения по годам'],
  },
  {
    title: 'Планы развития',
    icon: <FolderIcon />,
    color: '#059669',
    items: ['Стратегический план на 2024–2028 гг.', 'Годовой план работы', 'Программа инновационного развития'],
  },
  {
    title: 'Годовые отчёты',
    icon: <ArticleIcon />,
    color: AMBER,
    items: ['Годовой отчёт 2023', 'Годовой отчёт 2022', 'Годовой отчёт 2021'],
  },
  {
    title: 'Финансовая отчётность',
    icon: <DescriptionIcon />,
    color: '#DC2626',
    items: ['Финансовая отчётность по МСФО', 'Квартальная отчётность', 'Отчёт о движении денежных средств'],
  },
  {
    title: 'Закупочная деятельность',
    icon: <FolderIcon />,
    color: '#64748B',
    items: ['Правила закупок', 'Планы закупок', 'Отчёты о проведённых закупках'],
  },
];

export default function CorporateDocumentsPage() {
  return (
    <Box>
      <Chip label="Документы" size="small" sx={{ bgcolor: AMBER, color: NAVY, fontWeight: 700, mb: 1.5, fontFamily: '"Roboto Mono", monospace' }} />
      <Typography variant="h4" sx={{ fontWeight: 800, color: NAVY, mb: 1, fontFamily: '"Exo 2", sans-serif' }}>
        Корпоративные документы
      </Typography>
      <Box sx={{ width: 60, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 2 }} />
      <Typography sx={{ color: '#64748B', mb: 4, fontSize: '0.95rem' }}>
        Корпоративная документация АО «КазНИИСА» систематизирована по категориям в соответствии с требованиями законодательства Республики Казахстан.
      </Typography>

      <Grid container spacing={2.5}>
        {categories.map((cat, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E2E8F0', borderRadius: 3, bgcolor: BG, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={{ color: cat.color, display: 'flex' }}>{cat.icon}</Box>
                <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem' }}>{cat.title}</Typography>
              </Box>
              <List disablePadding>
                {cat.items.map((item, j) => (
                  <ListItem key={j} disableGutters sx={{ py: 0.4 }}>
                    <ListItemIcon sx={{ minWidth: 28 }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: cat.color }} />
                    </ListItemIcon>
                    <ListItemText primary={item} primaryTypographyProps={{ fontSize: '0.85rem', color: '#475569' }} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
