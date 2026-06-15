'use client';
import { Typography, Box, Divider, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import DownloadIcon from '@mui/icons-material/Download';
import AssignmentIcon from '@mui/icons-material/Assignment';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

const riskCategories = [
  'Риски в сфере закупок товаров, работ и услуг',
  'Риски при принятии управленческих решений',
  'Риски при взаимодействии с государственными органами',
  'Риски при распоряжении имуществом организации',
  'Риски в кадровой деятельности',
  'Риски при осуществлении финансово-хозяйственной деятельности',
  'Риски при оказании платных услуг и выполнении работ',
];

export default function RisksPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Перечень коррупционных рисков
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 2 }} />
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#64748B', mb: 4 }}>
        По результатам анализа коррупционных рисков АО «КазНИИСА»
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        В целях реализации антикоррупционной политики АО «КазНИИСА» проводит регулярный анализ
        коррупционных рисков. По результатам анализа формируется перечень выявленных коррупционных
        рисков с указанием мер по их минимизации и устранению.
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
          Анализ коррупционных рисков проводится службой антикоррупционного комплаенса с привлечением
          руководителей структурных подразделений организации. Результаты анализа используются для
          совершенствования системы внутреннего контроля.
        </Typography>
      </Box>

      {/* Document download */}
      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Документ
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Paper
        sx={{
          p: 3,
          borderRadius: 2,
          border: '1px solid #E2E8F0',
          borderLeft: `4px solid ${AMBER}`,
          mb: 4,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <AssignmentIcon sx={{ color: AMBER, fontSize: 40 }} />
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: 700, color: NAVY, mb: 0.5 }}>
            Перечень коррупционных рисков, выявленных по результатам анализа коррупционных рисков
          </Typography>
          <Typography sx={{ fontSize: '0.9rem', color: '#64748B' }}>
            АО «КазНИИСА» — актуальная редакция
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: AMBER,
            fontWeight: 600,
            fontSize: '0.9rem',
            cursor: 'pointer',
            '&:hover': { opacity: 0.8 },
          }}
        >
          <DownloadIcon />
          Скачать
        </Box>
      </Paper>

      {/* Risk categories */}
      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Основные категории коррупционных рисков
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <List disablePadding sx={{ mb: 4 }}>
        {riskCategories.map((risk) => (
          <ListItem
            key={risk}
            sx={{
              px: 0,
              py: 1.5,
              borderBottom: '1px solid #F1F5F9',
              '&:last-child': { borderBottom: 'none' },
            }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              <WarningAmberIcon sx={{ color: AMBER, fontSize: 20 }} />
            </ListItemIcon>
            <ListItemText
              primary={risk}
              primaryTypographyProps={{ sx: { fontSize: '1rem', color: '#334155', lineHeight: 1.9 } }}
            />
          </ListItem>
        ))}
      </List>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
        По вопросам, связанным с коррупционными рисками и антикоррупционным комплаенсом,
        обращайтесь в службу антикоррупционного комплаенса: <strong>anticor_comp@kazniisa.kz</strong>,
        тел. <strong>+7 (727) 226 94 11 доб. 188</strong>.
      </Typography>
    </Box>
  );
}
