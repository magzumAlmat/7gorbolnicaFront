'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';
import Link from 'next/link';
import ImageLightbox, { useImageLightbox } from '../../../components/ImageLightbox';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

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
  const { lightbox, openLightbox, closeLightbox } = useImageLightbox();

  return (
    <Box>
      <ImageLightbox {...lightbox} onClose={closeLightbox} />

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Центры компетенций
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box
        component="img"
        src="/images/kazniisa/centres-banner.webp"
        alt="Центры компетенций КазНИИСА"
        onClick={() => openLightbox('/images/kazniisa/centres-banner.webp', 'Центры компетенций КазНИИСА')}
        sx={{ width: '100%', maxWidth: 600, borderRadius: 1, mb: 3, display: 'block', cursor: 'zoom-in' }}
      />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4, maxWidth: 760 }}>
        АО «КазНИИСА» объединяет шесть специализированных центров, которые обеспечивают полный цикл
        научного, нормативного и практического сопровождения строительной отрасли Республики Казахстан.
        Каждый центр ведёт самостоятельную научную и производственную деятельность в своей области компетенций.
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
                  fontWeight: 800,
                  fontSize: '2.5rem',
                  color: BLUE,
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
                    borderBottom: `2px solid ${BLUE}`,
                    paddingBottom: 1,
                  }}
                >
                  Подробнее о центре →
                </Link>
              </Box>
            </Box>
            {c.num === '03' && (
              <Box
                component="img"
                src="/images/kazniisa/center-bim.webp"
                alt="Центр науки и цифровизации"
                onClick={() => openLightbox('/images/kazniisa/center-bim.webp', 'Центр науки и цифровизации')}
                sx={{ width: '100%', maxWidth: 500, borderRadius: 1, mt: 2, display: 'block', cursor: 'zoom-in' }}
              />
            )}
            {i < CENTRES.length - 1 && <Divider sx={{ mt: 3 }} />}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
