'use client';
import { Typography, Box, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import DownloadIcon from '@mui/icons-material/Download';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PublicDownloadList from '../../../../../components/PublicDownloadList';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

export default function RisksPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Сыбайлас жемқорлық тәуекелдерін талдау нәтижелері бойынша анықталған сыбайлас
        жемқорлық тәуекелдерінің тізбесі
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      {/* Реальный документ с оригинала kazniisa.kz/qaz.
          URL скачивания на оригинале не извлекается — показываем название без href. */}
      <Box sx={{ mb: 5 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            bgcolor: BLUE_LIGHT,
            border: '1px solid ' + BORDER,
            borderRadius: 2,
            p: 2.5,
          }}
        >
          <AssignmentIcon sx={{ color: BLUE, fontSize: 28 }} />
          <Typography sx={{ flex: 1, fontSize: '1rem', fontWeight: 600, color: NAVY }}>
            Сыбайлас жемқорлық тәуекелдерін талдау нәтижелері бойынша анықталған сыбайлас
            жемқорлық тәуекелдерінің тізбесі
          </Typography>
        </Box>
      </Box>

      {/* Реальные документы реестра рисков из админки (если загружены) */}
      <PublicDownloadList endpoint="/api/anti-corruption/public" />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
        Сұрақтар қалды ма? Бізге хабарласыңыз: <strong>anticor_comp@kazniisa.kz</strong>,
        тел. <strong>8 (727) 226 94 11 (ішкі. 188)</strong>.
      </Typography>
    </Box>
  );
}
