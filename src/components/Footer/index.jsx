"use client";

import { Box, Container, Grid, Typography, Link as MuiLink, Divider, TextField, Button, useTheme, alpha, InputAdornment } from '@mui/material';
import Link from 'next/link';
import { Phone, Email, LocationOn, Send, ArrowRight } from '@mui/icons-material';
import { Stack } from '@mui/system';

// === ДАННЫЕ ===

const offices = [
  { city: "Алматы №1", address: "3 микрорайон 44А", phone: "8 (727) 226 94 10", email: "info@kazniisa.kz" },
  { city: "Алматы №2", address: "Ул.Сатпаева 88Г", phone: "+7 (727) 392-75-91", email: "info@kazniisa.kz" },
  { city: "Астана", address: "р-н Сарыарқа, ул. Бейбітшілік 14, оф 1406", phone: "8 (7172) 57-53-03", email: "crn@kazniisa.kz" },
  { city: "Тараз", address: "ул. Сулейманова, 19 Б", phone: "+7 (7262) 43-63-99", email: "mbaitemirov@kazniisa.kz" },
  { city: "Усть-Каменогорск", address: "ул. М.Горького, 21 офис 203", phone: "8 (7232) 26-16-90", email: "info@kazniisa.kz" },
];

const latestNews = [
  {
    title: "В АО «КазНИИСА» состоялась рабочая встреча по вопросам реализации нового Строительного Кодекса",
    date: "13 Январь, 2026",
    link: "/news",
  },
  {
    title: "Поздравляем вас с наступающим Новым годом!",
    date: "31 Декабрь, 2025",
    link: "/news",
  },
];

const categories = [
  { title: "События", path: "/news" },
  { title: "Выступления", path: "/news" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box component="footer">
      {/* === ВЕРХНЯЯ ЧАСТЬ: Контактная форма + Офисы === */}
      <Box sx={{ bgcolor: '#002e5b', pt: 8, pb: 6, color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Колонка 1: Описание */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '14px', color: '#FDE428', mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
                  Контакты
                </Typography>
              </Box>

              {offices.map((office, i) => (
                <Box key={i} sx={{ mb: 2.5, pb: 2, borderBottom: i < offices.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                  <Typography sx={{ fontWeight: 700, fontSize: '13px', color: '#FDE428', mb: 0.5 }}>
                    {office.city}
                  </Typography>
                  <Stack spacing={0.3}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5 }}>
                      <LocationOn sx={{ fontSize: 14, color: '#2887B6', mt: 0.25, flexShrink: 0 }} />
                      <Typography sx={{ fontSize: '12px', opacity: 0.7 }}>{office.address}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Phone sx={{ fontSize: 14, color: '#2887B6', flexShrink: 0 }} />
                      <MuiLink href={`tel:${office.phone}`} color="inherit" underline="hover" sx={{ fontSize: '12px', opacity: 0.7 }}>
                        {office.phone}
                      </MuiLink>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Email sx={{ fontSize: 14, color: '#2887B6', flexShrink: 0 }} />
                      <MuiLink href={`mailto:${office.email}`} color="inherit" underline="hover" sx={{ fontSize: '12px', opacity: 0.7 }}>
                        {office.email}
                      </MuiLink>
                    </Box>
                  </Stack>
                </Box>
              ))}
            </Grid>

            {/* Колонка 2: Описание института */}
            <Grid item xs={12} md={4}>
              <Typography sx={{ fontWeight: 700, fontSize: '14px', color: '#FDE428', mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
                Об институте
              </Typography>
              <Typography sx={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.7, mb: 3 }}>
                Государственный научно-исследовательский и проектный институт в области эффективного развития комплексного строительства Казахстана, включая районы с особо сложными инженерно-геологическими условиями и регионы, подверженные землетрясениям.
              </Typography>

              {/* Подписка */}
              <Typography sx={{ fontWeight: 700, fontSize: '13px', mb: 1.5 }}>
                Подписка на новости
              </Typography>
              <Box sx={{ display: 'flex', gap: 0 }}>
                <TextField
                  placeholder="Email"
                  size="small"
                  sx={{
                    flexGrow: 1,
                    '& .MuiOutlinedInput-root': {
                      bgcolor: 'white',
                      borderRadius: '4px 0 0 4px',
                      fontSize: '13px',
                      '& fieldset': { border: 'none' },
                    },
                    '& .MuiInputBase-input': { py: '10px', px: '14px' },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#FDE428',
                    color: '#002e5b',
                    borderRadius: '0 4px 4px 0',
                    minWidth: 48,
                    px: 2,
                    '&:hover': { bgcolor: '#e5ce20' },
                  }}
                >
                  <Send sx={{ fontSize: 18 }} />
                </Button>
              </Box>
            </Grid>

            {/* Колонка 3: Новости + Рубрики */}
            <Grid item xs={12} md={4}>
              <Typography sx={{ fontWeight: 700, fontSize: '14px', color: '#FDE428', mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
                Новости
              </Typography>
              {latestNews.map((news, i) => (
                <Box key={i} sx={{ mb: 2, pb: 2, borderBottom: i < latestNews.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                  <MuiLink
                    component={Link}
                    href={news.link}
                    color="inherit"
                    underline="none"
                    sx={{
                      fontSize: '13px', fontWeight: 600, lineHeight: 1.5, display: 'block',
                      '&:hover': { color: '#FDE428' },
                    }}
                  >
                    {news.title}
                  </MuiLink>
                  <Typography sx={{ fontSize: '11px', opacity: 0.5, mt: 0.5 }}>
                    {news.date}
                  </Typography>
                </Box>
              ))}

              <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 2 }} />

              <Typography sx={{ fontWeight: 700, fontSize: '14px', color: '#FDE428', mb: 1.5, textTransform: 'uppercase', letterSpacing: 1 }}>
                Рубрики
              </Typography>
              {categories.map((cat, i) => (
                <MuiLink
                  key={i}
                  component={Link}
                  href={cat.path}
                  color="inherit"
                  underline="none"
                  sx={{
                    display: 'flex', alignItems: 'center', gap: 0.5,
                    fontSize: '13px', opacity: 0.7, mb: 0.5,
                    '&:hover': { color: '#FDE428', opacity: 1 },
                  }}
                >
                  <ArrowRight sx={{ fontSize: 16 }} />
                  {cat.title}
                </MuiLink>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* === НИЖНЯЯ ПОЛОСА копирайта === */}
      <Box sx={{ bgcolor: '#001f3d', py: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
              © {year} АО «КазНИИСА». Все права защищены.
            </Typography>
            <Typography sx={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
              Сайт разработан на основе Next.js
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;