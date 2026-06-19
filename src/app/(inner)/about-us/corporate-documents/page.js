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
      { name: 'Устав АО «КазНИИСА»', url: 'https://drive.google.com/file/d/1TqO_gzzZjtQsDcf_bdDnwmiR9VU7Jl54/view?usp=sharing' },
      { name: 'Политика управления рисками', url: 'https://drive.google.com/file/d/17qc3-cTRM5nBVEQO90ka0BTXZxzoAL-n/view?usp=sharing' },
      { name: 'Правила идентификации и оценки рисков', url: 'https://drive.google.com/file/d/1q8CJiJBblarhaTPn_iV8C8IXpJ-Tn6s6/view?usp=sharing' },
    ],
  },
  {
    title: 'Приказы',
    items: [
      { name: 'Кодекс корпоративного управления АО «КазНИИСА»', url: 'https://drive.google.com/drive/folders/1IhmXYq65oMBf5Gfp1QIXKvF2Oy3eiU59?usp=sharing' },
      { name: 'О некоторых вопросах взаимодействия', url: 'https://drive.google.com/file/d/1M273zZXsjUEoggrv6kTjCY1FNLZHM9QE/view?usp=sharing' },
      { name: 'Кодекс корпоративной этики', url: 'https://drive.google.com/drive/folders/12Wpoher5M3iu4Qjr-Uu0yAR02PhbyDDG?usp=sharing' },
      { name: 'Лист ознакомление', url: 'https://drive.google.com/drive/folders/1OS-vrvlPegU45h_xU7CHXpq42logzjjt?usp=sharing' },
    ],
  },
  {
    title: 'Положение о вознаграждениях членам Совета директоров АО «КазНИИСА»',
    items: [
      { name: 'Положение о вознаграждениях членам Совета директоров АО «КазНИИСА»', url: 'https://drive.google.com/file/d/16kRQJftUXJgINGWSZX944tz-FTEGPXSY/view?usp=sharing' },
    ],
  },
  {
    title: 'Правила разработки внутренних документов АО «КазНИИСА»',
    items: [
      { name: 'Правила разработки внутренних документов АО «КазНИИСА»', url: 'https://drive.google.com/file/d/0B9cipw9EHHhlaXFmSGVKS0ZpUG8/view?usp=sharing' },
    ],
  },
  {
    title: 'Раскрытие информации',
    items: [
      { name: 'Постановление Правления Национального Банка Республики Казахстан от 27 августа 2018 года №189', url: 'https://drive.google.com/file/d/1U5hkVetKHvKTP83ohuaeS0i3uHzVIefZ/view?usp=sharing' },
      { name: 'Аффилированные лица АО «КазНИИСА»', url: 'https://drive.google.com/file/d/1fyCdsdzu_t4CAi3cNKaZvbTPucejnX0h/view?usp=sharing' },
      { name: 'Раскрытие информации о вознаграждении членов Совета директоров и исполнительного органа АО', url: 'https://drive.google.com/file/d/1Iiu8xFVwGNdZvkmZBUzyHZWZ7FO5I6vi/view?usp=sharing' },
      { name: 'Структура уставного капитала АО «КазНИИСА»', url: 'https://drive.google.com/file/d/1CpkyHh89ZABEo-Uylo5H0zkkgW3FI_9i/view?usp=sharing' },
      { name: 'Уведомление №4648 о результатах обработки электронного отчета', url: 'https://drive.google.com/file/d/1ahCOgTvZoEzhb_GfnVU_EC_EfM5j6KE1/view?usp=sharing' },
    ],
  },
  {
    title: 'Свидетельства',
    items: [
      { name: 'Свидетельство уровня корпоративного управления', url: 'https://drive.google.com/file/d/1fAV00oGx_06BjKB5psFHfS5-jPHtgfqd/view?usp=sharing' },
      { name: 'Независимая оценка корпоративного управления', url: 'https://drive.google.com/drive/folders/1XjDKPhcenwn40GGj-v5EZvzZvrBqxe0C?usp=sharing' },
    ],
  },
  {
    title: 'Сертификаты',
    items: [
      { name: 'Сертификат АО «Казахский научно-исследовательский и проектный институт строительства и архитектуры» о прохождении согласительной комиссии ежегодного обучения по применению трудового законодательства Республики Казахстан, развитию навыков ведения переговоров и достижения консенсуса в трудовых спорах от 16 июня 2021 года', url: 'https://drive.google.com/file/d/1VbAwK96aPu8x5AQV-s7hWm7ROHPDMQbV/view?usp=sharing' },
    ],
  },
  {
    title: 'Аудиторские отчеты',
    items: [
      { name: 'Аудиторский отчет за 2024', url: 'https://drive.google.com/drive/folders/1cZQYVRTyk94FMEMuwbcwjPDRJKjOT-Rj?usp=sharing' },
      { name: 'Бухгалтерский баланс отчетный период 2024 г.', url: 'https://drive.google.com/drive/folders/1tn7hRvUuKNaJdaIFO4_fqC0cZwmp1EO8?usp=sharing' },
      { name: 'Об утверждении годовой финансовой отчетности и распределения чистого дохода акционерного общества за 2024 год', url: 'https://drive.google.com/file/d/1qo9RMs8uKY4cuCuuGr0joj9JbVNOnum-/view?usp=sharing' },
      { name: 'Приказ об утверждении годовой финансовой отчетности и распределении чистого дохода акционерного общества за 2021 г', url: 'https://drive.google.com/file/d/13xk2HGkc5F2sgSFEozDgXvm02PV8N-ot/view?usp=sharing' },
      { name: 'Бухгалтерский баланс отчетный период 2021г', url: 'https://drive.google.com/file/d/1GbLg5swSuUTQXHuJeU3z5jECOAOPqmwS/view?usp=sharing' },
      { name: 'Финансовый отчет и аудиторское заключение за 2021г', url: 'https://drive.google.com/file/d/1vjpj4sBoix24pSYa8Z6MHByqnPy8B5Y-/view?usp=sharing' },
      { name: 'Аудиторское заключение за 2022 год', url: 'https://drive.google.com/file/d/1FenfAexeBMF1WWMg8TDNAKvxNYADRc-R/view?usp=sharing' },
      { name: 'Аудиторское заключение за 2023 год', url: 'https://drive.google.com/drive/folders/1w2jiX_DCqk9ZbfiXIMXDlWqaSVCMc28k?usp=sharing' },
    ],
  },
  {
    title: 'План развития',
    items: [
      { name: 'План развития 2025', url: 'https://drive.google.com/file/d/1Kg58w5idqAPZXnBrFUGmZFJ6F0FWOuLM/view?usp=sharing' },
      { name: 'ПР отчет 2024 рус.', url: 'https://kazniisa.kz/wp-content/uploads/2025/11/Скан-ПР-отчет-2024-рус-1.pdf' },
      { name: 'ПР есеп 2024 каз.', url: 'https://kazniisa.kz/wp-content/uploads/2025/11/Скан-ПР-есеп-2024-каз-1.pdf' },
    ],
  },
  {
    title: 'Годовой отчет',
    items: [
      { name: 'Годовой отчет АО «КазНИИСА» за 2024 год', url: 'https://drive.google.com/file/d/1TvSuAZ_IaJU7lr0wIQU2xQeQsfSfnV3m/view?usp=sharing' },
      { name: 'Годовой отчет АО «КазНИИСА» за 2023 год', url: 'https://drive.google.com/file/d/1akvT4MrE1H4z5xxw7I6azE5u0fnsN2Rm/view?usp=sharing' },
      { name: 'Годовой отчет АО «КазНИИСА» за 2022 год', url: 'https://drive.google.com/drive/folders/1S7lBzlcu1VXPOTo7ZJ3UtXn2Dv68fSkV?usp=sharing' },
      { name: 'Годовой отчет АО «КазНИИСА» за 2021 год', url: 'https://drive.google.com/file/d/1bsZeh-Zl5rpRmloaF9Zg26LvVZhfpaFs/view?usp=sharing' },
      { name: 'Годовой отчет АО «КазНИИСА» за 2020 год', url: 'https://drive.google.com/file/d/1oFVBb91NZekFYZaRUpIwdBn88nsInw8b/view?usp=sharing' },
      { name: 'Годовой отчет АО «КазНИИСА» за 2019 год', url: 'https://drive.google.com/file/d/1_aRSPFAbAYsTKh3GLfvAz6AuLk4CXPRH/view?usp=sharing' },
      { name: 'Годовой отчет АО «КазНИИСА» за 2018 год', url: 'https://drive.google.com/open?id=1GeByvCezZhlQm3JyhgSnVXmz51EOHwhK' },
    ],
  },
  {
    title: 'Финансовые отчеты за период 2017 года',
    items: [
      { name: 'Отчетный период 2017г.', url: 'https://drive.google.com/open?id=1GqqkYb6bLiP2caNpmxJEyUG7_qnrR_Ir' },
      { name: 'Годовой отчет АО «КазНИИСА» за 2017 год', url: 'https://www.dropbox.com/s/jrx5aogev4rp5da/%D0%93%D0%BE%D0%B4%D0%BE%D0%B2%D0%BE%D0%B9%20%D0%BE%D1%82%D1%87%D0%B5%D1%82%20%D0%90%D0%9E%20%D0%9A%D0%B0%D0%B7%D0%9D%D0%98%D0%98%D0%A1%D0%90%20%D0%B7%D0%B0%202017%20%D0%B3%D0%BE%D0%B4.PDF?dl=0' },
    ],
  },
  {
    title: 'Финансовые отчеты за период 2016 года',
    items: [
      { name: 'Отчет об изменениях в капитале', url: 'https://drive.google.com/open?id=0B95XZfZwYiF8YThJc0EtMjc5UnM' },
      { name: 'Отчет о прибылях и убытках', url: 'https://drive.google.com/open?id=0B95XZfZwYiF8aU9hd0NZbGtHb2M' },
      { name: 'Отчет о движении денежных средств (прямой метод)', url: 'https://drive.google.com/open?id=0B95XZfZwYiF8V3lVSVhMbldjcTQ' },
      { name: 'Бухгалтерский баланс', url: 'https://drive.google.com/open?id=0B95XZfZwYiF8SjliaTVsMXJMYVE' },
    ],
  },
  {
    title: 'Календарь корпоративных событий АО «КазНИИСА»',
    items: [
      { name: 'Календарь корпоративных событий АО «КазНИИСА»', url: 'https://drive.google.com/file/d/13zW81ix0vxeIHX_5DF_ET7aQCobf8X_b/view?usp=sharing' },
    ],
  },
  {
    title: 'Информация о закупочной деятельности АО «КазНИИСА»',
    items: [
      { name: 'Закупочная деятельность АО «КазНИИСА»', url: 'https://drive.google.com/file/d/1u3ajdAcX7L7YBc9-2jxWBjAqn51kVUrj/view?usp=sharing' },
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
                  {item.url ? (
                    <Typography
                      component="a"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        fontSize: '0.95rem', lineHeight: 1.8, color: BLUE,
                        textDecoration: 'none', display: 'inline-flex', alignItems: 'flex-start', gap: 0.5,
                        transition: 'color 0.15s ease',
                        '&:hover': { color: NAVY, textDecoration: 'underline' },
                      }}
                    >
                      {item.name}
                      <OpenInNewIcon sx={{ fontSize: 14, mt: '4px', flexShrink: 0 }} />
                    </Typography>
                  ) : (
                    <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>
                      {item.name}
                    </Typography>
                  )}
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
          Для получения копий корпоративных документов обращайтесь в канцелярию
          АО «КазНИИСА»: email info@kazniisa.kz, тел. 8 (727) 226 94 10.
        </Typography>
      </Box>

      <PublicDownloadList endpoint="/api/corporate-documents/public" heading="Документы для скачивания" />
    </Box>
  );
}
