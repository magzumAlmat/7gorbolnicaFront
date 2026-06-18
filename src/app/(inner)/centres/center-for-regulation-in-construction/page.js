'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';
import Link from 'next/link';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const services = [
  'Разработка нормативных документов по ценообразованию и сметам',
  'Формирование сметных норм на строительно-монтажные и ремонтные работы',
  'Подготовка технологических карт для строительно-монтажных операций',
  'Разработка справочников сметных цен на материалы, конструкции и оборудование',
  'Сборники цен на грузоперевозки и эксплуатацию механизмов',
  'Ведомственные нормативы по смете и методические документы',
  'Переработка нормативно-технических документов в области архитектуры и градостроительства',
  'Анализ направлений развития технического нормирования',
  'Внедрение европейских норм проектирования (Еврокодов)',
];

const documents2026 = [
  { code: 'УСН РК 8.02-03', title: 'Укрупнённые показатели сметной стоимости конструктивных элементов зданий' },
  { code: 'ССЦ РК 8.04-09', title: 'Сметные цены на инженерное оборудование' },
  { code: 'ССЦ РК 8.04-08', title: 'Сметные цены на строительные материалы, изделия и конструкции' },
  { code: 'СЦЗТ РК 8.04-13', title: 'Сметные цены на затраты труда в строительстве' },
  { code: 'СЦЭМ РК 8.04-11', title: 'Сметные цены на эксплуатацию строительных машин и механизмов' },
  { code: 'СЦПГ РК 8.04-12', title: 'Сметные цены на перевозки грузов' },
  { code: 'НДЦС РК 8.04-07', title: 'Индексы стоимости для строительства' },
  { code: 'ВК-001 РЕД.28', title: 'Классификатор строительных ресурсов' },
  { code: 'Форма СМИО-1', title: 'Отчёт об отпускных ценах на строительные материалы, изделия, конструкции и инженерное оборудование' },
  { code: 'Форма СМИО-2', title: 'Отчёт о фактической стоимости приобретённых строительных материалов, изделий, конструкций и инженерного оборудования' },
];

const collections = [
  { code: 'АГСК', title: 'Перечень нормативных правовых актов и нормативно-технических документов (вып. 1, 3, 4, 5)' },
  { code: 'Техкарты', title: 'Технологические карты на строительно-монтажные работы (ТК, ТКСН РК 8.07-06)' },
  { code: 'Справочник', title: 'Справочник сметных цен (2022, 2023, 2024, 2025)' },
  { code: 'Прейскурант', title: 'Прейскурант сметных цен (архив 2025, выпуски 2026 года)' },
  { code: 'Номенклатура', title: 'Номенклатура строительной продукции отечественных производителей для ведения сметно-нормативной базы' },
];

const monitoringCategories = [
  'Асфальтобетон',
  'Бетон, раствор, ЖБИ',
  'Вяжущие материалы',
  'Запорная арматура',
  'Изоляционные материалы',
  'Кабельно-проводниковая продукция',
  'Кирпич, камень',
  'Кровельные материалы',
  'Материалы для автомобильных дорог',
  'Материалы для железных дорог',
  'Материалы для инженерных систем',
  'Металлические изделия и конструкции',
  'Металлопрокат',
  'Насосное оборудование',
  'Нерудные строительные материалы',
  'Оборудование систем водо-, газо-, теплоснабжения',
  'Окна, двери, витражи, стекло',
  'Отделочные материалы',
  'Подъёмно-транспортное оборудование',
  'Трубы и фитинги',
  'Электрооборудование',
  'Электротехнические изделия',
];

export default function RegulationCenterPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Центр нормирования в строительстве
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Центр нормирования в строительстве — структурное подразделение АО «КазНИИСА», созданное в 2011 году.
        Центр ведёт разработку нормативных технических документов, сборников по сметному ценообразованию
        в строительстве, энергетике и жилищно-коммунальном хозяйстве.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 5, fontStyle: 'italic' }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          Головной офис: г. Астана, р-н Сарыарқа, ул. Бейбітшілік 14 (Пн–Пт 9:00–18:30, обед 13:00–14:30).
          Email: crn@kazniisa.kz, тел.: 8 (7172) 57-53-03.
        </Typography>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 3 }}>
        Основные услуги
      </Typography>
      {services.map((s, i) => (
        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
          <Typography sx={{ fontWeight: 800, fontSize: '0.8rem', color: BLUE, minWidth: 24, mt: 0.2 }}>
            {String(i + 1).padStart(2, '0')}
          </Typography>
          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>{s}</Typography>
        </Box>
      ))}

      <Divider sx={{ my: 5 }} />

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 3 }}>
        Сметно-нормативные сборники
      </Typography>
      <Grid container spacing={2} sx={{ mb: 5 }}>
        {documents2026.map((d, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Box sx={{ p: 2, border: '1px solid ' + BORDER, borderRadius: '6px', display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <Typography sx={{ fontWeight: 700, color: BLUE, fontSize: '0.78rem', minWidth: 100, flexShrink: 0 }}>{d.code}</Typography>
              <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#334155' }}>{d.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 3 }}>
        Коллекции и каталоги
      </Typography>
      <Grid container spacing={2} sx={{ mb: 5 }}>
        {collections.map((d, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Box sx={{ p: 2, border: '1px solid ' + BORDER, borderRadius: '6px', display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <Typography sx={{ fontWeight: 700, color: BLUE, fontSize: '0.78rem', minWidth: 100, flexShrink: 0 }}>{d.code}</Typography>
              <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#334155' }}>{d.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ bgcolor: NAVY, borderRadius: '6px', p: 4, mb: 5 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 1 }}>Мониторинг цен на стройматериалы</Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mb: 2 }} />
        <Typography sx={{ color: '#CBD5E1', fontSize: '0.92rem', lineHeight: 1.8, mb: 2 }}>
          Центр ведёт перечень производителей и поставщиков, участвующих в мониторинге цен,
          по регионам республики. Категории материалов:
        </Typography>
        <Grid container spacing={1}>
          {monitoringCategories.map((c, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: BLUE, flexShrink: 0 }} />
                <Typography sx={{ color: '#94A3B8', fontSize: '0.85rem' }}>{c}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
        <Link href="/centres/center-for-regulation-in-construction/document-submission-procedure" style={{ color: BLUE, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid ' + BLUE, paddingBottom: 1 }}>
          Порядок представления документов →
        </Link>
        <Link href="/centres" style={{ color: NAVY, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid ' + BORDER, paddingBottom: 1 }}>
          ← Все центры
        </Link>
      </Box>
    </Box>
  );
}
