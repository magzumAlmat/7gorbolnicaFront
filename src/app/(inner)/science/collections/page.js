'use client';
import { Typography, Box } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';
const TEXT = '#334155';

const collections = [
  {
    title: 'Исследования сейсмостойкости сооружений и конструкций, выпуск 2 (10)',
    category: 'Сейсмостойкое строительство',
    href: 'https://drive.google.com/file/d/0B9cipw9EHHhlb2dyNXEtX3BDdFE/view?usp=sharing',
  },
  {
    title: 'Исследования сейсмостойкости сооружений и конструкций, выпуск 5 (15)',
    category: 'Сейсмостойкое строительство',
    href: 'https://drive.google.com/file/d/0B9cipw9EHHhla0NkM0kzSmNkWDQ/view?usp=sharing',
  },
  {
    title: 'Исследования сейсмостойкости сооружений и конструкций, выпуск 11 (21)',
    category: 'Сейсмостойкое строительство',
    href: 'https://drive.google.com/file/d/0B9cipw9EHHhlN25JQmllTlRCWWs/view?usp=sharing',
  },
  {
    title: 'Исследования сейсмостойкости сооружений и конструкций, выпуск 12 (22)',
    category: 'Сейсмостойкое строительство',
    href: 'https://drive.google.com/file/d/0B9cipw9EHHhlZGZUTC1iMmhzUVE/view?usp=sharing',
  },
  {
    title: 'Журнал «Вестник АО КазНИИСА» №1 — апрель 2020 (выпуски 1, 2, 3)',
    category: 'Периодические издания',
    href: 'https://drive.google.com/file/d/1aIMYJGG96D8SlZ6ZlmJWfYLupVdYGYEj/view',
  },
];

export default function CollectionsPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Сборники трудов АО «КазНИИСА»
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 4 }}>
        АО «КазНИИСА» регулярно издаёт сборники научных трудов, объединяющие результаты
        исследований сотрудников института в области сейсмостойкого строительства, цифровизации,
        нормирования и проектирования. Сборники доступны для ознакомления специалистам отрасли.
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        Доступные издания
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {collections.map((item, i) => (
          <Box
            key={i}
            component="a"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              p: 2.5,
              bgcolor: BLUE_LIGHT,
              border: '1px solid ' + BORDER,
              borderLeft: '4px solid ' + BLUE,
              borderRadius: '0 6px 6px 0',
              textDecoration: 'none',
              display: 'block',
              transition: 'box-shadow 0.2s ease, transform 0.2s ease',
              '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)', borderColor: BLUE },
            }}
          >
            <Typography
              sx={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: BLUE,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                mb: 0.5,
              }}
            >
              {item.category}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <OpenInNewIcon sx={{ fontSize: 16, color: BLUE, flexShrink: 0 }} />
              <Typography sx={{ fontSize: '1rem', lineHeight: 1.7, color: TEXT, fontWeight: 500 }}>
                {item.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          bgcolor: BLUE_LIGHT,
          borderLeft: '4px solid ' + BLUE,
          borderRadius: '0 6px 6px 0',
          p: 3,
          mt: 5,
          fontStyle: 'italic',
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>
          Для получения полного перечня изданий и условий доступа обращайтесь по адресу{' '}
          <Box
            component="a"
            href="mailto:info@kazniisa.kz"
            sx={{
              color: BLUE,
              textDecoration: 'none',
              fontStyle: 'normal',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            info@kazniisa.kz
          </Box>
          .
        </Typography>
      </Box>
    </Box>
  );
}
