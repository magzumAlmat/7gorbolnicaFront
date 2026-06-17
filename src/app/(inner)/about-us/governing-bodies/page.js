'use client';
import { useState, useEffect } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import ImageLightbox, { useImageLightbox } from '../../../../components/ImageLightbox';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

// Фото из сидов лежат в публичных ассетах фронта ("/images/..."),
// загруженные через админку — относительный путь на бэке.
const photoUrl = (p) => (p ? (p.startsWith('/') ? p : `${API_URL}/${p}`) : '');
const toPerson = (r) => ({ name: r.fio, role: r.position, since: r.since, note: r.note, photo: photoUrl(r.path) });

function SectionTitle({ children }) {
  return (
    <Box sx={{ mb: 3, mt: 1 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        {children}
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5 }} />
    </Box>
  );
}

function PersonCard({ person, featured, onImageClick }) {
  return (
    <Box sx={{
      bgcolor: 'white',
      border: `1px solid ${featured ? BLUE : BORDER}`,
      borderRadius: '6px',
      overflow: 'hidden',
      transition: 'box-shadow 0.2s ease, transform 0.2s ease',
      '&:hover': {
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        transform: 'translateY(-2px)',
      },
    }}>
      <Box sx={{
        height: featured ? 220 : 180,
        overflow: 'hidden',
        bgcolor: '#E2E8F0',
        position: 'relative',
        cursor: 'zoom-in',
      }}
        onClick={() => onImageClick(person.photo, person.name)}
      >
        <Box
          component="img"
          src={person.photo}
          alt={person.name}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
          }}
        />
        {featured && (
          <Box sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            bgcolor: BLUE,
            color: 'white',
            px: 1.5,
            py: 0.5,
            borderRadius: '4px',
            fontSize: '0.7rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Председатель
          </Box>
        )}
      </Box>
      <Box sx={{ p: 2.5 }}>
        <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem', lineHeight: 1.35, mb: 0.5 }}>
          {person.name}
        </Typography>
        <Typography sx={{ fontSize: '0.82rem', color: BLUE, fontWeight: 500, mb: 0.5, lineHeight: 1.4 }}>
          {person.role}
        </Typography>
        <Typography sx={{ fontSize: '0.75rem', color: GRAY_TEXT, lineHeight: 1.5 }}>
          {person.note}
        </Typography>
        <Typography sx={{ fontSize: '0.72rem', color: GRAY_TEXT, mt: 1, fontWeight: 500 }}>
          с {person.since}
        </Typography>
      </Box>
    </Box>
  );
}

