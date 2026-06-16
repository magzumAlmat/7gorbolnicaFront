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
  { code: 'УСН РК 8.02-03', title: 'Укрупнённые показатели сметной стоимости учебных заведений' },
  { code: 'ССЦ РК 8.04-09', title: 'Сметные цены на инженерное оборудование' },
  { code: 'ССЦ РК 8.04-08', title: 'Сметные цены на строительные материалы и конструкции' },
  { code: 'СЦЗТ РК 8.04-13', title: 'Сметные цены на затраты труда' },
  { code: 'СЦЭМ РК 8.04-11', title: 'Сметные цены на эксплуатацию машин' },
  { code: 'СЦПГ РК 8.04-12', title: 'Сметные цены на грузоперевозки' },
  { code: 'НДЦС РК 8.04-07', title: 'Индексы стоимости для строительства' },
];

const monitoringCategories = [
  'Асфальтобетон и дорожные материалы',
  'Бетон, растворы, железобетонные изделия',
  'Вяжущие материалы и цемент',
  'Кабельно-проводниковая продукция',
  'Кирпич и камень',
  'Кровельные материалы',
  'Оборудование систем водо-, газо-, теплоснабжения',
  'Отделочные материалы',
  'Металлопрокат и конструкции',
  'Трубы и фитинги',
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
        Центр разрабатывает и актуализирует нормативно-технические документы в сфере строительства,
        формирует сметные нормативы и ресурсные показатели. Координирует мониторинг цен на строительные
        материалы с участием более 2000 производителей и поставщиков из всех регионов Казахстана.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 5, fontStyle: 'italic' }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          Базовый офис центра расположен в Астане (ул. Бейбитшилик, 14, БЦ «MARDEN»).
          Контактный email: crn@kazniisa.kz, тел.: 8 (7172) 57-53-03.
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
        Нормативные документы 2026
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

      <Box sx={{ bgcolor: NAVY, borderRadius: '6px', p: 4, mb: 5 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 1 }}>Мониторинг цен на стройматериалы</Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mb: 2 }} />
        <Typography sx={{ color: '#CBD5E1', fontSize: '0.92rem', lineHeight: 1.8, mb: 2 }}>
          Центр координирует участие более 2000 производителей и поставщиков из всех регионов республики.
          Категории мониторинга:
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
