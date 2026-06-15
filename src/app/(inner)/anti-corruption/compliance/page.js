'use client';
import { Typography, Box, Grid, Divider, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArticleIcon from '@mui/icons-material/Article';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

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
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Комплаенс и противодействие коррупции
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        АО «КазНИИСА» проводит последовательную политику по предупреждению и противодействию коррупции.
        Служба антикоррупционного комплаенса принимает сообщения о фактах коррупции, мошенничества,
        хищений, нарушений в сфере закупок, злоупотреблений служебным положением и иных действий,
        наносящих материальный или репутационный ущерб организации.
      </Typography>

      <Box
        sx={{
          borderLeft: '4px solid #F59E0B',
          pl: 3,
          py: 2,
          bgcolor: '#FAFAFA',
          fontStyle: 'italic',
          mb: 4,
          borderRadius: '0 8px 8px 0',
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          Просим сообщать о фактах коррупции, мошенничества, хищений, нарушений в сфере закупок,
          злоупотреблений должностным положением, а также действиях, причиняющих материальный ущерб
          или репутационный вред АО «КазНИИСА».
        </Typography>
      </Box>

      {/* Hotline */}
      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Горячая линия
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Paper sx={{ p: 3, borderRadius: 2, border: '1px solid #E2E8F0', mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <PhoneIcon sx={{ color: AMBER }} />
              <Box>
                <Typography sx={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Телефон</Typography>
                <Typography sx={{ fontWeight: 700, color: NAVY }}>+7 (727) 226 94 11 доб. 188</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <EmailIcon sx={{ color: AMBER }} />
              <Box>
                <Typography sx={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Электронная почта</Typography>
                <Typography sx={{ fontWeight: 700, color: NAVY }}>anticor_comp@kazniisa.kz</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <LocationOnIcon sx={{ color: AMBER }} />
              <Box>
                <Typography sx={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Адрес</Typography>
                <Typography sx={{ fontWeight: 700, color: NAVY }}>3 микрорайон 44А, г. Алматы</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Documents */}
      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Документы и регламенты
      </Typography>
      <Divider sx={{ mb: 3 }} />

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
              <ArticleIcon sx={{ color: AMBER, fontSize: 20 }} />
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