export default function GoverningBodiesPage() {
  const { lightbox, openLightbox, closeLightbox } = useImageLightbox();
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/administration/public`)
      .then((r) => r.json())
      .then((d) => setPeople(Array.isArray(d) ? d : []))
      .catch(() => {});
  }, []);

  const sorted = [...people].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
  const chairman = sorted.filter((p) => p.group === 'chairman').map(toPerson)[0] || null;
  const boardMembers = sorted.filter((p) => p.group === 'board').map(toPerson);
  const executives = sorted.filter((p) => p.group === 'executive').map(toPerson);
  const otherOfficials = sorted
    .filter((p) => p.group === 'official')
    .map((p) => ({ label: p.position, value: p.fio, note: p.phone || p.note }));

  return (
    <Box>
      <ImageLightbox {...lightbox} onClose={closeLightbox} />

      <Typography variant="h4" sx={{ fontWeight: 800, color: NAVY, mb: 0.5, fontSize: { xs: '1.5rem', md: '1.9rem' }, letterSpacing: '-0.02em' }}>
        Органы управления
      </Typography>
      <Typography sx={{ fontSize: '1rem', color: GRAY_TEXT, mb: 4, lineHeight: 1.7 }}>
        Структура корпоративного управления АО «КазНИИСА»
      </Typography>

      {/* Единственный акционер */}
      <Box sx={{
        display: 'flex',
        gap: 3,
        alignItems: 'center',
        flexWrap: 'wrap',
        p: 3,
        bgcolor: BLUE_LIGHT,
        borderLeft: `4px solid ${BLUE}`,
        borderRadius: '0 6px 6px 0',
        mb: 5,
      }}>
        <Box
          component="img"
          src="/images/kazniisa/ministry-logo.webp"
          alt="Министерство промышленности и строительства РК"
          sx={{ height: 64, objectFit: 'contain', flexShrink: 0 }}
        />
        <Box sx={{ flex: 1, minWidth: 240 }}>
          <Typography sx={{ fontWeight: 600, color: BLUE, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', mb: 0.5 }}>
            Единственный акционер — 100% акций
          </Typography>
          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.6, color: NAVY, fontWeight: 600 }}>
            Комитет по делам строительства и жилищно-коммунального хозяйства Министерства промышленности и строительства Республики Казахстан
          </Typography>
        </Box>
      </Box>

      {/* Совет директоров */}
      <SectionTitle>Совет директоров</SectionTitle>

      <Grid container spacing={2.5} sx={{ mb: 5 }}>
        {chairman && (
          <Grid item xs={12} sm={6} md={4}>
            <PersonCard person={chairman} featured onImageClick={openLightbox} />
          </Grid>
        )}
        {boardMembers.map((m, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <PersonCard person={m} onImageClick={openLightbox} />
          </Grid>
        ))}
      </Grid>

      {/* Исполнительное руководство */}
      <Box sx={{ bgcolor: GRAY_BG, mx: -3, px: 3, py: 4, mb: 4, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <SectionTitle>Исполнительное руководство</SectionTitle>

        <Grid container spacing={3} sx={{ mb: 3 }}>
          {executives.map((exec, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}>
                <Box
                  component="img"
                  src={exec.photo}
                  alt={exec.name}
                  onClick={() => openLightbox(exec.photo, exec.name)}
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    border: `3px solid ${i === 0 ? BLUE : BORDER}`,
                    mb: 1.5,
                    cursor: 'zoom-in',
                  }}
                />
                <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.92rem', lineHeight: 1.35, mb: 0.5 }}>
                  {exec.name}
                </Typography>
                <Typography sx={{ fontSize: '0.8rem', color: BLUE, fontWeight: 500, lineHeight: 1.4 }}>
                  {exec.role}
                </Typography>
                {exec.note && (
                  <Typography sx={{ fontSize: '0.72rem', color: GRAY_TEXT, mt: 0.5 }}>
                    {exec.note}
                  </Typography>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>

        {otherOfficials.map((row, i) => (
          <Box key={i} sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: { xs: 0.5, sm: 2 },
            alignItems: 'baseline',
            py: 1.5,
            borderTop: `1px solid ${BORDER}`,
          }}>
            <Typography sx={{ color: GRAY_TEXT, fontSize: '0.85rem', minWidth: { sm: 300 }, flexShrink: 0 }}>
              {row.label}
            </Typography>
            <Box>
              <Typography sx={{ fontWeight: 600, color: NAVY, fontSize: '0.92rem' }}>
                {row.value}
              </Typography>
              {row.note && (
                <Typography sx={{ color: GRAY_TEXT, fontSize: '0.78rem', mt: 0.3 }}>{row.note}</Typography>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Организационная структура */}
      <SectionTitle>Организационная структура</SectionTitle>
      <Box sx={{
        border: `1px solid ${BORDER}`,
        borderRadius: '6px',
        overflow: 'hidden',
        mb: 2,
        '&:hover': { boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
        transition: 'box-shadow 0.2s ease',
        cursor: 'zoom-in',
      }}
        onClick={() => openLightbox('/images/kazniisa/org-structure-2025-full.webp', 'Организационная структура КазНИИСА 2025')}
      >
        <Box
          component="img"
          src="/images/kazniisa/org-structure-2025-full.webp"
          alt="Организационная структура КазНИИСА 2025"
          sx={{ width: '100%', display: 'block' }}
        />
      </Box>
    </Box>
  );
}
