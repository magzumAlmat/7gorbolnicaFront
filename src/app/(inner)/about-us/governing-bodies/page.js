'use client';
import {
  Typography,
  Box,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

const board = [
  {
    name: 'Бесимбаев Ерик Турашович',
    role: 'Председатель Совета директоров',
    since: '29.07.2024',
    note: 'Профессор КазНИТУ, род. 22.11.1958',
    chair: true,
  },
  {
    name: 'Рысдавлетов Мурат Булатович',
    role: 'Заместитель председателя Комитета строительства',
    since: '12.02.2026',
    note: 'Род. 30.09.1982',
    chair: false,
  },
  {
    name: 'Карибаева Мамыр Куанышовна',
    role: 'Главный эксперт',
    since: '29.07.2024',
    note: 'Род. 31.08.1970',
    chair: false,
  },
  {
    name: 'Кульбаев Бегман Бахитович',
    role: 'Генеральный директор АО «КазНИИСА»',
    since: '29.07.2024',
    note: 'Род. 10.01.1982',
    chair: false,
  },
  {
    name: 'Есенова Куралай Еркебековна',
    role: 'Независимый директор',
    since: '29.07.2024',
    note: 'Род. 21.04.1971',
    chair: false,
  },
  {
    name: 'Сатжанов Кенжебай Сатжанович',
    role: 'Представитель акционера',
    since: '29.07.2024',
    note: 'Род. 19.08.1955',
    chair: false,
  },
];

export default function GoverningBodiesPage() {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, color: NAVY, mb: 1, fontFamily: '"Exo 2", sans-serif' }}
      >
        Органы управления
      </Typography>
      <Box sx={{ width: 60, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 4 }} />

      {/* Единственный акционер */}
      <Box
        sx={{
          p: 3,
          border: `2px solid ${AMBER}`,
          borderRadius: 3,
          bgcolor: `${AMBER}08`,
          mb: 5,
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            color: AMBER,
            fontSize: '0.82rem',
            textTransform: 'uppercase',
            letterSpacing: 1,
            mb: 1,
            fontFamily: '"Exo 2", sans-serif',
          }}
        >
          Единственный акционер — 100% акций
        </Typography>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontWeight: 600 }}>
          Комитет по делам строительства и жилищно-коммунального хозяйства Министерства
          промышленности и строительства Республики Казахстан
        </Typography>
      </Box>

      {/* Совет директоров */}
      <Typography
        variant="h6"
        sx={{ fontWeight: 700, color: NAVY, mb: 2.5, fontFamily: '"Exo 2", sans-serif' }}
      >
        Совет директоров
      </Typography>

      <Box sx={{ overflowX: 'auto', mb: 5 }}>
        <Table sx={{ minWidth: 500 }}>
          <TableBody>
            <TableRow sx={{ bgcolor: NAVY }}>
              <TableCell sx={{ color: '#fff', fontWeight: 700, fontFamily: '"Exo 2", sans-serif', fontSize: '0.9rem', py: 1.5 }}>
                №
              </TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 700, fontFamily: '"Exo 2", sans-serif', fontSize: '0.9rem', py: 1.5 }}>
                ФИО
              </TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 700, fontFamily: '"Exo 2", sans-serif', fontSize: '0.9rem', py: 1.5 }}>
                Должность / роль
              </TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 700, fontFamily: '"Exo 2", sans-serif', fontSize: '0.9rem', py: 1.5 }}>
                В составе с
              </TableCell>
            </TableRow>
            {board.map((m, i) => (
              <TableRow
                key={i}
                sx={{
                  bgcolor: m.chair ? `${AMBER}12` : i % 2 === 0 ? '#F8FAFC' : '#fff',
                }}
              >
                <TableCell sx={{ color: '#334155', fontSize: '1rem', py: 1.5, fontWeight: m.chair ? 700 : 400 }}>
                  {i + 1}
                </TableCell>
                <TableCell sx={{ color: NAVY, fontSize: '1rem', lineHeight: 1.6, py: 1.5, fontWeight: m.chair ? 700 : 600 }}>
                  {m.name}
                  <Typography component="div" sx={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 400 }}>
                    {m.note}
                  </Typography>
                </TableCell>
                <TableCell sx={{ color: '#334155', fontSize: '1rem', lineHeight: 1.6, py: 1.5 }}>
                  {m.role}
                </TableCell>
                <TableCell sx={{ color: '#334155', fontSize: '1rem', py: 1.5 }}>
                  {m.since}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      <Divider sx={{ mb: 5 }} />

      {/* Руководство */}
      <Typography
        variant="h6"
        sx={{ fontWeight: 700, color: NAVY, mb: 2.5, fontFamily: '"Exo 2", sans-serif' }}
      >
        Исполнительное руководство
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 5 }}>
        {[
          { label: 'Генеральный директор', value: 'Кульбаев Бегман Бахитович', note: 'в должности с 19.09.2017' },
          { label: 'Управляющий директор по производству', value: 'Шокбаров Ералы Мейрамбекович', note: '' },
          { label: 'Управляющий директор по развитию и цифровизации', value: 'Шахнович Александр Юльевич', note: '' },
          { label: 'Корпоративный секретарь-омбудсмен', value: 'Суханкулов Нуркен Кунанбаевич', note: '' },
          { label: 'Внутренний аудитор', value: 'Ермекбаев Берик Серикович', note: 'тел. 226-94-10, +7 778 705 43 65' },
        ].map((row, i) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 0.5, sm: 3 },
              alignItems: 'baseline',
              borderBottom: '1px solid #E2E8F0',
              pb: 1.5,
            }}
          >
            <Typography
              sx={{
                color: '#64748B',
                fontSize: '0.88rem',
                minWidth: { sm: 280 },
                flexShrink: 0,
              }}
            >
              {row.label}
            </Typography>
            <Box>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem', lineHeight: 1.6 }}>
                {row.value}
              </Typography>
              {row.note && (
                <Typography sx={{ color: '#64748B', fontSize: '0.82rem' }}>{row.note}</Typography>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
