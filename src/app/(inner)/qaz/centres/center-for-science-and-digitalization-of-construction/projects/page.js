'use client';
import { Typography, Box, Divider } from '@mui/material';
import Link from 'next/link';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const PROJECTS = [
  {
    title: 'Қазақстан Республикасының азаматтық және өнеркәсіптік құрылысына ҚОАМТ енгізу тұжырымдамасының жобасы',
  },
];

export default function ProjectsPage() {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        Жобалар
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box
        sx={{
          bgcolor: BLUE_LIGHT,
          borderLeft: '4px solid ' + BLUE,
          borderRadius: '0 6px 6px 0',
          p: 3,
          mb: 5,
          fontStyle: 'italic',
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          Ұсыныстар мен пікірлерді тіркелген пайдаланушылардан онлайн қабылдауға болады немесе кері байланыс
          формасын пайдалануға болады.
        </Typography>
      </Box>

      {PROJECTS.map((project, i) => (
        <Box key={i}>
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', mb: 1.5 }}>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: '2rem',
                  color: BLUE,
                  lineHeight: 1,
                  minWidth: 40,
                  flexShrink: 0,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </Typography>
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, color: NAVY, mb: 0.5, lineHeight: 1.35 }}
                >
                  {project.title}
                </Typography>
              </Box>
            </Box>
          </Box>
          {i < PROJECTS.length - 1 && <Divider sx={{ mb: 4 }} />}
        </Box>
      ))}

      <Box sx={{ bgcolor: '#F8FAFC', borderRadius: '6px', p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem', mb: 1 }}>
          Кері байланыс
        </Typography>
        <Typography sx={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#334155' }}>
          Сұрақтарыңызға жауап таппаған болсаңыз, кері байланыс формасы арқылы сұрауыңызға болады.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Link
          href="/qaz/centres/center-for-science-and-digitalization-of-construction"
          style={{
            color: NAVY,
            fontWeight: 700,
            fontSize: '0.9rem',
            textDecoration: 'none',
            borderBottom: '2px solid ' + BLUE,
            paddingBottom: 1,
          }}
        >
          ← Орталықтар
        </Link>
      </Box>
    </Box>
  );
}
