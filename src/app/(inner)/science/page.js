'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';
import Link from 'next/link';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

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
      <Typography variant="h3" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 0 }}>
        Научная деятельность
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, mt: 1, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        Казахский научно-исследовательский институт строительства и архитектуры (КазНИИСА) ведёт
        фундаментальные и прикладные исследования в области сейсмостойкого строительства,
        нормирования, ценообразования и информационных технологий в строительной отрасли Казахстана.
        Институт является центром научной компетенции для разработки государственных строительных
        норм и стандартов.
      </Typography>

      <Box sx={{ borderLeft: '4px solid #F59E0B', pl: 3, py: 2, bgcolor: '#FAFAFA', mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          КазНИИСА регулярно выпускает сборники научных трудов по проблемам сейсмостойкого
          строительства. В сборниках публикуются результаты экспериментальных исследований,
          теоретические разработки и практические рекомендации по проектированию зданий и
          сооружений в сейсмически активных зонах Казахстана.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 3 }}>
        Разделы научной деятельности
      </Typography>

      <Grid container spacing={3}>
        {sections.map((s) => (
          <Grid item xs={12} sm={6} key={s.href}>
            <Link href={s.href} style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  border: `1px solid #E2E8F0`,
                  borderTop: `3px solid ${AMBER}`,
                  transition: 'border-color 0.2s',
                  '&:hover': { borderColor: NAVY, borderTopColor: AMBER },
                  cursor: 'pointer',
                }}
              >
                <Typography variant="h6" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 1 }}>
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
