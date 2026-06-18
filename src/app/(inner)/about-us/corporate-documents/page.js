'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PublicDownloadList from '../../../../components/PublicDownloadList';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const categories = [
  {
    title: 'Правила организации',
    items: [
      { name: 'Устав АО «КазНИИСА»' },
      { name: 'Политика управления рисками' },
      { name: 'Правила идентификации и оценки рисков' },
    ],
  },
  {
    title: 'Приказы и кодексы',
    items: [
      { name: 'Кодекс корпоративного управления' },
      { name: 'Документ о взаимодействии структурных подразделений' },
      { name: 'Кодекс корпоративной этики' },
      { name: 'Листы ознакомления с документами' },
    ],
  },
  {
    title: 'Управление вознаграждениями',
    items: [
      { name: 'Положение о вознаграждениях членам Совета директоров' },
    ],
  },
  {
    title: 'Раскрытие информации',
    items: [
      { name: 'Постановление НБ РК №189 от 27.08.2018' },
      { name: 'Данные об аффилированных лицах' },
      { name: 'Информация о вознаграждении руководства' },
      { name: 'Структура уставного капитала' },
      { name: 'Уведомление о результатах электронного отчёта' },
    ],
  },
  {
    title: 'Свидетельства и сертификаты',
    items: [
      { name: 'Сертификат уровня корпоративного управления' },
      { name: 'Независимая оценка корпоративного управления' },
      { name: 'Сертификат о прохождении обучения по трудовому законодательству (2021)' },
    ],
  },
  {
    title: 'Финансовые отчёты',
    items: [
      { name: 'Аудиторский отчёт 2024' },
      { name: 'Аудиторский отчёт 2023' },
      { name: 'Аудиторское заключение 2022' },
      { name: 'Бухгалтерский баланс 2024' },
      { name: 'Годовой отчёт 2024' },
      { name: 'Годовой отчёт 2023' },
      { name: 'Годовой отчёт 2022' },
      { name: 'Годовой отчёт 2021' },
      { name: 'Годовой отчёт 2020' },
      { name: 'Годовой отчёт 2019' },
      { name: 'Годовой отчёт 2018' },
      { name: 'Финансовые отчёты 2016–2017' },
    ],
  },
  {
    title: 'Планирование и закупки',
    items: [
      { name: 'План развития на 2025 год' },
      { name: 'Календарь корпоративных событий' },
      { name: 'Информация о закупочной деятельности' },
      { name: 'Презентация АО «КазНИИСА»' },
    ],
  },
];

export default function CorporateDocumentsPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Корпоративные документы
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Корпоративная документация АО «КазНИИСА» систематизирована по категориям в соответствии
        с требованиями законодательства Республики Казахстан об акционерных обществах и раскрытии
        информации эмитентами ценных бумаг.
      </Typography>

      <Box sx={{
        bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE,
        borderRadius: '0 6px 6px 0', p: 3, mb: 5, fontStyle: 'italic',
      }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          Раскрытие информации осуществляется в соответствии с Постановлением Национального банка РК
          №189 от 27.08.2018 и действующим законодательством об акционерных обществах.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {categories.map((cat, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Box sx={{
              p: 3, border: '1px solid ' + BORDER, borderRadius: '6px', bgcolor: GRAY_BG,
              height: '100%', boxSizing: 'border-box',
              transition: 'box-shadow 0.2s ease, transform 0.2s ease',
              '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2, pb: 1.5, borderBottom: '2px solid ' + BLUE }}>
                <DescriptionIcon sx={{ color: BLUE, fontSize: 20 }} />
                <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem' }}>{cat.title}</Typography>
                <Typography sx={{ ml: 'auto', fontSize: '0.72rem', color: GRAY_TEXT, fontWeight: 600 }}>
                  {cat.items.length}
                </Typography>
              </Box>
              {cat.items.map((item, j) => (
                <Box key={j} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.2 }}>
                  <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: BLUE, mt: '9px', flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>
                    {item.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 5 }} />

      <Box sx={{ bgcolor: NAVY, borderRadius: '6px', p: 4 }}>
        <Typography sx={{ fontWeight: 700, color: BLUE_LIGHT, fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: 1, mb: 1.5 }}>
          Запрос документов
        </Typography>
        <Typography sx={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.9 }}>
          Для получения копий корпоративных документов обращайтесь к корпоративному
          секретарю АО «КазНИИСА» — Суханкулов Нуркен Кунанбаевич,
          тел. +7 701 747 68 30, email: nsukhankulov@mail.ru
        </Typography>
      </Box>

      <PublicDownloadList endpoint="/api/corporate-documents/public" heading="Документы для скачивания" />
    </Box>
  );
}
