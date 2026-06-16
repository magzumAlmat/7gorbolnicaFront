'use client';
import { Typography, Box, Grid } from '@mui/material';
import Link from 'next/link';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const sections = [
  {
    title: 'Инновационные исследования',
    href: '/science/research',
    desc: 'Разработки в области сейсмостойкого строительства, новые технологии мониторинга и маркирования подземных коммуникаций.',
  },
  {
    title: 'Вестник КазНИИСА',
    href: '/science/vestnik',
    desc: 'Научный журнал, издаётся с 2011 года. Публикует теоретические и экспериментальные исследования по строительству и сейсмологии.',
  },
  {
    title: 'Учёный совет',
    href: '/science/council',
    desc: 'Коллегиальный орган научного руководства института, рассматривающий ключевые исследовательские программы.',
  },
  {
    title: 'Учёный секретарь',
    href: '/science/secretary',
    desc: 'Координация научной деятельности, подготовка материалов Учёного совета и организационная поддержка исследований.',
  },
];

export default function SciencePage() {
  return (
    <Box>
      <Box
        component="img"
        src="/images/kazniisa/logo.webp"
        alt="КазНИИСА"
        sx={{ height: 56, objectFit: 'contain', mb: 2, display: 'block' }}
      />
      <Typography variant="h3" sx={{ fontWeight: 800, color: NAVY, mb: 0 }}>
        Научная деятельность
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        Казахский научно-исследовательский институт строительства и архитектуры (КазНИИСА) ведёт
        фундаментальные и прикладные исследования в области сейсмостойкого строительства,
        нормирования, ценообразования и информационных технологий в строительной отрасли Казахстана.
        Институт является центром научной компетенции для разработки государственных строительных
        норм и стандартов.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          КазНИИСА регулярно выпускает сборники научных трудов по проблемам сейсмостойкого
          строительства. В сборниках публикуются результаты экспериментальных исследований,
          теоретические разработки и практические рекомендации по проектированию зданий и
          сооружений в сейсмически активных зонах Казахстана.
        </Typography>
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Разделы научной деятельности
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Grid container spacing={3}>
        {sections.map((s) => (
          <Grid item xs={12} sm={6} key={s.href}>
            <Link href={s.href} style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid ' + BORDER,
                  borderTop: '3px solid ' + BLUE,
                  borderRadius: '6px',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                  '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
                  cursor: 'pointer',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, mb: 1 }}>
                  {s.title}
                </Typography>
                <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{s.desc}</Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
