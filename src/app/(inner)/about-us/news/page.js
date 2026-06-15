'use client';
import { Typography, Box, Paper, Chip, Button } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const NAVY = '#0F172A';
const ACCENT = '#0369A1';
const AMBER = '#F59E0B';
const BG = '#F8FAFC';

export default function NewsRedirectPage() {
  return (
    <Box>
      <Chip label="Новости" size="small" sx={{ bgcolor: AMBER, color: NAVY, fontWeight: 700, mb: 1.5, fontFamily: '"Roboto Mono", monospace' }} />
      <Typography variant="h4" sx={{ fontWeight: 800, color: NAVY, mb: 1, fontFamily: '"Exo 2", sans-serif' }}>
        Новости
      </Typography>
      <Box sx={{ width: 60, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 4 }} />

      <Paper elevation={0} sx={{ p: 5, border: '1px solid #E2E8F0', borderRadius: 3, bgcolor: BG, textAlign: 'center' }}>
        <NewspaperIcon sx={{ fontSize: 56, color: `${ACCENT}50`, mb: 2 }} />
        <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1.1rem', mb: 1 }}>
          Актуальные новости института
        </Typography>
        <Typography sx={{ color: '#64748B', fontSize: '0.95rem', mb: 3, maxWidth: 480, mx: 'auto' }}>
          Новости АО «КазНИИСА» публикуются в разделе Новости. Там вы найдёте актуальные события, пресс-релизы и объявления.
        </Typography>
        <Button
          component={Link}
          href="/news"
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{ bgcolor: ACCENT, textTransform: 'none', fontWeight: 600, borderRadius: 2, px: 3 }}
        >
          Перейти к новостям
        </Button>
      </Paper>
    </Box>
  );
}
