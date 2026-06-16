'use client';
import { Typography, Box, Divider, Chip } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const news = [
  {
    date: 'Ноябрь 2025',
    title: 'Заседание БОСС состоялось в Алматы',
    description: 'В Алматы прошло очередное заседание Базовой организации государств — участников СНГ по сейсмостойкому строительству. На заседании обсуждались вопросы гармонизации нормативной базы и планы совместной научной деятельности.',
  },
  {
    date: 'Ноябрь 2025',
    title: 'Двустороннее совещание Казахстана и Таджикистана',
    description: 'Представители АО «КазНИИСА» и профильных ведомств Таджикистана провели двустороннее совещание по вопросам строительного ценообразования и нормирования в сейсмостойком строительстве.',
  },
  {
    date: 'Ноябрь 2025',
    title: 'Обсуждение деятельности базовых организаций СНГ',
    description: 'Состоялось совещание Исполнительного комитета СНГ, посвящённое вопросам экономической деятельности базовых организаций государств — участников СНГ.',
  },
  {
    date: 'Май 2025',
    title: 'Отчёт о деятельности БОСС за 2019–2024 годы',
    description: 'АО «КазНИИСА» представило отчёт о деятельности Базовой организации за 5 лет. Документ охватывает совместные научные исследования, заседания, конференции и выпуск нормативных документов.',
  },
  {
    date: 'Июнь 2024',
    title: 'Поздравление У. Бегалиеву',
    description: 'Коллектив поздравил президента Международной ассоциации экспертов по сейсмостойкому строительству с юбилеем.',
  },
  {
    date: 'Апрель 2023',
    title: 'Совещание по деятельности базовых организаций СНГ',
    description: 'Обсуждение вопросов экономической деятельности базовых организаций государств — участников СНГ в различных отраслях экономики.',
  },
];

export default function NewsBoss() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Новости БОСС
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        Актуальные новости и анонсы мероприятий Базовой организации государств — участников СНГ
        по сейсмостойкому строительству (БОСС).
      </Typography>

      {news.map((item, idx) => (
        <Box
          key={idx}
          sx={{
            mb: 3,
            p: 3,
            border: '1px solid ' + BORDER,
            borderRadius: '6px',
            borderLeft: '4px solid ' + BLUE,
            transition: 'box-shadow 0.2s ease, transform 0.2s ease',
            '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
            <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', color: NAVY }}>
              {item.title}
            </Typography>
            <Chip label={item.date} size="small" sx={{ bgcolor: BLUE_LIGHT, color: BLUE, fontWeight: 600, fontSize: '0.75rem' }} />
          </Box>
          <Divider sx={{ mb: 1.5 }} />
          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
