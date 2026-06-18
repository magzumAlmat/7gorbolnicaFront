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
    title: 'Приказы',
    items: [
      { name: 'Кодекс корпоративного управления АО «КазНИИСА»' },
      { name: 'О некоторых вопросах взаимодействия' },
      { name: 'Кодекс корпоративной этики' },
      { name: 'Лист ознакомление' },
    ],
  },
  {
    title: 'Положение о вознаграждениях членам Совета директоров АО «КазНИИСА»',
    items: [
      { name: 'Положение о вознаграждениях членам Совета директоров АО «КазНИИСА»' },
    ],
  },
  {
    title: 'Правила разработки внутренних документов АО «КазНИИСА»',
    items: [
      { name: 'Правила разработки внутренних документов АО «КазНИИСА»' },
    ],
  },
  {
    title: 'Раскрытие информации',
    items: [
      { name: 'Постановление Правления Национального Банка Республики Казахстан от 27 августа 2018 года №189' },
      { name: 'Аффилированные лица АО «КазНИИСА»' },
      { name: 'Раскрытие информации о вознаграждении членов Совета директоров и исполнительного органа АО' },
      { name: 'Структура уставного капитала АО «КазНИИСА»' },
      { name: 'Уведомление №4648 о результатах обработки электронного отчета' },
    ],
  },
  {
    title: 'Свидетельства',
    items: [
      { name: 'Свидетельство уровня корпоративного управления' },
      { name: 'Независимая оценка корпоративного управления' },
    ],
  },
  {
    title: 'Сертификаты',
    items: [
      { name: 'Сертификат АО «Казахский научно-исследовательский и проектный институт строительства и архитектуры» о прохождении согласительной комиссии ежегодного обучения по применению трудового законодательства Республики Казахстан, развитию навыков ведения переговоров и достижения консенсуса в трудовых спорах от 16 июня 2021 года' },
    ],
  },
  {
    title: 'Аудиторские отчеты',
    items: [
      { name: 'Аудиторский отчет за 2024' },
      { name: 'Бухгалтерский баланс отчетный период 2024 г.' },
      { name: 'Об утверждении годовой финансовой отчетности и распределения чистого дохода акционерного общества за 2024 год' },
      { name: 'Приказ об утверждении годовой финансовой отчетности и распределении чистого дохода акционерного общества за 2021 г' },
      { name: 'Бухгалтерский баланс отчетный период 2021г' },
      { name: 'Финансовый отчет и аудиторское заключение за 2021г' },
      { name: 'Аудиторское заключение за 2022 год' },
      { name: 'Аудиторское заключение за 2023 год' },
    ],
  },
  {
    title: 'План развития',
    items: [
      { name: 'План развития 2025' },
      { name: 'ПР отчет 2024 рус.' },
      { name: 'ПР есеп 2024 каз.' },
    ],
  },
  {
    title: 'Годовой отчет',
    items: [
      { name: 'Годовой отчет АО «КазНИИСА» за 2024 год' },
      { name: 'Годовой отчет АО «КазНИИСА» за 2023 год' },
      { name: 'Годовой отчет АО «КазНИИСА» за 2022 год' },
      { name: 'Годовой отчет АО «КазНИИСА» за 2021 год' },
      { name: 'Годовой отчет АО «КазНИИСА» за 2020 год' },
      { name: 'Годовой отчет АО «КазНИИСА» за 2019 год' },
      { name: 'Годовой отчет АО «КазНИИСА» за 2018 год' },
    ],
  },
  {
    title: 'Финансовые отчеты за период 2017 года',
    items: [
      { name: 'Отчетный период 2017г.' },
      { name: 'Годовой отчет АО «КазНИИСА» за 2017 год' },
    ],
  },
  {
    title: 'Финансовые отчеты за период 2016 года',
    items: [
      { name: 'Отчет об изменениях в капитале' },
      { name: 'Отчет о прибылях и убытках' },
      { name: 'Отчет о движении денежных средств (прямой метод)' },
      { name: 'Бухгалтерский баланс' },
    ],
  },
  {
    title: 'Календарь корпоративных событий АО «КазНИИСА»',
    items: [
      { name: 'Календарь корпоративных событий АО «КазНИИСА»' },
    ],
  },
  {
    title: 'Информация о закупочной деятельности АО «КазНИИСА»',
    items: [
      { name: 'Закупочная деятельность АО «КазНИИСА»' },
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
