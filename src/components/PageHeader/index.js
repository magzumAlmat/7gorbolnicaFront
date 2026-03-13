'use client';

import { Box, Container, Typography, Breadcrumbs as MuiBreadcrumbs, Link as MuiLink } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
import Link from 'next/link';

export default function PageHeader({ title, breadcrumbs = [] }) {
  return (
    <Box sx={{ 
      bgcolor: '#2887B6', 
      py: { xs: 4, md: 5 },
      color: 'white',
      mb: 6
    }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
          {title}
        </Typography>
        
        <MuiBreadcrumbs 
          separator={<NavigateNext fontSize="small" sx={{ color: 'rgba(255,255,255,0.6)' }} />}
          sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}
        >
          <MuiLink component={Link} href="/" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            Главная
          </MuiLink>
          {breadcrumbs.map((crumb, index) => (
            <Box key={index} sx={{ display: 'flex' }}>
              {crumb.path ? (
                <MuiLink 
                  component={Link} 
                  href={crumb.path} 
                  sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  {crumb.title}
                </MuiLink>
              ) : (
                <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>
                  {crumb.title}
                </Typography>
              )}
            </Box>
          ))}
          <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>
            {title}
          </Typography>
        </MuiBreadcrumbs>
      </Container>
    </Box>
  );
}
