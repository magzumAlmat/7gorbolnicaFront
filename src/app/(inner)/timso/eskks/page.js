'use client';
import { Typography, Box, Divider } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';
const TEXT = '#334155';

const objectives = [
  'Создание единого информационного пространства для всех участников строительного рынка',
  'Упрощение обмена данными и документацией между организациями',
  'Повышение эффективности управления проектами и ресурсами',
  'Снижение ошибок и несоответствий в проектной документации',
  'Обеспечение основы для структурирования и организации данных в BIM-среде',
];

export default function EskksPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}
      >
        ЕСККС
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 1 }} />
      <Typography sx={{ fontSize: '0.95rem', color: '#64748B', mb: 4, fontStyle: 'italic' }}>
        Единая система классификации и кодирования в строительстве
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 3 }}>
        ЕСККС (Единая система классификации и кодирования в строительстве) — комплексная
        платформа, направленная на стандартизацию и унификацию информации в строительной
        отрасли. Система охватывает классификацию и кодирование элементов, ресурсов и процессов,
        связанных со строительством.
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
          «ЕСККС является ключевым инструментом внедрения технологий информационного
          моделирования зданий (BIM) в строительстве, обеспечивая основу для структурирования
          и организации данных.»
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 3 }}
      >
        Основные цели ЕСККС
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 4 }}>
        {objectives.map((obj) => (
          <Box component="li" key={obj} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>{obj}</Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Научная основа
      </Typography>
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 4 }}>
        ЕСККС разработана на основе международных стандартов ISO и национальных нормативных
        актов. Автоматизированная платформа обеспечивает централизованное управление данными.
        Результаты внедрения системы свидетельствуют о повышении точности данных, унификации
        процессов и оптимизации взаимодействия всех участников строительного процесса.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 3 }}
      >
        Ресурсы и доступ
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box
          sx={{
            p: 2.5,
            bgcolor: '#FAFAFA',
            border: '1px solid #E2E8F0',
            borderLeft: '4px solid #F59E0B',
            borderRadius: 1,
          }}
        >
          <Typography
            sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 0.5 }}
          >
            Портал ЕСККС
          </Typography>
          <Typography sx={{ fontSize: '1rem', lineHeight: 1.7, color: TEXT }}>
            Доступ к системе классификации и кодирования:{' '}
            <Box
              component="a"
              href="https://eskks.kazniisa.kz/login"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: AMBER, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
            >
              eskks.kazniisa.kz
            </Box>
          </Typography>
        </Box>

        <Box
          sx={{
            p: 2.5,
            bgcolor: '#FAFAFA',
            border: '1px solid #E2E8F0',
            borderLeft: '4px solid #F59E0B',
            borderRadius: 1,
          }}
        >
          <Typography
            sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 0.5 }}
          >
            Руководство пользователя
          </Typography>
          <Typography sx={{ fontSize: '1rem', lineHeight: 1.7, color: TEXT }}>
            Документация по работе с программным обеспечением ЕСККС доступна на Google Drive.
          </Typography>
        </Box>

        <Box
          sx={{
            p: 2.5,
            bgcolor: '#FAFAFA',
            border: '1px solid #E2E8F0',
            borderLeft: '4px solid #F59E0B',
            borderRadius: 1,
          }}
        >
          <Typography
            sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 0.5 }}
          >
            Научная статья
          </Typography>
          <Typography sx={{ fontSize: '1rem', lineHeight: 1.7, color: TEXT }}>
            «ЕСККС: структура, принципы и применение в цифровой трансформации строительства» —
            подробное описание системы и методологии её построения.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
