'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

const partners = [
  {
    name: 'Японское общество сейсмоизоляции',
    tag: 'Япония',
    founded: '1993',
    desc: 'Организация основана в 1993 году. Деятельность направлена на продвижение технологий сейсмоизоляции зданий и сооружений. Сотрудничество охватывает обмен технологиями, совместные исследования и стандарты сейсмозащиты.',
  },
  {
    name: 'Ассоциация BuildingSMART',
    tag: 'Международная',
    founded: null,
    desc: 'Международная некоммерческая организация, разрабатывающая открытые стандарты обмена строительными данными (OpenBIM). Партнёрство с КазНИИСА способствует внедрению BIM-технологий в строительную отрасль Казахстана.',
  },
  {
    name: 'Кыргызский государственный университет строительства, транспорта и архитектуры',
    tag: 'Кыргызстан',
    founded: '1998',
    desc: 'Основан в 1998 году. Академическое сотрудничество в сфере строительства и архитектуры, совместные научные исследования, обмен опытом в области подготовки инженерных кадров.',
  },
  {
    name: 'Назарбаев Университет',
    tag: 'Казахстан',
    founded: '2010',
    desc: 'Создан в 2010 году как флагман высшего образования Республики Казахстан. Совместные научные проекты, подготовка кадров, развитие инновационных строительных технологий и академический обмен.',
  },
  {
    name: 'Государственный институт сейсмостойкого строительства и инновационных проектов',
    tag: 'СНГ',
    founded: null,
    desc: 'Головной институт в области сейсмостойкого строительства. Взаимодействие по вопросам разработки нормативно-технической базы, обмена научными данными и реализации совместных проектов.',
  },
  {
    name: 'НИИСФ РААСН',
    tag: 'Москва',
    founded: null,
    desc: 'Научно-исследовательский институт строительной физики Российской академии архитектуры и строительных наук (Москва). Сотрудничество в области строительной физики, тепловой защиты зданий и акустики.',
  },
];

export default function PartnersPage() {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, color: NAVY, mb: 1, fontFamily: '"Exo 2", sans-serif' }}
      >
        Партнёрские организации
      </Typography>
      <Box sx={{ width: 60, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 5 }}>
        КазНИИСА поддерживает долгосрочные партнёрства с ведущими научными, образовательными
        и профессиональными организациями в области строительства и архитектуры на международном
        уровне и в странах СНГ.
      </Typography>

      <Grid container spacing={3}>
        {partners.map((p, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Box
              sx={{
                p: 3,
                border: '1px solid #E2E8F0',
                borderRadius: 3,
                bgcolor: '#F8FAFC',
                height: '100%',
                boxSizing: 'border-box',
              }}
            >
              <Box sx={{ display: 'flex', gap: 1.5, mb: 2, flexWrap: 'wrap' }}>
                <Box
                  sx={{
                    px: 1.5,
                    py: 0.4,
                    bgcolor: NAVY,
                    borderRadius: 1,
                    display: 'inline-block',
                  }}
                >
                  <Typography
                    sx={{
                      color: '#fff',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      fontFamily: '"Exo 2", sans-serif',
                    }}
                  >
                    {p.tag}
                  </Typography>
                </Box>
                {p.founded && (
                  <Box
                    sx={{
                      px: 1.5,
                      py: 0.4,
                      bgcolor: `${AMBER}20`,
                      borderRadius: 1,
                      display: 'inline-block',
                    }}
                  >
                    <Typography sx={{ color: '#92400E', fontSize: '0.78rem', fontWeight: 600 }}>
                      осн. {p.founded}
                    </Typography>
                  </Box>
                )}
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: NAVY,
                  fontSize: '1rem',
                  mb: 1.5,
                  lineHeight: 1.4,
                  fontFamily: '"Exo 2", sans-serif',
                }}
              >
                {p.name}
              </Typography>
              <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
                {p.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 5 }} />

      <Box sx={{ bgcolor: NAVY, borderRadius: 3, p: 4 }}>
        <Typography
          sx={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.9 }}
        >
          Партнёрства КазНИИСА охватывают широкий спектр направлений: от сейсмостойкого
          строительства и BIM-технологий до академического обмена и совместных научных
          исследований. Институт открыт к новому сотрудничеству с организациями в области
          строительной науки и архитектуры.
        </Typography>
      </Box>
    </Box>
  );
}
