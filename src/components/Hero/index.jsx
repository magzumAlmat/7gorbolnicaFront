'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Box, Container, Typography, Button, Stack, Grid, Card, CardContent, CardMedia,
  IconButton, Paper, useTheme, alpha, Divider
} from '@mui/material';
import {
  ChevronLeft, ChevronRight, ArrowForward,
  LocationOn, Phone, Email, AccessTime,
  Description, LaptopMac, Business, Architecture, School, Apps,
  KeyboardArrowDown, Work
} from '@mui/icons-material';
import { Select, MenuItem, TextField as MuiTextField } from '@mui/material';
import { getExcerpt } from '../../lib/newsContent';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import NewsSection from '../NewsSection';
const KazakhstanMap = dynamic(() => import('../Map/LeafletMap'), { ssr: false });

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const centers = [
  { 
    title: "Центр нормирования в строительстве", 
    desc: "Разработка нормативных технических документов, сборников по сметному ценообразованию в строительстве, энергетике и жилищно-коммунальном...", 
    path: "/centres/center-for-regulation-in-construction",
    icon: "document"
  },
  { 
    title: "Центр науки и цифровизации строительства", 
    desc: "Развитие нормативно-технической базы в области внедрения технологии информационного моделирования в промышленное и гражданское строительс...", 
    path: "/centres/center-for-science-and-digitalization-of-construction",
    icon: "laptop"
  },
  { 
    title: "Центр сейсмостойкости, обследования зданий и сооружений", 
    desc: "Техническое обследование зданий и сооружений, проведение испытаний и подтверждение их сейсмической безопасности, координация работ в обла...", 
    path: "/centres/center-for-seismic-resistance-inspection-of-buildings-and-structures",
    icon: "building"
  },
  { 
    title: "Центр типового и индивидуального проектирования", 
    desc: "Разработка типовых проектов жилых и общественных зданий, предназначенных для многократной реализации их в последующем строительстве, разр...", 
    path: "/centres/center-for-standard-and-individual-design",
    icon: "design"
  },
  { 
    title: "Корпоративный университет", 
    desc: "Повышение квалификации работников, организаций и проведение аттестации ИТР, специализирующихся в области проектных, проектно-изыскательск...", 
    path: "/centres/corporate-university",
    icon: "education"
  },
  { 
    title: "Все центры", 
    desc: "Перейти на страницу Все центры", 
    path: "/centres",
    icon: "all"
  },
];

