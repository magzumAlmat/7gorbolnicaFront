'use client';
import { Typography, Box, Grid } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';

export default function EurocodePage() {
  return (
    <Box>
      <Box
        component="img"
        src="/images/kazniisa/eagle-sun.svg"
        alt="Герб Казахстана"
        sx={{ width: 80, height: 80, mb: 2, display: 'block' }}
      />
      <Typography variant="h3" sx={{ fontWeight: 800, color: NAVY, mb: 0 }}>
        Еврокодтар
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          2020 жылдан бастап Қазақстан Еурокод (ҚР ЕЖ ЕN) жаңа нормативтік техникалық базасына
          көшті.
        </Typography>
      </Box>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        Еурокодтар - бұл азаматтық мақсаттағы ғимараттар мен құрылыстарды жобалауға арналған
        Еуропалық техникалық стандарттар. Оларды соңғы 30 жыл ішінде Еуропалық стандарттау
        ұйымы (European Committee for Standardisation) әзірледі. Стандарттарға құрылымдардың
        барлық түрлеріне қойылатын талаптар кіреді: болат, темірбетон, ағаш, кірпіш және
        алюминий.
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        Қазақстан Республикасының Еурокодтарға көшуі құрылыс саласын ескірген
        нормативтік-техникалық базаны реформалаумен үйлестіру жолымен еуропалық және әлемдік
        жүйелермен интеграциялау қажеттілігіне байланысты:
      </Typography>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Қазақстанда Еурокодтарды қолдану мақсаттары
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
      <Box component="ul" sx={{ pl: 3, m: 0, mb: 4 }}>
        {[
          'Құрылыс конструкцияларының қауіпсіздігін, пайдалану жарамдылығын және ұзақ мерзімділігін қамтамасыз ету.',
          'ҚР бәсекеге қабілеттілігін арттыру үшін құрылыс саласындағы жұмыс қағидаттарын жетілдіру және олардың әлемдік стандарттарға сәйкестігі.',
          'Ғимараттар мен құрылыстарды пайдалану қауіпсіздігін қамтамасыз ету жөніндегі талаптарға ғана бағдарлануға, ал қалғандарында заманауи құрылыс шешімдерін өз қалауы бойынша пайдалануға, инновациялар мен жаңа материалдарды енгізуге мүмкіндік беретін параметрлік нормалау әдісін қолдану.',
          'Басқа елдердің құрылыс саласындағы мамандармен жұмыс істеу процесін жеңілдету және шығындарды азайту.',
        ].map((r, i) => (
          <Box component="li" key={i} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{r}</Typography>
          </Box>
        ))}
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Бақылау
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        Еурокодтар әлемнің 45-тен астам елі мойындаған және қолданатын әмбебап, икемді
        прогрессивті нормалар болып табылады.
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          {
            title: 'Әмбебаптық',
            desc: '- ғимараттар мен құрылыстардың барлық түрлерінің тірек конструкцияларын, жүктемелер мен әсерлердің барлық түрлерінің әсеріне, олардың комбинациялық жағдайлары мен комбинацияларына есептеу үшін қолданылады.',
          },
          {
            title: 'Икемділік',
            desc: '– все страны могут применять с учетом своих национальных особенностей - барлық елдер өздерінің ұлттық ерекшеліктерін (табиғи-климаттық, сейсмологиялық, инженерлік-геологиялық, техникалық және экономикалық даму деңгейі және т.б.) ескере отырып, ұлттық қосымшаларды әзірлеу және қабылдау арқылы қолдана алады.',
          },
          {
            title: 'Прогрессивтілік',
            desc: '– әлемнің дамыған елдерінің озық ғылыми-техникалық жетістіктерін қамтиды, үнемі жаңартылып отырады, инновацияларды, ғылыми зерттеулер мен конструкторлық әзірлемелердің нәтижелерін жедел енгізуге мүмкіндік береді, ғылыми зерттеулерді ынталандырады.',
          },
        ].map((c) => (
          <Grid item xs={12} sm={4} key={c.title}>
            <Box sx={{ borderLeft: '4px solid ' + BLUE, bgcolor: BLUE_LIGHT, borderRadius: '0 6px 6px 0', pl: 2, py: 1.5, height: '100%', transition: 'box-shadow 0.2s ease, transform 0.2s ease', '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' } }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem', mb: 0.5 }}>{c.title}</Typography>
              <Typography sx={{ fontSize: '0.97rem', lineHeight: 1.8, color: '#334155' }}>{c.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          2016 жылы «ҚазҚСҒЗИ» АҚ өкілдері СEN ТК 250 «Құрылыс еурокодтары» және СEN /ТК 340
          «Антисейсмикалық құрылғыларға» бақылаушы ретінде енгізілді.
        </Typography>
      </Box>
    </Box>
  );
}
