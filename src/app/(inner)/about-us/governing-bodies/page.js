'use client';
import { Typography, Box, Grid } from '@mui/material';
import ImageLightbox, { useImageLightbox } from '../../../../components/ImageLightbox';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const chairman = {
  name: 'Бесимбаев Ерик Турашович',
  role: 'Председатель Совета директоров',
  since: '29.07.2024',
  note: 'Профессор КазНИТУ, род. 22.11.1958',
  photo: '/images/kazniisa/besimbaev.webp',
};

const boardMembers = [
  {
    name: 'Рысдавлетов Мурат Булатович',
    role: 'Заместитель председателя Комитета строительства',
    since: '12.02.2026',
    note: 'Род. 30.09.1982',
    photo: '/images/kazniisa/rysdavletov.jpeg',
  },
  {
    name: 'Карибаева Мамыр Куанышовна',
    role: 'Главный эксперт',
    since: '29.07.2024',
    note: 'Род. 31.08.1970',
    photo: '/images/kazniisa/karibaeva.webp',
  },
  {
    name: 'Кульбаев Бегман Бахитович',
    role: 'Генеральный директор АО «КазНИИСА»',
    since: '29.07.2024',
    note: 'Род. 10.01.1982',
    photo: '/images/kazniisa/kulbaev-400.webp',
  },
  {
    name: 'Есенова Куралай Еркебековна',
    role: 'Независимый директор',
    since: '29.07.2024',
    note: 'Род. 21.04.1971',
    photo: '/images/kazniisa/esenova.webp',
  },
  {
    name: 'Сатжанов Кенжебай Сатжанович',
    role: 'Представитель акционера',
    since: '29.07.2024',
    note: 'Род. 19.08.1955',
    photo: '/images/kazniisa/satzhanov.webp',
  },
];

const executives = [
  { name: 'Кульбаев Бегман Бахитович', role: 'Генеральный директор', note: 'в должности с 19.09.2017', photo: '/images/kazniisa/kulbaev-400.webp' },
  { name: 'Шокбаров Ералы Мейрамбекович', role: 'Управляющий директор по производству', note: '', photo: '/images/kazniisa/shokbarov-400.jpg' },
  { name: 'Шахнович Александр Юльевич', role: 'Управляющий директор по развитию и цифровизации', note: '', photo: '/images/kazniisa/shakhnovitch-400.webp' },
];

const otherOfficials = [
  { label: 'Корпоративный секретарь-омбудсмен', value: 'Суханкулов Нуркен Кунанбаевич' },
  { label: 'Внутренний аудитор', value: 'Ермекбаев Берик Серикович', note: 'тел. 226-94-10, +7 778 705 43 65' },
];

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
        <Grid item xs={12} sm={6} md={4}>
          <PersonCard person={chairman} featured onImageClick={openLightbox} />
        </Grid>
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
