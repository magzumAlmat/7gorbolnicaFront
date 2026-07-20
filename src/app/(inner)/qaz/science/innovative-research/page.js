'use client';
import { Typography, Box } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const GRAY_BG = '#F8FAFC';
const TEXT = '#334155';

const markerTypes = [
  { type: 'Газ', note: 'Қызғылт сары. + қара — Желтый', freq: '83,0 кГц' },
  { type: 'Электро', note: 'Қызғылт сары. + қара — Красный', freq: '169,8 кГц' },
  { type: 'Телеком', note: 'Қызғылт сары. + қара — Оранжевый', freq: '101,4 кГц' },
  { type: 'Жалпы тағ.', note: 'Қызғылт сары. + қара — Пурпурный', freq: '66,35 кГц' },
  { type: 'Су', note: 'Қызғылт сары. + қара — Синий', freq: '145,7 кГц' },
  { type: 'Кәріз', note: 'Қызғылт сары. + қара — Зеленый', freq: '121,6 кГц' },
  { type: 'Каб. ТВ', note: 'Қызғылт сары. + қара — Оранж. + черный', freq: '77,0 кГц' },
];

export default function InnovativeResearchPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Инновациялық зерттеулер
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 3 }}>
        2015 жылғы 29 желтоқсандағы № 1558 шарт бойынша «Әртүрлі мақсаттағы жерасты
        коммуникацияларының трассаларында электрондық маркерлерді салу және электрондық
        маркерлер бойынша жерасты коммуникацияларының трассаларын қабылдау бойынша зерттеулер
        жүргізу және нұсқаулық әзірлеу» тақырыбында инновациялық зерттеу орындалды.
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 4 }}>
        3М фирмасының инновациялық шешімін енгізу мақсатында «ҚазҚСҒЗИ» АҚ кез келген жерасты
        коммуникацияларын сенімді сәйкестендіру мақсатында электрондық маркерлерді салу
        жөніндегі негізгі ережелер баяндалған «Әртүрлі мақсаттағы жерасты коммуникацияларының
        трассаларына электрондық маркерлерді салу және электрондық маркерлер бойынша салынған
        жерасты коммуникацияларының трассаларын қабылдау жөніндегі нұсқаулық» әзірленді.
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        3M™ 1421 XRiD - Қолдану саласы
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 3 }}>
        Ұңғымалар, муфталар, трассаның бұрылыстары орнатылған жерлерде және коммуникациялар
        арқылы өтетін өткелдерде пайдаланылатын трассаны анықтауды (табуды) жеңілдетуге
        арналған.
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 4 }}>
        Зияткерлік маркерлердің ерекшелігі - объект туралы ақпаратты (192 битке дейін)
        алдын-ала жазу және оқу мүмкіндігі (атауы, тиесілігі және т.б.).
      </Typography>

      <Box sx={{ overflowX: 'auto', mb: 4 }}>
        <Box
          component="table"
          sx={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}
        >
          <Box component="thead">
            <Box component="tr" sx={{ bgcolor: NAVY }}>
              {['', 'Қаптаманың түсі (APWA стандарты)', 'Резонансная частота (стандарт APWA)'].map((h, i) => (
                <Box
                  component="th"
                  key={i}
                  sx={{
                    p: 1.5,
                    textAlign: 'left',
                    color: '#fff',
                    fontWeight: 700,
                    borderBottom: '2px solid ' + BLUE,
                  }}
                >
                  {h}
                </Box>
              ))}
            </Box>
          </Box>
          <Box component="tbody">
            {markerTypes.map((row, i) => (
              <Box
                component="tr"
                key={row.type}
                sx={{ bgcolor: i % 2 === 0 ? GRAY_BG : '#fff' }}
              >
                <Box component="td" sx={{ p: 1.5, color: TEXT, fontWeight: 600 }}>
                  {row.type}
                </Box>
                <Box component="td" sx={{ p: 1.5, color: TEXT }}>
                  {row.note}
                </Box>
                <Box component="td" sx={{ p: 1.5, color: TEXT }}>
                  {row.freq}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        1420E EMS ID
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>
        Электрондық маркерлер орнатылған жағдайда жерасты коммуникацияларының орналасқан жерін
        анықтауға арналған. Интуитивті мәзірі және жарықтандырылған жоғары ажыратымдылықтағы
        дисплейі бар жеңіл, берік, сенімді құрылғы. Пассивті және интеллектуалды 3M маркерлерін
        және олардың пайда болу тереңдігін дәл анықтауға мүмкіндік береді.
      </Typography>
    </Box>
  );
}
