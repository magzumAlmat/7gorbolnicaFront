'use client';
import { Typography, Box, Divider } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

const news = [
  {
    title: 'Заседание БОСС состоялось в Алматы',
    description:
      'В Алматы прошло очередное заседание Базовой организации государств — участников СНГ по сейсмостойкому строительству. На заседании обсуждались вопросы гармонизации нормативной базы и планы совместной научной деятельности.',
  },
  {
    title: 'Двустороннее совещание Казахстана и Таджикистана по строительному ценообразованию',
    description:
      'Представители АО «КазНИИСА» и профильных ведомств Таджикистана провели двустороннее совещание по вопросам строительного ценообразования и нормирования в сейсмостойком строительстве в рамках деятельности БОСС.',
  },
  {
    title: 'Обсуждение деятельности базовых организаций СНГ',
    description:
      'Состоялось совещание, посвящённое вопросам экономической деятельности базовых организаций государств — участников СНГ. Участники обменялись опытом и наметили пути дальнейшего сотрудничества.',
  },
];

export default function NewsBoss() {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}>
        Новости БОСС
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        Актуальные новости и анонсы мероприятий Базовой организации государств — участников СНГ по сейсмостойкому строительству (БОСС).
      </Typography>

      {news.map((item, idx) => (
        <Box
          key={idx}
          sx={{
            mb: 3,
            p: 3,
            border: '1px solid #E2E8F0',
            borderRadius: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Exo 2", sans-serif',
              fontWeight: 700,
              fontSize: '1.1rem',
              color: NAVY,
              mb: 1,
            }}
          >
            {item.title}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
