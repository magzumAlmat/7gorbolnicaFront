'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';
import Link from 'next/link';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

const CENTRES = [
  {
    num: '01',
    title: 'Центр сейсмостойкости, обследования зданий и сооружений',
    desc: 'Проводит техническое обследование существующих зданий и сооружений, оценку их сейсмостойкости, сейсмическую паспортизацию объектов. Выполняет структурные расчёты, испытания строительных материалов и конструкций, разрабатывает мероприятия по усилению и реконструкции.',
    href: '/centres/center-for-seismic-resistance-inspection-of-buildings-and-structures',
  },
  {
    num: '02',
    title: 'Центр типового и индивидуального проектирования',
    desc: 'Разрабатывает типовые проекты жилых и общественных зданий, ведёт архив типовых проектных решений 2010–2016 годов. Выполняет индивидуальное проектирование по заказу государственных органов и частных застройщиков с учётом требований казахстанских нормативных документов.',
    href: '/centres/center-for-standard-and-individual-design',
  },
  {
    num: '03',
    title: 'Центр науки и цифровизации строительства',
    desc: 'Занимается внедрением технологий информационного моделирования (BIM/ТИМСО) в строительную отрасль Казахстана. Разрабатывает стандарты и методические рекомендации по цифровой трансформации, реализует научно-исследовательские проекты в области цифрового строительства.',
    href: '/centres/center-for-science-and-digitalization-of-construction',
  },
  {
    num: '04',
    title: 'Корпоративный университет',
    desc: 'Обеспечивает профессиональную подготовку и повышение квалификации специалистов строительной отрасли. Реализует 7 учебных курсов, проводит аттестацию инженерно-технических работников. Занятия проходят 3–4 раза в месяц в очном и дистанционном форматах.',
    href: '/centres/corporate-university',
  },
  {
    num: '05',
    title: 'Центр нормирования в строительстве',
    desc: 'Разрабатывает и актуализирует нормативно-технические документы в сфере строительства, формирует сметные нормативы и ресурсные показатели. Ведёт систематический мониторинг цен на строительные материалы, изделия и конструкции по регионам Казахстана.',
    href: '/centres/center-for-regulation-in-construction',
  },
  {
    num: '06',
    title: 'Центр научных исследований',
    desc: 'Выполняет фундаментальные и прикладные научные исследования в области строительства и архитектуры. Осуществляет экспертизу проектной документации, научное сопровождение строительных проектов, подготовку научных заключений и независимую оценку технических решений.',
    href: '/centres',
  },
];

export default function CentresOverview() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          fontFamily: '"Exo 2", sans-serif',
          fontWeight: 800,
          color: NAVY,
          mb: 1,
        }}
      >
        Центры компетенций
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 2 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4, maxWidth: 760 }}>
        АО «КазНИИСА» объединяет шесть специализированных центров, которые обеспечивают полный цикл
        научного, нормативного и практического сопровождения строительной отрасли Республики Казахстан.
        Каждый центр ведёт самостоятельную научную и производственную деятельность в своей области компетенций.
      </Typography>

      <Box
        sx={{
          borderLeft: '4px solid #F59E0B',
          pl: 3,
          py: 2,
          bgcolor: '#FAFAFA',
          mb: 5,
          fontStyle: 'italic',
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          КазНИИСА — ведущая научно-исследовательская организация строительной отрасли Казахстана.
          Все шесть центров работают в едином научном и нормативном пространстве, обеспечивая
          синергию экспертизы, исследований, проектирования и образования.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {CENTRES.map((c, i) => (
          <Grid item xs={12} key={i}>
            <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 }, alignItems: 'flex-start' }}>
              <Typography
                sx={{
                  fontFamily: '"Exo 2", sans-serif',
                  fontWeight: 800,
                  fontSize: '2.5rem',
                  color: AMBER,
                  lineHeight: 1,
                  minWidth: 52,
                  flexShrink: 0,
                }}
              >
                {c.num}
              </Typography>
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Exo 2", sans-serif',
                    fontWeight: 700,
                    color: NAVY,
                    mb: 1,
                    lineHeight: 1.35,
                  }}
                >
                  {c.title}
                </Typography>
                <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 1.5 }}>
                  {c.desc}
                </Typography>
                <Link
                  href={c.href}
                  style={{
                    color: NAVY,
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    borderBottom: `2px solid ${AMBER}`,
                    paddingBottom: 1,
                  }}
                >
                  Подробнее о центре →
                </Link>
              </Box>
            </Box>
            {i < CENTRES.length - 1 && <Divider sx={{ mt: 3 }} />}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
