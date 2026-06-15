'use client';
import { Typography, Box, Divider, Paper } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import AssignmentIcon from '@mui/icons-material/Assignment';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

export default function RegisterPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Реестр должностей, подверженных коррупционным рискам
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        В соответствии с требованиями антикоррупционного законодательства Республики Казахстан
        и внутренними нормативными актами АО «КазНИИСА» формирует и ведёт реестр должностей,
        которые в силу своих функциональных обязанностей подвержены повышенному риску коррупционных
        правонарушений.
      </Typography>

      <Box
        sx={{
          borderLeft: '4px solid #F59E0B',
          pl: 3,
          py: 2,
          bgcolor: '#FAFAFA',
          fontStyle: 'italic',
          mb: 4,
          borderRadius: '0 8px 8px 0',
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          Реестр должностей, подверженных коррупционным рискам, разрабатывается на основании
          анализа функций и полномочий сотрудников, связанных с управлением ресурсами,
          принятием решений и взаимодействием с внешними контрагентами.
        </Typography>
      </Box>

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        Документ
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Paper
        sx={{
          p: 3,
          borderRadius: 2,
          border: '1px solid #E2E8F0',
          borderLeft: `4px solid ${AMBER}`,
          mb: 4,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <AssignmentIcon sx={{ color: AMBER, fontSize: 40 }} />
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
            color: AMBER,
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

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}
      >
        О реестре
      </Typography>
      <Divider sx={{ mb: 3 }} />

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
