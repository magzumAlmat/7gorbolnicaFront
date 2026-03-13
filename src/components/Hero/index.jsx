'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Box, Container, Typography, Button, Stack, Grid, Card, CardContent, CardMedia,
  IconButton, Paper, useTheme, alpha, Divider
} from '@mui/material';
import {
  ChevronLeft, ChevronRight, ArrowForward,
  LocationOn, Phone, Email, AccessTime
} from '@mui/icons-material';
import Link from 'next/link';
import { styled } from '@mui/material/styles';

// === 1. ДАННЫЕ ===

// Новости-слайдер (как на kazniisa.kz)
const newsSlides = [
  {
    title: "В АО «КазНИИСА» состоялась рабочая встреча по вопросам реализации нового Строительного Кодекса",
    date: "13 Январь, 2026",
    image: "https://kazniisa.kz/wp-content/uploads/2025/01/photo_2025-01-13_10-46-47.jpg",
    link: "/news",
  },
  {
    title: "Казахстан и Япония укрепляют сотрудничество в сфере сейсмостойкого строительства",
    date: "24 Декабрь, 2025",
    image: "https://kazniisa.kz/wp-content/uploads/2024/12/photo_2024-12-24_10-59-24.jpg",
    link: "/news",
  },
  {
    title: "С Днём Независимости Республики Казахстан!",
    date: "15 Декабрь, 2025",
    image: "https://kazniisa.kz/wp-content/uploads/2024/12/photo_2024-12-13_15-07-45.jpg",
    link: "/news",
  },
  {
    title: "Состоялась двусторонняя встреча Казахстана и Таджикистана по вопросам ценообразования в строительстве",
    date: "13 Ноябрь, 2025",
    image: "https://kazniisa.kz/wp-content/uploads/2024/11/photo_2024-11-13_15-39-57-768x576.jpg",
    link: "/news",
  },
];


// Послание Президента
const presidentialMessages = [
  {
    title: "Послание Главы государства Касым-Жомарта Токаева народу Казахстана «Справедливый Казахстан: закон и порядок, экономический рост, общественный оптимизм»",
    date: "2 Сентябрь, 2024",
    link: "/news",
  },
  {
    title: "Послание президента Касым-Жомарта Кемелевича Токаева народу Казахстана «Справедливое государство. Единая нация. Благополучное общество»",
    date: "12 Сентябрь, 2022",
    link: "/news",
  },
];

// Центры
const centers = [
  { title: "Центр нормирования в строительстве", desc: "Разработка нормативных технических документов, сборников по сметному ценообразованию в строительстве", path: "/centres/center-for-regulation-in-construction" },
  { title: "Центр науки и цифровизации строительства", desc: "Развитие нормативно-технической базы в области внедрения технологии информационного моделирования", path: "/centres/center-for-science-and-digitalization-of-construction" },
  { title: "Центр сейсмостойкости, обследования зданий и сооружений", desc: "Техническое обследование зданий и сооружений, проведение испытаний и подтверждение их сейсмической безопасности", path: "/centres/center-for-seismic-resistance-inspection-of-buildings-and-structures" },
  { title: "Центр типового и индивидуального проектирования", desc: "Разработка типовых проектов жилых и общественных зданий для реализации в строительстве", path: "/centres/center-for-standard-and-individual-design" },
  { title: "Корпоративный университет", desc: "Повышение квалификации работников и проведение аттестации ИТР в области проектирования", path: "/centres/corporate-university" },
  { title: "Центр научных исследований", desc: "Проведение передовых научных исследований в области внедрения новых материалов", path: "/centres/center-for-scientific-research-of-the-construction-industry" },
];

const offices = [
  { city: "Алматы №1", address: "3 микрорайон 44А", phone: "8 (727) 226 94 10", email: "info@kazniisa.kz" },
  { city: "Алматы №2", address: "Ул.Сатпаева 88Г", phone: "+7 (727) 392-75-91", email: "info@kazniisa.kz" },
  { city: "Астана", address: "р-н Сарыарқа, ул. Бейбітшілік 14, оф 1406", phone: "8 (7172) 57-53-03", email: "crn@kazniisa.kz" },
  { city: "Тараз", address: "ул. Сулейманова, 19 Б", phone: "+7 (7262) 43-63-99", email: "mbaitemirov@kazniisa.kz" },
  { city: "Усть-Каменогорск", address: "ул. М.Горького, 21 офис 203", phone: "8 (7232) 26-16-90", email: "info@kazniisa.kz" },
];

