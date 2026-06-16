'use client';
import { Typography, Box } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';
const TEXT = '#334155';

const objectives = [
  'Создание единого информационного пространства для всех участников строительного рынка',
  'Упрощение обмена данными и документацией между организациями',
  'Повышение эффективности управления проектами и ресурсами',
  'Снижение ошибок и несоответствий в проектной документации',
  'Обеспечение основы для структурирования и организации данных в BIM-среде',
];

const resources = [
  {
    title: 'Портал ЕСККС',
    desc: 'Доступ к системе классификации и кодирования',
    href: 'https://eskks.kazniisa.kz/login',
    label: 'eskks.kazniisa.kz',
  },
  {
    title: 'Руководство пользователя',
    desc: 'Документация по работе с программным обеспечением ЕСККС',
    href: 'https://drive.google.com/drive/folders/1X2UPxzdKo6NloXH_PphLGO7cQy6_aJMx',
    label: 'Google Drive',
  },
  {
    title: 'Научная статья',
    desc: '«ЕСККС: структура, принципы и применение в цифровой трансформации строительства»',
    href: null,
    label: null,
  },
];

export default function EskksPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        ЕСККС
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 1 }} />
      <Typography sx={{ fontSize: '0.95rem', color: GRAY_TEXT, mb: 4, fontStyle: 'italic' }}>
        Единая система классификации и кодирования в строительстве
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 3 }}>
        ЕСККС — комплексная платформа, направленная на стандартизацию и унификацию информации
        в строительной отрасли. Система охватывает классификацию и кодирование элементов, ресурсов
        и процессов, связанных со строительством, обеспечивая единое информационное пространство
        для всех участников строительного рынка.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, fontStyle: 'italic', mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>
          «ЕСККС является ключевым инструментом внедрения технологий информационного
          моделирования зданий (BIM) в строительстве, обеспечивая основу для структурирования
          и организации данных.»
        </Typography>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 2 }}>
        Основные цели ЕСККС
      </Typography>

      {objectives.map((obj, i) => (
        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
          <Typography sx={{ fontWeight: 800, fontSize: '0.8rem', color: BLUE, minWidth: 24, mt: 0.2 }}>
            {String(i + 1).padStart(2, '0')}
          </Typography>
          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: TEXT }}>{obj}</Typography>
        </Box>
      ))}

      <Box sx={{ my: 4 }} />

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 2 }}>
        Научная основа
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 4 }}>
        Архитектура системы построена на международных стандартах ISO и национальных нормативных
        актах Казахстана. Автоматизированная платформа обеспечивает централизованное управление данными,
        повышает точность и оптимизирует взаимодействие между участниками строительного процесса.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 2 }}>
        Ресурсы и доступ
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {resources.map((r, i) => (
          <Box
            key={i}
            sx={{
              p: 2.5,
              bgcolor: BLUE_LIGHT,
              border: '1px solid ' + BORDER,
              borderLeft: '4px solid ' + BLUE,
              borderRadius: '0 6px 6px 0',
              transition: 'box-shadow 0.2s',
              '&:hover': { boxShadow: '0 4px 16px rgba(0,0,0,0.06)' },
            }}
          >
            <Typography sx={{ fontWeight: 700, color: NAVY, mb: 0.5 }}>{r.title}</Typography>
            <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.7, color: TEXT, mb: r.href ? 1 : 0 }}>
              {r.desc}
            </Typography>
            {r.href && (
              <Box
                component="a"
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, color: BLUE, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                <OpenInNewIcon sx={{ fontSize: 14 }} /> {r.label}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
