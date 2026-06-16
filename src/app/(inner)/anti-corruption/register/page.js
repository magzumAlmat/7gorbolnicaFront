'use client';
import { Typography, Box, Paper } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import AssignmentIcon from '@mui/icons-material/Assignment';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

export default function RegisterPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Реестр должностей, подверженных коррупционным рискам
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        В соответствии с требованиями антикоррупционного законодательства Республики Казахстан
        и внутренними нормативными актами АО «КазНИИСА» формирует и ведёт реестр должностей,
        которые в силу своих функциональных обязанностей подвержены повышенному риску коррупционных
        правонарушений.
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
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          Реестр должностей, подверженных коррупционным рискам, разрабатывается на основании
          анализа функций и полномочий сотрудников, связанных с управлением ресурсами,
          принятием решений и взаимодействием с внешними контрагентами.
        </Typography>
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Документ
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Paper
        sx={{
          p: 3,
          borderRadius: '6px',
          border: '1px solid ' + BORDER,
          borderLeft: '4px solid ' + BLUE,
          mb: 4,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          transition: 'box-shadow 0.2s ease, transform 0.2s ease',
          '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
        }}
      >
        <AssignmentIcon sx={{ color: BLUE, fontSize: 40 }} />
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: 700, color: NAVY, mb: 0.5 }}>
            Реестр должностей, подверженных коррупционным рискам
          </Typography>
          <Typography sx={{ fontSize: '0.9rem', color: '#64748B' }}>
            АО «КазНИИСА» — актуальная редакция
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: BLUE,
            fontWeight: 600,
            fontSize: '0.9rem',
            cursor: 'pointer',
            '&:hover': { opacity: 0.8 },
          }}
        >
          <DownloadIcon />
          Скачать
        </Box>
      </Paper>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        О реестре
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Реестр должностей, подверженных коррупционным рискам, является одним из ключевых инструментов
        системы антикоррупционного комплаенса АО «КазНИИСА». Включение должности в реестр
        свидетельствует о необходимости применения усиленных мер контроля и профилактики в отношении
        занимающих её сотрудников.
      </Typography>
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Сотрудники, занимающие должности из реестра, обязаны проходить регулярное антикоррупционное
        обучение, соблюдать повышенные стандарты деловой этики и декларировать конфликты интересов.
      </Typography>
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
        По вопросам, связанным с реестром коррупционных рисков, обращайтесь в службу
        антикоррупционного комплаенса: <strong>anticor_comp@kazniisa.kz</strong>,
        тел. <strong>+7 (727) 226 94 11 доб. 188</strong>.
      </Typography>
    </Box>
  );
}
