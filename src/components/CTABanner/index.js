'use client';

import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { ArrowForward, Phone } from '@mui/icons-material';
import Link from 'next/link';

export default function CTABanner() {
  return (
    <Box sx={{
      py: { xs: 8, md: 10 },
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0C2340 0%, #1a3a5c 40%, #0891B2 100%)',
    }}>
      <Box sx={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(3,105,161,0.12) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, rgba(8,145,178,0.15) 0%, transparent 40%)`,
      }} />

      <Box sx={{
        position: 'absolute', top: '50%', left: '50%',
        width: { xs: 300, md: 600 }, height: { xs: 300, md: 600 },
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.05)',
        transform: 'translate(-50%, -50%)',
      }} />
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%',
        width: { xs: 500, md: 900 }, height: { xs: 500, md: 900 },
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.03)',
        transform: 'translate(-50%, -50%)',
      }} />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <Typography variant="overline" sx={{
          color: '#60A5FA', fontWeight: 700, letterSpacing: 4, fontSize: 13, mb: 2, display: 'block',
        }}>
          Начните сотрудничество
        </Typography>
        <Typography variant="h3" sx={{
          fontWeight: 800, color: 'white', mb: 3,
          fontSize: { xs: '1.8rem', md: '2.6rem' }, lineHeight: 1.2,
        }}>
          Готовы обсудить ваш проект?
        </Typography>
        <Typography sx={{
          color: 'rgba(255,255,255,0.75)', fontSize: { xs: 15, md: 17 },
          maxWidth: 550, mx: 'auto', mb: 5, lineHeight: 1.7,
        }}>
          Наши эксперты помогут вам с техническим обследованием, проектированием,
          нормативной документацией и внедрением BIM-технологий
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button
            component={Link}
            href="/about-us/contacts"
            variant="contained"
            endIcon={<ArrowForward />}
            sx={{
              bgcolor: '#0369A1', color: 'white',
              px: 4, py: 1.5, fontSize: 15, fontWeight: 700,
              borderRadius: '30px',
              boxShadow: '0 4px 20px rgba(3,105,161,0.4)',
              transition: 'all 0.3s',
              '&:hover': {
                bgcolor: '#075985',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 30px rgba(3,105,161,0.5)',
              },
            }}
          >
            Оставить заявку
          </Button>
          <Button
            component="a"
            href="tel:+77272269410"
            variant="outlined"
            startIcon={<Phone />}
            sx={{
              color: 'white', borderColor: 'rgba(255,255,255,0.3)',
              px: 4, py: 1.5, fontSize: 15, fontWeight: 600,
              borderRadius: '30px',
              transition: 'all 0.3s',
              '&:hover': {
                borderColor: 'white',
                bgcolor: 'rgba(255,255,255,0.08)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            8 (727) 226-94-10
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
