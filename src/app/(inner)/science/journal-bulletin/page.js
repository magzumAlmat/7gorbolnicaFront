'use client';
import { Typography, Box, Divider } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';
const TEXT = '#334155';

const editions = [
  { year: '2025', issues: ['Вестник КазНИИСА №1,2,3 (2025)'] },
  {
    year: '2024',
    issues: [
      'Вестник КазНИИСА №1,2,3 (2024)',
      'Вестник КазНИИСА №4,5,6 (2024)',
      'Вестник КазНИИСА №7,8,9 (2024)',
      'Вестник КазНИИСА №10,11,12 (2024)',
    ],
  },
  { year: '2023', issues: ['Архив выпусков 2023 года'] },
  { year: '2022', issues: ['Архив выпусков 2022 года'] },
  { year: '2021', issues: ['Архив выпусков 2021 года'] },
  { year: '2020', issues: ['Архив выпусков 2020 года'] },
  { year: '2019', issues: ['Архив выпусков 2019 года'] },
  { year: '2018', issues: ['Архив выпусков 2018 года'] },
  { year: '2017', issues: ['Архив выпусков 2017 года'] },
];

const sections = [
  'Сейсмостойкое строительство',
  'Информационные технологии',
  'Ценообразование в строительстве',
  'Стандартизация в строительстве',
];

export default function JournalBulletinPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Журнал «Вестник»
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 3 }}>
        Журнал «Вестник» АО «КазНИИСА» основан в 2011 году. В журнале публикуются результаты
        теоретических и экспериментальных исследований в области строительной науки. Издание
        выходит ежеквартально и включает рецензируемые научные статьи.
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
          «Основан в 2011 году. В журнале публикуются результаты теоретических и экспериментальных
          исследований в области строительной науки.»
        </Typography>
      </Box>

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Тематические разделы
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 4 }}>
        {sections.map((s) => (
          <Box component="li" key={s} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>{s}</Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 3 }}
      >
        Архив выпусков
      </Typography>

      {editions.map(({ year, issues }) => (
        <Box key={year} sx={{ mb: 3 }}>
          <Typography
            sx={{
              fontFamily: '"Exo 2", sans-serif',
              fontWeight: 700,
              color: AMBER,
              fontSize: '1.1rem',
              mb: 1,
            }}
          >
            {year}
          </Typography>
          <Box component="ul" sx={{ pl: 3, m: 0 }}>
            {issues.map((issue) => (
              <Box component="li" key={issue}>
                <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>
                  {issue}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}

      <Divider sx={{ mb: 4 }} />

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Требования к публикации
      </Typography>
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>
        Для авторов доступен документ «Требования к оформлению публикации в журнале «Вестник» АО
        «КазНИИСА»». За подробной информацией обращайтесь по адресу{' '}
        <Box
          component="a"
          href="mailto:info@kazniisa.kz"
          sx={{ color: AMBER, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
        >
          info@kazniisa.kz
        </Box>
        .
      </Typography>
    </Box>
  );
}
