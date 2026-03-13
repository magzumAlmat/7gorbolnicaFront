'use client';

import { Typography, Box, Link as MuiLink, Breadcrumbs } from '@mui/material';
import Link from 'next/link';

export default function TimsoPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        ТИМСО (BIM)
      </Typography>
      
      <Typography variant="body1" paragraph>
        Технологии информационного моделирования строительных объектов (ТИМСО) — это современный подход 
        к проектированию, возведению и эксплуатации зданий.
      </Typography>

      <Typography variant="body1" paragraph>
        АО «КазНИИСА» является ведущим центром компетенций по внедрению ТИМСО в Республике Казахстан. 
        Мы занимаемся разработкой стандартов, методических рекомендаций и обучением специалистов.
      </Typography>

      <Box sx={{ mt: 4, p: 3, bgcolor: '#f0f7fc', borderRadius: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#002e5b' }}>Реестр участников ТИМСО</Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Ознакомьтесь с актуальным списком организаций, внедряющих технологии информационного моделирования.
        </Typography>
        <MuiLink component={Link} href="/timso/registry" sx={{ color: '#2887B6', fontWeight: 700 }}>
          Перейти к реестру →
        </MuiLink>
      </Box>
    </Box>
  );
}
