'use client';

import { Box, Typography, List, ListItemButton, ListItemText, Divider, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from '@mui/icons-material';

// Компонент для бокового меню разделов
export default function Sidebar({ title, menuItems = [], latestNews = [] }) {
  const pathname = usePathname();

  return (
    <Box>
      {/* Боковое меню раздела */}
      {menuItems.length > 0 && (
        <Box sx={{ mb: 4, bgcolor: '#f8f8f8', borderRadius: 1, overflow: 'hidden' }}>
          <Box sx={{ bgcolor: '#002e5b', p: 2 }}>
            <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase' }}>
              {title || 'Разделы'}
            </Typography>
          </Box>
          <List disablePadding>
            {menuItems.map((item, index) => {
              const active = pathname === item.path;
              return (
                <Box key={index}>
                  <ListItemButton 
                    component={Link} 
                    href={item.path}
                    sx={{ 
                      py: 1.5, 
                      px: 2,
                      borderLeft: active ? '4px solid #FDE428' : '4px solid transparent',
                      bgcolor: active ? 'rgba(40,135,182,0.1)' : 'transparent',
                      '&:hover': { bgcolor: 'rgba(0,0,0,0.03)' }
                    }}
                  >
                    <ListItemText 
                      primary={item.title} 
                      primaryTypographyProps={{ 
                        fontSize: '13px', 
                        fontWeight: active ? 700 : 500,
                        color: active ? '#2887B6' : '#333'
                      }} 
                    />
                    <ChevronRight sx={{ fontSize: 16, color: active ? '#2887B6' : '#ccc' }} />
                  </ListItemButton>
                  {index < menuItems.length - 1 && <Divider />}
                </Box>
              );
            })}
          </List>
        </Box>
      )}

      {/* Поледние новости в сайдбаре */}
      <Box sx={{ p: 2, border: '1px solid #eee', borderRadius: 1 }}>
        <Typography sx={{ fontWeight: 700, fontSize: '14px', color: '#002e5b', mb: 2, pb: 1, borderBottom: '2px solid #2887B6' }}>
          Последние новости
        </Typography>
        {latestNews.length > 0 ? (
          latestNews.map((news, i) => (
            <Box key={i} sx={{ mb: 2 }}>
              <MuiLink 
                component={Link} 
                href={news.link || '#'} 
                sx={{ 
                  color: '#333', 
                  fontSize: '13px', 
                  fontWeight: 600, 
                  textDecoration: 'none',
                  lineHeight: 1.4,
                  display: 'block',
                  '&:hover': { color: '#2887B6' }
                }}
              >
                {news.title}
              </MuiLink>
              <Typography sx={{ fontSize: '11px', color: '#999', mt: 0.5 }}>
                {news.date}
              </Typography>
              {i < latestNews.length - 1 && <Divider sx={{ mt: 1.5 }} />}
            </Box>
          ))
        ) : (
          <Typography sx={{ fontSize: '12px', color: '#666' }}>Новостей нет</Typography>
        )}
      </Box>
    </Box>
  );
}
