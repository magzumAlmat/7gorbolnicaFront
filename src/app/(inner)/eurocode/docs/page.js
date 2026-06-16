'use client';
import { Typography, Box, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Chip, Divider } from '@mui/material';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import DownloadIcon from '@mui/icons-material/Download';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const docGroups = [
  {
    category: 'Основы и нагрузки',
    docs: [
      { code: 'СП РК EN 1990', title: 'Основы проектирования конструкций', status: 'Утверждён' },
      { code: 'СП РК EN 1991-1-1', title: 'Плотности, собственный вес, полезные нагрузки', status: 'Утверждён' },
      { code: 'СП РК EN 1991-1-3', title: 'Снеговые нагрузки', status: 'Утверждён' },
      { code: 'СП РК EN 1991-1-4', title: 'Ветровые воздействия', status: 'На утверждении' },
    ],
  },
  {
    category: 'Несущие конструкции',
    docs: [
      { code: 'СП РК EN 1992-1-1', title: 'Железобетонные конструкции — Общие правила', status: 'Утверждён' },
      { code: 'СП РК EN 1993-1-1', title: 'Стальные конструкции — Общие правила', status: 'Утверждён' },
      { code: 'СП РК EN 1995-1-1', title: 'Деревянные конструкции — Общие правила', status: 'Разработка' },
      { code: 'СП РК EN 1996-1-1', title: 'Каменные конструкции — Общие правила', status: 'Разработка' },
    ],
  },
  {
    category: 'Геотехника и сейсмика',
    docs: [
      { code: 'СП РК EN 1997-1', title: 'Геотехническое проектирование — Общие правила', status: 'Утверждён' },
      { code: 'СП РК EN 1998-1', title: 'Сейсмостойкие конструкции — Общие правила, сейсм. воздействия', status: 'Утверждён' },
      { code: 'СП РК EN 1998-3', title: 'Оценка и усиление зданий', status: 'На утверждении' },
      { code: 'СП РК EN 1998-5', title: 'Фундаменты, подпорные стены и геотехнические аспекты', status: 'На утверждении' },
    ],
  },
];

const statusColor = {
  'Утверждён': { bg: '#DCFCE7', color: '#166534' },
  'На утверждении': { bg: '#FEF9C3', color: '#854D0E' },
  'Разработка': { bg: '#F1F5F9', color: '#475569' },
};

export default function EurocopeDocsPage() {
  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          background: 'linear-gradient(135deg, #0F172A 0%, #0369A1 100%)',
          color: '#fff',
          borderRadius: '6px',
          p: { xs: 3, md: 5 },
          mb: 4,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <FolderOpenIcon sx={{ fontSize: 40 }} />
          <Chip label="Нормативные документы" sx={{ bgcolor: '#0369A1', color: '#fff', fontWeight: 700 }} />
        </Box>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
          Документы по Еврокодам
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9, maxWidth: 720 }}>
          Перечень нормативных документов серии СП РК EN, разработанных КазНИИСА на основе
          европейских стандартов Еврокодов. Документы содержат Национальные приложения
          с параметрами, установленными для условий Казахстана.
        </Typography>
      </Paper>

      <Paper elevation={0} sx={{ borderRadius: 2, p: 2, mb: 3, bgcolor: '#EFF6FF', border: '1px solid #BFDBFE', display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
        <InfoOutlinedIcon sx={{ color: '#0369A1', mt: 0.2 }} />
        <Typography variant="body2" color="text.secondary">
          Все документы серии СП РК EN являются официальными переводами и адаптациями стандартов CEN
          с учётом климатических, сейсмических и иных особых условий Республики Казахстан.
          Для получения актуальных версий документов обращайтесь в технический отдел КазНИИСА.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        {docGroups.map((group, gi) => (
          <Grid item xs={12} key={gi}>
            <Paper elevation={1} sx={{ borderRadius: '6px', overflow: 'hidden', transition: 'box-shadow 0.2s ease, transform 0.2s ease', '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' } }}>
              <Box sx={{ bgcolor: '#0F172A', px: 3, py: 1.5 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#fff' }}>
                  {group.category}
                </Typography>
              </Box>
              <List disablePadding>
                {group.docs.map((doc, di) => (
                  <Box key={di}>
                    <ListItem sx={{ px: 3, py: 1.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <DownloadIcon sx={{ color: '#0369A1' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                            <Typography variant="body2" sx={{ fontWeight: 700, color: '#0F172A' }}>
                              {doc.code}
                            </Typography>
                            <Chip
                              label={doc.status}
                              size="small"
                              sx={{
                                bgcolor: statusColor[doc.status]?.bg,
                                color: statusColor[doc.status]?.color,
                                fontWeight: 600,
                                fontSize: '0.7rem',
                              }}
                            />
                          </Box>
                        }
                        secondary={doc.title}
                        secondaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                    {di < group.docs.length - 1 && <Divider sx={{ mx: 3 }} />}
                  </Box>
                ))}
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
