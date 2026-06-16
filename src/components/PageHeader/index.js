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
              '&:hover': { color: '#60A5FA' },
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
                      '&:hover': { color: '#60A5FA' },
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
            <Typography sx={{ color: '#60A5FA', fontSize: '13px', fontWeight: 600 }}>
              {title}
            </Typography>
          </MuiBreadcrumbs>
        </Container>
      </Box>

      {/* Hero section */}
      <Box sx={{
        bgcolor: '#111827',
        py: { xs: 5, md: 7 },
        color: 'white',
        textAlign: 'center',
      }}>
        <Container maxWidth="lg">
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
              bgcolor: '#0369A1',
              color: 'white',
              fontWeight: 700,
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              px: 4,
              py: 1.5,
              borderRadius: '4px',
              boxShadow: 'none',
              '&:hover': {
                bgcolor: '#075985',
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