// === 2. HERO (NEWS SLIDER как на kazniisa.kz) ===
export default function Hero() {
  const theme = useTheme();
  const [slide, setSlide] = useState(0);
  const [centerSlide, setCenterSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSlide(s => (s + 1) % newsSlides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setSlide(s => (s + 1) % newsSlides.length);
  const prevSlide = () => setSlide(s => (s - 1 + newsSlides.length) % newsSlides.length);
  const nextCenter = () => setCenterSlide(s => Math.min(s + 1, centers.length - 3));
  const prevCenter = () => setCenterSlide(s => Math.max(s - 1, 0));

  return (
    <Box>
      <Box sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 6, md: 10 },
        pb: { xs: 8, md: 14 },
        mt: '-1px',
      }}>
        {/* Background Video */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          '& iframe': {
            width: '100%',
            height: '100%',
          }
        }}>
          <iframe
            src="https://www.youtube.com/embed/l86MTWdN19c?playlist=l86MTWdN19c&iv_load_policy=3&enablejsapi=1&disablekb=1&autoplay=1&controls=0&showinfo=0&rel=0&loop=1&mute=1&wmode=transparent&origin=https%3A%2F%2Fkazniisa.kz&widgetid=1&forigin=https%3A%2F%2Fkazniisa.kz%2F&aoriginsup=1&vf=6"
            frameBorder="2"
            allow="autoplay; encrypted-media"
            style={{ 
              width: '100%', 
              height: '100%', 
              transform: 'scale(1.5)', 
              pointerEvents: 'none',
              border: 'none'
              
            }}
          />
        </Box>

        {/* Overlay */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0,46,91,0.9) 0%, rgba(4,57,89,0.7) 50%, rgba(0,46,91,0.9) 100%)',
          zIndex: 1,
        }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Левая часть: текст */}
            <Grid item xs={12} md={5}>
              <Box sx={{ color: 'white' }}>
                <Typography variant="h3" sx={{
                  fontWeight: 800, mb: 2,
                  fontSize: { xs: '1.8rem', md: '2.4rem' },
                  lineHeight: 1.2,
                }}>
                  АО «КазНИИСА»
                </Typography>
                <Typography variant="body1" sx={{
                  opacity: 0.8, mb: 4,
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  lineHeight: 1.7,
                }}>
                  АО «КазНИИСА» - государственный научно-исследовательский и проектный институт в области строительства
                </Typography>
                <Button
                  component={Link}
                  href="/about-us/contacts"
                  variant="outlined"
                  sx={{
                    color: 'white',
                    borderColor: '#2887B6',
                    px: 4, py: 1.2,
                    fontSize: '14px',
                    fontWeight: 600,
                    borderRadius: '25px',
                    '&:hover': {
                      bgcolor: '#2887B6',
                      borderColor: '#2887B6',
                    },
                  }}
                >
                  Получить консультацию
                </Button>
              </Box>
            </Grid>

            {/* Правая часть: новостной слайдер */}
            <Grid item xs={12} md={7}>
              <Box sx={{ position: 'relative' }}>
                {/* Карточка новости */}
                {newsSlides.map((news, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: idx === slide ? 'block' : 'none',
                      borderRadius: 2,
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    }}
                  >
                    <Box sx={{
                      position: 'relative',
                      height: { xs: 250, md: 350 },
                      backgroundImage: `url(${news.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}>
                      <Box sx={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
                        p: { xs: 2, md: 3 },
                      }}>
                        <Typography
                          component={Link}
                          href={news.link}
                          sx={{
                            color: 'white',
                            fontWeight: 700,
                            fontSize: { xs: '14px', md: '16px' },
                            lineHeight: 1.4,
                            textDecoration: 'none',
                            display: 'block',
                            mb: 1,
                            '&:hover': { color: '#FDE428' },
                          }}
                        >
                          {news.title}
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>
                          {news.date}
                        </Typography>
                        <Button
                          component={Link}
                          href={news.link}
                          size="small"
                          sx={{
                            color: '#FDE428',
                            fontSize: '12px',
                            fontWeight: 600,
                            mt: 0.5,
                            p: 0,
                            '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' },
                          }}
                        >
                          Далее →
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                ))}

                {/* Стрелки */}
                <IconButton
                  onClick={prevSlide}
                  sx={{
                    position: 'absolute', left: -20, top: '50%', transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.2)', color: 'white',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.4)' },
                  }}
                >
                  <ChevronLeft />
                </IconButton>
                <IconButton
                  onClick={nextSlide}
                  sx={{
                    position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.2)', color: 'white',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.4)' },
                  }}
                >
                  <ChevronRight />
                </IconButton>

                {/* Навигация по точкам (thumbs) */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
                  {newsSlides.map((_, i) => (
                    <Box
                      key={i}
                      onClick={() => setSlide(i)}
                      sx={{
                        width: i === slide ? 28 : 10, height: 10,
                        borderRadius: 5,
                        bgcolor: i === slide ? '#2887B6' : 'rgba(255,255,255,0.4)',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* === МИНИ-ЛЕНТА НОВОСТЕЙ (снизу слайдера, как на оригинале) === */}
      <Container maxWidth="lg" sx={{ mt: { xs: -4, md: -6 }, position: 'relative', zIndex: 10, mb: 6 }}>
        <Grid container spacing={2}>
          {newsSlides.map((news, i) => (
            <Grid item xs={6} md={3} key={i}>
              <Paper
                component={Link}
                href={news.link}
                elevation={0}
                sx={{
                  p: 2, height: '100%',
                  border: '1px solid #e8e8e8',
                  borderRadius: 1,
                  textDecoration: 'none',
                  display: 'block',
                  bgcolor: i === slide ? '#2887B6' : 'white',
                  color: i === slide ? 'white' : '#333',
                  transition: 'all 0.3s',
                  '&:hover': { borderColor: '#2887B6', transform: 'translateY(-2px)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
                }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: '13px', lineHeight: 1.4, mb: 1,
                  display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                }}>
                  {news.title}
                </Typography>
                <Typography sx={{ fontSize: '11px', opacity: 0.6 }}>
                  {news.date}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* === ПОСЛАНИЕ ПРЕЗИДЕНТА (зелёная секция) === */}
      <Box sx={{ 
         bgcolor: '#10b857',
         py: { xs: 6, md: 10 } 
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* {presidentialMessages.map((msg, i) => (
              <Grid item xs={12} md={6} key={i}>
                <Paper
                  component={Link}
                  href={msg.link}
                  elevation={0}
                  sx={{
                    p: 3, height: '100%',
                    bgcolor: 'rgba(255,255,255,0.15)',
                    borderRadius: 2,
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.25)' },
                  }}
                >
                  <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '15px', lineHeight: 1.5, mb: 1 }}>
                    {msg.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>
                    {msg.date}
                  </Typography>
                  <Typography sx={{ color: '#FDE428', fontSize: '13px', fontWeight: 600, mt: 1 }}>
                    Далее →
                  </Typography>
                </Paper>
              </Grid>
            ))} */}

            инфа
          </Grid>
        </Container>
      </Box>


      {/* === ЦЕНТРЫ (карусель как на оригинале) === */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#f2f2f2' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#002e5b', textAlign: 'center' }}>
            Центры АО «КазНИИСА»
          </Typography>
          <Typography sx={{ mb: 5, color: '#666', textAlign: 'center', fontSize: '15px' }}>
            В состав АО «КазНИИСА» входят 5 центров
          </Typography>

          <Box sx={{ position: 'relative' }}>
            <Grid container spacing={3}>
              {centers.slice(centerSlide, centerSlide + 3).map((center, i) => (
                <Grid item xs={12} md={4} key={i}>
                  <Card
                    component={Link}
                    href={center.path}
                    elevation={0}
                    sx={{
                      height: '100%',
                      textDecoration: 'none',
                      borderRadius: 2,
                      border: '1px solid #e0e0e0',
                      transition: 'all 0.3s',
                      '&:hover': {
                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                        transform: 'translateY(-4px)',
                        borderColor: '#2887B6',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography sx={{ fontWeight: 700, fontSize: '16px', color: '#002e5b', mb: 1.5, lineHeight: 1.3 }}>
                        {center.title}
                      </Typography>
                      <Typography sx={{ fontSize: '13px', color: '#666', lineHeight: 1.6 }}>
                        {center.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Стрелки карусели */}
            {centerSlide > 0 && (
              <IconButton onClick={prevCenter} sx={{
                position: 'absolute', left: -20, top: '50%', transform: 'translateY(-50%)',
                bgcolor: 'white', boxShadow: 2, '&:hover': { bgcolor: '#f5f5f5' },
              }}>
                <ChevronLeft />
              </IconButton>
            )}
            {centerSlide < centers.length - 3 && (
              <IconButton onClick={nextCenter} sx={{
                position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)',
                bgcolor: 'white', boxShadow: 2, '&:hover': { bgcolor: '#f5f5f5' },
              }}>
                <ChevronRight />
              </IconButton>
            )}
          </Box>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              component={Link}
              href="/centres"
              variant="contained"
              sx={{
                bgcolor: '#2887B6',
                px: 4, py: 1.2, borderRadius: '25px',
                fontSize: '14px',
                '&:hover': { bgcolor: '#1f6f96' },
              }}
            >
              Все центры
            </Button>
          </Box>
        </Container>
      </Box>

      {/* === ФИЛИАЛЫ (как на оригинале — с фоновым изображением) === */}
      <Box sx={{
        py: { xs: 6, md: 10 },
        backgroundImage: 'url(/images/Branch-locations.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute', inset: 0,
          bgcolor: 'rgba(0,46,91,0.85)',
        },
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'white', mb: 1, textAlign: 'center' }}>
            Филиалы АО «КазНИИСА»
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.7)', textAlign: 'center', mb: 5, fontSize: '15px' }}>
            Головной офис АО «КазНИИСА» находится в Алматы, институт также имеет филиалы в Астане, Усть-Каменогорске и Таразе.
          </Typography>

          <Grid container spacing={3}>
            {offices.map((office, i) => (
              <Grid item xs={12} sm={6} md={2.4} key={i}>
                <Paper elevation={0} sx={{
                  p: 2.5, height: '100%',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  borderRadius: 2,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}>
                  <Typography sx={{ fontWeight: 700, color: '#FDE428', fontSize: '14px', mb: 1.5 }}>
                    {office.city}
                  </Typography>
                  <Stack spacing={1}>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                      <LocationOn sx={{ fontSize: 16, color: '#2887B6', mt: 0.25, flexShrink: 0 }} />
                      <Typography sx={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>{office.address}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <Phone sx={{ fontSize: 16, color: '#2887B6', flexShrink: 0 }} />
                      <Typography sx={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>{office.phone}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <Email sx={{ fontSize: 16, color: '#2887B6', flexShrink: 0 }} />
                      <Typography sx={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)' }}>{office.email}</Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* === CTA / КОНТАКТНАЯ ФОРМА (как на оригинале) === */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#002e5b', mb: 2 }}>
                Нужна консультация?
              </Typography>
              <Typography sx={{ color: '#666', mb: 3, lineHeight: 1.7 }}>
                Свяжитесь с ближайшим офисом АО «КазНИИСА» или отправьте заявку онлайн.
                Наши специалисты помогут вам.
              </Typography>
              <Button
                component={Link}
                href="/about-us/contacts"
                variant="contained"
                sx={{
                  bgcolor: '#2887B6',
                  px: 4, py: 1.2,
                  borderRadius: '25px',
                  fontSize: '14px',
                  '&:hover': { bgcolor: '#1f6f96' },
                }}
              >
                Контакты
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Новостная лента в футере */}
              <Paper elevation={0} sx={{ p: 3, bgcolor: '#f8f8f8', borderRadius: 2 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '16px', color: '#002e5b', mb: 2 }}>
                  Новости
                </Typography>
                {newsSlides.slice(0, 2).map((news, i) => (
                  <Box key={i} sx={{ mb: i < 1 ? 2 : 0 }}>
                    <Typography
                      component={Link}
                      href={news.link}
                      sx={{
                        fontWeight: 600, fontSize: '13px', color: '#333',
                        textDecoration: 'none', lineHeight: 1.4, display: 'block',
                        '&:hover': { color: '#2887B6' },
                      }}
                    >
                      {news.title}
                    </Typography>
                    <Typography sx={{ fontSize: '11px', color: '#999', mt: 0.5 }}>
                      {news.date}
                    </Typography>
                    {i < 1 && <Divider sx={{ mt: 2 }} />}
                  </Box>
                ))}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}