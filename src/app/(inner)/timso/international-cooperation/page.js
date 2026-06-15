'use client';
import { Typography, Box, Divider } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';
const TEXT = '#334155';

const meetings = [
  {
    date: 'Август 2018',
    city: 'Алматы',
    description:
      'Заседание Комиссии по разработке технических регламентов в области технологий информационного моделирования зданий.',
  },
  {
    date: 'Октябрь 2018',
    city: 'Москва',
    description:
      'Продолжение работы Комиссии, обсуждение проектов нормативно-технической документации стран СНГ.',
  },
  {
    date: 'Март 2019',
    city: 'Москва',
    description:
      'Рассмотрение результатов разработки национальных стандартов в области BIM-технологий.',
  },
  {
    date: 'Май 2019',
    city: 'Минск',
    description:
      'Согласование единых подходов к техническому регулированию в строительстве государств-участников СНГ.',
  },
];

export default function InternationalCooperationPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Международное сотрудничество
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 3 }}>
        АО «КазНИИСА» является базовой организацией государств-участников СНГ в сфере
        технического регулирования строительной отрасли. Институт активно развивает
        межгосударственное сотрудничество, направленное на создание единых строительных норм и
        стандартов на пространстве СНГ.
      </Typography>

      <Box
        sx={{
          borderLeft: '4px solid #F59E0B',
          pl: 3,
          py: 2,
          bgcolor: '#FAFAFA',
          fontStyle: 'italic',
          mb: 4,
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>
          «Базовая организация государств-участников СНГ по координации политики технического
          регулирования и созданию единых нормативов строительной отрасли.»
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Комиссия по BIM-технологиям СНГ
      </Typography>
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 4 }}>
        АО «КазНИИСА» инициировало и организовало работу Комиссии по разработке технических
        регламентов в области технологий информационного моделирования зданий (BIM) для
        государств-участников СНГ. Цель Комиссии — гармонизация нормативной базы и создание
        единого информационного пространства в строительстве.
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 3 }}
      >
        Хроника заседаний
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
        {meetings.map((m, i) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              gap: 2,
              p: 2.5,
              bgcolor: '#FAFAFA',
              border: '1px solid #E2E8F0',
              borderRadius: 1,
            }}
          >
            <Box sx={{ minWidth: 130 }}>
              <Typography
                sx={{ fontSize: '0.85rem', fontWeight: 700, color: AMBER, lineHeight: 1.4 }}
              >
                {m.date}
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', color: NAVY, fontWeight: 600 }}>
                {m.city}
              </Typography>
            </Box>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.7, color: TEXT }}>
              {m.description}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Направления сотрудничества
      </Typography>
      <Box component="ul" sx={{ pl: 3 }}>
        {[
          'Координация политики технического регулирования в строительстве стран СНГ',
          'Разработка и гармонизация межгосударственных нормативных документов',
          'Внедрение BIM-технологий на уровне СНГ',
          'Обмен опытом и научными разработками в области строительной науки',
          'Участие в международных организациях по стандартизации (ISO, CEN)',
        ].map((item) => (
          <Box component="li" key={item} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>{item}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
