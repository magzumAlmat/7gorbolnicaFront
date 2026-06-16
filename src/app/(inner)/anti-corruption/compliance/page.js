'use client';
import { Typography, Box, Grid, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArticleIcon from '@mui/icons-material/Article';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const documents = [
  'Антикоррупционный стандарт',
  'Приказ о службе антикоррупционного комплаенса',
  'Антикоррупционная политика',
  'Положение о должности комплаенс-офицера',
  'Мониторинг коррупционных рисков',
  'Реестр коррупционных рисков',
  'Виды коррупционных нарушений',
  'Определение коррупции',
  'Правила поведения сотрудников',
  'Цели и задачи',
  'Аналитический отчёт',
];

export default function CompliancePage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Комплаенс и противодействие коррупции
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        АО «КазНИИСА» проводит последовательную политику по предупреждению и противодействию коррупции.
        Служба антикоррупционного комплаенса принимает сообщения о фактах коррупции, мошенничества,
        хищений, нарушений в сфере закупок, злоупотреблений служебным положением и иных действий,
        наносящих материальный или репутационный ущерб организации.
      </Typography>

      <Box
        sx={{
          bgcolor: BLUE_LIGHT,
          borderLeft: '4px solid ' + BLUE,
          borderRadius: '0 6px 6px 0',
          p: 3,
          fontStyle: 'italic',
          mb: 4,
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          Просим сообщать о фактах коррупции, мошенничества, хищений, нарушений в сфере закупок,
          злоупотреблений должностным положением, а также действиях, причиняющих материальный ущерб
          или репутационный вред АО «КазНИИСА».
        </Typography>
      </Box>

      {/* Hotline */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Горячая линия
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Paper sx={{ p: 3, borderRadius: '6px', border: '1px solid ' + BORDER, mb: 4, transition: 'box-shadow 0.2s ease, transform 0.2s ease', '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' } }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <PhoneIcon sx={{ color: BLUE }} />
              <Box>
                <Typography sx={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Телефон</Typography>
                <Typography sx={{ fontWeight: 700, color: NAVY }}>+7 (727) 226 94 11 доб. 188</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <EmailIcon sx={{ color: BLUE }} />
              <Box>
                <Typography sx={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Электронная почта</Typography>
                <Typography sx={{ fontWeight: 700, color: NAVY }}>anticor_comp@kazniisa.kz</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <LocationOnIcon sx={{ color: BLUE }} />
              <Box>
                <Typography sx={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Адрес</Typography>
                <Typography sx={{ fontWeight: 700, color: NAVY }}>3 микрорайон 44А, г. Алматы</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Documents */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Документы и регламенты
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <List disablePadding>
        {documents.map((doc) => (
          <ListItem
            key={doc}
            sx={{
              px: 0,
              py: 1,
              borderBottom: '1px solid #F1F5F9',
              '&:last-child': { borderBottom: 'none' },
            }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              <ArticleIcon sx={{ color: BLUE, fontSize: 20 }} />
            </ListItemIcon>
            <ListItemText
              primary={doc}
              primaryTypographyProps={{ sx: { fontSize: '1rem', color: '#334155', lineHeight: 1.9 } }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
