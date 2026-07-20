'use client';
import { Typography, Box } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';
const TEXT = '#334155';

const resources = [
  {
    title: 'БЖКЖ',
    href: 'https://eskks.kazniisa.kz/login',
    label: 'eskks.kazniisa.kz',
  },
  {
    title: 'БЖКЖ бағдарламалық құралы бойынша нұсқаулық',
    href: 'https://drive.google.com/drive/folders/1X2UPxzdKo6NloXH_PphLGO7cQy6_aJMx',
    label: 'Google Drive',
  },
  {
    title:
      'Қазақстанның құрылыс саласындағы бірыңғай жіктеу және кодтау жүйесі (ҚБЖКЖ): құрылымы, жұмыс принциптері және цифрлық трансформация шеңберінде қолданылуы',
    href: null,
    label: null,
  },
];

export default function EskksPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        БЖКЖ
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 1 }} />
      <Typography sx={{ fontSize: '0.95rem', color: GRAY_TEXT, mb: 4, fontStyle: 'italic' }}>
        Құрылыс саласындағы бірыңғай жіктеу және кодтау жүйесі
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 3 }}>
        Бұл зерттеудің мақсаты — Қазақстан Республикасындағы Құрылыс саласындағы бірыңғай
        жіктеу және кодтау жүйесін (ҚБЖКЖ) әзірлеуді сипаттау болып табылады. Жүйе құрылыс
        нысандарының өмірлік циклінің барлық кезеңдерінде ақпараттық үйлесімділік пен
        деректерді біріктіруді қамтамасыз ету құралы ретінде қарастырылады. Жүйені жасау
        барысында халықаралық ISO стандарттары мен ұлттық нормативтік талаптар негізге алынды.
        Зерттеу әдіснамасы жіктеу жүйелерінің қолданыстағы түрлерін талдауды және ҚБЖКЖ
        құрылымын жобалауды қамтиды. Әзірлеу барысында орталықтандырылған деректерді
        басқаруды қамтамасыз ететін автоматтандырылған платформа құрылды.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, fontStyle: 'italic', mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>
          «Нәтижелер көрсеткендей, ҚБЖКЖ деректердің дәлдігін арттырады, процестерді
          біріздендіреді және құрылыс үдерісіне қатысушылар арасындағы өзара әрекеттестікті
          оңтайландырады.»
        </Typography>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 2 }}>
        Ресурстар
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {resources.map((r, i) => (
          <Box
            key={i}
            sx={{
              p: 2.5,
              bgcolor: BLUE_LIGHT,
              border: '1px solid ' + BORDER,
              borderLeft: '4px solid ' + BLUE,
              borderRadius: '0 6px 6px 0',
              transition: 'box-shadow 0.2s',
              '&:hover': { boxShadow: '0 4px 16px rgba(0,0,0,0.06)' },
            }}
          >
            <Typography sx={{ fontWeight: 700, color: NAVY, mb: r.href ? 0.5 : 0 }}>{r.title}</Typography>
            {r.href && (
              <Box
                component="a"
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, color: BLUE, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                <OpenInNewIcon sx={{ fontSize: 14 }} /> {r.label}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
