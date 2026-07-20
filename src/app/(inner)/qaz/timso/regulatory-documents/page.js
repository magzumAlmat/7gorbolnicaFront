'use client';
import { Typography, Box } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';
const TEXT = '#334155';

const docs2017_2018 = [
  { code: '—', title: 'Концепция', href: 'https://drive.google.com/file/d/1lu5o987CaRyHkRjJrrOvd3tVZNNyBv5o/view?usp=sharing' },
  { code: 'РДС РК 1.02-04-2018', title: '', href: 'https://drive.google.com/open?id=1jaQdrSqbBoXlEWm6lVznz3udKtcrv1yC' },
  { code: 'СП РК 1.02-111-2017', title: 'Применение информационного моделирования в проектной организации', href: 'https://drive.google.com/open?id=1MaGqPKN5qUfyRY55nVeCqdII4E8DcW8d' },
  { code: 'СП РК 1.02-112-2018', title: 'Жизненный цикл строительных объектов. Часть 1', href: 'https://drive.google.com/open?id=1rfIYziRKWyy6ETYYduOZI7QexN_ydEWu' },
  { code: 'СП РК 1.02-113-2018', title: 'Жизненный цикл строительных объектов. Часть 2', href: 'https://drive.google.com/open?id=1dlfGswdsYSxGO7S87M4BzM07V1kKdUne' },
  { code: 'СП РК 1.02-114-2018', title: 'Жизненный цикл строительных объектов. Часть 3', href: 'https://drive.google.com/open?id=1FYacgv7AzjD_cqGlgffz45r6zBx6AbVG' },
  { code: 'СП РК 1.02-115-2018', title: 'Правила организации совместного создания информации о строительстве', href: 'https://drive.google.com/open?id=1RYC6LHRGyxR6Ew6P4St-WViP_DDJpQHV' },
  { code: 'СП РК 1.02-116-2018', title: 'Требования к оформлению проектной документации', href: 'https://drive.google.com/open?id=10dw4NU530LW1vi51r8sRkxv9VVyWrbmn' },
  { code: 'СП РК 1.02-117-2018', title: 'Порядок проведения экспертизы информационных моделей', href: 'https://drive.google.com/open?id=1Ix20Hufw5BTtnFTqsSUxXds8NHsNpkca' },
];

const docs2019 = [
  { code: 'СП РК', title: 'Жизненный цикл строительных объектов. Часть 4. Требования к моделям на стадии строительства', href: 'https://docs.google.com/document/d/1YiCppfGBPEdXiJnCfe6mj9tiJCqUjOGvdh0XR1gxNTo/edit' },
  { code: 'СП РК', title: 'Жизненный цикл строительных объектов. Часть 5. Требования к моделям на стадии эксплуатации', href: 'https://docs.google.com/document/d/1kFGhGQoleYowix98fkLdVY3-f5OAb4cNTlK9wBh0i4M/edit' },
  { code: 'СП РК', title: 'Применение информационного моделирования в строительной организации', href: 'https://docs.google.com/document/d/1_Ic6u-STvslKSmkOrCjZN39xqHArIfx2nd5FDt8J2oc/edit' },
  { code: 'СП РК', title: 'Применение информационного моделирования в эксплуатирующей организации', href: 'https://docs.google.com/document/d/1MB0kYyHDVo6FqHke9cJE2yf4naFF_nkULMmG_aIsf2s/edit' },
  { code: '—', title: 'ТИМСО (BIM)-ориентированный классификатор в объеме, предусмотренном на 2018 год', href: 'https://drive.google.com/open?id=1X2UPxzdKo6NloXH_PphLGO7cQy6_aJMx' },
  { code: '—', title: 'АО НЦГНТЭ', href: 'https://drive.google.com/open?id=1SO-wN17cVkDtcmG3OAtiHaPVP5i4PLIv' },
  { code: '—', title: 'Отчет о НИР по разработке ТЗ для ГБИМ', href: 'https://drive.google.com/open?id=1RubLREsPSD6gti4nuyC_wz6c_GyOD5QS' },
];

function DocTable({ docs }) {
  return (
    <Box sx={{ overflowX: 'auto', mb: 4 }}>
      <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
        <Box component="thead">
          <Box component="tr" sx={{ bgcolor: NAVY }}>
            {['Белгіленуі', 'Құжат атауы', ''].map((h) => (
              <Box component="th" key={h || 'link'} sx={{ p: 1.5, textAlign: 'left', color: '#fff', fontWeight: 700, borderBottom: '2px solid ' + BLUE }}>
                {h}
              </Box>
            ))}
          </Box>
        </Box>
        <Box component="tbody">
          {docs.map((row, i) => (
            <Box component="tr" key={i} sx={{ bgcolor: i % 2 === 0 ? GRAY_BG : '#fff', '&:hover': { bgcolor: BLUE_LIGHT } }}>
              <Box component="td" sx={{ p: 1.5, color: BLUE, fontWeight: 600, whiteSpace: 'nowrap', verticalAlign: 'top' }}>
                {row.code}
              </Box>
              <Box component="td" sx={{ p: 1.5, color: TEXT }}>
                {row.title}
              </Box>
              <Box component="td" sx={{ p: 1.5, verticalAlign: 'top' }}>
                <Box
                  component="a"
                  href={row.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: BLUE, display: 'inline-flex', alignItems: 'center', gap: 0.5, fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, '&:hover': { textDecoration: 'underline' } }}
                >
                  <OpenInNewIcon sx={{ fontSize: 14 }} /> Ашу
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default function RegulatoryDocumentsPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Нормативтік құжаттар
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 3 }}>
        Қазақстан Республикасы Инвестициялар және даму министрінің 2017 жылғы 11 сәуірдегі
        № 197 бұйрығымен (2018 жылғы 27 ақпандағы №139 бұйрығымен енгізілген өзгерістермен)
        бекітілген «Құрылыс объектілерін жобалау кезінде ақпараттық модельдеу технологиясын
        (BIM-технологиялар) енгізу жөніндегі іс-шаралар жоспарын» іске асыру шеңберінде
        2017-2018 жылдар кезеңінде әзірленді және бекітілді:
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, fontStyle: 'italic', mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>
          Байланыстар: 3 шағынауданы 44а Алматы қ. — тел. +7 727 226 94 10 (вн. 118) —
          e-mail:{' '}
          <Box component="a" href="mailto:akim@kazniisa.kz" sx={{ color: BLUE, fontStyle: 'normal', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            akim@kazniisa.kz
          </Box>
        </Typography>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 2 }}>
        2017–2018 жылдар кезеңінде әзірленген құжаттар
      </Typography>
      <DocTable docs={docs2017_2018} />

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 2 }}>
        2019 жылы әзірленген құжаттар
      </Typography>
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 3 }}>
        В 2019 году Центром информационного моделирования АО «КазНИИСА» были разработаны и
        утверждены следующие нормативные технические документы:
      </Typography>
      <DocTable docs={docs2019} />
    </Box>
  );
}
