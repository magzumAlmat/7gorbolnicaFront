'use client';
import { Typography, Box, Grid, Divider, Table, TableBody, TableCell, TableRow } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

const principles = [
  'Нулевая терпимость к коррупционным проявлениям в любой форме',
  'Прозрачность при принятии управленческих и финансовых решений',
  'Соблюдение Закона Республики Казахстан «О противодействии коррупции» от 18 ноября 2015 года № 410-V',
  'Конфиденциальность обращений и защита лиц, сообщивших о нарушениях',
  'Независимость и беспристрастность при рассмотрении жалоб и обращений',
  'Регулярное обучение сотрудников антикоррупционным стандартам и нормам этики',
  'Проведение внутреннего мониторинга и аудита коррупционных рисков',
];

const ethicsValues = [
  {
    title: 'Честность',
    desc: 'Правдивость и открытость в профессиональной деятельности, отчётности и коммуникациях.',
  },
  {
    title: 'Прозрачность',
    desc: 'Открытость процессов принятия решений, закупок и распределения ресурсов.',
  },
  {
    title: 'Ответственность',
    desc: 'Соблюдение обязательств перед государством, партнёрами и обществом.',
  },
  {
    title: 'Профессионализм',
    desc: 'Высокое качество работы, непрерывное развитие и соблюдение норм деловой этики.',
  },
];

export default function AntiCorruptionPage() {
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
        Противодействие коррупции
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 2 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3, maxWidth: 760 }}>
        АО «КазНИИСА» проводит активную политику противодействия коррупции. Институт реализует
        комплекс организационных, правовых и воспитательных мер в соответствии с Законом
        Республики Казахстан «О противодействии коррупции» от 18 ноября 2015 года № 410-V.
        Руководство института обеспечивает неотвратимость ответственности за любые коррупционные
        проявления со стороны сотрудников или третьих лиц.
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
          Если вы стали свидетелем коррупционного правонарушения или столкнулись с требованием
          взятки — немедленно сообщите об этом через горячую линию. Анонимность и
          конфиденциальность каждого обращения гарантируются.
        </Typography>
      </Box>

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Горячая линия для анонимных обращений
      </Typography>

      <Table size="small" sx={{ maxWidth: 600, mb: 5, '& td': { border: 'none', py: 0.8, px: 0 } }}>
        <TableBody>
          <TableRow>
            <TableCell sx={{ width: 180, color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
              Телефон горячей линии
            </TableCell>
            <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontWeight: 700 }}>
              <a href="tel:87272269410" style={{ color: NAVY, textDecoration: 'none' }}>
                8 (727) 226 94 10
              </a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
              Режим работы
            </TableCell>
            <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              Пн–Пт: 9:00 – 18:30
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
              Письменное обращение
            </TableCell>
            <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              г. Алматы, 3 микрорайон, 44А — с пометкой «Антикоррупция»
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Divider sx={{ mb: 4 }} />

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Комплаенс-офицер / Внутренний аудитор
      </Typography>

      <Table size="small" sx={{ maxWidth: 600, mb: 5, '& td': { border: 'none', py: 0.8, px: 0 } }}>
        <TableBody>
          <TableRow>
            <TableCell sx={{ width: 180, color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
              ФИО
            </TableCell>
            <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontWeight: 600 }}>
              Ермекбаев Берик Серикович
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
              Должность
            </TableCell>
            <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              Внутренний аудитор
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
              Телефон
            </TableCell>
            <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              <a href="tel:87272269410" style={{ color: NAVY, textDecoration: 'none', fontWeight: 600 }}>
                226-94-10
              </a>
              {' / '}
              <a href="tel:+77787054365" style={{ color: NAVY, textDecoration: 'none', fontWeight: 600 }}>
                +7 778 705 43 65
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Divider sx={{ mb: 4 }} />

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Принципы антикоррупционной политики
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 5 }}>
        {principles.map((p, i) => (
          <Box key={i} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
            <Box
              sx={{
                mt: '10px',
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: AMBER,
                flexShrink: 0,
              }}
            />
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              {p}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Нормативные документы
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Антикоррупционная деятельность института регулируется следующими документами:
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 5 }}>
        {[
          'Закон Республики Казахстан «О противодействии коррупции» от 18 ноября 2015 года № 410-V',
          'Кодекс корпоративной этики АО «КазНИИСА»',
          'Антикоррупционная политика института',
          'Положение о конфликте интересов',
          'Правила внутреннего трудового распорядка (раздел «Этика»)',
          'Порядок рассмотрения обращений о коррупционных правонарушениях',
        ].map((doc, i) => (
          <Box key={i} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
            <Box
              sx={{
                mt: '10px',
                width: 8,
                height: 8,
                borderRadius: 0,
                bgcolor: AMBER,
                flexShrink: 0,
              }}
            />
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              {doc}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Кодекс корпоративной этики
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3, maxWidth: 760 }}>
        Кодекс корпоративной этики АО «КазНИИСА» устанавливает единые стандарты поведения для всех
        сотрудников института. Он определяет ценности, которыми руководствуются работники в
        профессиональной деятельности, и закрепляет механизмы предотвращения конфликта интересов.
      </Typography>

      <Grid container spacing={3}>
        {ethicsValues.map((v, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Box sx={{ borderLeft: '3px solid #F59E0B', pl: 2, py: 1 }}>
              <Typography
                sx={{
                  fontFamily: '"Exo 2", sans-serif',
                  fontWeight: 700,
                  color: NAVY,
                  fontSize: '1rem',
                  mb: 0.5,
                }}
              >
                {v.title}
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>
                {v.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
