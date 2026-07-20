'use client';
import { Typography, Box, Paper, Link } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PublicDownloadList from '../../../../../components/PublicDownloadList';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

export default function RegisterPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Сыбайлас жемқорлық тәуекелдеріне ұшыраған лауазымдардың тізілімі
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Сұрақтар қалды ма? Бізге хабарласыңыз: <strong>anticor_comp@kazniisa.kz</strong>,
        тел. <strong>8 (727) 226 94 11 (ішкі. 188)</strong>.
      </Typography>

      {/* Реальный документ реестра с оригинала kazniisa.kz/qaz */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
          Толығырақ оқу
        </Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
        <Link
          href="https://docs.google.com/document/d/1KFJgUFWMIew7r3NejTHYvgvkX4sBRlXN/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            bgcolor: BLUE_LIGHT,
            border: '1px solid ' + BORDER,
            borderRadius: 2,
            p: 2.5,
            transition: 'border-color 0.2s, box-shadow 0.2s',
            '&:hover': { borderColor: BLUE, boxShadow: '0 4px 12px rgba(3,105,161,0.12)' },
          }}
        >
          <AssignmentIcon sx={{ color: BLUE, fontSize: 28 }} />
          <Typography sx={{ flex: 1, fontSize: '1rem', fontWeight: 600, color: NAVY }}>
            Сыбайлас жемқорлық тәуекелдеріне ұшыраған лауазымдардың тізілімі
          </Typography>
          <DownloadIcon sx={{ color: BLUE, fontSize: 22 }} />
        </Link>
      </Box>

      <PublicDownloadList endpoint="/api/anti-corruption/public" />
    </Box>
  );
}
