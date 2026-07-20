'use client';
import { useParams } from 'next/navigation';
import { Typography, Box, Divider, Chip } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Link from 'next/link';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const EVENTS = {
  '1-st-meeting': {
    title: '1-нші отырыс',
    subtitle: 'СҚБҰ',
    date: 'Ноябрь 13, 2019 - Ноябрь 16, 2019',
    time: '09:00 - 19:00',
    place: 'Алматы қаласы, Қажымұқан көшесі, 49 үй ("Shera Inn Hotel" қонақ үйі)',
    phone: '8 (727) 226 94 10',
    body: [],
  },
  '2st-meeting': {
    title: '2-нші отырыс',
    subtitle: 'СҚБҰ',
    date: 'Желтоқсан 25, 2020',
    time: '14:00 - 19:00',
    place: '3 шағынауданы 44а Алматы қ.',
    phone: '8 (727) 226 94 10',
    body: [],
  },
  'bim-club-of-central-asia': {
    title: 'BIM Клуб Центральной Азии',
    subtitle: null,
    date: 'Апрель 7, 2025',
    time: '09:00 - 18:30',
    place: '3 шағынауданы 44а Алматы қ.',
    phone: '8 (727) 226 94 10 (вн 118)',
    body: [],
  },
  'buildingsmart-kazakhstan-conference-awards': {
    title: 'BuildingSMART Kazakhstan Conference & Awards',
    subtitle: null,
    date: 'Октябрь 23, 2025',
    time: '09:00 - 19:00',
    place: 'проспект Aль-Фараби 77/7, Алматы',
    phone: '+7(747) 793 16 65 , +7 (701) 816-74-81',
    body: [],
  },
  'jsc-kazniisa-at-the-summit-buildingsmart-2025-in-singapore': {
    title: '«ҚазҚСҒЗИ» АҚ Сингапурдағы buildingSMART International Summit – 2025 құрылыс цифрландыру жөніндегі жаһандық саммитіне қатысуда',
    subtitle: null,
    date: 'Март 18, 2025 - Март 20, 2025',
    time: '09:00 - 18:30',
    place: 'Singapore',
    phone: '8 (727) 226 94 10 (вн 118)',
    body: [],
  },
};

export default function EventDetailPage() {
  const params = useParams();
  const slug = params?.slug;
  const event = EVENTS[slug];

  if (!event) {
    return (
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
          Оқиға табылмады
        </Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
          Сұралған оқиға табылмады немесе өзгертілген.
        </Typography>
        <Link
          href="/qaz/buildingsmart/events-buildingsmart"
          style={{ color: NAVY, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid ' + BORDER, paddingBottom: 1 }}
        >
          ← Оқиғалар
        </Link>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        {event.title}
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 2 }} />

      {event.subtitle && (
        <Chip
          label={event.subtitle}
          sx={{
            bgcolor: BLUE_LIGHT,
            color: BLUE,
            fontWeight: 600,
            mb: 3,
            height: 'auto',
            py: 1,
            '& .MuiChip-label': { whiteSpace: 'normal', lineHeight: 1.4 },
          }}
        />
      )}

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1.5, bgcolor: BLUE_LIGHT, borderRadius: '6px' }}>
          <EventIcon sx={{ color: BLUE, fontSize: 20 }} />
          <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem' }}>{event.date}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1.5, bgcolor: BLUE_LIGHT, borderRadius: '6px' }}>
          <AccessTimeIcon sx={{ color: BLUE, fontSize: 20 }} />
          <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem' }}>{event.time}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1.5, bgcolor: BLUE_LIGHT, borderRadius: '6px' }}>
          <LocationOnIcon sx={{ color: BLUE, fontSize: 20 }} />
          <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem' }}>{event.place}</Typography>
        </Box>
        {event.phone && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1.5, bgcolor: BLUE_LIGHT, borderRadius: '6px' }}>
            <PhoneIcon sx={{ color: BLUE, fontSize: 20 }} />
            <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem' }}>{event.phone}</Typography>
          </Box>
        )}
      </Box>

      <Divider sx={{ mb: 4 }} />

      {event.body.map((p, i) => (
        <Typography key={i} sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
          {p}
        </Typography>
      ))}

      <Divider sx={{ my: 4 }} />

      <Link
        href="/qaz/buildingsmart/events-buildingsmart"
        style={{ color: NAVY, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid ' + BORDER, paddingBottom: 1 }}
      >
        ← Оқиғалар
      </Link>
    </Box>
  );
}
