'use client';

import { useState, useEffect } from 'react';
import {
  Box, Container, Typography, Button, Stack, Grid, Divider
} from '@mui/material';
import {
  ChevronRight, ArrowForward,
  Description, LaptopMac, Business, Architecture, School,
  KeyboardArrowDown, Work, CalendarToday
} from '@mui/icons-material';
import { Select, MenuItem, TextField as MuiTextField } from '@mui/material';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { getExcerpt } from '../../../lib/newsContent';
const KazakhstanMap = dynamic(() => import('../../../components/Map/LeafletMap'), { ssr: false });

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Қазақша (kk) басты бет — kazniisa.kz/qaz/ түпнұсқасынан алынған мәтіндер.
// Түстер/токендер Hero-мен бірдей: navy rgb(0,46,91), yellow rgb(253,228,40).
const NAVY = '#002e5b';
const YELLOW = '#FDE428';
const HERO_BG = '/images/kazniisa/hero-bg.jpg';

// Орталықтар — тек qaz-түпнұсқасында қазақша мәтіні бар 5 орталық (аудармасы
// жоқ «Все центры» картасы және аудармасы жоқ сипаттамалар — «чего нет — опусти»).
const centers = [
  {
    title: "Құрылыстағы нормалау орталығы",
    desc: "",
    path: "/qaz/centres/center-for-regulation-in-construction",
    icon: "document"
  },
  {
    title: "Центр науки и цифровизации строительства",
    desc: "Өнеркәсіптік және азаматтық құрылыста ақпараттық модельдеу технологиясын енгізу саласында нормативтік-техникалық базаны әзірлеу...",
    path: "/qaz/centres/center-for-science-and-digitalization-of-construction",
    icon: "laptop"
  },
  {
    title: "Сейсмикаға төзімділік, ғимараттар мен құрылыстарды тексеру орталығы",
    desc: "Ғимараттар мен құрылыстарды техникалық тексеру, олардың сейсмикалық қауіпсіздігін сынау және растау, аумақтағы жұмыстарды үйлестіру...",
    path: "/qaz/centres/center-for-seismic-resistance-inspection-of-buildings-and-structures",
    icon: "building"
  },
  {
    title: "Үлгілік және индивидуалды жобалау орталығы",
    desc: "Кейінгі құрылыста қайталап енгізуге арналған тұрғын және қоғамдық ғимараттардың типтік жобаларын әзірлеу, дамыту...",
    path: "/qaz/centres/center-for-standard-and-individual-design",
    icon: "design"
  },
  {
    title: "Корпоративтік университет",
    desc: "Жұмысшылардың, ұйымдардың біліктілігін арттыру және жобалау, жобалау және іздестіру саласында маманданған инженерлерді аттестациядан өткізу...",
    path: "/qaz/centres/corporate-university",
    icon: "education"
  },
];

function formatKkDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('kk-KZ', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function QazHome() {
  const [mapView, setMapView] = useState({ center: [48.0, 67.0], zoom: 5 });

  const handleOfficeClick = (coords) => {
    setMapView({ center: coords, zoom: 12 });
    window.scrollTo({ top: document.getElementById('map-section')?.offsetTop - 100, behavior: 'smooth' });
  };

  // Жаңалықтар — өз API-мыздан, kk-өрістерімен (ru-ге fallback).
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/api/kazniisa/news`)
      .then(r => r.json())
      .then(data => {
        const slides = (data || []).slice(0, 4).map(item => ({
          id: item.id,
          slug: item.slug,
          title: item.title?.kz || item.title?.ru || '',
          excerpt: getExcerpt(item.content?.kz || item.content?.ru),
          image: item.image,
          date: formatKkDate(item.publishedAt),
          link: `/qaz/about-us/news/${item.slug}`,
        }));
        setNews(slides);
      })
      .catch(() => {});
  }, []);

  return (
    <Box>
      {/* === ГЕРО: фондық видео + сары CTA + көк плашка === */}
      <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', mt: '-1px' }}>
        <Box sx={{
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          minHeight: { xs: 340, md: 480 },
          py: { xs: 6, md: 10 },
          backgroundImage: `url("${HERO_BG}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundColor: '#002e5b',
        }}>
          <Box sx={{
            position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
            '& iframe': { width: '100%', height: '100%' },
          }}>
            <iframe
              src="https://www.youtube.com/embed/l86MTWdN19c?playlist=l86MTWdN19c&iv_load_policy=3&enablejsapi=1&disablekb=1&autoplay=1&controls=0&showinfo=0&rel=0&loop=1&mute=1&wmode=transparent&origin=https%3A%2F%2Fkazniisa.kz&widgetid=1&forigin=https%3A%2F%2Fkazniisa.kz%2F&aoriginsup=1&vf=6"
              title="KazNIISA hero video"
              allow="autoplay; encrypted-media"
              style={{ width: '100%', height: '100%', transform: 'scale(1.5)', pointerEvents: 'none', border: 'none' }}
            />
          </Box>
          <Box sx={{
            position: 'absolute', inset: 0, zIndex: 1,
            background: 'linear-gradient(135deg, rgba(0,46,91,0.85) 0%, rgba(4,57,89,0.6) 50%, rgba(0,46,91,0.85) 100%)',
          }} />
          <Box sx={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: 60, height: 4, bgcolor: YELLOW, mb: { xs: 3, md: 4 } }} />
            <Button
              component={Link}
              href="/qaz/about-us/contacts"
              endIcon={<ArrowForward sx={{ color: NAVY }} />}
              sx={{
                bgcolor: YELLOW,
                color: NAVY,
                px: { xs: 3, md: 4 },
                py: 1.4,
                fontSize: { xs: '13px', md: '15px' },
                fontWeight: 700,
                borderRadius: 0,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                '&:hover': { bgcolor: '#f5d800', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' },
              }}
            >
              Кеңес алу үшін
            </Button>
          </Box>
        </Box>

        {/* Көк плашка — институт сипаттамасы */}
        <Box sx={{ width: '100%', bgcolor: NAVY, py: { xs: 2, md: 2.5 } }}>
          <Container maxWidth="lg">
            <Typography sx={{
              color: 'white',
              textAlign: 'center',
              fontSize: { xs: '13px', md: '18px' },
              fontWeight: 500,
              letterSpacing: '0.3px',
              lineHeight: 1.5,
            }}>
              «ҚазҚСҒЗИ» АҚ – құрылыс саласындағы мемлекеттік ғылыми-зерттеу және жобалау институты
            </Typography>
          </Container>
        </Box>
      </Box>

      {/* === ЖАҢАЛЫҚТАР (өз API, kk-өрістер) === */}
      {news.length > 0 && (
        <Box sx={{ py: { xs: 6, md: 9 }, bgcolor: 'white' }}>
          <Container maxWidth="lg">
            <Typography variant="h4" sx={{ fontWeight: 800, color: NAVY, textAlign: 'center', mb: 1 }}>
              Жаңалықтар
            </Typography>
            <Box sx={{ width: 56, height: 3, bgcolor: YELLOW, mx: 'auto', mb: 5 }} />
            <Grid container spacing={3}>
              {news.map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item.id}>
                  <Box
                    component={Link}
                    href={item.link}
                    sx={{
                      display: 'block',
                      textDecoration: 'none',
                      border: '1px solid #eee',
                      borderRadius: 2,
                      overflow: 'hidden',
                      height: '100%',
                      transition: 'all 0.25s',
                      '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.12)', transform: 'translateY(-3px)' },
                    }}
                  >
                    {item.image && (
                      <Box sx={{ height: 140, overflow: 'hidden' }}>
                        <Box component="img" src={item.image} alt={item.title} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </Box>
                    )}
                    <Box sx={{ p: 2 }}>
                      <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mb: 1 }}>
                        <CalendarToday sx={{ fontSize: 13, color: '#999' }} />
                        <Typography sx={{ fontSize: '12px', color: '#999' }}>{item.date}</Typography>
                      </Stack>
                      <Typography sx={{ fontWeight: 700, fontSize: '14px', color: NAVY, lineHeight: 1.4 }}>
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}

      {/* === ОРТАЛЫҚТАР === */}
      <Box sx={{
        position: 'relative',
        bgcolor: NAVY,
        py: { xs: 8, md: 14 },
        textAlign: 'center',
        color: 'white',
        backgroundImage: 'url("/images/kazniisa/site-bg.jpg")',
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
              bgcolor: YELLOW,
              p: 2,
              borderRadius: '16px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Work sx={{ color: NAVY, fontSize: 40 }} />
            </Box>
            <Box>
              <Typography variant="h2" sx={{
                fontWeight: 800,
                fontSize: { xs: '2.2rem', md: '3.8rem' },
                lineHeight: 1.2,
                mb: 1.5,
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}>
                <Box component="span" sx={{ color: YELLOW }}>Орталықтар</Box> АО «КазНИИСА»
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
                        '& .center-icon': { bgcolor: NAVY, color: 'white' },
                        '& .center-title': { color: '#2887B6' },
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                       <Box
                         className="center-icon"
                         sx={{
                           width: 50, height: 50, borderRadius: '50%',
                           bgcolor: NAVY, color: 'white',
                           display: 'flex', alignItems: 'center', justifyContent: 'center',
                           flexShrink: 0, transition: 'all 0.3s'
                         }}>
                          <IconComp />
                       </Box>
                       <Box>
                          <Typography className="center-title" sx={{ fontWeight: 700, fontSize: '16px', color: NAVY, mb: 1, lineHeight: 1.3, transition: 'all 0.3s' }}>
                            {center.title}
                          </Typography>
                          <Divider sx={{ width: 40, height: 3, bgcolor: YELLOW, border: 'none', mb: 2 }} />
                       </Box>
                    </Box>
                    {center.desc && (
                      <Typography sx={{ fontSize: '14px', color: '#666', lineHeight: 1.6, flexGrow: 1 }}>
                        {center.desc}
                      </Typography>
                    )}
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* === ӨТІНІМ ФОРМАСЫ === */}
      <Box sx={{ bgcolor: '#10b857', py: { xs: 8, md: 10 }, color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, lineHeight: 1.1 }}>
                Өтінім қалдырыңыз,<br />біз қайта қоңырау шаламыз
              </Typography>
              <Typography sx={{ opacity: 0.9, fontSize: '1.1rem', mb: 4, lineHeight: 1.6 }}>
                Біздің кеңесшілеріміздің бірімен телефон арқылы сөйлескіңіз келе ме? Тек мәліметтеріңізді жіберіңіз, біз сізге жақын арада хабарласамыз.
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box>
                  <Typography sx={{ mb: 1.5, fontWeight: 600, fontSize: '14px' }}>Мен талқылағым келеді:</Typography>
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
                    <MenuItem value="business">Бизнес-жоспарлау</MenuItem>
                    <MenuItem value="audit">Аудит және кепілдік</MenuItem>
                    <MenuItem value="strategy">Стратегиялық жоспарлау</MenuItem>
                    <MenuItem value="deals">Мәмілелер мен акциялар</MenuItem>
                    <MenuItem value="finance">Қаржылық болжамдар</MenuItem>
                  </Select>
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <MuiTextField
                      fullWidth
                      placeholder="Аты-жөні"
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
                      placeholder="Телефон нөмірі"
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
                    bgcolor: NAVY,
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
                  Жіберу
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* === ФИЛИАЛДАР === */}
      <Box sx={{ bgcolor: NAVY, py: { xs: 6, md: 8 }, textAlign: 'center', color: 'white' }}>
        <Container maxWidth="md">
          <Box sx={{ display: 'inline-flex', bgcolor: YELLOW, p: 1, borderRadius: 1, mb: 3 }}>
            <Business sx={{ color: NAVY, fontSize: 32 }} />
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.8rem', md: '2.8rem' } }}>
            <Box component="span" sx={{ color: YELLOW }}>Филиалдар</Box> АО «КазНИИСА»
          </Typography>
          <Typography sx={{ opacity: 0.8, fontSize: '14px', maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
            «ҚазҚСҒЗИ» АҚ бас кеңсесі Алматы қаласында орналасқан,<br />
            институттың Астана, Өскемен және Тараз қалаларында да филиалдары бар.
          </Typography>
        </Container>
      </Box>

      {/* === КАРТА ЖӘНЕ БАЙЛАНЫС === */}
      <Box sx={{ position: 'relative', bgcolor: '#f5f5f5' }}>
        <Box sx={{
          height: { xs: 400, md: 550 },
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'url("/images/kazniisa/site-bg.jpg")',
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

        {/* Кеңселер жолағы */}
        <Box sx={{ bgcolor: NAVY, color: 'white', py: 4, position: 'relative' }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid container spacing={0}>
                <Grid item xs={12} md={3.7}>
                  <Box
                    onClick={() => handleOfficeClick([51.169392, 71.449074])}
                    sx={{ px: 2, cursor: 'pointer', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-5px)', opacity: 0.9 } }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, textTransform: 'uppercase', fontSize: '16px' }}>
                      Астана кеңсесі
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
                      Тараз кеңсесі
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
                      Өскемен кеңсесі
                    </Typography>
                    <Typography sx={{ fontSize: '13px', opacity: 0.8, mb: 1 }}>
                      ул. М.Горького, 21 офис 203
                    </Typography>
                    <Typography sx={{ fontSize: '13px', mb: 0.5 }}>8 (7232) 26-16-90</Typography>
                    <Typography sx={{ fontSize: '13px', color: '#2887B6' }}>info@kazniisa.kz</Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={0.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
                   <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: YELLOW, mb: 1.5 }} />
                   <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#2887B6' }} />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
