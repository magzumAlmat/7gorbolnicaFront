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

const vacancies = [
  {
    title: 'Юрисконсульт',
    address: '3 мкр 44-а, Алматы',
    department: 'Отдел правовой и кадровой работы',
    date: '3 декабря 2025',
  },
  {
    title: 'Главный специалист сектора закупок',
    address: '3 мкр 44-а, Алматы',
    department: 'Сектор закупок',
    date: '22 апреля 2025',
  },
  {
    title: 'Специалист по охране труда',
    address: '3 мкр 44-а, Алматы',
    department: 'Проектный офис',
    date: '21 апреля 2025',
  },
  {
    title: 'Ассистент системного администратора',
    address: '3 мкр 44-а, Алматы',
    department: 'АХО',
    date: '24 февраля 2025',
  },
];

export default function VacanciesPage() {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, color: NAVY, mb: 1, fontFamily: '"Exo 2", sans-serif' }}
      >
        Вакансии
      </Typography>
      <Box sx={{ width: 60, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        АО КазНИИСА всегда ищет талантливых людей. Мы понимаем, что продуктивные люди
        являются хорошим дополнением нашей команды. Если вы хотите работать в одной из
        ведущих научных организаций строительной отрасли Казахстана — рассмотрите открытые
        вакансии ниже и направьте своё резюме в отдел кадров.
      </Typography>

      <Typography
        variant="h6"
        sx={{ fontWeight: 700, color: NAVY, mb: 2.5, fontFamily: '"Exo 2", sans-serif' }}
      >
        Открытые позиции
      </Typography>

      <Box sx={{ overflowX: 'auto', mb: 5 }}>
        <Table sx={{ minWidth: 600 }}>
          <TableBody>
            <TableRow sx={{ bgcolor: NAVY }}>
              <TableCell sx={{ color: '#fff', fontWeight: 700, fontFamily: '"Exo 2", sans-serif', fontSize: '0.9rem', py: 1.5 }}>
                Должность
              </TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 700, fontFamily: '"Exo 2", sans-serif', fontSize: '0.9rem', py: 1.5 }}>
                Адрес
              </TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 700, fontFamily: '"Exo 2", sans-serif', fontSize: '0.9rem', py: 1.5 }}>
                Подразделение
              </TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 700, fontFamily: '"Exo 2", sans-serif', fontSize: '0.9rem', py: 1.5 }}>
                Дата публикации
              </TableCell>
            </TableRow>
            {vacancies.map((v, i) => (
              <TableRow
                key={i}
                sx={{ bgcolor: i % 2 === 0 ? '#F8FAFC' : '#fff', '&:hover': { bgcolor: `${AMBER}10` } }}
              >
                <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontWeight: 600, py: 1.5 }}>
                  {v.title}
                </TableCell>
                <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', py: 1.5 }}>
                  {v.address}
                </TableCell>
                <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', py: 1.5 }}>
                  {v.department}
                </TableCell>
                <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', py: 1.5 }}>
                  {v.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box sx={{ bgcolor: NAVY, borderRadius: 3, p: 4 }}>
        <Typography
          sx={{
            color: '#CBD5E1',
            fontSize: '1rem',
            lineHeight: 1.9,
            mb: 1.5,
          }}
        >
          По вопросам трудоустройства обращайтесь в отдел правовой и кадровой работы АО «КазНИИСА».
        </Typography>
        <Typography sx={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.9 }}>
          Адрес:{' '}
          <Box component="span" sx={{ color: AMBER, fontWeight: 600 }}>
            г. Алматы, 3 мкр, д. 44-а
          </Box>
          {'  '}|{'  '}
          Тел.:{' '}
          <Box component="span" sx={{ color: AMBER, fontWeight: 600 }}>
            +7 (727) 291-87-99
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}
