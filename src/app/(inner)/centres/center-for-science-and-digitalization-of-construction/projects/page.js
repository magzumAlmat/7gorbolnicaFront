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
    title: 'Концепция внедрения ТИМСО в гражданское и промышленное строительство РК',
    desc: 'Разработка комплексной концепции поэтапного внедрения технологий информационного моделирования строительных объектов (ТИМСО/BIM) в практику проектирования, строительства и эксплуатации объектов гражданского и промышленного назначения Республики Казахстан.',
    status: 'В разработке',
    tags: ['BIM/ТИМСО', 'Нормативная база', 'Цифровизация'],
  },
  {
    title: 'Разработка межгосударственных стандартов BIM для стран СНГ',
    desc: 'Участие в подготовке проектов межгосударственных стандартов (ГОСТ) в области информационного моделирования совместно с национальными органами по стандартизации стран-участниц СНГ.',
    status: 'Совместный проект',
    tags: ['ГОСТ', 'Международное сотрудничество', 'BIM'],
  },
  {
    title: 'Цифровой мониторинг зданий и сооружений',
    desc: 'Исследование и апробация систем автоматизированного мониторинга технического состояния зданий и сооружений с применением IoT-датчиков и цифровых двойников.',
    status: 'Научное исследование',
    tags: ['Мониторинг', 'IoT', 'Цифровые двойники'],
  },
];

export default function ProjectsPage() {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        Проекты
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Центр науки и цифровизации строительства реализует научно-исследовательские и прикладные проекты
        в области цифровой трансформации строительной отрасли Казахстана.
      </Typography>

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
          Ключевое направление — внедрение технологий информационного моделирования (ТИМСО/BIM)
          в проектирование, строительство и эксплуатацию объектов на территории РК.
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
                <Box
                  sx={{
                    display: 'inline-block',
                    bgcolor: BLUE_LIGHT,
                    color: BLUE,
                    px: 1.5,
                    py: 0.3,
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    mb: 1.5,
                  }}
                >
                  {project.status}
                </Box>
                <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 1.5 }}>
                  {project.desc}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {project.tags.map((tag, j) => (
                    <Box
                      key={j}
                      sx={{
                        bgcolor: '#F1F5F9',
                        color: GRAY_TEXT,
                        px: 1.5,
                        py: 0.3,
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
          {i < PROJECTS.length - 1 && <Divider sx={{ mb: 4 }} />}
        </Box>
      ))}

      <Box sx={{ mt: 4 }}>
        <Link
          href="/centres/center-for-science-and-digitalization-of-construction"
          style={{
            color: NAVY,
            fontWeight: 700,
            fontSize: '0.9rem',
            textDecoration: 'none',
            borderBottom: '2px solid ' + BLUE,
            paddingBottom: 1,
          }}
        >
          ← Вернуться к Центру науки и цифровизации
        </Link>
      </Box>
    </Box>
  );
}
