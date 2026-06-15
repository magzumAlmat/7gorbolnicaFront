'use client';

import { Box, Typography, List, ListItemButton, ListItemText, Divider, Link as MuiLink, Button } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export default function Sidebar({ title, menuItems = [], latestNews = [] }) {
  const pathname = usePathname();

  return (
    <Box sx={{ position: 'sticky', top: 100 }}>
      {menuItems.length > 0 && (
        <Box sx={{ mb: 3, border: '1px solid #E2E8F0', overflow: 'hidden' }}>
          {title && (
            <Box sx={{ bgcolor: '#0F172A', px: 3, py: 2 }}>
              <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {title}
              </Typography>
            </Box>
          )}
          <List disablePadding sx={{ bgcolor: 'white' }}>
            {menuItems.map((item, index) => {
              const active = pathname === item.path;
              return (
                <Box key={index}>
                  <ListItemButton
                    component={Link}
                    href={item.path}
                    sx={{
                      py: 1.5,
                      px: 2.5,
                      borderLeft: active ? '4px solid #F5A623' : '4px solid transparent',
                      bgcolor: 'transparent',
                      transition: 'all 0.15s ease',
                      '&:hover': {
                        bgcolor: 'rgba(245,166,35,0.06)',
                        borderLeftColor: '#F5A623',
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.title}
                      primaryTypographyProps={{
                        fontSize: '13px',
                        fontWeight: active ? 700 : 400,
                        color: active ? '#0F172A' : '#334155',
                      }}
                    />
                  </ListItemButton>
                  {index < menuItems.length - 1 && <Divider sx={{ borderColor: '#F1F5F9' }} />}
                </Box>
              );
            })}
          </List>
        </Box>
      )}

      {/* Presentation button */}
      <Box sx={{ mb: 3 }}>
        <Button
          fullWidth
          startIcon={<PictureAsPdfIcon sx={{ color: '#F5A623' }} />}
          sx={{
            bgcolor: '#0F172A',
            color: 'white',
            fontWeight: 700,
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            py: 1.8,
            px: 2.5,
            borderRadius: 0,
            justifyContent: 'flex-start',
            '&:hover': { bgcolor: '#1E293B' },
          }}
        >
          Презентация АО «КазНИИСА»
        </Button>
      </Box>

      {/* Help card */}
      <Box sx={{ mb: 3, bgcolor: '#F5A623', p: 3 }}>
        <Typography sx={{ fontWeight: 700, fontSize: '14px', color: '#0F172A', mb: 1.5 }}>
          Как мы можем вам помочь?
        </Typography>
        <Typography sx={{ fontSize: '13px', color: '#1a1a1a', mb: 2.5, lineHeight: 1.6 }}>
          Свяжитесь с ближайшим офисом АО КазНИИСА или отправьте заявку онлайн.
        </Typography>
        <Button
          component={Link}
          href="/contacts"
          variant="contained"
          sx={{
            bgcolor: '#0F172A',
            color: 'white',
            fontWeight: 700,
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            borderRadius: 0,
            px: 3,
            py: 1,
            '&:hover': { bgcolor: '#1E293B' },
          }}
        >
          Контакты
        </Button>
      </Box>

      {/* Latest news */}
      <Box sx={{ border: '1px solid #E2E8F0', overflow: 'hidden' }}>
        <Box sx={{ bgcolor: '#0F172A', px: 3, py: 2 }}>
          <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Последние новости
          </Typography>
        </Box>
        <Box sx={{ bgcolor: 'white', p: 2.5 }}>
          {latestNews.length > 0 ? (
            latestNews.map((news, i) => (
              <Box key={i} sx={{ mb: 2, pb: 2, borderBottom: i < latestNews.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                <MuiLink
                  component={Link}
                  href={news.link || '#'}
                  sx={{
                    color: '#334155',
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    lineHeight: 1.5,
                    display: 'block',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#F5A623' },
                  }}
                >
                  {news.title}
                </MuiLink>
                <Typography sx={{ fontSize: '11px', color: '#94A3B8', mt: 0.5 }}>
                  {news.date}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography sx={{ fontSize: '13px', color: '#94A3B8' }}>Новостей пока нет</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