export default function Hero() {
  const theme = useTheme();
  
  const [mapView, setMapView] = useState({ center: [48.0, 67.0], zoom: 5 });

  const handleOfficeClick = (coords) => {
    setMapView({ center: coords, zoom: 12 });
    window.scrollTo({ top: document.getElementById('map-section')?.offsetTop - 100, behavior: 'smooth' });
  };

  const [slide, setSlide] = useState(0);
  const [newsSlides, setNewsSlides] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/kazniisa/news`)
      .then(r => r.json())
      .then(data => {
        const slides = (data || []).slice(0, 4).map(item => ({
          id: item.id,
          title: item.title?.ru || '',
          date: item.publishedAt
            ? new Date(item.publishedAt).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
            : '',
          image: item.image || '/images/kazniisa/centres-banner.webp',
          link: `/about-us/news/${item.slug}`,
          snippet: getExcerpt(item.content?.ru, 150),
        }));
        setNewsSlides(slides);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (newsSlides.length === 0) return;
    const timer = setInterval(() => setSlide(s => (s + 1) % newsSlides.length), 6000);
    return () => clearInterval(timer);
  }, [newsSlides.length]);

  const nextSlide = () => newsSlides.length > 0 && setSlide(s => (s + 1) % newsSlides.length);
  const prevSlide = () => newsSlides.length > 0 && setSlide(s => (s - 1 + newsSlides.length) % newsSlides.length);

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
                {newsSlides.length === 0 && (
                  <Box sx={{
                    height: { xs: 250, md: 350 },
                    bgcolor: 'rgba(255,255,255,0.1)',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px dashed rgba(255,255,255,0.3)'
                  }}>
                    <Typography sx={{ color: 'white' }}>Загрузка новостей...</Typography>
                  </Box>
                )}
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

                {/* Навигация по точкам */}
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

      {/* === МИНИ-ЛЕНТА НОВОСТЕЙ === */}
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

      {/* === МОДУЛЬ НОВОСТИ (сразу после лендинга) === */}
      <NewsSection />

      {/* === ЦЕНТРЫ АО «КАЗНИИСА» === */}
      <Box sx={{ 
        position: 'relative', 
        bgcolor: '#002e5b', 
        py: { xs: 8, md: 14 }, 
        textAlign: 'center', 
        color: 'white',
        backgroundImage: 'url("https://kazniisa.kz/wp-content/uploads/2019/12/banner_4.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Box sx={{ 
          position: 'absolute', inset: 0, 
          bgcolor: 'rgba(0, 46, 91, 0.9)', 
          zIndex: 0 
        }} />
        
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack alignItems="center" spacing={3}>
            <Box sx={{ 
              bgcolor: '#FDE428', 
              p: 2, 
              borderRadius: '16px', 
              boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Work sx={{ color: '#002e5b', fontSize: 40 }} />
            </Box>
            <Box>
              <Typography variant="h2" sx={{ 
                fontWeight: 800, 
                fontSize: { xs: '2.2rem', md: '3.8rem' },
                lineHeight: 1.2,
                mb: 1.5,
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}>
                <Box component="span" sx={{ color: '#FDE428' }}>Центры</Box> АО «КазНИИСА»
              </Typography>
              <Typography sx={{ 
                fontSize: { xs: '15px', md: '18px' }, 
                opacity: 0.8,
                maxWidth: 600,
                mx: 'auto',
                fontWeight: 500,
                lineHeight: 1.6
              }}>
                В состав АО «КазНИИСА» входят 5 центров
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Grid container spacing={0} sx={{ border: '1px solid #eee', borderRadius: 2, overflow: 'hidden', bgcolor: 'white' }}>
            {centers.map((center, i) => {
              const IconComp = {
                document: Description,
                laptop: LaptopMac,
                building: Business,
                design: Architecture,
                education: School,
                all: Apps
              }[center.icon] || Business;

              return (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Box
                    component={Link}
                    href={center.path}
                    sx={{
                      p: 4,
                      height: '100%',
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRight: { sm: (i + 1) % 2 === 0 ? 'none' : '1px solid #eee', md: (i + 1) % 3 === 0 ? 'none' : '1px solid #eee' },
                      borderBottom: { xs: '1px solid #eee', md: i < 3 ? '1px solid #eee' : 'none' },
                      transition: 'all 0.3s',
                      '&:hover': {
                        bgcolor: i === 5 ? '#f4f4f4' : '#fff',
                        '& .center-icon': { bgcolor: '#002e5b', color: 'white' },
                        '& .center-title': { color: '#2887B6' },
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                       <Box 
                         className="center-icon"
                         sx={{ 
                           width: 50, height: 50, borderRadius: '50%', 
                           bgcolor: '#002e5b', color: 'white',
                           display: 'flex', alignItems: 'center', justifyContent: 'center',
                           flexShrink: 0, transition: 'all 0.3s'
                         }}>
                          <IconComp />
                       </Box>
                       <Box>
                          <Typography className="center-title" sx={{ fontWeight: 700, fontSize: '16px', color: '#002e5b', mb: 1, lineHeight: 1.3, transition: 'all 0.3s' }}>
                            {center.title}
                          </Typography>
                          <Divider sx={{ width: 40, height: 3, bgcolor: '#FDE428', border: 'none', mb: 2 }} />
                       </Box>
                    </Box>
                    <Typography sx={{ fontSize: '14px', color: '#666', lineHeight: 1.6, flexGrow: 1 }}>
                      {center.desc}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* === ОБРАТНАЯ СВЯЗЬ === */}
      <Box sx={{ bgcolor: '#10b857', py: { xs: 8, md: 10 }, color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, lineHeight: 1.1 }}>
                Оставьте заявку,<br />мы перезвоним
              </Typography>
              <Typography sx={{ opacity: 0.9, fontSize: '1.1rem', mb: 4, lineHeight: 1.6 }}>
                Хотите поговорить с одним из наших консультантов по телефону? Просто отправьте свои данные, и мы свяжемся с вами в ближайшее время.
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box>
                  <Typography sx={{ mb: 1.5, fontWeight: 600, fontSize: '14px' }}>Я хотел бы обсудить:</Typography>
                  <Select
                    fullWidth
                    defaultValue="business"
                    IconComponent={KeyboardArrowDown}
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.4)',
                      borderRadius: 1,
                      color: 'white',
                      '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                      '& .MuiSelect-icon': { color: 'white' },
                    }}
                  >
                    <MenuItem value="business">Бизнес-планирование</MenuItem>
                    <MenuItem value="norm">Нормирование</MenuItem>
                    <MenuItem value="seismic">Сейсмостойкость</MenuItem>
                    <MenuItem value="other">Другое</MenuItem>
                  </Select>
                </Box>
                
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <MuiTextField
                      fullWidth
                      placeholder="Имя"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          bgcolor: 'rgba(255,255,255,0.4)',
                          borderRadius: 1,
                          '& fieldset': { border: 'none' },
                          '& input': { color: 'white', '&::placeholder': { color: 'rgba(255,255,255,0.7)', opacity: 1 } }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MuiTextField
                      fullWidth
                      placeholder="Номер телефона"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          bgcolor: 'rgba(255,255,255,0.4)',
                          borderRadius: 1,
                          '& fieldset': { border: 'none' },
                          '& input': { color: 'white', '&::placeholder': { color: 'rgba(255,255,255,0.7)', opacity: 1 } }
                        }
                      }}
                    />
                  </Grid>
                </Grid>

                <Button
                  variant="contained"
                  endIcon={<ChevronRight />}
                  sx={{
                    bgcolor: '#002e5b',
                    color: 'white',
                    py: 2,
                    px: 4,
                    fontWeight: 700,
                    fontSize: '15px',
                    textTransform: 'uppercase',
                    alignSelf: 'flex-start',
                    borderRadius: 1,
                    '&:hover': { bgcolor: '#001a33' },
                  }}
                >
                  Отправить
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* === ФИЛИАЛЫ АО «КАЗНИИСА» === */}
      <Box sx={{ bgcolor: '#002e5b', py: { xs: 6, md: 8 }, textAlign: 'center', color: 'white' }}>
        <Container maxWidth="md">
          <Box sx={{ display: 'inline-flex', bgcolor: '#FDE428', p: 1, borderRadius: 1, mb: 3 }}>
            <Business sx={{ color: '#002e5b', fontSize: 32 }} />
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.8rem', md: '2.8rem' } }}>
            <Box component="span" sx={{ color: '#FDE428' }}>Филиалы</Box> АО «КазНИИСА»
          </Typography>
          <Typography sx={{ opacity: 0.8, fontSize: '14px', maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
            Головной офис АО «КазНИИСА» находится в Алматы,<br />
            институт также имеет филиалы в Астане, Усть-Каменогорске и Таразе.
          </Typography>
        </Container>
      </Box>

      {/* === СЕКЦИЯ С КАРТОЙ И КОНТАКТАМИ === */}
      <Box sx={{ position: 'relative', bgcolor: '#f5f5f5' }}>
        <Box sx={{ 
          height: { xs: 400, md: 550 }, 
          width: '100%', 
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'url("https://kazniisa.kz/wp-content/uploads/2019/12/Screenshot_1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <Box
          sx={{
            height: { xs: 400, md: 550 },
            width: '100%',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          }}
        >
          <Box id="map-section" sx={{ height: { xs: 400, md: 550 }, width: '100%', borderRadius: 2, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
            <KazakhstanMap center={mapView.center} zoom={mapView.zoom} />
          </Box>
        </Box>
        </Box>

        {/* Темно-синий ползунок с офисами */}
        <Box sx={{ bgcolor: '#002e5b', color: 'white', py: 4, position: 'relative' }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid container spacing={0}>
                <Grid item xs={12} md={3.7}>
                  <Box 
                    onClick={() => handleOfficeClick([51.169392, 71.449074])}
                    sx={{ px: 2, cursor: 'pointer', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-5px)', opacity: 0.9 } }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, textTransform: 'uppercase', fontSize: '16px' }}>
                      Офис Астана
                    </Typography>
                    <Typography sx={{ fontSize: '13px', opacity: 0.8, mb: 1 }}>
                      р-н Сарыарқа, ул. Бейбітшілік 14, оф 1406
                    </Typography>
                    <Typography sx={{ fontSize: '13px', mb: 0.5 }}>8 (7172) 57-53-03</Typography>
                    <Typography sx={{ fontSize: '13px', color: '#2887B6' }}>crn@kazniisa.kz</Typography>
                  </Box>
                </Grid>

                <Grid item sx={{ borderLeft: '1px solid rgba(255,255,255,0.2)', height: 100, mx: 1, display: { xs: 'none', md: 'block' } }} />

                <Grid item xs={12} md={3.7}>
                  <Box 
                    onClick={() => handleOfficeClick([42.896088, 71.398430])}
                    sx={{ px: 2, cursor: 'pointer', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-5px)', opacity: 0.9 } }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, textTransform: 'uppercase', fontSize: '16px' }}>
                      Офис Тараз
                    </Typography>
                    <Typography sx={{ fontSize: '13px', opacity: 0.8, mb: 1 }}>
                      ул. Сулейманова, 19 Б
                    </Typography>
                    <Typography sx={{ fontSize: '13px', mb: 0.5 }}>+7 (7262) 43-63-99 | 19-20</Typography>
                    <Typography sx={{ fontSize: '13px', color: '#2887B6' }}>mbaitemirov@kazniisa.kz</Typography>
                  </Box>
                </Grid>

                <Grid item sx={{ borderLeft: '1px solid rgba(255,255,255,0.2)', height: 100, mx: 1, display: { xs: 'none', md: 'block' } }} />

                <Grid item xs={12} md={3.7}>
                  <Box 
                    onClick={() => handleOfficeClick([49.948175, 82.628540])}
                    sx={{ px: 2, cursor: 'pointer', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-5px)', opacity: 0.9 } }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, textTransform: 'uppercase', fontSize: '16px' }}>
                      Офис Усть-Каменогорск
                    </Typography>
                    <Typography sx={{ fontSize: '13px', opacity: 0.8, mb: 1 }}>
                      ул. М.Горького, 21 офис 203
                    </Typography>
                    <Typography sx={{ fontSize: '13px', mb: 0.5 }}>8 (7232) 26-16-90</Typography>
                    <Typography sx={{ fontSize: '13px', color: '#2887B6' }}>info@kazniisa.kz</Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={0.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
                   <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#FDE428', mb: 1.5 }} />
                   <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#2887B6' }} />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* === CTA / КОНТАКТНАЯ ФОРМА === */}
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
