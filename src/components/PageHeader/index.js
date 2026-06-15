'use client';

import { Box, Container, Typography, Breadcrumbs as MuiBreadcrumbs, Link as MuiLink, Button } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
import Link from 'next/link';

export default function PageHeader({ title, breadcrumbs = [] }) {
  return (
    <Box sx={{ mb: 0 }}>
      {/* Breadcrumb bar */}
      <Box sx={{ bgcolor: '#1E2D40', py: 1.5 }}>
        <Container maxWidth="lg">
          <MuiBreadcrumbs
            separator={<NavigateNext fontSize="small" sx={{ color: 'rgba(255,255,255,0.35)' }} />}
            sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}
          >
            <MuiLink component={Link} href="/" sx={{
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 500,
              transition: 'color 0.2s',
              '&:hover': { color: '#F5A623' },
            }}>
              Главная
            </MuiLink>
            {breadcrumbs.map((crumb, index) => (
              <Box key={index} sx={{ display: 'flex' }}>
                {crumb.path ? (
                  <MuiLink
                    component={Link}
                    href={crumb.path}
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      fontSize: '13px',
                      fontWeight: 500,
                      transition: 'color 0.2s',
                      '&:hover': { color: '#F5A623' },
                    }}
                  >
                    {crumb.title}
                  </MuiLink>
                ) : (
                  <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>
                    {crumb.title}
                  </Typography>
                )}
              </Box>
            ))}
            <Typography sx={{ color: '#F5A623', fontSize: '13px', fontWeight: 600 }}>
              {title}
            </Typography>
          </MuiBreadcrumbs>
        </Container>
      </Box>

      {/* Hero section */}
      <Box sx={{
        background: 'linear-gradient(135deg, #1a2332 0%, #2d3748 50%, #1a2332 100%)',
        py: { xs: 7, md: 10 },
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0, right: 0, bottom: 0, left: 0,
          background: 'radial-gradient(ellipse at 50% 120%, rgba(245,166,35,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        },
        /* City skyline silhouette via box-shadows on pseudo-element */
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 60' preserveAspectRatio='none'%3E%3Cpath fill='rgba(255,255,255,0.03)' d='M0,60 L0,40 L40,40 L40,20 L60,20 L60,30 L80,30 L80,10 L100,10 L100,30 L120,30 L120,25 L140,25 L140,40 L180,40 L180,15 L200,15 L200,40 L240,40 L240,30 L260,30 L260,20 L280,20 L280,30 L300,30 L300,40 L340,40 L340,20 L360,20 L360,5 L380,5 L380,20 L400,20 L400,40 L440,40 L440,25 L460,25 L460,40 L500,40 L500,30 L520,30 L520,15 L540,15 L540,30 L560,30 L560,40 L600,40 L600,20 L620,20 L620,10 L640,10 L640,20 L660,20 L660,40 L700,40 L700,30 L720,30 L720,25 L740,25 L740,40 L780,40 L780,15 L800,15 L800,40 L840,40 L840,20 L860,20 L860,30 L880,30 L880,40 L920,40 L920,10 L940,10 L940,25 L960,25 L960,40 L1000,40 L1000,30 L1020,30 L1020,20 L1040,20 L1040,40 L1080,40 L1080,25 L1100,25 L1100,15 L1120,15 L1120,25 L1140,25 L1140,40 L1180,40 L1180,20 L1200,20 L1200,40 L1240,40 L1240,30 L1260,30 L1260,10 L1280,10 L1280,30 L1300,30 L1300,40 L1340,40 L1340,25 L1360,25 L1360,40 L1400,40 L1400,20 L1440,20 L1440,60 Z'/%3E%3C/svg%3E") no-repeat bottom center`,
          backgroundSize: '100% 100%',
          pointerEvents: 'none',
        },
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" component="h1" sx={{
            fontWeight: 800,
            mb: 4,
            fontSize: { xs: '1.8rem', md: '2.8rem' },
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            textTransform: 'uppercase',
          }}>
            {title}
          </Typography>

          <Button
            component={Link}
            href="/contacts"
            variant="contained"
            sx={{
              bgcolor: '#F5A623',
              color: '#0F172A',
              fontWeight: 700,
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              px: 4,
              py: 1.5,
              borderRadius: 0,
              boxShadow: 'none',
              '&:hover': {
                bgcolor: '#e09610',
                boxShadow: 'none',
              },
            }}
          >
            Получить консультацию
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
