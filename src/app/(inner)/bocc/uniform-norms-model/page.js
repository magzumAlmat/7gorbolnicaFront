'use client';
import { Typography, Box, Link } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

export default function UniformNormsModel() {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontWeight: 800, color: NAVY, mb: 1 }}>
        Модель единых норм
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        АО «КазНИИСА» представило проект модели единых норм для стран СНГ в области сейсмостойкого строительства. Презентация состоялась на III Международной научно-практической конференции в г. Бишкек.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Проект модели единых норм для стран СНГ в области сейсмостойкого строительства разработан в рамках деятельности Базовой организации государств — участников СНГ по сейсмостойкому строительству.
        </Typography>
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Ключевые направления исследований
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box component="ul" sx={{ pl: 3, mb: 4 }}>
        {[
          'Обработка и оцифровка архивных сейсмограмм землетрясений Центральной Азии',
          'Разработка региональных зависимостей между советскими шкалами и моментной магнитудой',
          'Консолидация каталогов землетрясений',
          'Разработка карт опасности для регионов Центральной Азии',
          'Гармонизация нормативных документов по сейсмостойкому строительству стран СНГ',
        ].map((item) => (
          <Box component="li" key={item} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{item}</Typography>
          </Box>
        ))}
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        О разработке
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        В рамках разработки модели единых норм проведена оценка действующих национальных нормативных документов стран СНГ. Следующим этапом является установление гармонизированных единых стандартов и национальных приложений к ним.
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        Единые нормы направлены на совершенствование сейсмостойкого строительства в странах СНГ и устранение существующих законодательных пробелов в области строительства на сейсмоопасных территориях.
      </Typography>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Презентация РК
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Link
        href="https://kazniisa.kz/wp-content/uploads/2023/04/СП-РК-2.03-30-2017-Строительство-в-сейсмических-зонах-презентация.pptx"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'inline-block',
          bgcolor: GRAY_BG,
          border: '1px solid ' + BORDER,
          borderRadius: '6px',
          px: 3,
          py: 1.75,
          mb: 4,
          color: BLUE,
          fontSize: '0.95rem',
          fontWeight: 600,
          textDecoration: 'none',
          '&:hover': { bgcolor: BLUE_LIGHT, borderColor: BLUE },
        }}
      >
        СП РК 2.03-30-2017 Строительство в сейсмических зонах презентация
      </Link>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Презентация КР
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Link
        href="https://kazniisa.kz/wp-content/uploads/2023/04/Презентация_СН-КР-20-02-2018-Сейсмостойкое-строительство.pptx"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'inline-block',
          bgcolor: GRAY_BG,
          border: '1px solid ' + BORDER,
          borderRadius: '6px',
          px: 3,
          py: 1.75,
          mb: 4,
          color: BLUE,
          fontSize: '0.95rem',
          fontWeight: 600,
          textDecoration: 'none',
          '&:hover': { bgcolor: BLUE_LIGHT, borderColor: BLUE },
        }}
      >
        Презентация_СН КР 20-02-2018 «Сейсмостойкое строительство»
      </Link>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Мнения экспертов
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 4 }} />

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Сетка безопасности и сбор данных
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        Работы по подготовке модели единых норм в сейсмостойком строительстве стран СНГ являются логическим продолжением работ по сбору и обработке данных. Ключевые направления включают обработку и оцифровку архивных сейсмограмм землетрясений Центральной Азии, разработку региональных зависимостей между советскими шкалами и моментной магнитудой, консолидацию каталогов землетрясений и разработку карт опасности для регионов Центральной Азии.
      </Typography>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        События
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {[
          {
            title: '1 – Е ЗАСЕДАНИЕ',
            date: 'Ноябрь 13, 2019',
            time: '09:00 — 19:00',
            venue: 'г. Алматы, ул. Кажымукана, д. 49 (отель «Shera Inn Hotel»)',
          },
          {
            title: '2 – Е ЗАСЕДАНИЕ',
            date: 'Декабрь 25, 2020',
            time: '14:00 — 19:00',
            venue: '3 микрорайон 44А, г. Алматы',
          },
        ].map((event) => (
          <Box
            key={event.title}
            sx={{
              bgcolor: GRAY_BG,
              border: '1px solid ' + BORDER,
              borderRadius: '8px',
              p: 3,
            }}
          >
            <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1.05rem', mb: 1 }}>
              {event.title}
            </Typography>
            <Typography sx={{ fontSize: '0.95rem', color: GRAY_TEXT, lineHeight: 1.8 }}>
              {event.date} · {event.time}
            </Typography>
            <Typography sx={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.8 }}>
              {event.venue}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
