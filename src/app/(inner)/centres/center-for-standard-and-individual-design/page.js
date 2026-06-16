'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';
import Link from 'next/link';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const departments = [
  { title: 'Отдел архитектуры', desc: 'Разработка архитектурных решений жилых, общественных и промышленных зданий. Генеральные планы, благоустройство территорий.' },
  { title: 'Конструкторский отдел', desc: 'Проектирование несущих и ограждающих конструкций, расчёты на сейсмостойкость, разработка узлов и деталей.' },
  { title: 'Отдел инженерного проектирования', desc: 'Проектирование систем водоснабжения, канализации, отопления, вентиляции и кондиционирования.' },
  { title: 'Отдел электроснабжения', desc: 'Проектирование электрических сетей, освещения, слаботочных систем, автоматики и диспетчеризации.' },
  { title: 'Сметный отдел', desc: 'Составление сметной документации, определение стоимости строительства, ресурсные расчёты.' },
  { title: 'Отдел обработки информации', desc: 'Оцифровка проектной документации, ведение архива типовых проектов, BIM-моделирование.' },
];

const services = [
  'Типовое проектирование жилых и общественных зданий',
  'Индивидуальное проектирование по заказу государственных органов',
  'Разработка проектно-сметной документации',
  'Привязка типовых проектов к конкретным площадкам',
  'Архив типовых проектных решений 2010–2016',
  'Авторский надзор за строительством',
  'Техническое обследование зданий (совместно с Центром сейсмостойкости)',
  'BIM-моделирование зданий и инженерных систем',
];

export default function StandardDesignPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Центр типового и индивидуального проектирования
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Центр выполняет полный цикл проектных работ — от разработки типовых проектов жилых и
        общественных зданий до индивидуального проектирования по заказу государственных органов
        и частных застройщиков. В составе центра шесть специализированных отделов.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 5 }}>
        <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>
          Центр ведёт архив типовых проектных решений 2010–2016 годов, включая жилые дома,
          школы, детские сады и объекты здравоохранения для различных сейсмических зон Казахстана.
        </Typography>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 3 }}>
        Отделы центра
      </Typography>

      <Grid container spacing={3} sx={{ mb: 5 }}>
        {departments.map((d, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Box sx={{ p: 2.5, border: '1px solid ' + BORDER, borderRadius: '6px', height: '100%', transition: 'box-shadow 0.2s', '&:hover': { boxShadow: '0 4px 16px rgba(0,0,0,0.06)' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                <Typography sx={{ fontWeight: 800, fontSize: '0.8rem', color: BLUE }}>{String(i + 1).padStart(2, '0')}</Typography>
                <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem' }}>{d.title}</Typography>
              </Box>
              <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.8, color: '#334155' }}>{d.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 3 }}>
        Услуги
      </Typography>
      {services.map((s, i) => (
        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
          <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: BLUE, mt: '9px', flexShrink: 0 }} />
          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>{s}</Typography>
        </Box>
      ))}

      <Divider sx={{ my: 4 }} />

      <Box sx={{ bgcolor: NAVY, borderRadius: '6px', p: 4, mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 1 }}>Контакты центра</Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mb: 2 }} />
        <Typography sx={{ color: '#CBD5E1', fontSize: '0.92rem', mb: 0.5 }}>Email: elvira_kazniisa@mail.ru</Typography>
        <Typography sx={{ color: '#CBD5E1', fontSize: '0.92rem', mb: 0.5 }}>Тел.: 8 (727) 226 94 10</Typography>
        <Typography sx={{ color: '#94A3B8', fontSize: '0.85rem' }}>3 микрорайон 44А, г. Алматы</Typography>
      </Box>

      <Link href="/centres" style={{ color: NAVY, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid ' + BORDER, paddingBottom: 1 }}>
        ← Все центры
      </Link>
    </Box>
  );
}
