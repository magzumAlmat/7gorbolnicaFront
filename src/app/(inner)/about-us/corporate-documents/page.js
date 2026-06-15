'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

const categories = [
  {
    title: 'Правила организации',
    items: [
      'Устав АО «КазНИИСА»',
      'Политика управления рисками',
      'Правила идентификации рисков',
    ],
  },
  {
    title: 'Приказы',
    items: [
      'Кодекс корпоративного управления',
      'О некоторых вопросах взаимодействия',
      'Кодекс корпоративной этики',
    ],
  },
  {
    title: 'Управление',
    items: [
      'Положение о вознаграждениях членам Совета директоров',
      'Правила разработки внутренних документов',
    ],
  },
  {
    title: 'Раскрытие информации',
    items: [
      'Постановление НБ РК от 27.08.2018',
      'Аффилированные лица',
      'Информация о вознаграждении руководства',
      'Структура уставного капитала',
    ],
  },
  {
    title: 'Свидетельства и сертификаты',
    items: [
      'Свидетельство уровня корпоративного управления',
      'Независимая оценка управления',
      'Сертификат согласительной комиссии (16.06.2021)',
    ],
  },
  {
    title: 'Финансовые отчёты',
    items: [
      'Аудиторский отчёт 2024',
      'Баланс 2024',
      'Аудиторские заключения 2022–2023',
      'Годовые отчёты 2018–2024',
    ],
  },
];

export default function CorporateDocumentsPage() {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, color: NAVY, mb: 1, fontFamily: '"Exo 2", sans-serif' }}
      >
        Корпоративные документы
      </Typography>
      <Box sx={{ width: 60, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 3 }} />

      <Box
        component="img"
        src="/images/kazniisa/corporate-docs-banner.jpg"
        alt="Корпоративные документы КазНИИСА"
        sx={{ width: '100%', maxHeight: 280, objectFit: 'cover', borderRadius: 2, mb: 3 }}
      />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 5 }}>
        Корпоративная документация АО «КазНИИСА» систематизирована по категориям в соответствии
        с требованиями законодательства Республики Казахстан об акционерных обществах и раскрытии
        информации эмитентами ценных бумаг.
      </Typography>

      <Grid container spacing={3}>
        {categories.map((cat, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Box
              sx={{
                p: 3,
                border: '1px solid #E2E8F0',
                borderRadius: 3,
                bgcolor: '#F8FAFC',
                height: '100%',
                boxSizing: 'border-box',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 2,
                  pb: 1.5,
                  borderBottom: `2px solid ${AMBER}`,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: NAVY,
                    fontSize: '1rem',
                    fontFamily: '"Exo 2", sans-serif',
                  }}
                >
                  {cat.title}
                </Typography>
              </Box>
              {cat.items.map((item, j) => (
                <Box
                  key={j}
                  sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.2 }}
                >
                  <Box
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      bgcolor: AMBER,
                      mt: '9px',
                      flexShrink: 0,
                    }}
                  />
                  <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 5 }} />

      <Box sx={{ bgcolor: NAVY, borderRadius: 3, p: 4 }}>
        <Typography
          sx={{
            fontWeight: 700,
            color: AMBER,
            fontSize: '0.88rem',
            textTransform: 'uppercase',
            letterSpacing: 1,
            mb: 1.5,
            fontFamily: '"Exo 2", sans-serif',
          }}
        >
          Запрос документов
        </Typography>
        <Typography sx={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.9 }}>
          Для получения копий корпоративных документов обращайтесь к корпоративному
          секретарю АО «КазНИИСА». Раскрытие информации осуществляется в соответствии
          с Постановлением Национального банка РК от 27.08.2018 и действующим
          законодательством об акционерных обществах.
        </Typography>
      </Box>
    </Box>
  );
}
