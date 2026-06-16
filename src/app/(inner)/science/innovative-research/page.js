'use client';
import { Typography, Box } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';
const TEXT = '#334155';

const markerTypes = [
  { type: 'Газ', color: 'Жёлтый', freq: '83,0 кГц' },
  { type: 'Электро', color: 'Красный', freq: '169,8 кГц' },
  { type: 'Телеком', color: 'Оранжевый', freq: '101,4 кГц' },
  { type: 'Общ. назначение', color: 'Пурпурный', freq: '66,35 кГц' },
  { type: 'Вода', color: 'Синий', freq: '145,7 кГц' },
  { type: 'Канализация', color: 'Зелёный', freq: '121,6 кГц' },
  { type: 'Каб. ТВ', color: 'Оранжевый + чёрный', freq: '77,0 кГц' },
];

export default function InnovativeResearchPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Инновационные исследования
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 3 }}>
        По договору № 1558 от 29 декабря 2015 года выполнено инновационное исследование на тему
        «Провести исследования и разработать руководство по закладке электронных маркёров на
        трассах подземных коммуникаций различного назначения и приёмке трасс подземных
        коммуникаций по электронным маркёрам».
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 4 }}>
        Разработано «Руководство по закладке электронных маркёров на трассах подземных
        коммуникаций различного назначения и приёмке построенных трасс подземных коммуникаций по
        электронным маркёрам» с применением инновационных решений 3M. Руководство охватывает
        фундаментальные принципы установки электронных маркёров для обеспечения надёжной
        идентификации подземных коммуникаций.
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        3M™ 1421 XRiD — Электронные маркёры
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 3 }}>
        Программируемый маркёр со встроенной памятью. Предназначен для облегчения
        поиска и идентификации инфраструктуры инженерных коммуникаций в колодцах, муфтах,
        поворотах трасс и пересечениях. Интеллектуальные маркёры позволяют предварительно
        записывать и считывать информацию (до 192 бит) об объекте, включая наименование и
        принадлежность.
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        Типы маркёров по виду коммуникаций (стандарт APWA)
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box sx={{ overflowX: 'auto', mb: 4 }}>
        <Box
          component="table"
          sx={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}
        >
          <Box component="thead">
            <Box component="tr" sx={{ bgcolor: NAVY }}>
              {['Тип коммуникации', 'Цвет маркёра', 'Резонансная частота'].map((h) => (
                <Box
                  component="th"
                  key={h}
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
                  {row.color}
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
        1420E EMS ID — Локатор маркёров
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>
        Прибор предназначен для определения местоположения подземных коммуникаций, оснащённых
        электронными маркёрами. Отличается лёгкостью, надёжностью и интуитивно понятным меню с
        высококонтрастным подсвеченным дисплеем. Обеспечивает точное обнаружение пассивных и
        интеллектуальных маркёров 3M, а также определение глубины их залегания.
      </Typography>
    </Box>
  );
}
