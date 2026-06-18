'use client';
import { Typography, Box, Link } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';
const TEXT = '#334155';

const meetings = [
  {
    date: 'Август 2018',
    city: 'Алматы',
    description:
      'Заседание Комиссии по разработке технических регламентов в области технологий информационного моделирования зданий.',
    documents: [
      {
        label: 'Повестка совещания Комиссии',
        href: 'https://drive.google.com/open?id=1YpKXqkmb5D4AtuPcub31IQJCGkJuE1ir',
      },
      {
        label: 'Список участников',
        href: 'https://www.dropbox.com/s/qxirjwx1kezq93x/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA%20%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%20%D1%81%D0%BE%D0%B2%D0%B5%D1%89%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%9F%D0%BE%D0%B4%D0%BA%D0%BE%D0%BC%D0%B8%D1%81%D1%81%D0%B8%D0%B8.pdf?dl=0',
      },
      {
        label: 'Резолюция совещания Комиссии',
        href: 'https://drive.google.com/open?id=1gFsNTCDz4n-etHFCN8ZzpC3i6oUPwAGM',
      },
    ],
  },
  {
    date: 'Октябрь 2018',
    city: 'Москва',
    description:
      'Продолжение работы Комиссии, обсуждение проектов нормативно-технической документации стран СНГ.',
    documents: [
      { label: 'Резолюция расширенного заседания Комиссии' },
      { label: 'Отчет о проведении расширенного заседания Комиссии' },
    ],
  },
  {
    date: 'Март 2019',
    city: 'Москва',
    description:
      'Рассмотрение результатов разработки национальных стандартов в области BIM-технологий.',
    documents: [
      { label: 'Резолюция третьего заседания Комиссии' },
      { label: 'Отчет о проведении третьего заседания Комиссии' },
    ],
  },
  {
    date: 'Май 2019',
    city: 'Минск',
    description:
      'Согласование единых подходов к техническому регулированию в строительстве государств-участников СНГ.',
    documents: [{ label: 'Резолюция четвертого заседания Комиссии' }],
  },
];

export default function InternationalCooperationPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Международное сотрудничество
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 3 }}>
        АО «КазНИИСА» является базовой организацией государств-участников СНГ в сфере
        технического регулирования строительной отрасли. Институт активно развивает
        межгосударственное сотрудничество, направленное на создание единых строительных норм и
        стандартов на пространстве СНГ.
      </Typography>

      <Box
        sx={{
          bgcolor: BLUE_LIGHT,
          borderLeft: '4px solid ' + BLUE,
          borderRadius: '0 6px 6px 0',
          p: 3,
          fontStyle: 'italic',
          mb: 4,
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>
          «Базовая организация государств-участников СНГ по координации политики технического
          регулирования и созданию единых нормативов строительной отрасли.»
        </Typography>
      </Box>

      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        Комиссия по BIM-технологиям СНГ
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 4 }}>
        АО «КазНИИСА» инициировало и организовало работу Комиссии по разработке технических
        регламентов в области технологий информационного моделирования зданий (BIM) для
        государств-участников СНГ. Цель Комиссии — гармонизация нормативной базы и создание
        единого информационного пространства в строительстве.
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        Хроника заседаний
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
        {meetings.map((m, i) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              gap: 2,
              p: 2.5,
              bgcolor: BLUE_LIGHT,
              border: '1px solid ' + BORDER,
              borderRadius: '6px',
              transition: 'box-shadow 0.2s ease, transform 0.2s ease',
              '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
            }}
          >
            <Box sx={{ minWidth: 130 }}>
              <Typography
                sx={{ fontSize: '0.85rem', fontWeight: 700, color: BLUE, lineHeight: 1.4 }}
              >
                {m.date}
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', color: NAVY, fontWeight: 600 }}>
                {m.city}
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '1rem', lineHeight: 1.7, color: TEXT }}>
                {m.description}
              </Typography>
              {m.documents && m.documents.length > 0 && (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.75,
                    mt: 1.5,
                    pt: 1.5,
                    borderTop: '1px solid ' + BORDER,
                  }}
                >
                  {m.documents.map((doc) =>
                    doc.href ? (
                      <Link
                        key={doc.label}
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          color: BLUE,
                          textDecoration: 'none',
                          '&:hover': { textDecoration: 'underline' },
                        }}
                      >
                        {doc.label}
                      </Link>
                    ) : (
                      <Typography
                        key={doc.label}
                        sx={{ fontSize: '0.9rem', fontWeight: 600, color: GRAY_TEXT }}
                      >
                        {doc.label}
                      </Typography>
                    )
                  )}
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        Направления сотрудничества
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

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
