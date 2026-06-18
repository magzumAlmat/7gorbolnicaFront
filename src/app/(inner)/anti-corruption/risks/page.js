'use client';
import { Typography, Box, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import DownloadIcon from '@mui/icons-material/Download';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PublicDownloadList from '../../../../components/PublicDownloadList';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

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
        sx={{ fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Перечень коррупционных рисков
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
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
          bgcolor: BLUE_LIGHT,
          borderLeft: '4px solid ' + BLUE,
          borderRadius: '0 6px 6px 0',
          p: 3,
          fontStyle: 'italic',
          mb: 4,
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          Анализ коррупционных рисков проводится службой антикоррупционного комплаенса с привлечением
          руководителей структурных подразделений организации. Результаты анализа используются для
          совершенствования системы внутреннего контроля.
        </Typography>
      </Box>

      {/* Реальные документы реестра рисков из админки (если загружены) */}
      <PublicDownloadList endpoint="/api/anti-corruption/public" heading="Документ" />

      {/* Risk categories */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Основные категории коррупционных рисков
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

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
              <WarningAmberIcon sx={{ color: BLUE, fontSize: 20 }} />
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
