'use client';
import { Typography, Box, Divider } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';
const TEXT = '#334155';

const docs2017_2018 = [
  { code: '—', title: 'Концепция внедрения технологии информационного моделирования в строительстве' },
  { code: 'РДС РК 1.02-04-2018', title: 'Руководящий документ по BIM' },
  { code: 'СП РК 1.02-111-2017', title: 'Применение информационного моделирования в проектных организациях' },
  { code: 'СП РК 1.02-112-2018', title: 'Жизненный цикл объектов строительства. Часть 1' },
  { code: 'СП РК 1.02-113-2018', title: 'Жизненный цикл объектов строительства. Часть 2' },
  { code: 'СП РК 1.02-114-2018', title: 'Жизненный цикл объектов строительства. Часть 3' },
  { code: 'СП РК 1.02-115-2018', title: 'Правила организации совместного создания строительной информации' },
  { code: 'СП РК 1.02-116-2018', title: 'Требования к оформлению проектной документации' },
  { code: 'СП РК 1.02-117-2018', title: 'Порядок экспертизы информационных моделей' },
];

const docs2019 = [
  { code: 'СП РК', title: 'Жизненный цикл объектов строительства. Часть 4. Требования к моделям стадии строительства' },
  { code: 'СП РК', title: 'Жизненный цикл объектов строительства. Часть 5. Требования к моделям стадии эксплуатации' },
  { code: 'СП РК', title: 'Применение информационного моделирования в строительных организациях' },
  { code: 'СП РК', title: 'Применение информационного моделирования в эксплуатирующих организациях' },
  { code: '—', title: 'Классификатор ТИМСО (BIM-ориентированный, объём 2018 г.)' },
  { code: '—', title: 'Доклад Национального центра' },
  { code: '—', title: 'Отчёт по исследованию разработки государственных BIM-спецификаций' },
];

function DocTable({ docs }) {
  return (
    <Box sx={{ overflowX: 'auto', mb: 4 }}>
      <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
        <Box component="thead">
          <Box component="tr" sx={{ bgcolor: NAVY }}>
            {['Обозначение', 'Наименование документа'].map((h) => (
              <Box
                component="th"
                key={h}
                sx={{
                  p: 1.5,
                  textAlign: 'left',
                  color: '#fff',
                  fontFamily: '"Exo 2", sans-serif',
                  fontWeight: 700,
                  borderBottom: `2px solid ${AMBER}`,
                }}
              >
                {h}
              </Box>
            ))}
          </Box>
        </Box>
        <Box component="tbody">
          {docs.map((row, i) => (
            <Box component="tr" key={i} sx={{ bgcolor: i % 2 === 0 ? '#F8FAFC' : '#fff' }}>
              <Box component="td" sx={{ p: 1.5, color: AMBER, fontWeight: 600, whiteSpace: 'nowrap', verticalAlign: 'top' }}>
                {row.code}
              </Box>
              <Box component="td" sx={{ p: 1.5, color: TEXT }}>
                {row.title}
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
      <Typography
        variant="h3"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Нормативные документы
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 3 }}>
        АО «КазНИИСА» реализовало «План по внедрению технологии информационного моделирования
        (BIM) при проектировании объектов строительства», утверждённый приказом Министерства от
        11 апреля 2017 года (№ 197, изменён приказом № 139 от 27 февраля 2018 года). В рамках
        Плана разработан комплекс нормативных документов, регламентирующих применение BIM-
        технологий на всех стадиях жизненного цикла объектов строительства.
      </Typography>

      <Box
        sx={{
          borderLeft: '4px solid #F59E0B',
          pl: 3,
          py: 2,
          bgcolor: '#FAFAFA',
          fontStyle: 'italic',
          mb: 4,
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>
          Контактное лицо: ул. 3 Микрорайон, 44А, Алматы — тел. +7-727-226-94-10 (доб. 118) —
          e-mail:{' '}
          <Box
            component="a"
            href="mailto:akim@kazniisa.kz"
            sx={{ color: AMBER, fontStyle: 'normal', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
          >
            akim@kazniisa.kz
          </Box>
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 3 }}
      >
        Документы, разработанные в 2017–2018 годах
      </Typography>
      <DocTable docs={docs2017_2018} />

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 3 }}
      >
        Документы, разработанные в 2019 году
      </Typography>
      <DocTable docs={docs2019} />
    </Box>
  );
}
