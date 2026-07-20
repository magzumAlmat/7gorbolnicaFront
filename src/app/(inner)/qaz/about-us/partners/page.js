'use client';
import { Typography, Box, Grid } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const BORDER = '#E2E8F0';

const partners = [
  {
    name: 'Жапондық сейсмикалық оқшаулау қоғамы',
    tag: 'Жапония',
    founded: '1993',
    desc: 'Жапондық сейсмикалық оқшаулау қоғамы 1993 жылы сейсмикалық оқшаулауды ілгерілету мақсатында құрылды, бұл өз кезегінде өркендеген қоғамға әкелетін қауіпсіз және сапалы ғимараттар салуға ықпал етеді.',
    logo: null,
  },
  {
    name: 'BuildingSMART қауымдастығы',
    tag: 'Халықаралық',
    founded: null,
    desc: 'BuildingSMART қауымдастығы - бұл халықаралық ашық деректер алмасу стандарттарын (OpenBIM тәсіл) әзірлеу және бейімдеу арқылы күрделі нысандарды салу және пайдалану экономикасын трансформациялауды басқаратын халықаралық ұйым.',
    logo: '/images/kazniisa/partner-buildingsmart.webp',
  },
  {
    name: 'Н. Исанов атындағы Қырғыз мемлекеттік құрылыс, көлік және сәулет университеті',
    tag: 'Қырғызстан',
    founded: '1998',
    desc: 'Н. Исанов атындағы Қырғыз мемлекеттік құрылыс, көлік және сәулет университеті 1998 жылы Қырғыз Республикасы Президентінің УП-№ 11 Жарлығына сәйкес Қырғыз сәулет-құрылыс институты (ҚСҚИ) базасында құрылды.',
    logo: null,
  },
  {
    name: 'Назарбаев университеті',
    tag: 'Қазақстан',
    founded: '2010',
    desc: 'Нұрсұлтан Әбішұлы Назарбаевтың бастамасымен 2010 жылы құрылған Назарбаев Университеті халықаралық деңгейдегі зерттеу университеті болуға бағытталған елдегі жоғары білімнің флагманы болып табылады. Бұл қызметі автономия және академиялық еркіндік қағидаттарына негізделген Қазақстанның алғашқы университеті.',
    logo: null,
  },
  {
    name: 'Мемлекеттік сейсмикаға төзімді құрылыс және инженерлік жобалау институты',
    tag: 'ТМД',
    founded: null,
    desc: 'МСҚжИЖИ сейсмикаға төзімді құрылыс және инженерлік жобалау жөніндегі бас институт болып табылады: сейсмикаға төзімді құрылыстың теориялық зерттеулерін дамыту; сейсмикалық тәуекелді бағалау; құрылыс материалдарын, бұйымдары мен конструкцияларын әзірлеу саласындағы эксперименттік зерттеулер; сейсмикаға төзімді құрылыс бойынша нормативтік-техникалық базаны дамыту және жетілдіру, құрылыс және инженерлік жүйелер бойынша құрылыс нормалары мен ережелерін, стандарттарын, ұсынымдары мен нұсқаулықтарын әзірлеу.',
    logo: '/images/kazniisa/partner-minstroy-rf.webp',
  },
  {
    name: '«Ресей сәулет және құрылыс ғылымдары академиясының құрылыс физикасы ғылыми-зерттеу институты» (РСҚҒА ҚФҒЗИ)',
    tag: 'Мәскеу',
    founded: null,
    desc: 'Құрылыс министрлігінің университеті. Мекенжайы: 127238, Мәскеу қ., Локомотив өткелі, 21 үй. Сайт: www.niisf.org. Телефон: +7 (495) 5857320. E-mail: info@niisf.org.',
    logo: null,
  },
];

export default function PartnersPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Серіктестер
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box
        component="img"
        src="/images/kazniisa/partners-banner.webp"
        alt="Серіктестер"
        sx={{ width: '100%', maxHeight: 280, objectFit: 'cover', borderRadius: 2, mb: 3 }}
      />

      <Grid container spacing={3}>
        {partners.map((p, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Box
              sx={{
                p: 3,
                border: '1px solid ' + BORDER,
                borderRadius: '6px',
                bgcolor: GRAY_BG,
                height: '100%',
                boxSizing: 'border-box',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
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
                      bgcolor: BLUE_LIGHT,
                      borderRadius: 1,
                      display: 'inline-block',
                    }}
                  >
                    <Typography sx={{ color: BLUE, fontSize: '0.78rem', fontWeight: 600 }}>
                      негізі — {p.founded}
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
                }}
              >
                {p.name}
              </Typography>
              <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
                {p.desc}
              </Typography>
              {p.logo && (
                <Box
                  component="img"
                  src={p.logo}
                  alt={p.name}
                  sx={{ height: 48, objectFit: 'contain', mt: 2, display: 'block' }}
                />
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
